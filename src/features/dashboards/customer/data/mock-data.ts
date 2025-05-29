import type {
  SleepTrendData,
  MattressPerformanceData,
  TemperatureControlData,
  UsagePatternData,
  FeatureUsageData,
  ImprovementData,
  BatteryData,
  ComfortSettingsData,
  ProductHealthData,
  EnergyData,
  CustomerFilterPeriod,
  FeatureFilter,
} from "../types"

export const generateSleepTrendData = (period: CustomerFilterPeriod): SleepTrendData[] => {
  const data: SleepTrendData[] = []
  let days: number

  switch (period) {
    case "7d":
      days = 7
      break
    case "30d":
      days = 30
      break
    case "90d":
      days = 90
      break
    case "1y":
      days = 365
      break
    default:
      days = 30
  }

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date()
    date.setDate(date.getDate() - i)

    data.push({
      date: date.toISOString().split("T")[0],
      quality: Math.floor(Math.random() * 30) + 70, // 70-100 range
      average: 82, // Average benchmark
    })
  }

  return data
}

export const mattressPerformanceData: MattressPerformanceData[] = [
  { aspect: "Support", score: 9.2, benchmark: 8.5 },
  { aspect: "Temperature Control", score: 8.8, benchmark: 8.0 },
  { aspect: "Motion Isolation", score: 9.5, benchmark: 8.2 },
  { aspect: "Durability", score: 9.0, benchmark: 8.3 },
  { aspect: "Comfort", score: 9.3, benchmark: 8.4 },
  { aspect: "Edge Support", score: 8.5, benchmark: 7.8 },
]

export const generateTemperatureControlData = (period: CustomerFilterPeriod): TemperatureControlData[] => {
  const data: TemperatureControlData[] = []
  let hours: number

  switch (period) {
    case "7d":
      hours = 168
      break
    case "30d":
      hours = 720
      break
    case "90d":
      hours = 2160
      break
    case "1y":
      hours = 8760
      break
    default:
      hours = 168
  }

  const sampleHours = Math.min(hours, 168) // Limit to 1 week for performance

  for (let i = 0; i < sampleHours; i++) {
    const time = new Date()
    time.setHours(time.getHours() - (sampleHours - i))

    const requested = 20 + Math.random() * 6 // 20-26°C

    data.push({
      time: time.toISOString(),
      requested,
      actual: requested + (Math.random() - 0.5) * 2, // ±1°C variance
      room: 18 + Math.random() * 8, // 18-26°C room temp
    })
  }

  return data
}

export const generateUsagePatternData = (period: CustomerFilterPeriod): UsagePatternData[] => {
  const data: UsagePatternData[] = []
  let days: number

  switch (period) {
    case "7d":
      days = 7
      break
    case "30d":
      days = 30
      break
    case "90d":
      days = 90
      break
    case "1y":
      days = 365
      break
    default:
      days = 30
  }

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date()
    date.setDate(date.getDate() - i)

    data.push({
      date: date.toISOString().split("T")[0],
      hoursUsed: Math.floor(Math.random() * 4) + 6, // 6-10 hours
    })
  }

  return data
}

export const generateFeatureUsageData = (filter: FeatureFilter): FeatureUsageData[] => {
  const allFeatures = [
    { name: "Temperature Control", value: 45 },
    { name: "Firmness Adjustment", value: 32 },
    { name: "Position Control", value: 28 },
    { name: "Massage Function", value: 18 },
    { name: "Sleep Tracking", value: 85 },
    { name: "Smart Alarm", value: 22 },
    { name: "Ambient Lighting", value: 15 },
  ]

  switch (filter) {
    case "temperature":
      return allFeatures.filter((f) => f.name.includes("Temperature"))
    case "firmness":
      return allFeatures.filter((f) => f.name.includes("Firmness"))
    case "position":
      return allFeatures.filter((f) => f.name.includes("Position"))
    case "massage":
      return allFeatures.filter((f) => f.name.includes("Massage"))
    default:
      return allFeatures
  }
}

export const improvementData: ImprovementData[] = [
  { week: 1, quality: 72, improvement: 0 },
  { week: 2, quality: 75, improvement: 4.2 },
  { week: 4, quality: 78, improvement: 8.3 },
  { week: 6, quality: 82, improvement: 13.9 },
  { week: 8, quality: 85, improvement: 18.1 },
  { week: 10, quality: 87, improvement: 20.8 },
  { week: 12, quality: 89, improvement: 23.6 },
  { week: 16, quality: 91, improvement: 26.4 },
  { week: 20, quality: 92, improvement: 27.8 },
  { week: 24, quality: 94, improvement: 30.6 },
]

export const batteryData: BatteryData[] = [
  { date: "2024-01-01", percentage: 100, expectedLevel: 100 },
  { date: "2024-01-08", percentage: 92, expectedLevel: 95 },
  { date: "2024-01-15", percentage: 88, expectedLevel: 90 },
  { date: "2024-01-22", percentage: 85, expectedLevel: 85 },
  { date: "2024-01-29", percentage: 82, expectedLevel: 80 },
  { date: "2024-02-05", percentage: 78, expectedLevel: 75 },
  { date: "2024-02-12", percentage: 75, expectedLevel: 70 },
  { date: "2024-02-19", percentage: 72, expectedLevel: 65 },
]

export const comfortSettingsData: ComfortSettingsData[] = [
  { month: "Jan", firmness: 7, temperature: 22, angle: 15 },
  { month: "Feb", firmness: 6, temperature: 21, angle: 12 },
  { month: "Mar", firmness: 7, temperature: 20, angle: 10 },
  { month: "Apr", firmness: 8, temperature: 19, angle: 8 },
  { month: "May", firmness: 7, temperature: 18, angle: 5 },
  { month: "Jun", firmness: 6, temperature: 17, angle: 0 },
]

export const productHealthData: ProductHealthData[] = [
  { name: "Excellent", value: 85, color: "#00C851" },
  { name: "Good", value: 10, color: "#FFBB33" },
  { name: "Warning", value: 5, color: "#FF8800" },
]

export const energyData: EnergyData[] = [
  { date: "Jan", consumption: 12.5, average: 15.0, eco: 8.5 },
  { date: "Feb", consumption: 11.8, average: 15.0, eco: 8.5 },
  { date: "Mar", consumption: 13.2, average: 15.0, eco: 8.5 },
  { date: "Apr", consumption: 10.9, average: 15.0, eco: 8.5 },
  { date: "May", consumption: 9.8, average: 15.0, eco: 8.5 },
  { date: "Jun", consumption: 8.5, average: 15.0, eco: 8.5 },
]
