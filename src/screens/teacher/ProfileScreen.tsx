import { ThemedText } from "@/components/ThemedText";
import { ScrollView, View } from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        <View className="items-center justify-center py-12">
          <ThemedText className="text-3xl  text-blue-600 mb-4">
            پروفائل
          </ThemedText>
          <View className="w-24 h-24 bg-gray-300 rounded-full mb-4" />
          <ThemedText className="text-xl font-semibold">
            استاد کا نام
          </ThemedText>
          <ThemedText className="text-gray-600">استاد@مدرسہ.پاک</ThemedText>
        </View>

        <View className="bg-gray-100 p-4 rounded-lg">
          <ThemedText className="font-semibold mb-2">
            رابطہ کی معلومات
          </ThemedText>
          <ThemedText className="text-gray-700">فون: 0000000000</ThemedText>
          <ThemedText className="text-gray-700 mt-1">شہر: -</ThemedText>
        </View>
      </View>
    </ScrollView>
  );
}
