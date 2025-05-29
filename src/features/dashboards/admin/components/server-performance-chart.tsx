"use client"

import { useState } from "react"
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { generateServerPerformanceData } from "../data/mock-data"
import type { AdminFilterPeriod } from "../types"

const chartConfig = {
  cpu: {
    label: "CPU (%)",
    color: "hsl(var(--chart-1))",
  },
  memory: {
    label: "Memory (%)",
    color: "hsl(var(--chart-2))",
  },
  network: {
    label: "Network (Mbps)",
    color: "hsl(var(--chart-3))",
  },
  disk: {
    label: "Disk (%)",
    color: "hsl(var(--chart-4))",
  },
}

export function ServerPerformanceChart() {
  const [period, setPeriod] = useState<AdminFilterPeriod>("24h")
  const data = generateServerPerformanceData(period)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Server Performance Metrics</CardTitle>
          <CardDescription>CPU, memory, and network usage of the server</CardDescription>
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
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              tickFormatter={(value) =>
                new Date(value).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
              }
            />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Area
              type="monotone"
              dataKey="cpu"
              stackId="1"
              stroke="var(--color-cpu)"
              fill="var(--color-cpu)"
              fillOpacity={0.6}
            />
            <Area
              type="monotone"
              dataKey="memory"
              stackId="2"
              stroke="var(--color-memory)"
              fill="var(--color-memory)"
              fillOpacity={0.6}
            />
            <Area
              type="monotone"
              dataKey="disk"
              stackId="3"
              stroke="var(--color-disk)"
              fill="var(--color-disk)"
              fillOpacity={0.6}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
