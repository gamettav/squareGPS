import { DEFAULT_CENTER, DEFAULT_MARKER_ID_TO_CENTER } from "@src/constants";
import type { Center, Marker } from "@src/types";

export const mapCenterCalcFn = (
   markerList: Marker[],
   markerIdQuery: number
): Center => {
   const marker = markerList.find(({ id }) => {
      return id === (markerIdQuery || DEFAULT_MARKER_ID_TO_CENTER);
   });
   return marker ? [marker.lat, marker.lng] : DEFAULT_CENTER;
};
