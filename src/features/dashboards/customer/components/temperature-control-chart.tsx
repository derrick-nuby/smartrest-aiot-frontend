"use client"

import { useState } from "react"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { generateTemperatureControlData } from "../data/mock-data"
import type { CustomerFilterPeriod } from "../types"

const chartConfig = {
  requested: {
    label: "Requested",
    color: "hsl(var(--chart-1))",
  },
  actual: {
    label: "Actual",
    color: "hsl(var(--chart-2))",
  },
  room: {
    label: "Room Temp",
    color: "hsl(var(--chart-3))",
  },
}

export function TemperatureControlChart() {
  const [period, setPeriod] = useState<CustomerFilterPeriod>("7d")
  const data = generateTemperatureControlData(period)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Temperature Control Efficiency</CardTitle>
          <CardDescription>Effectiveness of temperature control features</CardDescription>
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
              dataKey="time"
              tickFormatter={(value) =>
                new Date(value).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
              }
            />
            <YAxis tickFormatter={(value) => `${value}°C`} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="requested"
              stroke="var(--color-requested)"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
            <Line type="monotone" dataKey="actual" stroke="var(--color-actual)" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="room" stroke="var(--color-room)" strokeWidth={2} dot={false} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
