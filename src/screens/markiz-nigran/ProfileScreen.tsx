import { ThemedText } from "@/components/ThemedText";
import type { DrawerParamList } from "@/types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, View } from "react-native";

type Props = NativeStackScreenProps<DrawerParamList, "Profile">;

const MarkizNigranProfileScreen: React.FC<Props> = () => {
  const { t } = useTranslation("common");
  const user = {
    name: "محمد حسن",
    email: "hassan@example.com",
    phone: "+92 300 9876543",
    role: "مرکز نگران",
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4">
        <View className="items-center mb-6">
          <View className="w-24 h-24 bg-colorPrimary rounded-full items-center justify-center mb-4">
            <ThemedText className="text-white text-4xl font-bold">
              {user.name.charAt(0)}
            </ThemedText>
          </View>
          <ThemedText className="text-2xl font-bold">{user.name}</ThemedText>
          <ThemedText className="text-sm text-gray mt-1">
            {user.role}
          </ThemedText>
        </View>

        <View className="space-y-4">
          <View className="bg-gray-100 p-4 rounded-lg">
            <ThemedText className="text-sm text-gray">ای میل</ThemedText>
            <ThemedText className="text-base font-semibold">
              {user.email}
            </ThemedText>
          </View>

          <View className="bg-gray-100 p-4 rounded-lg">
            <ThemedText className="text-sm text-gray">فون</ThemedText>
            <ThemedText className="text-base font-semibold">
              {user.phone}
            </ThemedText>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MarkizNigranProfileScreen;
