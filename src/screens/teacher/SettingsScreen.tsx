import { ScrollView, Text, View } from "react-native";

export default function SettingsScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        <View className="items-center justify-center py-12">
          <Text className="text-3xl font-bold text-blue-600 mb-4">ترتیبات</Text>
        </View>

        <View className="space-y-3">
          <View className="bg-gray-100 p-4 rounded-lg">
            <Text className="font-semibold">زبان</Text>
            <Text className="text-gray-700 mt-1">اردو</Text>
          </View>

          <View className="bg-gray-100 p-4 rounded-lg">
            <Text className="font-semibold">نوٹیفکیشنز</Text>
            <Text className="text-gray-700 mt-1">فعال</Text>
          </View>

          <View className="bg-gray-100 p-4 rounded-lg">
            <Text className="font-semibold">ورژن</Text>
            <Text className="text-gray-700 mt-1">1.0.0</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
