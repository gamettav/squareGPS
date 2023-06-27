import type { State } from "@src/types";
import { defaultLocale } from "@src/i18n/locales";

const state: State = {
   markerList: [],
   readOnly: true,
   errorList: [],
   language: defaultLocale,
   // isRestocking: // TODO: add loading state
};

export default state;
