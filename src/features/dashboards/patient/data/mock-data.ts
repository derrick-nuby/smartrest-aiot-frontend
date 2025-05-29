import type {
  SleepQualityData,
  TemperatureData,
  HeartRateDistributionData,
  SleepStagesData,
  MovementData,
  SleepDurationData,
  BreathingData,
  SleepScoreRadialData,
  EnvironmentData,
  HealthCorrelationData,
  FilterPeriod,
} from "../types"

// Generate dates for different periods
const generateDates = (period: FilterPeriod): string[] => {
  const dates: string[] = []
  const now = new Date()
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
    const date = new Date(now)
    date.setDate(date.getDate() - i)
    dates.push(date.toISOString().split("T")[0])
  }

  return dates
}

export const generateSleepQualityData = (period: FilterPeriod): SleepQualityData[] => {
  const dates = generateDates(period)
  return dates.map((date) => ({
    date,
    quality: Math.floor(Math.random() * 40) + 60, // 60-100 range
    restlessness: Math.floor(Math.random() * 30) + 10, // 10-40 range
  }))
}

export const generateTemperatureData = (period: FilterPeriod): TemperatureData[] => {
  const baseData: TemperatureData[] = []
  const hours = period === "7d" ? 24 : period === "30d" ? 168 : 720 // Last day, week, or month of hours

  for (let i = 0; i < hours; i++) {
    const time = new Date()
    time.setHours(time.getHours() - (hours - i))

    baseData.push({
      time: time.toISOString(),
      temperature: 36.5 + (Math.random() - 0.5) * 2, // 35.5-37.5°C
      optimalMin: 36.1,
      optimalMax: 37.2,
    })
  }

  return baseData
}

export const heartRateDistributionData: HeartRateDistributionData[] = [
  { range: "40-50 BPM", minutes: 45, isHealthy: true },
  { range: "50-60 BPM", minutes: 180, isHealthy: true },
  { range: "60-70 BPM", minutes: 240, isHealthy: true },
  { range: "70-80 BPM", minutes: 90, isHealthy: true },
  { range: "80-90 BPM", minutes: 30, isHealthy: false },
  { range: "90+ BPM", minutes: 15, isHealthy: false },
]

export const sleepStagesData: SleepStagesData[] = [
  { name: "Deep Sleep", value: 120, fill: "#0088FE" },
  { name: "Light Sleep", value: 180, fill: "#00C49F" },
  { name: "REM Sleep", value: 90, fill: "#FFBB28" },
  { name: "Awake", value: 30, fill: "#FF8042" },
]

export const generateMovementData = (period: FilterPeriod): MovementData[] => {
  const data: MovementData[] = []
  const points = period === "7d" ? 48 : period === "30d" ? 144 : 288 // Every 30min, 5min, or 2.5min

  for (let i = 0; i < points; i++) {
    const time = new Date()
    time.setMinutes(time.getMinutes() - (points - i) * (period === "7d" ? 30 : period === "30d" ? 5 : 2.5))

    data.push({
      time: time.toISOString(),
      intensity: Math.floor(Math.random() * 10),
      duration: Math.floor(Math.random() * 5) + 1,
    })
  }

  return data
}

export const sleepDurationData: SleepDurationData[] = [
  { day: "Mon", actual: 7.2, recommended: 8 },
  { day: "Tue", actual: 6.8, recommended: 8 },
  { day: "Wed", actual: 8.1, recommended: 8 },
  { day: "Thu", actual: 7.5, recommended: 8 },
  { day: "Fri", actual: 6.9, recommended: 8 },
  { day: "Sat", actual: 8.5, recommended: 8 },
  { day: "Sun", actual: 8.2, recommended: 8 },
]

export const generateBreathingData = (): BreathingData[] => {
  const data: BreathingData[] = []
  const now = new Date()

  for (let i = 0; i < 480; i++) {
    // 8 hours of data, every minute
    const time = new Date(now)
    time.setMinutes(time.getMinutes() - (480 - i))

    data.push({
      time: time.toISOString(),
      rate: Math.floor(Math.random() * 8) + 12, // 12-20 breaths per minute
    })
  }

  return data
}

export const sleepScoreRadialData: SleepScoreRadialData[] = [
  { subject: "Duration", score: 85, fullMark: 100 },
  { subject: "Consistency", score: 78, fullMark: 100 },
  { subject: "Depth", score: 92, fullMark: 100 },
  { subject: "Efficiency", score: 88, fullMark: 100 },
  { subject: "Latency", score: 75, fullMark: 100 },
  { subject: "Restoration", score: 82, fullMark: 100 },
]

export const environmentData: EnvironmentData[] = [
  { time: "22:00", temperature: 22, humidity: 45, noise: 25, light: 5 },
  { time: "23:00", temperature: 21, humidity: 48, noise: 20, light: 2 },
  { time: "00:00", temperature: 20, humidity: 50, noise: 15, light: 0 },
  { time: "01:00", temperature: 19, humidity: 52, noise: 12, light: 0 },
  { time: "02:00", temperature: 19, humidity: 55, noise: 10, light: 0 },
  { time: "03:00", temperature: 18, humidity: 58, noise: 8, light: 0 },
  { time: "04:00", temperature: 18, humidity: 60, noise: 10, light: 0 },
  { time: "05:00", temperature: 19, humidity: 58, noise: 15, light: 5 },
  { time: "06:00", temperature: 20, humidity: 55, noise: 25, light: 20 },
]

export const healthCorrelationData: HealthCorrelationData[] = [
  { sleepQuality: 85, healthMetric: 65, date: "2024-01-01" },
  { sleepQuality: 78, healthMetric: 72, date: "2024-01-02" },
  { sleepQuality: 92, healthMetric: 58, date: "2024-01-03" },
  { sleepQuality: 88, healthMetric: 63, date: "2024-01-04" },
  { sleepQuality: 75, healthMetric: 78, date: "2024-01-05" },
  { sleepQuality: 82, healthMetric: 68, date: "2024-01-06" },
  { sleepQuality: 90, healthMetric: 60, date: "2024-01-07" },
  { sleepQuality: 76, healthMetric: 75, date: "2024-01-08" },
  { sleepQuality: 84, healthMetric: 66, date: "2024-01-09" },
  { sleepQuality: 89, healthMetric: 62, date: "2024-01-10" },
]
