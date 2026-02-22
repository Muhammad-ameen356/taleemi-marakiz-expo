import type { ExamReportStackParamList } from "@/types/navigation";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type ExamReportScreenProps = NativeStackScreenProps<
  ExamReportStackParamList,
  "ExamReport"
>;

interface Exam {
  id: string;
  title: string;
  date: string;
  totalStudents: number;
}

export default function ExamReportScreen({
  navigation,
}: ExamReportScreenProps) {
  const mockExams: Exam[] = [
    { id: "1", title: "امتحان نمبر 1", date: "2024-01-15", totalStudents: 30 },
    { id: "2", title: "امتحان نمبر 2", date: "2024-02-20", totalStudents: 30 },
    { id: "3", title: "امتحان نمبر 3", date: "2024-03-10", totalStudents: 30 },
  ];

  const renderExam = ({ item }: { item: Exam }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ExamReportDetail", { examId: item.id })
      }
      className="bg-purple-100 p-4 rounded-lg mb-3"
    >
      <Text className="font-semibold text-lg">{item.title}</Text>
      <Text className="text-gray-600 text-sm">تاریخ: {item.date}</Text>
      <Text className="text-gray-600 text-sm">طلبہ: {item.totalStudents}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        <View className="mb-6">
          <Text className="text-2xl  text-blue-600 mb-2">امتحان کی رپورٹ</Text>
          <Text className="text-gray-600">تمام امتحانات کی تفصیلات</Text>
        </View>

        <FlatList
          data={mockExams}
          renderItem={renderExam}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
}
