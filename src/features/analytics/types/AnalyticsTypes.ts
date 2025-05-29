import { z } from "zod"

export interface SleepReport {
  patient_id: string
  date: string
  sleep_duration: {
    total_hours: number
    minutes: number
  }
  sleep_stages: {
    awake: number
    light: number
    deep: number
    rem: number
  }
  sleep_score: number
  posture_changes: number
  breathing_events: number
  avg_heart_rate: number
  notes?: string
}

export interface HealthSummary {
  patient_id: string
  period: {
    start_date: string
    end_date: string
  }
  vital_trends: {
    heart_rate: {
      avg: number
      min: number
      max: number
      trend: "improving" | "declining" | "stable"
    }
    breathing_rate: {
      avg: number
      min: number
      max: number
      trend: "improving" | "declining" | "stable"
    }
    [key: string]: {
      avg: number
      min: number
      max: number
      trend: "improving" | "declining" | "stable"
    }
  }
  sleep_quality: {
    avg_score: number
    trend: "improving" | "declining" | "stable"
  }
  anomalies: {
    type: string
    description: string
    detected_at: string
    severity: "low" | "medium" | "high"
  }[]
  recommendations: string[]
}

export interface SleepReportQueryParams {
  date: string
  patient_id?: string
}

export interface HealthSummaryQueryParams {
  patient_id?: string
  days: number
}

// Zod schema for sleep report
export const sleepReportSchema = z.object({
  patient_id: z.string(),
  date: z.string(),
  sleep_duration: z.object({
    total_hours: z.number(),
    minutes: z.number(),
  }),
  sleep_stages: z.object({
    awake: z.number(),
    light: z.number(),
    deep: z.number(),
    rem: z.number(),
  }),
  sleep_score: z.number(),
  posture_changes: z.number(),
  breathing_events: z.number(),
  avg_heart_rate: z.number(),
  notes: z.string().optional(),
})

export type SleepReportSchema = z.infer<typeof sleepReportSchema>

// Zod schema for health summary
export const healthSummarySchema = z.object({
  patient_id: z.string(),
  period: z.object({
    start_date: z.string(),
    end_date: z.string(),
  }),
  vital_trends: z.record(
    z.object({
      avg: z.number(),
      min: z.number(),
      max: z.number(),
      trend: z.enum(["improving", "declining", "stable"]),
    }),
  ),
  sleep_quality: z.object({
    avg_score: z.number(),
    trend: z.enum(["improving", "declining", "stable"]),
  }),
  anomalies: z.array(
    z.object({
      type: z.string(),
      description: z.string(),
      detected_at: z.string(),
      severity: z.enum(["low", "medium", "high"]),
    }),
  ),
  recommendations: z.array(z.string()),
})

export type HealthSummarySchema = z.infer<typeof healthSummarySchema>
