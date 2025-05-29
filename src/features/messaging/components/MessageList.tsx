"use client"
import { useConversation } from "../hooks/useMessageHooks"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface MessageListProps {
  conversationId: string
  currentUserId: string
}

export const MessageList = ({ conversationId, currentUserId }: MessageListProps) => {
  const { data, isLoading, isError } = useConversation(conversationId)

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
  }

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="text-center p-8">
        <p className="text-destructive">Failed to load conversation. Please try again later.</p>
      </div>
    )
  }

  if (!data?.messages.length) {
    return (
      <div className="text-center p-8">
        <p className="text-muted-foreground">No messages in this conversation yet.</p>
      </div>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Conversation</CardTitle>
        <CardDescription>
          {data.messages[0].sender_id === currentUserId
            ? `With ${data.messages[0].recipient?.first_name} ${data.messages[0].recipient?.last_name}`
            : `With ${data.messages[0].sender?.first_name} ${data.messages[0].sender?.last_name}`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {data.messages.map((message) => {
              const isCurrentUser = message.sender_id === currentUserId
              const sender = isCurrentUser ? message.sender : message.recipient

              return (
                <div key={message.message_id} className={cn("flex", isCurrentUser ? "justify-end" : "justify-start")}>
                  <div className="flex gap-2 max-w-[80%]">
                    {!isCurrentUser && (
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt="Avatar" />
                        <AvatarFallback>
                          {sender ? getInitials(sender.first_name, sender.last_name) : "??"}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <div
                        className={cn(
                          "rounded-lg p-3",
                          isCurrentUser ? "bg-primary text-primary-foreground" : "bg-muted",
                        )}
                      >
                        {message.title && <p className="font-medium mb-1">{message.title}</p>}
                        <p className="text-sm">{message.body}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{formatTime(message.sent_at)}</p>
                    </div>
                    {isCurrentUser && (
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt="Avatar" />
                        <AvatarFallback>
                          {sender ? getInitials(sender.first_name, sender.last_name) : "??"}
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
