import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const se = require("./lang/se.json");
const en = require("./lang/en.json");

// the translations
// (tip: move them in separate JSON files and import them)

const resources = {
  en: {
    translation: en,
  },
  se: {
    translation: se,
  },
};
i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: "se",
    fallbackLng: "se",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
