import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Thermometer, Activity, Waves } from "lucide-react"

export function LiveDemo() {
  const vitals = [
    {
      icon: Heart,
      label: "Heart Rate",
      value: "68",
      unit: "BPM",
      status: "Normal",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Activity,
      label: "Breathing Rate",
      value: "16",
      unit: "/min",
      status: "Stable",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Thermometer,
      label: "Body Temperature",
      value: "98.6",
      unit: "°F",
      status: "Optimal",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: Waves,
      label: "Sleep Stage",
      value: "REM",
      unit: "",
      status: "Deep Sleep",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Vitals Dashboard</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Real-time monitoring of your vital signs while you sleep</p>
          <Badge variant="outline" className="mt-4 text-green-600 border-green-600">
            🟢 Live Data
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {vitals.map((vital, index) => (
            <Card key={index} className={`${vital.bgColor} border-0 hover:shadow-lg transition-shadow`}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <vital.icon className={`h-6 w-6 ${vital.color}`} />
                  <Badge variant="secondary" className="text-xs">
                    {vital.status}
                  </Badge>
                </div>
                <CardTitle className="text-sm font-medium text-gray-600">{vital.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-1">
                  {vital.value}
                  <span className="text-lg text-gray-500 ml-1">{vital.unit}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`h-2 rounded-full ${vital.color.replace("text-", "bg-")} w-3/4`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">Data updates every 30 seconds • Last updated: 2 minutes ago</p>
        </div>
      </div>
    </section>
  )
}
