import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// the translations
// (tip: move them in separate JSON files and import them)
const resources = {
  en: {
    translation: {
      "screen": "Screen {{ order }}",
      "tab": "Tab {{ order }}",
      "change_language_english": "In english",
      "change_language_french": "In french"
    }
  },
  fr: {
    translation: {
      "screen": "Écran {{ order }}",
      "tab": "Onglet {{ order }}",
      "change_language_english": "En anglais",
      "change_language_french": "En français"
    }
  }
};
i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: "en",
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });
export default i18n;