/**
 * Navigation Type Definitions
 * Includes ParamList types for each stack
 */

import {
    ATTENDANCE_STACK_SCREENS,
    DRAWER_SCREENS,
    EXAM_REPORT_STACK_SCREENS,
    LESSON_STACK_SCREENS,
    STUDENT_STACK_SCREENS,
} from "@/constants/screens";
import type { NavigatorScreenParams } from "@react-navigation/native";

// Student Stack Params
export type StudentStackParamList = {
  [STUDENT_STACK_SCREENS.STUDENTS_LIST]: undefined;
  [STUDENT_STACK_SCREENS.ADD_EDIT_STUDENT]: {
    studentId?: string;
    mode: "add" | "edit";
  };
};

// Attendance Stack Params
export type AttendanceStackParamList = {
  [ATTENDANCE_STACK_SCREENS.ATTENDANCE]: undefined;
  [ATTENDANCE_STACK_SCREENS.MARK_ATTENDANCE]: {
    classId: string;
    date: string;
  };
  [ATTENDANCE_STACK_SCREENS.ATTENDANCE_REPORT]: {
    classId: string;
  };
};

// Lesson Stack Params
export type LessonStackParamList = {
  [LESSON_STACK_SCREENS.LESSON_STATUS_LIST]: undefined;
  [LESSON_STACK_SCREENS.ADD_NEW_LESSON_STATUS]: {
    lessonId?: string;
  };
};

// Exam Report Stack Params
export type ExamReportStackParamList = {
  [EXAM_REPORT_STACK_SCREENS.EXAM_REPORT]: undefined;
  [EXAM_REPORT_STACK_SCREENS.EXAM_REPORT_DETAIL]: {
    examId: string;
  };
};

// Drawer Params
export type DrawerParamList = {
  [DRAWER_SCREENS.DASHBOARD]: undefined;
  [DRAWER_SCREENS.STUDENTS_STACK]: NavigatorScreenParams<StudentStackParamList>;
  [DRAWER_SCREENS.ATTENDANCE_STACK]: NavigatorScreenParams<AttendanceStackParamList>;
  [DRAWER_SCREENS.LESSON_STACK]: NavigatorScreenParams<LessonStackParamList>;
  [DRAWER_SCREENS.SALARY]: undefined;
  [DRAWER_SCREENS.DOWNLOAD_DATA]: undefined;
  [DRAWER_SCREENS.EXAM_REPORT_STACK]: NavigatorScreenParams<ExamReportStackParamList>;
  [DRAWER_SCREENS.PROFILE]: undefined;
  [DRAWER_SCREENS.MESSAGES]: undefined;
  [DRAWER_SCREENS.SETTINGS]: undefined;
};

// Root Stack Params (if needed for Auth flow)
export type RootStackParamList = {
  Login: undefined;
  TeacherDrawer: NavigatorScreenParams<DrawerParamList>;
};
