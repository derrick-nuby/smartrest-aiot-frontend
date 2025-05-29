import { UserRole, Sex } from "@/lib/enums";

export interface User {
  id: number;
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  role: UserRole | string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  patient_profile?: PatientProfile;
  doctor_profile?: DoctorProfile;
}

export interface PatientProfile {
  patient_id: string;
  national_id?: string;
  date_of_birth?: string;
  sex?: Sex | string;
  emergency_contact_name?: string;
  emergency_contact_phone?: string;
  health_conditions?: string;
  medications?: string;
  created_at: string;
}

export interface DoctorProfile {
  doctor_id: string;
  license_no: string;
  specialty?: string;
  institution?: string;
  years_experience?: number;
  created_at: string;
}

export interface CreateUserRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  role: UserRole | string;
  // Optional profile data based on role
  patient_profile?: Partial<PatientProfile>;
  doctor_profile?: Partial<DoctorProfile>;
}

export interface UpdateUserRequest {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  role?: UserRole | string;
  // Optional profile data based on role
  patient_profile?: Partial<PatientProfile>;
  doctor_profile?: Partial<DoctorProfile>;
}

export interface PaginatedUsersResponse {
  current_page: number;
  data: User[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
}

export interface CreateUserResponse {
  message: string;
  user: User;
}

export interface UpdateUserResponse {
  message: string;
  user: User;
}

export interface DeleteUserResponse {
  message: string;
}
