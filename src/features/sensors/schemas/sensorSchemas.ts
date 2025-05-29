import { z } from "zod"
import { SensorType } from "../types/SensorTypes"

// Schema for sensor reading form
export const sensorReadingFormSchema = z.object({
  patient_id: z.string().min(1, "Patient ID is required"),
  bed_id: z.string().min(1, "Bed ID is required"),
  sensor_type: z.nativeEnum(SensorType, {
    errorMap: () => ({ message: "Please select a valid sensor type" }),
  }),
  sensor_value: z.number({
    required_error: "Sensor value is required",
    invalid_type_error: "Sensor value must be a number",
  }),
  sensor_unit: z.string().optional(),
  timestamp: z.string().optional(),
  notes: z.string().optional(),
})

export type SensorReadingFormData = z.infer<typeof sensorReadingFormSchema>

// Schema for sensor data query form
export const sensorDataQueryFormSchema = z.object({
  patient_id: z.string().optional(),
  type: z.nativeEnum(SensorType).optional(),
  from: z.string().optional(),
  to: z.string().optional(),
  limit: z.number().positive().int().optional(),
})

export type SensorDataQueryFormData = z.infer<typeof sensorDataQueryFormSchema>
