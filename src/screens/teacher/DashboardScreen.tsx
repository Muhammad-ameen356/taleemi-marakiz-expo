import { useTranslation } from "react-i18next";
import { ScrollView, Text, View } from "react-native";

export default function DashboardScreen() {
  const { t } = useTranslation();

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        <View className="items-center justify-center py-12">
          <Text className="text-3xl font-bold text-blue-600 mb-4">
            {t("common:dashboard", "صفحہ ڈیش بورڈ")}
          </Text>
          <Text className="text-gray-600 text-center">
            استاد کے لیے خوش آمدید
          </Text>
        </View>

        <View className="bg-blue-100 p-4 rounded-lg mb-4">
          <Text className="font-semibold text-lg">نوٹیفکیشنز</Text>
          <Text className="text-gray-700 mt-2">
            آپ کے لیے کوئی نیا پیغام نہیں
          </Text>
        </View>

        <View className="bg-green-100 p-4 rounded-lg">
          <Text className="font-semibold text-lg">اعدادوشمار</Text>
          <Text className="text-gray-700 mt-2">کل طلبہ: 0</Text>
        </View>
      </View>
    </ScrollView>
  );
}
