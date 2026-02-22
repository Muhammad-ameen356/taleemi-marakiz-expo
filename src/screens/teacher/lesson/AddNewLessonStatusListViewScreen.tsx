import type { LessonStackParamList } from "@/types/navigation";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type AddNewLessonStatusScreenProps = NativeStackScreenProps<
  LessonStackParamList,
  "AddNewLessonStatus"
>;

export default function AddNewLessonStatusListViewScreen({
  route,
  navigation,
}: AddNewLessonStatusScreenProps) {
  const { lessonId } = route.params || {};
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("جاری");

  const handleSave = () => {
    if (title.trim()) {
      navigation.goBack();
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        <Text className="text-2xl  text-blue-600 mb-6">
          {lessonId ? "سبق میں ترمیم کریں" : "نیا سبق شامل کریں"}
        </Text>

        <View className="mb-4">
          <Text className="text-lg font-semibold mb-2 text-gray-700">
            سبق کا عنوان
          </Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-3 text-base"
            placeholder="سبق کا عنوان درج کریں"
            value={title}
            onChangeText={setTitle}
          />
        </View>

        <View className="mb-6">
          <Text className="text-lg font-semibold mb-2 text-gray-700">حالت</Text>
          <View className="flex-row justify-between mb-3">
            {["زیر التوا", "جاری", "مکمل"].map((s) => (
              <TouchableOpacity
                key={s}
                onPress={() => setStatus(s)}
                className={`flex-1 p-3 rounded-lg items-center mx-1 ${
                  status === s ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <Text
                  className={`font-semibold ${status === s ? "text-white" : "text-gray-700"}`}
                >
                  {s}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity
          onPress={handleSave}
          className="bg-green-600 p-4 rounded-lg items-center mb-3"
        >
          <Text className="text-white font-semibold text-lg">محفوظ کریں</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-gray-400 p-4 rounded-lg items-center"
        >
          <Text className="text-white font-semibold text-lg">منسوخ کریں</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
