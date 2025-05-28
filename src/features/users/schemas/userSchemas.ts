import { z } from "zod";

// Enum for user roles - ensuring compatibility with Zod
const userRoleEnum = z.enum(["admin", "doctor", "patient", "customer"]);

// Enum for biological sex - ensuring compatibility with Zod
const sexEnum = z.enum(["M", "F", "O"]);

// Patient profile schema
const patientProfileSchema = z.object({
  national_id: z.string().optional(),
  date_of_birth: z.string().optional(),
  sex: sexEnum.optional(),
  emergency_contact_name: z.string().optional(),
  emergency_contact_phone: z.string().optional(),
  health_conditions: z.string().optional(),
  medications: z.string().optional(),
});

// Doctor profile schema
const doctorProfileSchema = z.object({
  license_no: z.string().min(1, "License number is required"),
  specialty: z.string().optional(),
  institution: z.string().optional(),
  years_experience: z.number().positive().int().optional(),
});

// User schema for creation
export const createUserSchema = z.object({
  first_name: z.string().min(1, "First name is required").max(255, "First name cannot exceed 255 characters"),
  last_name: z.string().min(1, "Last name is required").max(255, "Last name cannot exceed 255 characters"),
  email: z.string().min(1, "Email is required").email("Must be a valid email address"),
  phone: z.string().optional(),
  role: userRoleEnum,
  patient_profile: patientProfileSchema.optional(),
  doctor_profile: doctorProfileSchema.optional(),
}).refine((data) => {
  // If role is doctor, doctor_profile is required
  if (data.role === "doctor" && !data.doctor_profile) {
    return false;
  }
  return true;
}, {
  message: "Doctor profile is required when role is set to doctor",
  path: ["doctor_profile"]
});

export type CreateUserFormData = z.infer<typeof createUserSchema>;

// User schema for update
export const updateUserSchema = z.object({
  first_name: z.string().min(1, "First name is required").max(255, "First name cannot exceed 255 characters").optional(),
  last_name: z.string().min(1, "Last name is required").max(255, "Last name cannot exceed 255 characters").optional(),
  email: z.string().min(1, "Email is required").email("Must be a valid email address").optional(),
  phone: z.string().optional(),
  role: userRoleEnum.optional(),
  patient_profile: patientProfileSchema.optional(),
  doctor_profile: doctorProfileSchema.optional(),
});

export type UpdateUserFormData = z.infer<typeof updateUserSchema>;
