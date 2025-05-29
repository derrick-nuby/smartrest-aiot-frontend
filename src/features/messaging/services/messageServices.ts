import axiosInstance from "@/lib/axiosConfig"
import { handleAxiosError } from "@/lib/errorHandler"
import type {
  SendMessageRequest,
  SendMessageResponse,
  ConversationThread,
  NotificationsResponse,
  AcknowledgeNotificationResponse,
} from "../types/MessageTypes"

// Send a message
export const sendMessage = async (data: SendMessageRequest) => {
  try {
    const response = await axiosInstance.post("/messages", data)
    return response.data as SendMessageResponse
  } catch (error) {
    throw new Error(handleAxiosError(error, "Failed to send message"))
  }
}

// Get conversation thread
export const getConversation = async (conversationId: string) => {
  try {
    const response = await axiosInstance.get(`/messages/${conversationId}`)
    return response.data as ConversationThread
  } catch (error) {
    throw new Error(handleAxiosError(error, "Failed to fetch conversation"))
  }
}

// Get notifications
export const getNotifications = async () => {
  try {
    const response = await axiosInstance.get("/notifications")
    return response.data as NotificationsResponse
  } catch (error) {
    throw new Error(handleAxiosError(error, "Failed to fetch notifications"))
  }
}

// Acknowledge notification
export const acknowledgeNotification = async (notificationId: string) => {
  try {
    const response = await axiosInstance.post(`/notifications/${notificationId}/acknowledge`)
    return response.data as AcknowledgeNotificationResponse
  } catch (error) {
    throw new Error(handleAxiosError(error, "Failed to acknowledge notification"))
  }
}
