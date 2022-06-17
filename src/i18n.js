import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translationEN.json";
import translationSP from "./locales/sp/translationSP.json";

//the translations

const resources = {
  en: {
    translation: translationEN,
  },
  sp: {
    translation: translationSP,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: sessionStorage.getItem("language") !== null ? sessionStorage.getItem("language") : "sp",
  keySeparator: false,
  interpolation: {
    scapeValue: false,
  },
});

export default i18n;
