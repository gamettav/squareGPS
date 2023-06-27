import type { Marker, State, Locales } from "@src/types";
import {
  ADD_MARKER_MUTATION,
  REMOVE_MARKER_MUTATION,
  TOGGLE_READONLY_MUTATION,
  ADD_ERROR_MUTATION,
  CLEAR_ERRORLIST_MUTATION,
  REMOVE_ERROR_MUTATION,
  SET_MARKER_LIST_MUTATION,
  SET_LANGUAGE_MUTATION,
} from "./mutationTypes";

export default {
  [SET_MARKER_LIST_MUTATION](state: State, markerList: Marker[]) {
    state.markerList = markerList;
  },
  [ADD_MARKER_MUTATION](state: State, newMarker: Marker) {
    state.markerList.push(newMarker);
  },
  [REMOVE_MARKER_MUTATION](state: State, markerIndex: number) {
    state.markerList.splice(markerIndex, 1);
  },
  [TOGGLE_READONLY_MUTATION](state: State) {
    state.readOnly = !state.readOnly;
  },
  [ADD_ERROR_MUTATION](state: State, error: Error) {
    state.errorList.push(error);
  },
  [REMOVE_ERROR_MUTATION](state: State, errorToRemove: Error) {
    state.errorList = state.errorList.filter(
      ({ message }) => message !== errorToRemove.message
    );
  },
  [CLEAR_ERRORLIST_MUTATION](state: State) {
    state.errorList = [];
  },
  [SET_LANGUAGE_MUTATION](state: State, language: Locales) {
    state.language = language;
  },
};
