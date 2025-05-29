import { z } from "zod";

export enum MessageType {
  ALERT = "alert",
  CHAT = "chat",
  PROMO = "promo",
}

export interface Message {
  message_id: string;
  sender_id: string;
  recipient_id: string;
  title?: string;
  body: string;
  type: MessageType | string;
  is_read: boolean;
  sent_at: string;
  sender?: {
    user_id: string;
    first_name: string;
    last_name: string;
  };
  recipient?: {
    user_id: string;
    first_name: string;
    last_name: string;
  };
}

export interface SendMessageRequest {
  recipient_id: string;
  title?: string;
  body: string;
  type: MessageType | string;
}

export interface SendMessageResponse {
  message: string;
  data: Message;
}

export interface ConversationThread {
  conversation_with: string;
  messages: Message[];
}

export interface Notification {
  message_id: string;
  sender_id: string;
  title?: string;
  body: string;
  type: MessageType | string;
  is_read: boolean;
  sent_at: string;
}

export interface NotificationsResponse {
  notifications: Notification[];
  unread_count: number;
}

export interface AcknowledgeNotificationResponse {
  message: string;
}

// Zod schema for message validation
export const messageSchema = z.object({
  message_id: z.string().optional(),
  sender_id: z.string(),
  recipient_id: z.string(),
  title: z.string().optional(),
  body: z.string().min(1, "Message body is required"),
  type: z.nativeEnum(MessageType).default(MessageType.CHAT),
  is_read: z.boolean().default(false),
  sent_at: z.string().optional(),
});

export type MessageSchema = z.infer<typeof messageSchema>;
