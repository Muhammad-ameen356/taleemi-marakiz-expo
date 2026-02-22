import type { AttendanceStackParamList } from "@/types/navigation";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";

type MarkAttendanceScreenProps = NativeStackScreenProps<
  AttendanceStackParamList,
  "MarkAttendance"
>;

interface Student {
  id: string;
  name: string;
  present: boolean;
}

export default function MarkAttendanceScreen({
  route,
  navigation,
}: MarkAttendanceScreenProps) {
  const { classId, date } = route.params;

  const mockStudents: Student[] = [
    { id: "1", name: "احمد علی", present: true },
    { id: "2", name: "فاطمہ محمد", present: true },
    { id: "3", name: "علی رضا", present: false },
  ];

  const renderStudent = ({ item }: { item: Student }) => (
    <View className="bg-gray-100 p-4 rounded-lg mb-3 flex-row justify-between items-center">
      <Text className="font-semibold text-lg flex-1">{item.name}</Text>
      <View
        className={`px-4 py-2 rounded ${item.present ? "bg-green-300" : "bg-red-300"}`}
      >
        <Text className="font-semibold">
          {item.present ? "موجود" : "غیر موجود"}
        </Text>
      </View>
    </View>
  );

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        <View className="mb-6">
          <Text className="text-2xl  text-blue-600 mb-2">حاضری درج کریں</Text>
          <Text className="text-gray-600">تاریخ: {date}</Text>
          <Text className="text-gray-600">کلاس ID: {classId}</Text>
        </View>

        <FlatList
          data={mockStudents}
          renderItem={renderStudent}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("AttendanceReport", { classId })}
          className="bg-green-600 p-4 rounded-lg items-center mt-6"
        >
          <Text className="text-white font-semibold text-lg">محفوظ کریں</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
