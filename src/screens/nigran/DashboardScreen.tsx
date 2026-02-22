import { ThemedText } from "@/components/ThemedText";
import type { DrawerParamList } from "@/types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, View } from "react-native";

type Props = NativeStackScreenProps<DrawerParamList, "Dashboard">;

const NigranDashboardScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation("common");

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: t("dashboard") || "صفحہ ڈیش بورڈ",
    });
  }, [navigation, t]);

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4">
        <ThemedText className="text-2xl font-bold mb-6">
          {t("welcome")} - نگران
        </ThemedText>

        <View className="bg-blue-100 p-4 rounded-lg mb-4">
          <ThemedText className="text-lg font-semibold">
            نگران ڈیش بورڈ
          </ThemedText>
          <ThemedText className="text-sm mt-2">
            یہاں نگران کی معلومات اور اعدادوشمار دکھائے جائیں گے
          </ThemedText>
        </View>
      </View>
    </ScrollView>
  );
};

export default NigranDashboardScreen;
