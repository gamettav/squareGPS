import { unableToGeocodeMsg } from "@src/errors";
import type { State } from "@src/types";

export default {
   isUnableToGeocode(state: State): boolean {
      return Boolean(
         state.errorList.find((error) => error.message === unableToGeocodeMsg)
      );
   },
   getMarkerById: (state: State) => (markerId: number) => {
      return state.markerList.find(({ id }) => id === markerId);
   },
};
