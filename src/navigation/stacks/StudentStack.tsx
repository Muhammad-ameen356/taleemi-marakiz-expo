import { STUDENT_STACK_SCREENS } from "@/constants/screens";
import type { StudentStackParamList } from "@/types/navigation";
import { Ionicons } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import AddEditStudentScreen from "@/src/screens/teacher/student/AddEditStudentScreen";
import StudentsScreen from "@/src/screens/teacher/student/StudentsScreen";

const Stack = createNativeStackNavigator<StudentStackParamList>();

export function StudentStack() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerTitleAlign: "center",
        headerShown: true,
        headerStyle: {
          backgroundColor: "#2E86DE",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerLeft: () => (
          <Ionicons
            name="menu"
            size={24}
            color="#fff"
            onPress={() =>
              (navigation as unknown as DrawerNavigationProp<any>).openDrawer()
            }
            style={{ marginLeft: 16 }}
          />
        ),
      })}
    >
      <Stack.Screen
        name={STUDENT_STACK_SCREENS.STUDENTS_LIST}
        component={StudentsScreen}
        options={{
          title: "طلبہ",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={STUDENT_STACK_SCREENS.ADD_EDIT_STUDENT}
        component={AddEditStudentScreen}
        options={({ route }) => ({
          title:
            route.params.mode === "add" ? "نیا طالب علم" : "طالب علم میں ترمیم",
          headerShown: true,
        })}
      />
    </Stack.Navigator>
  );
}
