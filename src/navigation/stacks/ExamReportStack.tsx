import { EXAM_REPORT_STACK_SCREENS } from "@/constants/screens";
import type { ExamReportStackParamList } from "@/types/navigation";
import { Ionicons } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import ExamReport from "@/src/screens/teacher/exam/ExamReport";
import ExamReportDetail from "@/src/screens/teacher/exam/ExamReportDetail";

const Stack = createNativeStackNavigator<ExamReportStackParamList>();

export function ExamReportStack() {
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
        name={EXAM_REPORT_STACK_SCREENS.EXAM_REPORT}
        component={ExamReport}
        options={{
          title: "امتحان کی رپورٹ",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={EXAM_REPORT_STACK_SCREENS.EXAM_REPORT_DETAIL}
        component={ExamReportDetail}
        options={{
          title: "تفصیلات",
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
