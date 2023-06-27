import type { Marker } from "@src/types";
import { DEFAULT_CORD_LENGTH } from "@src/constants";

export const trimMarkerCoord = (marker: Marker): Marker => {
  return {
    ...marker,
    lat: +marker.lat.toFixed(DEFAULT_CORD_LENGTH),
    lng: +marker.lng.toFixed(DEFAULT_CORD_LENGTH),
  };
};

export const nextMarkerId = (markerList: Marker[]): number => {
  let maxId = 0;

  markerList.forEach((marker: Marker) => {
    if (marker.id && marker.id > maxId) {
      maxId = marker.id;
    }
  });

  return ++maxId;
};
