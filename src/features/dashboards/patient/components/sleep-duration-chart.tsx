"use client"

import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { sleepDurationData } from "../data/mock-data"

const chartConfig = {
  actual: {
    label: "Actual Sleep",
    color: "hsl(var(--chart-1))",
  },
  recommended: {
    label: "Recommended",
    color: "hsl(var(--chart-2))",
  },
}

export function SleepDurationChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Sleep Duration</CardTitle>
        <CardDescription>Actual vs recommended sleep duration</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <ComposedChart data={sleepDurationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis tickFormatter={(value) => `${value}h`} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Bar dataKey="actual" fill="var(--color-actual)" radius={[4, 4, 0, 0]} />
            <Line
              type="monotone"
              dataKey="recommended"
              stroke="var(--color-recommended)"
              strokeWidth={3}
              strokeDasharray="5 5"
            />
          </ComposedChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
