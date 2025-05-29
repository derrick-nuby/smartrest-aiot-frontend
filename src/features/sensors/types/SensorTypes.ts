/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

export enum SensorType {
  PRESSURE = "pressure",
  HEART_RATE = "heart_rate",
  BREATHING_RATE = "breathing_rate",
  TEMPERATURE = "temperature",
  HUMIDITY = "humidity",
  BODY_MOVEMENT = "body_movement",
  POSTURE = "posture",
  VIBRATION = "vibration",
  SLEEP_APNEA = "sleep_apnea",
}

export interface SensorReading {
  reading_id: string;
  patient_id: string;
  bed_id: string;
  sensor_type: SensorType | string;
  sensor_value: number;
  sensor_unit?: string;
  timestamp: string;
  additional_metadata?: Record<string, any>;
  notes?: string;
}

export interface SensorReadingBatch {
  patient_id: string;
  bed_id: string;
  readings: {
    sensor_type: SensorType | string;
    sensor_value: number;
    sensor_unit?: string;
    timestamp?: string;
    additional_metadata?: Record<string, any>;
  }[];
}

export interface StoreSensorReadingsResponse {
  message: string;
  readings_count: number;
}

export interface LatestSensorReadings {
  patient_id: string;
  timestamp: string;
  readings: {
    [key in SensorType]?: {
      value: number;
      unit: string;
      timestamp: string;
    }
  };
}

export interface HistoricalSensorData {
  patient_id: string;
  data: SensorReading[]; // Paginated API response structure
  period: {
    start: string;
    end: string;
  };
  // Legacy support for non-paginated response
  readings?: SensorReading[];
}

export interface SensorDataQueryParams {
  patient_id?: string;
  type?: SensorType | string;
  from?: string;
  to?: string;
  limit?: number;
}

// Zod schema for sensor reading validation
export const sensorReadingSchema = z.object({
  reading_id: z.string().optional(),
  patient_id: z.string(),
  bed_id: z.string(),
  sensor_type: z.nativeEnum(SensorType),
  sensor_value: z.number(),
  sensor_unit: z.string().optional(),
  timestamp: z.string(),
  additional_metadata: z.record(z.any()).optional(),
  notes: z.string().optional(),
});

export type SensorReadingSchema = z.infer<typeof sensorReadingSchema>;

// Zod schema for sensor reading batch
export const sensorReadingBatchSchema = z.object({
  patient_id: z.string(),
  bed_id: z.string(),
  readings: z.array(
    z.object({
      sensor_type: z.nativeEnum(SensorType),
      sensor_value: z.number(),
      sensor_unit: z.string().optional(),
      timestamp: z.string().optional(),
      additional_metadata: z.record(z.any()).optional(),
    }),
  ),
});

export type SensorReadingBatchSchema = z.infer<typeof sensorReadingBatchSchema>;
