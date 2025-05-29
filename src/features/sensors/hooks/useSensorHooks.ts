import { useMutation, useQuery } from "@tanstack/react-query"
import { getHistoricalSensorData, getLatestSensorReadings, storeSensorReadings } from "../services/sensorServices"
import type { SensorDataQueryParams, SensorReadingBatch } from "../types/SensorTypes"
import toast from "react-hot-toast"

// Hook to fetch latest sensor readings
export const useLatestSensorReadings = (patientId?: string) => {
  return useQuery({
    queryKey: ["latestSensorReadings", patientId],
    queryFn: () => getLatestSensorReadings(patientId),
    refetchInterval: 30000, // Refetch every 30 seconds
    enabled: !!patientId,
  })
}

// Hook to fetch historical sensor data
export const useHistoricalSensorData = (params: SensorDataQueryParams) => {
  return useQuery({
    queryKey: ["historicalSensorData", params],
    queryFn: () => getHistoricalSensorData(params),
    enabled: !!params.patient_id && !!params.from && !!params.to,
  })
}

// Hook to store sensor readings
export const useStoreSensorReadings = () => {
  return useMutation({
    mutationFn: (data: SensorReadingBatch) => storeSensorReadings(data),
    onSuccess: (data) => {
      toast.success(`Successfully stored ${data.readings_count} sensor readings`)
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to store sensor readings")
    },
  })
}
