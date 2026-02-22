import { MARKIZ_NIGRAN, NIGRAN, TEACHER } from "@/src/constants/roles";

export interface User {
  id: number;
  status: string;
  createdOn: string;

  name: string;
  fatherName: string;
  username: string;

  dob: string;
  doj: string;

  userTypeId: string;
  userTypeName: string | null;

  madarsaId: string;
  madarsaCode: string;
  madarsaName: string | null;
  madarsa: string | null;

  location: string;
  locationId: string;

  image: string;

  maritalStatusId: number;

  permaddress: string;
  tempaddress: string;
  address: string;

  cnic: string;
  nic: string | null;
  enic: string;

  qualification: string;
  extraQualification: string;
  modernQualification: string;
  lastAttendedMadarsa: string;
  otherMadarsas: string;
  lastQualificationDate: string | null;

  contact1: string;
  contact2: string;
  contact3: string;
  emobilenumber: string;

  salary: string;
  benefitamount: string;
  easyaccounttitle: string;

  teacherId: number | null;
  shiftId: string;
  classId: number | null;

  nigran: string | null;

  fathernic: string | null;

  createdBy: string | null;
  lastUpdatedBy: string | null;
  lastUpdatedOn: string | null;

  recordsTotal: number | null;
  userStatusDescription: string | null;
  role?: UserRole; // derived on frontend
}

export type UserRole = typeof NIGRAN | typeof TEACHER | typeof MARKIZ_NIGRAN;
