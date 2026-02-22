/**
 * Screen Route Names
 * Central configuration for all navigation routes
 */

// Drawer Screens
export const DRAWER_SCREENS = {
  DASHBOARD: "Dashboard",
  STUDENTS_STACK: "StudentsStack",
  ATTENDANCE_STACK: "AttendanceStack",
  LESSON_STACK: "LessonStack",
  SALARY: "Salary",
  DOWNLOAD_DATA: "DownloadData",
  EXAM_REPORT_STACK: "ExamReportStack",
  PROFILE: "Profile",
  MESSAGES: "Messages",
  SETTINGS: "Settings",
} as const;

// Student Stack
export const STUDENT_STACK_SCREENS = {
  STUDENTS_LIST: "StudentsList",
  ADD_EDIT_STUDENT: "AddEditStudent",
} as const;

// Attendance Stack
export const ATTENDANCE_STACK_SCREENS = {
  ATTENDANCE: "Attendance",
  MARK_ATTENDANCE: "MarkAttendance",
  ATTENDANCE_REPORT: "AttendanceReport",
} as const;

// Lesson Stack
export const LESSON_STACK_SCREENS = {
  LESSON_STATUS_LIST: "LessonStatusList",
  ADD_NEW_LESSON_STATUS: "AddNewLessonStatus",
} as const;

// Exam Report Stack
export const EXAM_REPORT_STACK_SCREENS = {
  EXAM_REPORT: "ExamReport",
  EXAM_REPORT_DETAIL: "ExamReportDetail",
} as const;

// All screens
export const ALL_SCREENS = {
  ...DRAWER_SCREENS,
  ...STUDENT_STACK_SCREENS,
  ...ATTENDANCE_STACK_SCREENS,
  ...LESSON_STACK_SCREENS,
  ...EXAM_REPORT_STACK_SCREENS,
} as const;
