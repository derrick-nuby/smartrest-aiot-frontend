"use client"

import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { heartRateDistributionData } from "../data/mock-data"

const chartConfig = {
  minutes: {
    label: "Minutes",
    color: "hsl(var(--chart-4))",
  },
}

export function HeartRateChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Heart Rate Distribution</CardTitle>
        <CardDescription>Time spent in different heart rate zones during sleep</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <BarChart data={heartRateDistributionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="range" />
            <YAxis tickFormatter={(value) => `${value}m`} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="minutes"
              fill={(entry) => (entry.isHealthy ? "hsl(var(--chart-4))" : "hsl(var(--destructive))")}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
