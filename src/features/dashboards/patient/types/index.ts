export interface SleepQualityData {
  date: string
  quality: number
  restlessness?: number
}

export interface TemperatureData {
  time: string
  temperature: number
  optimalMin?: number
  optimalMax?: number
}

export interface HeartRateDistributionData {
  range: string
  minutes: number
  isHealthy: boolean
}

export interface SleepStagesData {
  name: string
  value: number
  fill: string
}

export interface MovementData {
  time: string
  intensity: number
  duration: number
}

export interface SleepDurationData {
  day: string
  actual: number
  recommended: number
}

export interface BreathingData {
  time: string
  rate: number
}

export interface SleepScoreRadialData {
  subject: string
  score: number
  fullMark: number
}

export interface EnvironmentData {
  time: string
  temperature: number
  humidity: number
  noise: number
  light: number
}

export interface HealthCorrelationData {
  sleepQuality: number
  healthMetric: number
  date: string
}

export type FilterPeriod = "7d" | "30d" | "90d" | "1y"
export type ChartType = "sleep-quality" | "temperature" | "heart-rate" | "movement"
