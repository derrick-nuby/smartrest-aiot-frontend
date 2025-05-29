export interface SystemUsageData {
  timestamp: string
  activeUsers: number
  apiCalls: number
  dataPoints: number
  errorRate?: number
}

export interface UserRoleData {
  name: string
  value: number
  fill: string
}

export interface ServerPerformanceData {
  time: string
  cpu: number
  memory: number
  network: number
  disk?: number
}

export interface DeviceStatusData {
  category: string
  active: number
  maintenance: number
  error: number
  offline: number
}

export interface DataVolumeData {
  month: string
  sensorData: number
  userGeneratedData: number
  analyticsData: number
  totalGrowth: number
}

export interface ErrorRateData {
  time: string
  rate: number
  threshold: number
}

export interface ApiPerformanceData {
  endpoint: string
  responseTime: number
  callVolume: number
  errorRate: number
}

export interface AdoptionFunnelData {
  stage: string
  count: number
  fill: string
}

export interface GeographicData {
  name: string
  size: number
  color?: string
  children?: Array<{ name: string; size: number; color?: string }>
}

export interface SystemHealthData {
  metric: string
  score: number
  acceptableThreshold: number
}

export type AdminFilterPeriod = "1h" | "24h" | "7d" | "30d"
export type SystemFilter = "all" | "critical" | "warnings" | "healthy"
