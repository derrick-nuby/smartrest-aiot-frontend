import axiosInstance from "@/lib/axiosConfig"
import { handleAxiosError } from "@/lib/errorHandler"
import type {
  SensorReadingBatch,
  StoreSensorReadingsResponse,
  LatestSensorReadings,
  HistoricalSensorData,
  SensorDataQueryParams,
} from "../types/SensorTypes"

// Store sensor readings
export const storeSensorReadings = async (data: SensorReadingBatch) => {
  try {
    const response = await axiosInstance.post("/sensors/data", data)
    return response.data as StoreSensorReadingsResponse
  } catch (error) {
    throw new Error(handleAxiosError(error, "Failed to store sensor readings"))
  }
}

// Get latest sensor readings
export const getLatestSensorReadings = async (patientId?: string) => {
  try {
    const params = patientId ? { patient_id: patientId } : {}
    const response = await axiosInstance.get("/sensors/latest", { params })
    return response.data as LatestSensorReadings
  } catch (error) {
    throw new Error(handleAxiosError(error, "Failed to fetch latest sensor readings"))
  }
}

// Get historical sensor data
export const getHistoricalSensorData = async (params: SensorDataQueryParams) => {
  try {
    const response = await axiosInstance.get("/sensors/history", { params })
    return response.data as HistoricalSensorData
  } catch (error) {
    throw new Error(handleAxiosError(error, "Failed to fetch historical sensor data"))
  }
}
