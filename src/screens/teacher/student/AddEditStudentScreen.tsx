import { ThemedText } from "@/components/ThemedText";
import type { StudentStackParamList } from "@/types/navigation";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { ScrollView, TextInput, TouchableOpacity, View } from "react-native";

type AddEditStudentScreenProps = NativeStackScreenProps<
  StudentStackParamList,
  "AddEditStudent"
>;

export default function AddEditStudentScreen({
  route,
  navigation,
}: AddEditStudentScreenProps) {
  const { mode, studentId } = route.params;
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");

  const handleSave = () => {
    if (name.trim() && rollNumber.trim()) {
      navigation.goBack();
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        <ThemedText className="text-2xl  text-blue-600 mb-6">
          {mode === "add"
            ? "نیا طالب علم شامل کریں"
            : "طالب علم میں ترمیم کریں"}
        </ThemedText>

        <View className="mb-4">
          <ThemedText className="text-lg font-semibold mb-2 text-gray-700">
            نام
          </ThemedText>
          <TextInput
            className="border border-gray-300 rounded-lg p-3 text-base"
            placeholder="طالب علم کا نام درج کریں"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View className="mb-6">
          <ThemedText className="text-lg font-semibold mb-2 text-gray-700">
            رول نمبر
          </ThemedText>
          <TextInput
            className="border border-gray-300 rounded-lg p-3 text-base"
            placeholder="رول نمبر درج کریں"
            value={rollNumber}
            onChangeText={setRollNumber}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity
          onPress={handleSave}
          className="bg-green-600 p-4 rounded-lg items-center mb-3"
        >
          <ThemedText className="text-white font-semibold text-lg">
            محفوظ کریں
          </ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-gray-400 p-4 rounded-lg items-center"
        >
          <ThemedText className="text-white font-semibold text-lg">
            منسوخ کریں
          </ThemedText>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
