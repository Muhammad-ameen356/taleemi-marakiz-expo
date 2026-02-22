import { ATTENDANCE_STACK_SCREENS } from "@/constants/screens";
import type { AttendanceStackParamList } from "@/types/navigation";
import { Ionicons } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import AttendanceReportScreen from "@/src/screens/teacher/attendance/AttendanceReportScreen";
import AttendanceScreen from "@/src/screens/teacher/attendance/AttendanceScreen";
import MarkAttendanceScreen from "@/src/screens/teacher/attendance/MarkAttendanceScreen";

const Stack = createNativeStackNavigator<AttendanceStackParamList>();

export function AttendanceStack() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerTitleAlign: "center",
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
        name={ATTENDANCE_STACK_SCREENS.ATTENDANCE}
        component={AttendanceScreen}
        options={{
          title: "حاضری",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={ATTENDANCE_STACK_SCREENS.MARK_ATTENDANCE}
        component={MarkAttendanceScreen}
        options={{
          title: "حاضری درج کریں",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={ATTENDANCE_STACK_SCREENS.ATTENDANCE_REPORT}
        component={AttendanceReportScreen}
        options={{
          title: "حاضری رپورٹ",
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
