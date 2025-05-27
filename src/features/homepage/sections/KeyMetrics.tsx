import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Heart, AlertTriangle } from "lucide-react"

export function KeyMetrics() {
  const metrics = [
    {
      title: "Avg. Sleep Score",
      value: "87",
      unit: "/100",
      icon: Activity,
      trend: "+5% from last week",
      color: "text-green-600",
    },
    {
      title: "Live Heart Rate",
      value: "68",
      unit: "BPM",
      icon: Heart,
      trend: "Normal range",
      color: "text-blue-600",
    },
    {
      title: "Alerts Today",
      value: "2",
      unit: "alerts",
      icon: AlertTriangle,
      trend: "Temperature & Movement",
      color: "text-orange-600",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Real-Time Health Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Monitor your sleep quality and vital signs with precision IoT sensors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div
                  className={`mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4 ${metric.color}`}
                >
                  <metric.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg text-gray-600">{metric.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2">
                  {metric.value}
                  <span className="text-lg text-gray-500 ml-1">{metric.unit}</span>
                </div>
                <p className="text-sm text-gray-500">{metric.trend}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
