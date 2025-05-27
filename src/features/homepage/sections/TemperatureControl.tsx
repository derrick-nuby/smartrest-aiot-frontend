import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Thermometer, Snowflake, Flame, Settings } from "lucide-react"

export function TemperatureControl() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Temperature Control</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Maintain optimal sleep temperature with AI-powered climate control
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0">
            <CardHeader>
              <CardTitle className="flex items-center justify-center text-2xl">
                <Thermometer className="mr-3 h-6 w-6 text-blue-600" />
                Current Temperature: 72°F
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-2">72°F</div>
                <p className="text-gray-600">Optimal sleep temperature detected</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Snowflake className="h-5 w-5 text-blue-500" />
                    <span className="text-sm font-medium">Cool</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">Warm</span>
                    <Flame className="h-5 w-5 text-red-500" />
                  </div>
                </div>

                <Slider value={[72]} max={85} min={60} step={1} className="w-full" disabled />

                <div className="flex justify-between text-xs text-gray-500">
                  <span>60°F</span>
                  <span>85°F</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-white/50">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">68°F</div>
                    <div className="text-sm text-gray-600">Sleep Onset</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/50">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">65°F</div>
                    <div className="text-sm text-gray-600">Deep Sleep</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/50">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600">70°F</div>
                    <div className="text-sm text-gray-600">Wake Up</div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button variant="outline" className="mr-4">
                  <Settings className="mr-2 h-4 w-4" />
                  Auto Mode
                </Button>
                <Button>Manual Override</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
