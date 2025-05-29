import { useQuery } from "@tanstack/react-query"
import { getSleepReport, getHealthSummary } from "../services/analyticsServices"
import type { SleepReportQueryParams, HealthSummaryQueryParams } from "../types/AnalyticsTypes"

// Hook to fetch sleep report
export const useSleepReport = (params: SleepReportQueryParams) => {
  return useQuery({
    queryKey: ["sleepReport", params],
    queryFn: () => getSleepReport(params),
    enabled: !!params.date,
  })
}

// Hook to fetch health summary
export const useHealthSummary = (params: HealthSummaryQueryParams) => {
  return useQuery({
    queryKey: ["healthSummary", params],
    queryFn: () => getHealthSummary(params),
    enabled: !!params.days && params.days > 0,
  })
}
