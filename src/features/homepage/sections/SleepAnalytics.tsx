import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { TrendingUp, Clock, Moon, Activity } from "lucide-react";

export function SleepAnalytics() {
  const stats = [
    {
      icon: Clock,
      label: "Total Sleep Time",
      value: "7h 42m",
      change: "+23m vs avg",
      trend: "up",
    },
    {
      icon: Moon,
      label: "Deep Sleep",
      value: "2h 15m",
      change: "+12m vs avg",
      trend: "up",
    },
    {
      icon: Activity,
      label: "REM Sleep",
      value: "1h 48m",
      change: "-5m vs avg",
      trend: "down",
    },
    {
      icon: TrendingUp,
      label: "Sleep Efficiency",
      value: "89%",
      change: "+3% vs avg",
      trend: "up",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sleep Analytics Dashboard</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive analysis of your sleep patterns with AI-powered insights
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Sleep Pattern Analysis
                    <Badge variant="outline">Last 7 Days</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="https://images.pexels.com/photos/6203473/pexels-photo-6203473.jpeg"
                    alt="Sleep pattern chart showing sleep stages over time"
                    width={600}
                    height={300}
                    className="w-full rounded-lg"
                  />
                  <div className="mt-4 flex justify-center space-x-6 text-sm">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2" />
                      Deep Sleep
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2" />
                      REM Sleep
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2" />
                      Light Sleep
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gray-500 rounded-full mr-2" />
                      Awake
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <stat.icon className="h-5 w-5 text-gray-600" />
                      <Badge
                        variant={stat.trend === "up" ? "default" : "secondary"}
                        className={stat.trend === "up" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                      >
                        {stat.change}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2">AI Sleep Coach Recommendation</h3>
                  <p className="text-gray-600">
                    Based on your sleep patterns, try going to bed 15 minutes earlier to increase deep sleep duration.
                  </p>
                </div>
                <div className="text-4xl">🤖</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
