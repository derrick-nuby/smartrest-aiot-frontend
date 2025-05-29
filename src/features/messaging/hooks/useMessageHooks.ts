import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { sendMessage, getConversation, getNotifications, acknowledgeNotification } from "../services/messageServices"
import type { SendMessageRequest } from "../types/MessageTypes"
import toast from "react-hot-toast"

// Hook to send a message
export const useSendMessage = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: SendMessageRequest) => sendMessage(data),
    onSuccess: () => {
      toast.success("Message sent successfully")
      queryClient.invalidateQueries({ queryKey: ["conversations"] })
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to send message")
    },
  })
}

// Hook to fetch a conversation thread
export const useConversation = (conversationId: string) => {
  return useQuery({
    queryKey: ["conversation", conversationId],
    queryFn: () => getConversation(conversationId),
    enabled: !!conversationId,
    refetchInterval: 10000, // Refetch every 10 seconds
  })
}

// Hook to fetch notifications
export const useNotifications = () => {
  return useQuery({
    queryKey: ["notifications"],
    queryFn: getNotifications,
    refetchInterval: 30000, // Refetch every 30 seconds
  })
}

// Hook to acknowledge a notification
export const useAcknowledgeNotification = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (notificationId: string) => acknowledgeNotification(notificationId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] })
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to acknowledge notification")
    },
  })
}
