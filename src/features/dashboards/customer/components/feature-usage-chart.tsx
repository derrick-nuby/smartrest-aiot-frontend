"use client"

import { useState } from "react"
import { PieChart, Pie, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { generateFeatureUsageData } from "../data/mock-data"
import type { FeatureFilter } from "../types"

const chartConfig = {
  value: {
    label: "Usage Count",
  },
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82CA9D", "#FFC658"]

export function FeatureUsageChart() {
  const [filter, setFilter] = useState<FeatureFilter>("all")
  const data = generateFeatureUsageData(filter)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Feature Usage Breakdown</CardTitle>
          <CardDescription>Distribution of usage across smart mattress features</CardDescription>
        </div>
        <Select value={filter} onValueChange={(value: FeatureFilter) => setFilter(value)}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Features</SelectItem>
            <SelectItem value="temperature">Temperature</SelectItem>
            <SelectItem value="firmness">Firmness</SelectItem>
            <SelectItem value="position">Position</SelectItem>
            <SelectItem value="massage">Massage</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
