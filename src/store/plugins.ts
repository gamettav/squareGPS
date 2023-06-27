import {
   LOCAL_STORAGE_LANG_KEY,
   LOCAL_STORAGE_MARKERLIST_KEY,
} from "@src/constants";
import { asyncLocalStorage } from "@src/server/asynclocalStorage";
import {
   ADD_MARKER_MUTATION,
   REMOVE_MARKER_MUTATION,
   SET_LANGUAGE_MUTATION,
} from "./mutationTypes";
import type { State } from "@src/types";
import { GET_LANGUAGE, SET_MARKER_LIST } from "./actionTypes";

const localStoragePlugin = (store) => {
   store.dispatch(GET_LANGUAGE);

   store.subscribe(({ type }, state: State) => {
      switch (type) {
         case ADD_MARKER_MUTATION:
         case SET_MARKER_LIST:
         case REMOVE_MARKER_MUTATION:
            {
               const updatedMarkerList = state.markerList;
               asyncLocalStorage.setItem(
                  LOCAL_STORAGE_MARKERLIST_KEY,
                  JSON.stringify(updatedMarkerList)
               );
            }
            break;

         case SET_LANGUAGE_MUTATION:
            {
               const updatedLanguage = state.language;
               asyncLocalStorage.setItem(
                  LOCAL_STORAGE_LANG_KEY,
                  updatedLanguage
               );
            }
            break;
      }
   });
};

export default localStoragePlugin;
