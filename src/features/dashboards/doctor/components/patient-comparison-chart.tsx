"use client"

import { useState } from "react"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { generatePatientComparisonData } from "../data/mock-data"
import type { PatientFilter } from "../types"

const chartConfig = {
  avgSleepQuality: {
    label: "Sleep Quality",
    color: "hsl(var(--chart-1))",
  },
  avgSleepDuration: {
    label: "Sleep Duration (h)",
    color: "hsl(var(--chart-2))",
  },
  avgRestlessness: {
    label: "Restlessness",
    color: "hsl(var(--chart-3))",
  },
}

export function PatientComparisonChart() {
  const [filter, setFilter] = useState<PatientFilter>("all")
  const data = generatePatientComparisonData(filter)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Patient Sleep Quality Comparison</CardTitle>
          <CardDescription>Compare sleep metrics across patients</CardDescription>
        </div>
        <Select value={filter} onValueChange={(value: PatientFilter) => setFilter(value)}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Patients</SelectItem>
            <SelectItem value="critical">Critical</SelectItem>
            <SelectItem value="stable">Stable</SelectItem>
            <SelectItem value="improving">Improving</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="patientName" angle={-45} textAnchor="end" height={80} />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Bar dataKey="avgSleepQuality" fill="var(--color-avgSleepQuality)" radius={[2, 2, 0, 0]} />
            <Bar dataKey="avgSleepDuration" fill="var(--color-avgSleepDuration)" radius={[2, 2, 0, 0]} />
            <Bar dataKey="avgRestlessness" fill="var(--color-avgRestlessness)" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
