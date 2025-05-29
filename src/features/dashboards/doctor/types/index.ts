export interface VitalSignsData {
  timestamp: string
  heartRate: number
  bloodPressureSystolic?: number
  bloodPressureDiastolic?: number
  temperature?: number
  respiration?: number
}

export interface PatientComparisonData {
  patientId: string
  patientName: string
  avgSleepQuality: number
  avgSleepDuration: number
  avgRestlessness: number
}

export interface AlertTimelineData {
  time: string
  patientId: string
  patientName: string
  alertType: string
  severity: number
  resolved: boolean
}

export interface HealthImprovementData {
  date: string
  healthScore: number
  baselineScore: number
  targetScore?: number
}

export interface DisorderDistributionData {
  name: string
  value: number
  fill: string
}

export interface ActivityData {
  day: string
  actualActivity: number
  recommendedActivity: number
  restQuality?: number
}

export interface TreatmentData {
  week: number | string
  efficacyScore: number
  targetMin?: number
  targetMax?: number
}

export interface ProgressRadarData {
  metric: string
  initialScore: number
  currentScore: number
  targetScore: number
}

export interface MedicationCorrelationData {
  adherenceRate: number
  healthImprovement: number
  patientId: string
  patientName: string
}

export interface PatientLoadData {
  value: number
  name: string
  fill: string
}

export type DoctorFilterPeriod = "24h" | "7d" | "30d" | "90d"
export type PatientFilter = "all" | "critical" | "stable" | "improving"
