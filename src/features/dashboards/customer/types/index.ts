export interface SleepTrendData {
  date: string
  quality: number
  average?: number
}

export interface MattressPerformanceData {
  aspect: string
  score: number
  benchmark: number
}

export interface TemperatureControlData {
  time: string
  requested: number
  actual: number
  room: number
}

export interface UsagePatternData {
  date: string
  hoursUsed: number
}

export interface FeatureUsageData {
  name: string
  value: number
}

export interface ImprovementData {
  week: number
  quality: number
  improvement: number
}

export interface BatteryData {
  date: string
  percentage: number
  expectedLevel: number
}

export interface ComfortSettingsData {
  month: string
  firmness: number
  temperature: number
  angle?: number
}

export interface ProductHealthData {
  name: string
  value: number
  color: string
}

export interface EnergyData {
  date: string
  consumption: number
  average: number
  eco: number
}

export type CustomerFilterPeriod = "7d" | "30d" | "90d" | "1y"
export type FeatureFilter = "all" | "temperature" | "firmness" | "position" | "massage"
