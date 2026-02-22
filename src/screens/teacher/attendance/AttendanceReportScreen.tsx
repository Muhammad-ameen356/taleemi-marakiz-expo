import type { AttendanceStackParamList } from "@/types/navigation";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, Text, View } from "react-native";

type AttendanceReportScreenProps = NativeStackScreenProps<
  AttendanceStackParamList,
  "AttendanceReport"
>;

export default function AttendanceReportScreen({
  route,
}: AttendanceReportScreenProps) {
  const { classId } = route.params;

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        <View className="mb-6">
          <Text className="text-2xl font-bold text-blue-600 mb-2">
            حاضری رپورٹ
          </Text>
          <Text className="text-gray-600">کلاس ID: {classId}</Text>
        </View>

        <View className="bg-blue-100 p-4 rounded-lg mb-4">
          <Text className="font-semibold text-lg mb-2">مجموعی حاضری</Text>
          <Text className="text-gray-700">موجود: 25</Text>
          <Text className="text-gray-700">غیر موجود: 5</Text>
          <Text className="text-gray-700 font-semibold mt-2">
            حاضری کی شرح: 83.33%
          </Text>
        </View>

        <View className="bg-green-100 p-4 rounded-lg">
          <Text className="font-semibold text-lg">تفصیلات</Text>
          <Text className="text-gray-700 mt-2">
            پچھلے 30 دن میں حاضری کا ریکارڈ
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
