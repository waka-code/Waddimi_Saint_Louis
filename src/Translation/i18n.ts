import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import englishTranslations from "./en.json";
import spanishTranslations from "./es.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: englishTranslations
      },
      es: {
        translation: spanishTranslations
      }
    },
    lng: localStorage.getItem("language") || 'en',
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });