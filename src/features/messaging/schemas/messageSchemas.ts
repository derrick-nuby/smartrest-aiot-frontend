import { z } from "zod";
import { MessageType } from "../types/MessageTypes";

// Schema for sending a message
export const sendMessageSchema = z.object({
  recipient_id: z.string().min(1, "Recipient is required"),
  title: z.string().optional(),
  body: z.string().min(1, "Message body is required").max(1000, "Message body cannot exceed 1000 characters"),
  type: z.nativeEnum(MessageType),
});

export type SendMessageFormData = z.infer<typeof sendMessageSchema>;
