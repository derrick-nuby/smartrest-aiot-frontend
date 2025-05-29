"use client"

import { useState } from "react"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { generateVitalSignsData } from "../data/mock-data"
import type { DoctorFilterPeriod } from "../types"

const chartConfig = {
  heartRate: {
    label: "Heart Rate (BPM)",
    color: "hsl(var(--chart-1))",
  },
  temperature: {
    label: "Temperature (°C)",
    color: "hsl(var(--chart-2))",
  },
  respiration: {
    label: "Respiration (BPM)",
    color: "hsl(var(--chart-3))",
  },
}

export function VitalSignsChart() {
  const [period, setPeriod] = useState<DoctorFilterPeriod>("24h")
  const data = generateVitalSignsData(period)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Patient Vital Signs Timeline</CardTitle>
          <CardDescription>Monitor multiple vital signs over time</CardDescription>
        </div>
        <Select value={period} onValueChange={(value: DoctorFilterPeriod) => setPeriod(value)}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="24h">24 Hours</SelectItem>
            <SelectItem value="7d">7 Days</SelectItem>
            <SelectItem value="30d">30 Days</SelectItem>
            <SelectItem value="90d">90 Days</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="timestamp"
              tickFormatter={(value) => new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Line type="monotone" dataKey="heartRate" stroke="var(--color-heartRate)" strokeWidth={2} dot={false} />
            <Line
              type="monotone"
              dataKey="temperature"
              stroke="var(--color-temperature)"
              strokeWidth={2}
              dot={false}
              yAxisId="temp"
            />
            <Line type="monotone" dataKey="respiration" stroke="var(--color-respiration)" strokeWidth={2} dot={false} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
