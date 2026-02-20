import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { I18nManager } from "react-native";

const LANGUAGE_STORAGE_KEY = "APP_LANGUAGE";

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = useCallback(
    async (languageCode: "ur" | "en") => {
      try {
        // Change language in i18n
        await i18n.changeLanguage(languageCode);

        // Save preference to AsyncStorage
        await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, languageCode);

        // Handle RTL based on language
        if (languageCode === "ur") {
          if (!I18nManager.isRTL) {
            I18nManager.allowRTL(true);
            I18nManager.forceRTL(true);
          }
        } else if (languageCode === "en") {
          if (I18nManager.isRTL) {
            I18nManager.allowRTL(false);
            I18nManager.forceRTL(false);
          }
        }
      } catch (error) {
        console.error("Error changing language:", error);
      }
    },
    [i18n],
  );

  const loadSavedLanguage = useCallback(async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (savedLanguage === "en" || savedLanguage === "ur") {
        await changeLanguage(savedLanguage);
      }
    } catch (error) {
      console.error("Error loading saved language:", error);
    }
  }, [changeLanguage]);

  return {
    currentLanguage: i18n.language as "ur" | "en",
    changeLanguage,
    loadSavedLanguage,
    isRTL: I18nManager.isRTL,
  };
};
