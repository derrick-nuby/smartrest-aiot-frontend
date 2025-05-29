"use client"

import { useState } from "react"
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, ReferenceLine } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { generateTemperatureData } from "../data/mock-data"
import type { FilterPeriod } from "../types"

const chartConfig = {
  temperature: {
    label: "Body Temperature",
    color: "hsl(var(--chart-3))",
  },
}

export function TemperatureChart() {
  const [period, setPeriod] = useState<FilterPeriod>("7d")
  const data = generateTemperatureData(period)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Body Temperature Variations</CardTitle>
          <CardDescription>Monitor temperature changes during sleep</CardDescription>
        </div>
        <Select value={period} onValueChange={(value: FilterPeriod) => setPeriod(value)}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Last Day</SelectItem>
            <SelectItem value="30d">Last Week</SelectItem>
            <SelectItem value="90d">Last Month</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              tickFormatter={(value) =>
                new Date(value).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
              }
            />
            <YAxis domain={[35, 38]} tickFormatter={(value) => `${value}°C`} />
            <ChartTooltip
              content={<ChartTooltipContent />}
              labelFormatter={(value) => new Date(value).toLocaleString()}
            />
            <ReferenceLine y={36.1} stroke="#22c55e" strokeDasharray="3 3" label="Optimal Min" />
            <ReferenceLine y={37.2} stroke="#22c55e" strokeDasharray="3 3" label="Optimal Max" />
            <Area
              type="monotone"
              dataKey="temperature"
              stroke="var(--color-temperature)"
              fill="var(--color-temperature)"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
