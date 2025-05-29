"use client"

import { useNotifications, useAcknowledgeNotification } from "../hooks/useMessageHooks"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bell } from "lucide-react"
import { cn } from "@/lib/utils"

export const NotificationBadge = () => {
  const { data, isLoading } = useNotifications()
  const acknowledgeMutation = useAcknowledgeNotification()

  const unreadCount = data?.unread_count || 0

  const handleAcknowledge = (notificationId: string) => {
    acknowledgeMutation.mutate(notificationId)
  }

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleString()
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground flex items-center justify-center translate-x-1/3 -translate-y-1/3">
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium">Notifications</h4>
          {unreadCount > 0 && <span className="text-xs bg-muted px-2 py-0.5 rounded-full">{unreadCount} unread</span>}
        </div>

        <ScrollArea className="h-[300px]">
          {isLoading ? (
            <div className="text-center p-4">
              <p className="text-sm text-muted-foreground">Loading notifications...</p>
            </div>
          ) : !data?.notifications.length ? (
            <div className="text-center p-4">
              <p className="text-sm text-muted-foreground">No notifications</p>
            </div>
          ) : (
            <div className="space-y-2">
              {data.notifications.map((notification) => (
                <div
                  key={notification.message_id}
                  className={cn("p-3 rounded-md cursor-pointer hover:bg-muted", !notification.is_read && "bg-muted/50")}
                  onClick={() => handleAcknowledge(notification.message_id)}
                >
                  {notification.title && <p className="font-medium text-sm">{notification.title}</p>}
                  <p className="text-sm line-clamp-2">{notification.body}</p>
                  <p className="text-xs text-muted-foreground mt-1">{formatTime(notification.sent_at)}</p>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  )
}
