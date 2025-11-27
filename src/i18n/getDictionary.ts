import { Locale } from "./config";

import translations from "@/data/translations.json";

export type Dictionary = (typeof translations)["en"];

export const getDictionary = (locale: Locale): Dictionary => {
  return translations[locale] || translations["en"];
};
