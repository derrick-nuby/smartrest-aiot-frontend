import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, MessageCircle, Bell, Clock, Heart, Thermometer } from "lucide-react"

export function AlertsMessaging() {
  const alerts = [
    {
      icon: Heart,
      type: "Heart Rate",
      message: "Elevated heart rate detected during sleep",
      time: "2:34 AM",
      severity: "medium",
      status: "active",
    },
    {
      icon: Thermometer,
      type: "Temperature",
      message: "Room temperature above optimal range",
      time: "1:15 AM",
      severity: "low",
      status: "resolved",
    },
    {
      icon: AlertTriangle,
      type: "Movement",
      message: "Unusual movement patterns detected",
      time: "12:45 AM",
      severity: "high",
      status: "active",
    },
  ]

  const messages = [
    {
      sender: "Dr. Smith",
      message: "Your sleep quality has improved significantly this week. Keep up the good work!",
      time: "9:30 AM",
      unread: false,
    },
    {
      sender: "SmartRest AI",
      message: "Recommendation: Try reducing screen time 1 hour before bed",
      time: "8:00 AM",
      unread: true,
    },
    {
      sender: "Sleep Coach",
      message: "Your deep sleep increased by 15% this week",
      time: "Yesterday",
      unread: true,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Alerts & Messaging</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with real-time alerts and communicate with your healthcare team
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-5 w-5" />
                Recent Alerts
                <Badge className="ml-auto bg-red-100 text-red-800">3 Active</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {alerts.map((alert, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-white border">
                  <div
                    className={`p-2 rounded-full ${
                      alert.severity === "high"
                        ? "bg-red-100"
                        : alert.severity === "medium"
                          ? "bg-yellow-100"
                          : "bg-blue-100"
                    }`}
                  >
                    <alert.icon
                      className={`h-4 w-4 ${
                        alert.severity === "high"
                          ? "text-red-600"
                          : alert.severity === "medium"
                            ? "text-yellow-600"
                            : "text-blue-600"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">{alert.type}</span>
                      <div className="flex items-center space-x-2">
                        <Badge variant={alert.status === "active" ? "destructive" : "secondary"} className="text-xs">
                          {alert.status}
                        </Badge>
                        <span className="text-xs text-gray-500 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {alert.time}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{alert.message}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Alerts
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                Messages
                <Badge className="ml-auto bg-blue-100 text-blue-800">2 Unread</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${message.unread ? "bg-blue-50 border-blue-200" : "bg-white"}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">{message.sender}</span>
                    <span className="text-xs text-gray-500">{message.time}</span>
                  </div>
                  <p className="text-sm text-gray-600">{message.message}</p>
                  {message.unread && <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />}
                </div>
              ))}
              <Button variant="outline" className="w-full">
                <MessageCircle className="mr-2 h-4 w-4" />
                Open Chat
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
