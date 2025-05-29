"use client"

import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { environmentData } from "../data/mock-data"

const chartConfig = {
  temperature: {
    label: "Temperature (°C)",
    color: "hsl(var(--chart-1))",
  },
  humidity: {
    label: "Humidity (%)",
    color: "hsl(var(--chart-2))",
  },
  noise: {
    label: "Noise (dB)",
    color: "hsl(var(--chart-3))",
  },
  light: {
    label: "Light (lux)",
    color: "hsl(var(--chart-4))",
  },
}

export function EnvironmentChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sleep Environment Metrics</CardTitle>
        <CardDescription>Room conditions throughout the night</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <BarChart data={environmentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Bar dataKey="temperature" fill="var(--color-temperature)" />
            <Bar dataKey="humidity" fill="var(--color-humidity)" />
            <Bar dataKey="noise" fill="var(--color-noise)" />
            <Bar dataKey="light" fill="var(--color-light)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
