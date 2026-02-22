import { ThemedText } from "@/components/ThemedText";
import { ScrollView, View } from "react-native";

export default function SalaryScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        <View className="items-center justify-center py-12">
          <ThemedText className="text-3xl  text-blue-600 mb-4">
            تنخواہ
          </ThemedText>
          <ThemedText className="text-gray-600 text-center">
            آپ کی تنخواہ کی تفصیلات
          </ThemedText>
        </View>

        <View className="bg-blue-100 p-4 rounded-lg">
          <ThemedText className="font-semibold text-lg">
            ماہانہ تنخواہ
          </ThemedText>
          <ThemedText className="text-2xl  text-green-600 mt-2">
            0 روپے
          </ThemedText>
        </View>
      </View>
    </ScrollView>
  );
}
