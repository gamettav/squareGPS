import {
   unableToGeocodeError,
   unableToGeocodeMsg,
   serverError,
   serverErrorMsg,
} from "@src/errors";

export const getAddress = async ({
   lat,
   lng,
}: {
   lat: number;
   lng: number;
}) => {
   try {
      const queryParams = new URLSearchParams({
         lat: lat.toString(),
         lon: lng.toString(),
      });
      const response = await fetch(
         `${import.meta.env.VITE_BASE_GEO_CODE_URL}${queryParams}`
      );
      const address = await response.json();

      if (address.display_name) {
         return address.display_name;
      } else if (address.error === unableToGeocodeMsg) {
         throw unableToGeocodeMsg;
      }
      throw serverErrorMsg;
   } catch (error) {
      if (error === unableToGeocodeMsg) {
         throw unableToGeocodeError;
      }
      throw serverError;
   }
};
