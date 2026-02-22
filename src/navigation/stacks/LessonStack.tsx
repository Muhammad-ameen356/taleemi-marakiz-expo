import { LESSON_STACK_SCREENS } from "@/constants/screens";
import type { LessonStackParamList } from "@/types/navigation";
import { Ionicons } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import AddNewLessonStatusListViewScreen from "@/src/screens/teacher/lesson/AddNewLessonStatusListViewScreen";
import LessonStatusListViewScreen from "@/src/screens/teacher/lesson/LessonStatusListViewScreen";

const Stack = createNativeStackNavigator<LessonStackParamList>();

export function LessonStack() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerTitleAlign: "center",
        cardStyle: { backgroundColor: "white" },
        animationEnabled: true,
        animationTypeForReplace: "pop",
        headerStyle: {
          backgroundColor: "#2E86DE",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontFamily: "NotoNastaliqUrdu",
          fontSize: 18,
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
        name={LESSON_STACK_SCREENS.LESSON_STATUS_LIST}
        component={LessonStatusListViewScreen}
        options={{
          title: "سبق کی حالت",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={LESSON_STACK_SCREENS.ADD_NEW_LESSON_STATUS}
        component={AddNewLessonStatusListViewScreen}
        options={({ route }) => ({
          title: route.params?.lessonId
            ? "سبق میں ترمیم کریں"
            : "نیا سبق شامل کریں",
          headerShown: true,
        })}
      />
    </Stack.Navigator>
  );
}
