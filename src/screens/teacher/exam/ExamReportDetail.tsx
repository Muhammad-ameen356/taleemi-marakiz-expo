import type { ExamReportStackParamList } from "@/types/navigation";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, Text, View } from "react-native";

type ExamReportDetailScreenProps = NativeStackScreenProps<
  ExamReportStackParamList,
  "ExamReportDetail"
>;

export default function ExamReportDetailScreen({
  route,
}: ExamReportDetailScreenProps) {
  const { examId } = route.params;

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        <View className="mb-6">
          <Text className="text-2xl  text-blue-600 mb-2">امتحان کی تفصیل</Text>
          <Text className="text-gray-600">امتحان ID: {examId}</Text>
        </View>

        <View className="bg-blue-100 p-4 rounded-lg mb-4">
          <Text className="font-semibold text-lg mb-2">امتحان کی معلومات</Text>
          <Text className="text-gray-700">عنوان: امتحان نمبر 1</Text>
          <Text className="text-gray-700">تاریخ: 2024-01-15</Text>
          <Text className="text-gray-700">کل طلبہ: 30</Text>
        </View>

        <View className="bg-green-100 p-4 rounded-lg mb-4">
          <Text className="font-semibold text-lg mb-2">نتائج</Text>
          <Text className="text-gray-700">اعلیٰ نمبرات: 95</Text>
          <Text className="text-gray-700">کم نمبرات: 45</Text>
          <Text className="text-gray-700">اوسط: 72.5</Text>
        </View>

        <View className="bg-yellow-100 p-4 rounded-lg">
          <Text className="font-semibold text-lg mb-2">کامیابی کی شرح</Text>
          <Text className="text-2xl  text-blue-600">86.67%</Text>
        </View>
      </View>
    </ScrollView>
  );
}
