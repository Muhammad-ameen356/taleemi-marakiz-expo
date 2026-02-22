/**
 * Teacher Drawer Configuration
 * Defines the drawer structure and items for the teacher role
 */

import { DRAWER_SCREENS } from "@/constants/screens";

export interface DrawerItem {
  label: string;
  labelUrdu: string;
  route: string;
  icon?: string;
  isStack?: boolean;
}

export const teacherDrawerItems: DrawerItem[] = [
  {
    label: "Dashboard",
    labelUrdu: "صفحہ ڈیش بورڈ",
    route: DRAWER_SCREENS.DASHBOARD,
    icon: "home",
    isStack: false,
  },
  {
    label: "Students",
    labelUrdu: "طلبہ",
    route: DRAWER_SCREENS.STUDENTS_STACK,
    icon: "users",
    isStack: true,
  },
  {
    label: "Attendance",
    labelUrdu: "حاضری",
    route: DRAWER_SCREENS.ATTENDANCE_STACK,
    icon: "check-square",
    isStack: true,
  },
  {
    label: "Lessons",
    labelUrdu: "سبق",
    route: DRAWER_SCREENS.LESSON_STACK,
    icon: "book",
    isStack: true,
  },
  {
    label: "Salary",
    labelUrdu: "تنخواہ",
    route: DRAWER_SCREENS.SALARY,
    icon: "money",
    isStack: false,
  },
  {
    label: "Download Data",
    labelUrdu: "ڈیٹا ڈاؤن لوڈ کریں",
    route: DRAWER_SCREENS.DOWNLOAD_DATA,
    icon: "download",
    isStack: false,
  },
  {
    label: "Exam Reports",
    labelUrdu: "امتحان کی رپورٹ",
    route: DRAWER_SCREENS.EXAM_REPORT_STACK,
    icon: "file-text",
    isStack: true,
  },
  {
    label: "Profile",
    labelUrdu: "پروفائل",
    route: DRAWER_SCREENS.PROFILE,
    icon: "user",
    isStack: false,
  },
  {
    label: "Messages",
    labelUrdu: "پیغامات",
    route: DRAWER_SCREENS.MESSAGES,
    icon: "mail",
    isStack: false,
  },
  {
    label: "Settings",
    labelUrdu: "ترتیبات",
    route: DRAWER_SCREENS.SETTINGS,
    icon: "settings",
    isStack: false,
  },
];

/**
 * Get drawer items configuration
 * @returns Array of drawer items for teacher role
 */
export function getTeacherDrawerItems(): DrawerItem[] {
  return teacherDrawerItems;
}
