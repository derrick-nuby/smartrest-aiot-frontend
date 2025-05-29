import axiosInstance from "@/lib/axiosConfig"
import { handleAxiosError } from "@/lib/errorHandler"
import type {
  SleepReport,
  HealthSummary,
  SleepReportQueryParams,
  HealthSummaryQueryParams,
} from "../types/AnalyticsTypes"

// Get sleep report
export const getSleepReport = async (params: SleepReportQueryParams) => {
  try {
    const response = await axiosInstance.get("/analytics/sleep-report", { params })
    return response.data as SleepReport
  } catch (error) {
    throw new Error(handleAxiosError(error, "Failed to fetch sleep report"))
  }
}

// Get health summary
export const getHealthSummary = async (params: HealthSummaryQueryParams) => {
  try {
    const response = await axiosInstance.get("/analytics/health-summary", { params })
    return response.data as HealthSummary
  } catch (error) {
    throw new Error(handleAxiosError(error, "Failed to fetch health summary"))
  }
}
