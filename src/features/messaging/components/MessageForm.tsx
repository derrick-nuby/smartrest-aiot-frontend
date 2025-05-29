"use client"
import { useSendMessage } from "../hooks/useMessageHooks"
import { MessageType } from "../types/MessageTypes"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Send } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { sendMessageSchema, type SendMessageFormData } from "../schemas/messageSchemas"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

interface MessageFormProps {
  recipientId: string
  recipientName?: string
}

export const MessageForm = ({ recipientId, recipientName }: MessageFormProps) => {
  const sendMessageMutation = useSendMessage()

  const form = useForm<SendMessageFormData>({
    resolver: zodResolver(sendMessageSchema),
    defaultValues: {
      recipient_id: recipientId,
      title: "",
      body: "",
      type: MessageType.CHAT,
    },
  })

  const onSubmit = (data: SendMessageFormData) => {
    sendMessageMutation.mutate(data, {
      onSuccess: () => {
        form.reset({
          recipient_id: recipientId,
          title: "",
          body: "",
          type: MessageType.CHAT,
        })
      },
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send Message {recipientName ? `to ${recipientName}` : ""}</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter message subject" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Type your message here..." className="min-h-[120px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select message type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={MessageType.CHAT}>Chat</SelectItem>
                      <SelectItem value={MessageType.ALERT}>Alert</SelectItem>
                      <SelectItem value={MessageType.PROMO}>Promotional</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={sendMessageMutation.isPending}>
              {sendMessageMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
