import { getAddress } from "@src/api";
import {
   ADD_ERROR,
   ADD_MARKER,
   ADD_MARKER_TO_LIST,
   CLEAR_ERRORLIST,
   REMOVE_ERROR,
   REMOVE_MARKER,
   SET_LANGUAGE,
   SET_MARKER_LIST,
   TOGGLE_READONLY,
   GET_MARKET_LIST,
   GET_LANGUAGE,
} from "./actionTypes";
import {
   ADD_ERROR_MUTATION,
   ADD_MARKER_MUTATION,
   CLEAR_ERRORLIST_MUTATION,
   REMOVE_ERROR_MUTATION,
   REMOVE_MARKER_MUTATION,
   SET_LANGUAGE_MUTATION,
   SET_MARKER_LIST_MUTATION,
   TOGGLE_READONLY_MUTATION,
} from "./mutationTypes";
import { nextMarkerId, trimMarkerCoord } from "@src/util";
import { DEFAULT_MARKERLIST } from "@src/constants";
import { getMarkers, getLanguage } from "@src/server/asynclocalStorage";
import type { Locales, Marker } from "@src/types";

export default {
   async [GET_MARKET_LIST]({ dispatch }) {
      try {
         const savedMarkers = await getMarkers();
         dispatch(SET_MARKER_LIST, savedMarkers || DEFAULT_MARKERLIST);
      } catch (error) {}
   },

   async [GET_LANGUAGE]({ dispatch }) {
      try {
         const savedLanguage = await getLanguage();
         dispatch(SET_LANGUAGE, savedLanguage);
      } catch (error) {}
   },

   [SET_MARKER_LIST]({ commit }, markerList: Marker[]) {
      commit(SET_MARKER_LIST_MUTATION, markerList);
   },

   [ADD_MARKER_TO_LIST]({ commit, state }, newMarker: Marker) {
      const trimmedNewMarker = trimMarkerCoord(newMarker);
      if (!trimmedNewMarker.id) {
         const newMarkerId = nextMarkerId(state.markerList);

         commit(ADD_MARKER_MUTATION, {
            ...trimmedNewMarker,
            id: newMarkerId,
         });
      } else {
         commit(ADD_MARKER_MUTATION, trimmedNewMarker);
      }
   },

   async [ADD_MARKER]({ dispatch }, newMarker: Marker) {
      try {
         const address = await getAddress({
            lat: newMarker.lat,
            lng: newMarker.lng,
         });
         dispatch(ADD_MARKER_TO_LIST, { ...newMarker, address });
      } catch (error) {
         dispatch(ADD_ERROR, error);
      }
   },

   [ADD_ERROR]({ commit }, error: Error) {
      commit(ADD_ERROR_MUTATION, error);
   },

   [REMOVE_MARKER]({ commit, state }, markerId: number) {
      const markerIndex = state.markerList.findIndex(
         (marker: Marker) => marker.id === markerId
      );

      if (markerIndex > -1) commit(REMOVE_MARKER_MUTATION, markerIndex);
   },

   [REMOVE_ERROR]({ commit }, error: Error) {
      commit(REMOVE_ERROR_MUTATION, error);
   },
   [CLEAR_ERRORLIST]({ commit }) {
      commit(CLEAR_ERRORLIST_MUTATION);
   },

   [TOGGLE_READONLY]({ commit }) {
      commit(TOGGLE_READONLY_MUTATION);
   },

   [SET_LANGUAGE]({ commit }, language: Locales) {
      commit(SET_LANGUAGE_MUTATION, language);
   },
};
