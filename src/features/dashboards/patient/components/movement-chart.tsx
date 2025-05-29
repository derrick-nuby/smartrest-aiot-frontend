"use client"

import { useState } from "react"
import { Scatter, ScatterChart, XAxis, YAxis, CartesianGrid } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { generateMovementData } from "../data/mock-data"
import type { FilterPeriod } from "../types"

const chartConfig = {
  intensity: {
    label: "Movement Intensity",
    color: "hsl(var(--chart-5))",
  },
}

export function MovementChart() {
  const [period, setPeriod] = useState<FilterPeriod>("7d")
  const data = generateMovementData(period)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Movement Heatmap</CardTitle>
          <CardDescription>Movement intensity throughout the night</CardDescription>
        </div>
        <Select value={period} onValueChange={(value: FilterPeriod) => setPeriod(value)}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Last Night</SelectItem>
            <SelectItem value="30d">Last Week</SelectItem>
            <SelectItem value="90d">Last Month</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <ScatterChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              type="category"
              tickFormatter={(value) =>
                new Date(value).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
              }
            />
            <YAxis dataKey="intensity" domain={[0, 10]} />
            <ChartTooltip
              content={<ChartTooltipContent />}
              labelFormatter={(value) => new Date(value).toLocaleString()}
            />
            <Scatter dataKey="intensity" fill="var(--color-intensity)" />
          </ScatterChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
