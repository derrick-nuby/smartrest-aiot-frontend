import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Wifi, Battery, Zap } from "lucide-react"

export function TechnicalSpecs() {
  const specs = [
    {
      category: "Sensors",
      items: [
        { name: "Heart Rate Monitor", value: "PPG Sensor", rate: "1000 Hz" },
        { name: "Temperature Sensor", value: "±0.1°C Accuracy", rate: "10 Hz" },
        { name: "Accelerometer", value: "3-Axis", rate: "100 Hz" },
        { name: "Pressure Sensor", value: "Piezoelectric", rate: "50 Hz" },
      ],
    },
    {
      category: "Connectivity",
      items: [
        { name: "WiFi", value: "802.11 b/g/n", rate: "2.4 GHz" },
        { name: "Bluetooth", value: "5.0 LE", rate: "Low Energy" },
        { name: "Cellular", value: "4G LTE", rate: "Optional" },
        { name: "Range", value: "100m", rate: "Line of sight" },
      ],
    },
    {
      category: "Power & Performance",
      items: [
        { name: "Battery Life", value: "30 days", rate: "Typical use" },
        { name: "Charging", value: "Wireless", rate: "2 hours" },
        { name: "Processor", value: "ARM Cortex-M4", rate: "80 MHz" },
        { name: "Memory", value: "512 KB", rate: "Flash storage" },
      ],
    },
    {
      category: "Data & Security",
      items: [
        { name: "Encryption", value: "AES-256", rate: "End-to-end" },
        { name: "Data Rate", value: "1 MB/day", rate: "Per sensor" },
        { name: "Cloud Storage", value: "Unlimited", rate: "Encrypted" },
        { name: "API Rate Limit", value: "1000 req/min", rate: "Per device" },
      ],
    },
  ]

  const categoryIcons = {
    Sensors: Zap,
    Connectivity: Wifi,
    "Power & Performance": Battery,
    "Data & Security": Cpu,
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Specifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enterprise-grade hardware and software specifications for reliable sleep monitoring
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {specs.map((spec, index) => {
            const IconComponent = categoryIcons[spec.category as keyof typeof categoryIcons]
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <IconComponent className="mr-3 h-6 w-6 text-blue-600" />
                    {spec.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {spec.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <div>
                          <div className="font-medium text-sm">{item.name}</div>
                          <div className="text-xs text-gray-500">{item.rate}</div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {item.value}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Compliance & Certifications</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline">FDA Class II</Badge>
                <Badge variant="outline">CE Marked</Badge>
                <Badge variant="outline">FCC Certified</Badge>
                <Badge variant="outline">HIPAA Compliant</Badge>
                <Badge variant="outline">ISO 27001</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
