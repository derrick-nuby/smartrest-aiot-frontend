"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SleepTrendChart } from "@/features/dashboards/customer/components/sleep-trend-chart";
import { MattressPerformanceChart } from "@/features/dashboards/customer/components/mattress-performance-chart";
import { TemperatureControlChart } from "@/features/dashboards/customer/components/temperature-control-chart";
import { FeatureUsageChart } from "@/features/dashboards/customer/components/feature-usage-chart";
import {
  improvementData,
  batteryData,
  comfortSettingsData,
  productHealthData,
  energyData,
} from "@/features/dashboards/customer/data/mock-data";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export default function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Customer Dashboard</h1>
          <p className="text-muted-foreground">Monitor your mattress performance, sleep quality, and product health</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Interactive Charts with Filtering */}
          <SleepTrendChart />
          <MattressPerformanceChart />
          <TemperatureControlChart />
          <FeatureUsageChart />

          {/* Sleep Improvement Since Purchase */}
          <Card>
            <CardHeader>
              <CardTitle>Sleep Improvement Since Purchase</CardTitle>
              <CardDescription>Sleep quality improvement since product purchase</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  quality: { label: "Quality Score", color: "hsl(var(--chart-1))" },
                  improvement: { label: "Improvement %", color: "hsl(var(--chart-2))" },
                }}
                className="h-[300px]"
              >
                <ComposedChart data={improvementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line type="monotone" dataKey="quality" stroke="hsl(var(--chart-1))" strokeWidth={3} />
                  <Bar dataKey="improvement" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                </ComposedChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Battery Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Battery Life Performance</CardTitle>
              <CardDescription>Battery performance over time for wireless features</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  percentage: { label: "Battery %", color: "hsl(var(--chart-3))" },
                  expectedLevel: { label: "Expected", color: "hsl(var(--chart-4))" },
                }}
                className="h-[300px]"
              >
                <AreaChart data={batteryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={(value) =>
                      new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })
                    }
                  />
                  <YAxis domain={[60, 100]} tickFormatter={(value) => `${value}%`} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="percentage"
                    stroke="hsl(var(--chart-3))"
                    fill="hsl(var(--chart-3))"
                    fillOpacity={0.3}
                  />
                  <Line
                    type="monotone"
                    dataKey="expectedLevel"
                    stroke="hsl(var(--chart-4))"
                    strokeDasharray="5 5"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Comfort Settings History */}
          <Card>
            <CardHeader>
              <CardTitle>Comfort Settings History</CardTitle>
              <CardDescription>History of comfort setting adjustments</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  firmness: { label: "Firmness", color: "hsl(var(--chart-1))" },
                  temperature: { label: "Temperature", color: "hsl(var(--chart-2))" },
                  angle: { label: "Angle", color: "hsl(var(--chart-3))" },
                }}
                className="h-[300px]"
              >
                <ComposedChart data={comfortSettingsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="firmness" fill="hsl(var(--chart-1))" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="temperature" fill="hsl(var(--chart-2))" radius={[2, 2, 0, 0]} />
                  <Line type="monotone" dataKey="angle" stroke="hsl(var(--chart-3))" strokeWidth={3} />
                </ComposedChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Product Health Status */}
          <Card>
            <CardHeader>
              <CardTitle>Product Health Status</CardTitle>
              <CardDescription>Visual representation of product health/status</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{ value: { label: "Status" } }} className="h-[300px]">
                <PieChart>
                  <Pie
                    data={productHealthData}
                    cx="50%"
                    cy="50%"
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {productHealthData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Energy Consumption */}
          <Card>
            <CardHeader>
              <CardTitle>Energy Consumption Metrics</CardTitle>
              <CardDescription>Energy usage of the smart mattress over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  consumption: { label: "Consumption (kWh)", color: "hsl(var(--chart-1))" },
                  average: { label: "Average", color: "hsl(var(--chart-2))" },
                  eco: { label: "Eco Mode", color: "hsl(var(--chart-3))" },
                }}
                className="h-[300px]"
              >
                <AreaChart data={energyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis tickFormatter={(value) => `${value} kWh`} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="consumption"
                    stroke="hsl(var(--chart-1))"
                    fill="hsl(var(--chart-1))"
                    fillOpacity={0.3}
                  />
                  <Line
                    type="monotone"
                    dataKey="average"
                    stroke="hsl(var(--chart-2))"
                    strokeDasharray="5 5"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="eco"
                    stroke="hsl(var(--chart-3))"
                    strokeDasharray="3 3"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
