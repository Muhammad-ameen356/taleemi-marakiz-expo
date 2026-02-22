import { Ionicons } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { ThemedText } from "../components/ThemedText";
import { MARKIZ_NIGRAN, NIGRAN, TEACHER } from "../constants/roles";
import { DRAWER_SCREENS } from "../constants/screens";
import { Colors } from "../constants/theme";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { logout } from "../redux/slices/authSlice";
import type { DrawerParamList } from "../types/navigation";

// Stack imports
import { AttendanceStack } from "./stacks/AttendanceStack";
import { ExamReportStack } from "./stacks/ExamReportStack";
import { LessonStack } from "./stacks/LessonStack";
import { StudentStack } from "./stacks/StudentStack";

// Teacher Screen imports
import DashboardScreen from "@/screens/teacher/DashboardScreen";
import DownloadDataScreen from "@/screens/teacher/DownloadDataScreen";
import MessagesScreen from "@/screens/teacher/MessagesScreen";
import ProfileScreen from "@/screens/teacher/ProfileScreen";
import SalaryScreen from "@/screens/teacher/SalaryScreen";
import SettingsScreen from "@/screens/teacher/SettingsScreen";

// Nigran Screen imports
import NigranDashboardScreen from "@/screens/nigran/DashboardScreen";
import NigranProfileScreen from "@/screens/nigran/ProfileScreen";
import NigranSettingsScreen from "@/screens/nigran/SettingsScreen";

// Markiz Nigran Screen imports
import MarkizNigranDashboardScreen from "@/screens/markiz-nigran/DashboardScreen";
import MarkizNigranProfileScreen from "@/screens/markiz-nigran/ProfileScreen";
import MarkizNigranSettingsScreen from "@/screens/markiz-nigran/SettingsScreen";

// Drawer configuration

const Drawer = createDrawerNavigator<DrawerParamList>();

function CustomDrawerContent(props: any) {
  const { t } = useTranslation("common");
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const getRoleLabel = () => {
    switch (user?.role) {
      case TEACHER:
        return "استاد";
      case NIGRAN:
        return "نگران";
      case MARKIZ_NIGRAN:
        return "مرکز نگران";
      default:
        return "صارف";
    }
  };

  return (
    <View className="flex-1">
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ paddingTop: 0 }}
      >
        <View className="bg-colorPrimary p-10 items-center justify-center mb-4">
          <View className="w-20 h-20 bg-white rounded-full items-center justify-center mb-4">
            <ThemedText className="text-colorPrimary text-3xl font-bold">
              {user?.name?.charAt(0) || "U"}
            </ThemedText>
          </View>
          <ThemedText className="text-white text-lg font-bold">
            {user?.name}
          </ThemedText>
          <ThemedText className="text-white text-sm mt-2">
            {getRoleLabel()}
          </ThemedText>
        </View>

        <DrawerItemList {...props} />

        <View className="border-t border-grayLow mt-4 pt-4">
          <DrawerItem
            label={t("logout")}
            icon={({ color, size }) => (
              <Ionicons name="log-out-outline" color={color} size={size} />
            )}
            onPress={() => dispatch(logout())}
            labelStyle={{ fontFamily: "NotoNastaliqUrdu", textAlign: "right" }}
            inactiveTintColor="#ff0000"
          />
        </View>
      </DrawerContentScrollView>
      <View className="p-4 items-center border-t border-grayLow">
        <ThemedText className="text-gray text-xs">
          Taleemi Marakiz v1.0.0
        </ThemedText>
      </View>
    </View>
  );
}

const DrawerNavigator = () => {
  const { t } = useTranslation("common");
  const user = useAppSelector((state) => state.auth.user);

  const getDrawerIcon =
    (iconName: string) =>
    ({ color, size }: any) => (
      <Ionicons name={iconName as any} color={color} size={size} />
    );

  if (user?.role === TEACHER) {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: true,
          drawerPosition: "left",
          drawerStyle: {
            backgroundColor: "white",
            width: 280,
          },
          drawerActiveBackgroundColor: Colors.primary + "10",
          drawerActiveTintColor: Colors.primary,
          drawerLabelStyle: {
            fontFamily: "NotoNastaliqUrdu",
            textAlign: "right",
            fontSize: 16,
          },
          drawerItemStyle: {
            borderRadius: 12,
            paddingHorizontal: 8,
          },
        }}
      >
        <Drawer.Screen
          name={DRAWER_SCREENS.DASHBOARD}
          component={DashboardScreen}
          options={{
            title: "صفحہ ڈیش بورڈ",
            drawerLabel: "صفحہ ڈیش بورڈ",
            drawerIcon: getDrawerIcon("home-outline"),
            headerShown: true,
          }}
        />

        <Drawer.Screen
          name={DRAWER_SCREENS.STUDENTS_STACK}
          component={StudentStack}
          options={{
            title: "طلبہ",
            drawerLabel: "طلبہ",
            drawerIcon: getDrawerIcon("people-outline"),
            headerShown: false,
          }}
        />

        <Drawer.Screen
          name={DRAWER_SCREENS.ATTENDANCE_STACK}
          component={AttendanceStack}
          options={{
            title: "حاضری",
            drawerLabel: "حاضری",
            drawerIcon: getDrawerIcon("checkmark-circle-outline"),
            headerShown: false,
          }}
        />

        <Drawer.Screen
          name={DRAWER_SCREENS.LESSON_STACK}
          component={LessonStack}
          options={{
            title: "سبق",
            drawerLabel: "سبق",
            drawerIcon: getDrawerIcon("book-outline"),
            headerShown: false,
          }}
        />

        <Drawer.Screen
          name={DRAWER_SCREENS.SALARY}
          component={SalaryScreen}
          options={{
            title: "تنخواہ",
            drawerLabel: "تنخواہ",
            drawerIcon: getDrawerIcon("cash-outline"),
          }}
        />

        <Drawer.Screen
          name={DRAWER_SCREENS.DOWNLOAD_DATA}
          component={DownloadDataScreen}
          options={{
            title: "ڈیٹا ڈاؤن لوڈ کریں",
            drawerLabel: "ڈیٹا ڈاؤن لوڈ کریں",
            drawerIcon: getDrawerIcon("download-outline"),
          }}
        />

        <Drawer.Screen
          name={DRAWER_SCREENS.EXAM_REPORT_STACK}
          component={ExamReportStack}
          options={{
            title: "امتحان کی رپورٹ",
            drawerLabel: "امتحان کی رپورٹ",
            drawerIcon: getDrawerIcon("document-text-outline"),
            headerShown: false,
          }}
        />

        <Drawer.Screen
          name={DRAWER_SCREENS.PROFILE}
          component={ProfileScreen}
          options={{
            title: "پروفائل",
            drawerLabel: "پروفائل",
            drawerIcon: getDrawerIcon("person-outline"),
          }}
        />

        <Drawer.Screen
          name={DRAWER_SCREENS.MESSAGES}
          component={MessagesScreen}
          options={{
            title: "پیغامات",
            drawerLabel: "پیغامات",
            drawerIcon: getDrawerIcon("mail-outline"),
          }}
        />

        <Drawer.Screen
          name={DRAWER_SCREENS.SETTINGS}
          component={SettingsScreen}
          options={{
            title: "ترتیبات",
            drawerLabel: "ترتیبات",
            drawerIcon: getDrawerIcon("settings-outline"),
          }}
        />
      </Drawer.Navigator>
    );
  }

  // Fallback for other roles or no user
  if (user?.role === NIGRAN) {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: true,
          drawerPosition: "left",
          drawerStyle: {
            backgroundColor: "white",
            width: 280,
          },
          drawerActiveBackgroundColor: Colors.primary + "10",
          drawerActiveTintColor: Colors.primary,
          drawerLabelStyle: {
            fontFamily: "NotoNastaliqUrdu",
            textAlign: "right",
            fontSize: 16,
          },
          drawerItemStyle: {
            borderRadius: 12,
            paddingHorizontal: 8,
          },
        }}
      >
        <Drawer.Screen
          name={DRAWER_SCREENS.DASHBOARD}
          component={NigranDashboardScreen}
          options={{
            title: "صفحہ ڈیش بورڈ",
            drawerLabel: "صفحہ ڈیش بورڈ",
            drawerIcon: getDrawerIcon("home-outline"),
            headerShown: true,
          }}
        />

        <Drawer.Screen
          name={DRAWER_SCREENS.PROFILE}
          component={NigranProfileScreen}
          options={{
            title: "پروفائل",
            drawerLabel: "پروفائل",
            drawerIcon: getDrawerIcon("person-outline"),
          }}
        />

        <Drawer.Screen
          name={DRAWER_SCREENS.SETTINGS}
          component={NigranSettingsScreen}
          options={{
            title: "ترتیبات",
            drawerLabel: "ترتیبات",
            drawerIcon: getDrawerIcon("settings-outline"),
          }}
        />
      </Drawer.Navigator>
    );
  }

  if (user?.role === MARKIZ_NIGRAN) {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: true,
          drawerPosition: "left",
          drawerStyle: {
            backgroundColor: "white",
            width: 280,
          },
          drawerActiveBackgroundColor: Colors.primary + "10",
          drawerActiveTintColor: Colors.primary,
          drawerLabelStyle: {
            fontFamily: "NotoNastaliqUrdu",
            textAlign: "right",
            fontSize: 16,
          },
          drawerItemStyle: {
            borderRadius: 12,
            paddingHorizontal: 8,
          },
        }}
      >
        <Drawer.Screen
          name={DRAWER_SCREENS.DASHBOARD}
          component={MarkizNigranDashboardScreen}
          options={{
            title: "صفحہ ڈیش بورڈ",
            drawerLabel: "صفحہ ڈیش بورڈ",
            drawerIcon: getDrawerIcon("home-outline"),
            headerShown: true,
          }}
        />

        <Drawer.Screen
          name={DRAWER_SCREENS.PROFILE}
          component={MarkizNigranProfileScreen}
          options={{
            title: "پروفائل",
            drawerLabel: "پروفائل",
            drawerIcon: getDrawerIcon("person-outline"),
          }}
        />

        <Drawer.Screen
          name={DRAWER_SCREENS.SETTINGS}
          component={MarkizNigranSettingsScreen}
          options={{
            title: "ترتیبات",
            drawerLabel: "ترتیبات",
            drawerIcon: getDrawerIcon("settings-outline"),
          }}
        />
      </Drawer.Navigator>
    );
  }

  // Fallback for unknown roles
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: "left",
      }}
    >
      <Drawer.Screen
        name={DRAWER_SCREENS.DASHBOARD}
        component={DashboardScreen}
        options={{
          title: "صفحہ ڈیش بورڈ",
          drawerIcon: getDrawerIcon("home-outline"),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
