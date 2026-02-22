import { ThemedText } from "@/components/ThemedText";
import type { AttendanceStackParamList } from "@/types/navigation";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";

type AttendanceScreenProps = NativeStackScreenProps<
  AttendanceStackParamList,
  "Attendance"
>;

interface AttendanceClass {
  id: string;
  name: string;
  totalStudents: number;
}

export default function AttendanceScreen({
  navigation,
}: AttendanceScreenProps) {
  const mockClasses: AttendanceClass[] = [
    { id: "1", name: "نہم الف", totalStudents: 30 },
    { id: "2", name: "نہم ب", totalStudents: 28 },
    { id: "3", name: "دہم الف", totalStudents: 32 },
  ];

  const renderClass = ({ item }: { item: AttendanceClass }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("MarkAttendance", {
          classId: item.id,
          date: new Date().toISOString().split("T")[0],
        })
      }
      className="bg-blue-100 p-4 rounded-lg mb-3"
    >
      <ThemedText className="font-semibold text-lg">{item.name}</ThemedText>
      <ThemedText className="text-gray-600 text-sm">
        کل طلبہ: {item.totalStudents}
      </ThemedText>
    </TouchableOpacity>
  );

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        <View className="mb-6">
          <ThemedText className="text-2xl  text-blue-600 mb-2">
            حاضری
          </ThemedText>
          <ThemedText className="text-gray-600">
            اپنی کلاسز کی حاضری منتخب کریں
          </ThemedText>
        </View>

        <FlatList
          data={mockClasses}
          renderItem={renderClass}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
}
