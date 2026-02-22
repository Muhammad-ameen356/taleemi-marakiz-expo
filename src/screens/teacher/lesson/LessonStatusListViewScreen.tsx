import type { LessonStackParamList } from "@/types/navigation";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
    FlatList,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type LessonStatusListScreenProps = NativeStackScreenProps<
  LessonStackParamList,
  "LessonStatusList"
>;

interface Lesson {
  id: string;
  title: string;
  status: "مکمل" | "جاری" | "زیر التوا";
}

export default function LessonStatusListViewScreen({
  navigation,
}: LessonStatusListScreenProps) {
  const mockLessons: Lesson[] = [
    { id: "1", title: "سبق نمبر 1: بنیادی اردو", status: "مکمل" },
    { id: "2", title: "سبق نمبر 2: اسم", status: "جاری" },
    { id: "3", title: "سبق نمبر 3: فعل", status: "زیر التوا" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "مکمل":
        return "bg-green-100";
      case "جاری":
        return "bg-blue-100";
      default:
        return "bg-yellow-100";
    }
  };

  const renderLesson = ({ item }: { item: Lesson }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("AddNewLessonStatus", { lessonId: item.id })
      }
      className={`${getStatusColor(item.status)} p-4 rounded-lg mb-3`}
    >
      <Text className="font-semibold text-lg">{item.title}</Text>
      <Text className="text-gray-600 text-sm mt-1">حالت: {item.status}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        <View className="mb-6">
          <Text className="text-2xl font-bold text-blue-600 mb-2">
            سبق کی حالت
          </Text>
          <Text className="text-gray-600">تمام سبق کی حالت دیکھیں</Text>
        </View>

        <TouchableOpacity
          //   onPress={() => navigation.navigate("AddNewLessonStatus")}
          className="bg-blue-600 p-4 rounded-lg mb-6 items-center"
        >
          <Text className="text-white font-semibold text-lg">
            نیا سبق شامل کریں
          </Text>
        </TouchableOpacity>

        <FlatList
          data={mockLessons}
          renderItem={renderLesson}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
}
