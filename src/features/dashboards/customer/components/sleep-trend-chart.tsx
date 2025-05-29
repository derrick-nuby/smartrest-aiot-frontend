"use client"

import { useState } from "react"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ReferenceLine } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { generateSleepTrendData } from "../data/mock-data"
import type { CustomerFilterPeriod } from "../types"

const chartConfig = {
  quality: {
    label: "Sleep Quality",
    color: "hsl(var(--chart-1))",
  },
  average: {
    label: "Average",
    color: "hsl(var(--chart-2))",
  },
}

export function SleepTrendChart() {
  const [period, setPeriod] = useState<CustomerFilterPeriod>("30d")
  const data = generateSleepTrendData(period)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Sleep Quality Trend</CardTitle>
          <CardDescription>Your personal sleep quality score over time</CardDescription>
        </div>
        <Select value={period} onValueChange={(value: CustomerFilterPeriod) => setPeriod(value)}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">7 Days</SelectItem>
            <SelectItem value="30d">30 Days</SelectItem>
            <SelectItem value="90d">90 Days</SelectItem>
            <SelectItem value="1y">1 Year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(value) => new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            />
            <YAxis domain={[60, 100]} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ReferenceLine y={82} stroke="var(--color-average)" strokeDasharray="5 5" label="Average" />
            <Line
              type="monotone"
              dataKey="quality"
              stroke="var(--color-quality)"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
