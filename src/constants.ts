import type { Center, Marker } from "./types";

// Map component

export const DEFAULT_ZOOM = 5;
export const DEFAULT_CORD_LENGTH = 4;
export const DEFAULT_CENTER: Center = [17.898398102753767, -77.10647612389799];
export const DEFAULT_MARKERLIST: Marker[] = [
   { id: 1, lat: 50, lng: 50 },
   { id: 2, lat: -50, lng: 50 },
];
export const DEFAULT_MARKER_ID_TO_CENTER = 1;

// Local storage keys

export const LOCAL_STORAGE_MARKERLIST_KEY = "markerList";
export const LOCAL_STORAGE_LANG_KEY = "lang";

// Provide / inject keys

export const IS_MOBILE = "IS_MOBILE";
