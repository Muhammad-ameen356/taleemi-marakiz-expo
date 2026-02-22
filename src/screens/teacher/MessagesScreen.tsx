import { ThemedText } from "@/components/ThemedText";
import { ScrollView, View } from "react-native";

export default function MessagesScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        <View className="items-center justify-center py-12">
          <ThemedText className="text-3xl  text-blue-600 mb-4">
            پیغامات
          </ThemedText>
          <ThemedText className="text-gray-600 text-center">
            کوئی پیغام نہیں
          </ThemedText>
        </View>

        <View className="bg-blue-100 p-4 rounded-lg">
          <ThemedText className="font-semibold">
            آپ کے تازہ ترین پیغامات یہاں دکھائے جائیں گے
          </ThemedText>
        </View>
      </View>
    </ScrollView>
  );
}
