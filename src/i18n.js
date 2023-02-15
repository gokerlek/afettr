import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import tr from "./assets/lng/tr";

const resources = {
  tr: {
    translation: tr,
  },
};

i18n

  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "tr",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
