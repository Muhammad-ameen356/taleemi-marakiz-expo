import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nManager } from "react-native";

import enCommon from "./locales/en/common.json";
import urCommon from "./locales/ur/common.json";

const resources = {
  ur: {
    common: urCommon,
  },
  en: {
    common: enCommon,
  },
};

// Determine the language: Use Urdu by default, or system locale if available
const systemLanguage = Localization.getLocales()[0]?.languageCode;
const defaultLanguage = systemLanguage === "en" ? "en" : "ur";

i18n.use(initReactI18next).init({
  resources,
  lng: "ur", // Always default to Urdu
  fallbackLng: "en", // Fall back to English
  ns: ["common"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
});

// Force RTL for Urdu, LTR for English
i18n.on("languageChanged", (lng) => {
  if (lng === "ur") {
    if (!I18nManager.isRTL) {
      I18nManager.allowRTL(true);
      I18nManager.forceRTL(true);
    }
  } else if (lng === "en") {
    if (I18nManager.isRTL) {
      I18nManager.allowRTL(false);
      I18nManager.forceRTL(false);
    }
  }
});

// Initialize RTL for Urdu on app startup
if (!I18nManager.isRTL) {
  I18nManager.allowRTL(true);
  I18nManager.forceRTL(true);
}

export default i18n;
