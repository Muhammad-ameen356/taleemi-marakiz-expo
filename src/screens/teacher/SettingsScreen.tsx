import { ThemedText } from "@/components/ThemedText";
import { ScrollView, View } from "react-native";

export default function SettingsScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        <View className="items-center justify-center py-12">
          <ThemedText className="text-3xl  text-blue-600 mb-4">
            ترتیبات
          </ThemedText>
        </View>

        <View className="space-y-3">
          <View className="bg-gray-100 p-4 rounded-lg">
            <ThemedText className="font-semibold">زبان</ThemedText>
            <ThemedText className="text-gray-700 mt-1">اردو</ThemedText>
          </View>

          <View className="bg-gray-100 p-4 rounded-lg">
            <ThemedText className="font-semibold">نوٹیفکیشنز</ThemedText>
            <ThemedText className="text-gray-700 mt-1">فعال</ThemedText>
          </View>

          <View className="bg-gray-100 p-4 rounded-lg">
            <ThemedText className="font-semibold">ورژن</ThemedText>
            <ThemedText className="text-gray-700 mt-1">1.0.0</ThemedText>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
