import { ScrollView, Text, View } from "react-native";

export default function MessagesScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        <View className="items-center justify-center py-12">
          <Text className="text-3xl font-bold text-blue-600 mb-4">پیغامات</Text>
          <Text className="text-gray-600 text-center">کوئی پیغام نہیں</Text>
        </View>

        <View className="bg-blue-100 p-4 rounded-lg">
          <Text className="font-semibold">
            آپ کے تازہ ترین پیغامات یہاں دکھائے جائیں گے
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
