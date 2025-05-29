"use client"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mattressPerformanceData } from "../data/mock-data"

const chartConfig = {
  score: {
    label: "Your Score",
    color: "hsl(var(--chart-1))",
  },
  benchmark: {
    label: "Benchmark",
    color: "hsl(var(--chart-2))",
  },
}

export function MattressPerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mattress Performance Metrics</CardTitle>
        <CardDescription>Multi-axis visualization of mattress performance factors</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <RadarChart data={mattressPerformanceData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="aspect" />
            <PolarRadiusAxis domain={[0, 10]} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Radar
              name="Your Score"
              dataKey="score"
              stroke="var(--color-score)"
              fill="var(--color-score)"
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Radar
              name="Benchmark"
              dataKey="benchmark"
              stroke="var(--color-benchmark)"
              fill="var(--color-benchmark)"
              fillOpacity={0.1}
              strokeWidth={2}
              strokeDasharray="5 5"
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
