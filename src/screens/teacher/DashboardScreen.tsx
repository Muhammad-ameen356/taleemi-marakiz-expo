import { ThemedText } from "@/components/ThemedText";
import { useTranslation } from "react-i18next";
import { ScrollView, View } from "react-native";

export default function DashboardScreen() {
  const { t } = useTranslation();

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        <View className="items-center justify-center py-12">
          <ThemedText className="text-3xl  text-blue-600 mb-4">
            {t("common:dashboard", "صفحہ ڈیش بورڈ")}
          </ThemedText>
          <ThemedText className="text-gray-600 text-center">
            استاد کے لیے خوش آمدید
          </ThemedText>
        </View>

        <View className="bg-blue-100 p-4 rounded-lg mb-4">
          <ThemedText className="font-semibold text-lg">نوٹیفکیشنز</ThemedText>
          <ThemedText className="text-gray-700 mt-2">
            آپ کے لیے کوئی نیا پیغام نہیں
          </ThemedText>
        </View>

        <View className="bg-green-100 p-4 rounded-lg">
          <ThemedText className="font-semibold text-lg">اعدادوشمار</ThemedText>
          <ThemedText className="text-gray-700 mt-2">کل طلبہ: 0</ThemedText>
        </View>
      </View>
    </ScrollView>
  );
}
