import type {
  SystemUsageData,
  UserRoleData,
  ServerPerformanceData,
  DeviceStatusData,
  DataVolumeData,
  ErrorRateData,
  ApiPerformanceData,
  AdoptionFunnelData,
  GeographicData,
  SystemHealthData,
  AdminFilterPeriod,
} from "../types"

export const generateSystemUsageData = (period: AdminFilterPeriod): SystemUsageData[] => {
  const data: SystemUsageData[] = []
  let points: number

  switch (period) {
    case "1h":
      points = 60
      break // Every minute
    case "24h":
      points = 24
      break // Every hour
    case "7d":
      points = 168
      break // Every hour
    case "30d":
      points = 720
      break // Every hour
    default:
      points = 24
  }

  for (let i = 0; i < points; i++) {
    const time = new Date()
    const interval = period === "1h" ? 1 : 60 // minutes
    time.setMinutes(time.getMinutes() - (points - i) * interval)

    data.push({
      timestamp: time.toISOString(),
      activeUsers: Math.floor(Math.random() * 500) + 100,
      apiCalls: Math.floor(Math.random() * 10000) + 2000,
      dataPoints: Math.floor(Math.random() * 50000) + 10000,
      errorRate: Math.random() * 5, // 0-5%
    })
  }

  return data
}

export const userRoleData: UserRoleData[] = [
  { name: "Patients", value: 1250, fill: "#0088FE" },
  { name: "Customers", value: 890, fill: "#00C49F" },
  { name: "Doctors", value: 145, fill: "#FFBB28" },
  { name: "Admins", value: 25, fill: "#FF8042" },
]

export const generateServerPerformanceData = (period: AdminFilterPeriod): ServerPerformanceData[] => {
  const data: ServerPerformanceData[] = []
  let points: number

  switch (period) {
    case "1h":
      points = 60
      break
    case "24h":
      points = 144
      break // Every 10 minutes
    case "7d":
      points = 168
      break // Every hour
    case "30d":
      points = 720
      break // Every hour
    default:
      points = 144
  }

  for (let i = 0; i < points; i++) {
    const time = new Date()
    const interval = period === "1h" ? 1 : period === "24h" ? 10 : 60
    time.setMinutes(time.getMinutes() - (points - i) * interval)

    data.push({
      time: time.toISOString(),
      cpu: Math.floor(Math.random() * 40) + 30, // 30-70%
      memory: Math.floor(Math.random() * 30) + 50, // 50-80%
      network: Math.floor(Math.random() * 500) + 100, // 100-600 Mbps
      disk: Math.floor(Math.random() * 20) + 60, // 60-80%
    })
  }

  return data
}

export const deviceStatusData: DeviceStatusData[] = [
  { category: "Smart Mattresses", active: 1850, maintenance: 45, error: 12, offline: 8 },
  { category: "Sensors", active: 5200, maintenance: 120, error: 35, offline: 25 },
  { category: "Controllers", active: 1820, maintenance: 38, error: 8, offline: 4 },
  { category: "Gateways", active: 185, maintenance: 5, error: 2, offline: 1 },
]

export const dataVolumeData: DataVolumeData[] = [
  { month: "Jan", sensorData: 125, userGeneratedData: 45, analyticsData: 32, totalGrowth: 15 },
  { month: "Feb", sensorData: 142, userGeneratedData: 52, analyticsData: 38, totalGrowth: 18 },
  { month: "Mar", sensorData: 158, userGeneratedData: 58, analyticsData: 42, totalGrowth: 22 },
  { month: "Apr", sensorData: 175, userGeneratedData: 65, analyticsData: 48, totalGrowth: 25 },
  { month: "May", sensorData: 192, userGeneratedData: 72, analyticsData: 55, totalGrowth: 28 },
  { month: "Jun", sensorData: 210, userGeneratedData: 78, analyticsData: 62, totalGrowth: 32 },
]

export const generateErrorRateData = (period: AdminFilterPeriod): ErrorRateData[] => {
  const data: ErrorRateData[] = []
  let points: number

  switch (period) {
    case "1h":
      points = 60
      break
    case "24h":
      points = 24
      break
    case "7d":
      points = 168
      break
    case "30d":
      points = 720
      break
    default:
      points = 24
  }

  for (let i = 0; i < points; i++) {
    const time = new Date()
    const interval = period === "1h" ? 1 : 60
    time.setMinutes(time.getMinutes() - (points - i) * interval)

    data.push({
      time: time.toISOString(),
      rate: Math.random() * 8, // 0-8% error rate
      threshold: 5, // 5% threshold
    })
  }

  return data
}

export const apiPerformanceData: ApiPerformanceData[] = [
  { endpoint: "/api/patients", responseTime: 125, callVolume: 1250, errorRate: 0.5 },
  { endpoint: "/api/vitals", responseTime: 89, callVolume: 3200, errorRate: 1.2 },
  { endpoint: "/api/devices", responseTime: 156, callVolume: 890, errorRate: 0.8 },
  { endpoint: "/api/alerts", responseTime: 78, callVolume: 450, errorRate: 2.1 },
  { endpoint: "/api/reports", responseTime: 234, callVolume: 320, errorRate: 1.5 },
  { endpoint: "/api/auth", responseTime: 45, callVolume: 2100, errorRate: 0.3 },
  { endpoint: "/api/settings", responseTime: 112, callVolume: 680, errorRate: 0.9 },
]

export const adoptionFunnelData: AdoptionFunnelData[] = [
  { stage: "Registration", count: 2500, fill: "#0088FE" },
  { stage: "Profile Complete", count: 2100, fill: "#00C49F" },
  { stage: "Device Setup", count: 1850, fill: "#FFBB28" },
  { stage: "First Use", count: 1650, fill: "#FF8042" },
  { stage: "Active User", count: 1420, fill: "#8884D8" },
]

export const geographicData: GeographicData[] = [
  {
    name: "North America",
    size: 1250,
    color: "#0088FE",
    children: [
      { name: "USA", size: 980, color: "#0088FE" },
      { name: "Canada", size: 270, color: "#0066CC" },
    ],
  },
  {
    name: "Europe",
    size: 890,
    color: "#00C49F",
    children: [
      { name: "Germany", size: 320, color: "#00C49F" },
      { name: "UK", size: 280, color: "#00A080" },
      { name: "France", size: 290, color: "#008060" },
    ],
  },
  {
    name: "Asia Pacific",
    size: 650,
    color: "#FFBB28",
    children: [
      { name: "Japan", size: 280, color: "#FFBB28" },
      { name: "Australia", size: 220, color: "#DD9900" },
      { name: "Singapore", size: 150, color: "#BB7700" },
    ],
  },
]

export const systemHealthData: SystemHealthData[] = [
  { metric: "Uptime", score: 99.8, acceptableThreshold: 99.5 },
  { metric: "Response Time", score: 95, acceptableThreshold: 90 },
  { metric: "Error Rate", score: 98, acceptableThreshold: 95 },
  { metric: "Throughput", score: 92, acceptableThreshold: 85 },
  { metric: "Security", score: 96, acceptableThreshold: 95 },
  { metric: "Data Integrity", score: 99, acceptableThreshold: 98 },
]
