"use client";

import { useState } from "react";
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { generateSystemUsageData } from "../data/mock-data";
import type { AdminFilterPeriod } from "../types";

const chartConfig = {
  activeUsers: {
    label: "Active Users",
    color: "hsl(var(--chart-1))",
  },
  apiCalls: {
    label: "API Calls",
    color: "hsl(var(--chart-2))",
  },
  dataPoints: {
    label: "Data Points",
    color: "hsl(var(--chart-3))",
  },
  errorRate: {
    label: "Error Rate (%)",
    color: "hsl(var(--chart-4))",
  },
};

export function SystemUsageChart() {
  const [period, setPeriod] = useState<AdminFilterPeriod>("24h");
  const data = generateSystemUsageData(period);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>System Usage Overview</CardTitle>
          <CardDescription>Overall system usage metrics across time</CardDescription>
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
              dataKey="timestamp"
              tickFormatter={(value) =>
                new Date(value).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
              }
            />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Line type="monotone" dataKey="activeUsers" stroke="var(--color-activeUsers)" strokeWidth={2} dot={false} yAxisId="left" />
            <Line
              type="monotone"
              dataKey="apiCalls"
              stroke="var(--color-apiCalls)"
              strokeWidth={2}
              dot={false}
              yAxisId="right"
            />
            <Line
              type="monotone"
              dataKey="dataPoints"
              stroke="var(--color-dataPoints)"
              strokeWidth={2}
              dot={false}
              yAxisId="right"
            />
            <Line type="monotone" dataKey="errorRate" stroke="var(--color-errorRate)" strokeWidth={2} dot={false} yAxisId="left" />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
