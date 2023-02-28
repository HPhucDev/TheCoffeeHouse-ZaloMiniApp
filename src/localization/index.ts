import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./resources";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: resources,
});
export default i18n;
