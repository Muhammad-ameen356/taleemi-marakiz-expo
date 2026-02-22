import { ScrollView, Text, View } from "react-native";

export default function SalaryScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        <View className="items-center justify-center py-12">
          <Text className="text-3xl font-bold text-blue-600 mb-4">تنخواہ</Text>
          <Text className="text-gray-600 text-center">
            آپ کی تنخواہ کی تفصیلات
          </Text>
        </View>

        <View className="bg-blue-100 p-4 rounded-lg">
          <Text className="font-semibold text-lg">ماہانہ تنخواہ</Text>
          <Text className="text-2xl font-bold text-green-600 mt-2">0 روپے</Text>
        </View>
      </View>
    </ScrollView>
  );
}
