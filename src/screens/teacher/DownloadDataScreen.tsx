import { ThemedText } from "@/components/ThemedText";
import { ScrollView, View } from "react-native";

export default function DownloadDataScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        <View className="items-center justify-center py-12">
          <ThemedText className="text-3xl  text-blue-600 mb-4">
            ڈیٹا ڈاؤن لوڈ کریں
          </ThemedText>
          <ThemedText className="text-gray-600 text-center">
            اپنا ڈیٹا محفوظ رکھیں
          </ThemedText>
        </View>

        <View className="bg-blue-100 p-4 rounded-lg mb-4">
          <ThemedText className="font-semibold text-lg">
            طلبہ کا ڈیٹا
          </ThemedText>
          <ThemedText className="text-gray-700 mt-2">
            آپ کے تمام طلبہ کی معلومات ڈاؤن لوڈ کریں
          </ThemedText>
        </View>

        <View className="bg-green-100 p-4 rounded-lg mb-4">
          <ThemedText className="font-semibold text-lg">
            حاضری کا ریکارڈ
          </ThemedText>
          <ThemedText className="text-gray-700 mt-2">
            حاضری کے تمام ریکارڈ ڈاؤن لوڈ کریں
          </ThemedText>
        </View>

        <View className="bg-yellow-100 p-4 rounded-lg">
          <ThemedText className="font-semibold text-lg">
            سبق کی معلومات
          </ThemedText>
          <ThemedText className="text-gray-700 mt-2">
            تمام سبق کی معلومات ڈاؤن لوڈ کریں
          </ThemedText>
        </View>
      </View>
    </ScrollView>
  );
}
