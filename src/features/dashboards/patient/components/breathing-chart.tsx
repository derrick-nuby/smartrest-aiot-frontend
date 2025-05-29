"use client"

import { Line, LineChart, XAxis, YAxis, CartesianGrid, ReferenceLine } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { generateBreathingData } from "../data/mock-data"

const chartConfig = {
  rate: {
    label: "Breathing Rate",
    color: "hsl(var(--chart-3))",
  },
}

export function BreathingChart() {
  const data = generateBreathingData()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Breathing Rate Trends</CardTitle>
        <CardDescription>Breathing rate during sleep with normal range</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              tickFormatter={(value) =>
                new Date(value).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
              }
            />
            <YAxis domain={[10, 25]} tickFormatter={(value) => `${value} bpm`} />
            <ChartTooltip
              content={<ChartTooltipContent />}
              labelFormatter={(value) => new Date(value).toLocaleString()}
            />
            <ReferenceLine y={12} stroke="#22c55e" strokeDasharray="3 3" label="Normal Min" />
            <ReferenceLine y={20} stroke="#22c55e" strokeDasharray="3 3" label="Normal Max" />
            <Line type="monotone" dataKey="rate" stroke="var(--color-rate)" strokeWidth={2} dot={false} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
