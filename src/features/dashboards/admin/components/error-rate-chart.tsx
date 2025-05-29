"use client"

import { useState } from "react"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ReferenceLine } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { generateErrorRateData } from "../data/mock-data"
import type { AdminFilterPeriod } from "../types"

const chartConfig = {
  rate: {
    label: "Error Rate (%)",
    color: "hsl(var(--chart-4))",
  },
}

export function ErrorRateChart() {
  const [period, setPeriod] = useState<AdminFilterPeriod>("24h")
  const data = generateErrorRateData(period)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Error Rate Timeline</CardTitle>
          <CardDescription>System error rates over time with threshold</CardDescription>
        </div>
        <Select value={period} onValueChange={(value: AdminFilterPeriod) => setPeriod(value)}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1h">1 Hour</SelectItem>
            <SelectItem value="24h">24 Hours</SelectItem>
            <SelectItem value="7d">7 Days</SelectItem>
            <SelectItem value="30d">30 Days</SelectItem>
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
            <YAxis domain={[0, 10]} tickFormatter={(value) => `${value}%`} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ReferenceLine y={5} stroke="#ef4444" strokeDasharray="5 5" label="Threshold" />
            <Line
              type="monotone"
              dataKey="rate"
              stroke="var(--color-rate)"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
