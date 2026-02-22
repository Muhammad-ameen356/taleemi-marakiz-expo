import { ThemedText } from "@/components/ThemedText";
import type { DrawerParamList } from "@/types/navigation";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, TouchableOpacity, View } from "react-native";

type Props = NativeStackScreenProps<DrawerParamList, "Settings">;

const NigranSettingsScreen: React.FC<Props> = () => {
  const { t } = useTranslation("common");

  const settings = [
    { label: "زبان", value: "اردو", icon: "language" },
    { label: "اطلاعات", value: "فعال", icon: "notifications" },
    { label: "ڈیٹا ترتیبات", value: "خودکار", icon: "settings" },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4">
        <ThemedText className="text-2xl font-bold mb-6">
          {t("settings")}
        </ThemedText>

        <View className="space-y-2">
          {settings.map((setting, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center justify-between bg-gray-100 p-4 rounded-lg mb-3"
            >
              <View className="flex-row items-center">
                <Ionicons
                  name={setting.icon as any}
                  size={20}
                  color="#2E86DE"
                  style={{ marginRight: 12 }}
                />
                <ThemedText className="text-base font-semibold">
                  {setting.label}
                </ThemedText>
              </View>
              <ThemedText className="text-sm text-gray">
                {setting.value}
              </ThemedText>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default NigranSettingsScreen;
