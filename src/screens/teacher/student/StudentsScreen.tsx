import type { StudentStackParamList } from "@/types/navigation";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
    FlatList,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type StudentsScreenProps = NativeStackScreenProps<
  StudentStackParamList,
  "StudentsList"
>;

interface Student {
  id: string;
  name: string;
  rollNumber: string;
  class: string;
}

export default function StudentsScreen({ navigation }: StudentsScreenProps) {
  const mockStudents: Student[] = [
    { id: "1", name: "احمد علی", rollNumber: "001", class: "نہم" },
    { id: "2", name: "فاطمہ محمد", rollNumber: "002", class: "نہم" },
    { id: "3", name: "علی رضا", rollNumber: "003", class: "نہم" },
  ];

  const renderStudent = ({ item }: { item: Student }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("AddEditStudent", {
          studentId: item.id,
          mode: "edit",
        })
      }
      className="bg-gray-100 p-4 rounded-lg mb-3"
    >
      <Text className="font-semibold text-lg">{item.name}</Text>
      <Text className="text-gray-600 text-sm">رول نمبر: {item.rollNumber}</Text>
      <Text className="text-gray-600 text-sm">کلاس: {item.class}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        <View className="mb-6">
          <Text className="text-2xl font-bold text-blue-600 mb-2">
            طلبہ کی فہرست
          </Text>
          <Text className="text-gray-600">کل طلبہ: {mockStudents.length}</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("AddEditStudent", { mode: "add" })}
          className="bg-blue-600 p-4 rounded-lg mb-6 items-center"
        >
          <Text className="text-white font-semibold text-lg">
            نیا طالب علم شامل کریں
          </Text>
        </TouchableOpacity>

        <FlatList
          data={mockStudents}
          renderItem={renderStudent}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
}
