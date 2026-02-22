import { ScrollView, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        <View className="items-center justify-center py-12">
          <Text className="text-3xl font-bold text-blue-600 mb-4">پروفائل</Text>
          <View className="w-24 h-24 bg-gray-300 rounded-full mb-4" />
          <Text className="text-xl font-semibold">استاد کا نام</Text>
          <Text className="text-gray-600">استاد@مدرسہ.پاک</Text>
        </View>

        <View className="bg-gray-100 p-4 rounded-lg">
          <Text className="font-semibold mb-2">رابطہ کی معلومات</Text>
          <Text className="text-gray-700">فون: 0000000000</Text>
          <Text className="text-gray-700 mt-1">شہر: -</Text>
        </View>
      </View>
    </ScrollView>
  );
}
