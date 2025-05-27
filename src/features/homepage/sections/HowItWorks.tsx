import { Card, CardContent } from "@/components/ui/card"
import { Wifi, BarChart3, Moon } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Wifi,
      title: "Attach Sensor",
      description: "Simply place our wireless IoT sensors on your mattress. No complex setup required.",
      step: "01",
    },
    {
      icon: BarChart3,
      title: "Analyze Data",
      description: "Our AI algorithms process your sleep patterns, heart rate, and temperature in real-time.",
      step: "02",
    },
    {
      icon: Moon,
      title: "Improve Sleep",
      description: "Receive personalized recommendations and automated adjustments for optimal rest.",
      step: "03",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How SmartRest Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Three simple steps to revolutionize your sleep experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-50 to-indigo-50"
            >
              <CardContent className="p-8">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
