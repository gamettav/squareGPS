import { Locales } from "@src/types";

import en from "./en.json";
import ru from "./ru.json";

export const messages = {
  [Locales.EN]: en,
  [Locales.RU]: ru,
};

export const defaultLocale = Locales.EN;
