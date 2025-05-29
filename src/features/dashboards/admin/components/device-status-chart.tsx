"use client"

import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { deviceStatusData } from "../data/mock-data"

const chartConfig = {
  active: {
    label: "Active",
    color: "hsl(var(--chart-1))",
  },
  maintenance: {
    label: "Maintenance",
    color: "hsl(var(--chart-2))",
  },
  error: {
    label: "Error",
    color: "hsl(var(--destructive))",
  },
  offline: {
    label: "Offline",
    color: "hsl(var(--muted))",
  },
}

export function DeviceStatusChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Device Status Distribution</CardTitle>
        <CardDescription>Count of devices by status category</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <BarChart data={deviceStatusData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Bar dataKey="active" stackId="a" fill="var(--color-active)" />
            <Bar dataKey="maintenance" stackId="a" fill="var(--color-maintenance)" />
            <Bar dataKey="error" stackId="a" fill="var(--color-error)" />
            <Bar dataKey="offline" stackId="a" fill="var(--color-offline)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
