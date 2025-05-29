"use client";

import { useState } from "react";
import { Scatter, ScatterChart, XAxis, YAxis, CartesianGrid } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { generateAlertTimelineData } from "../data/mock-data";
import type { DoctorFilterPeriod } from "../types";

const chartConfig = {
  severity: {
    label: "Alert Severity",
    color: "hsl(var(--chart-4))",
  },
};

export function AlertTimelineChart() {
  const [period, setPeriod] = useState<DoctorFilterPeriod>("7d");
  const data = generateAlertTimelineData(period);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Critical Alerts Timeline</CardTitle>
          <CardDescription>Timeline of health alerts across patients</CardDescription>
        </div>
        <Select value={period} onValueChange={(value: DoctorFilterPeriod) => setPeriod(value)}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="24h">24 Hours</SelectItem>
            <SelectItem value="7d">7 Days</SelectItem>
            <SelectItem value="30d">30 Days</SelectItem>
            <SelectItem value="90d">90 Days</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <ScatterChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              type="category"
              tickFormatter={(value) => new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            />
            <YAxis dataKey="severity" domain={[1, 5]} />
            <ChartTooltip
              content={<ChartTooltipContent />}
              formatter={(value, name, props) => [
                `Severity: ${value}`,
                `Patient: ${props.payload.patientName}`,
                `Alert: ${props.payload.alertType}`,
                `Status: ${props.payload.resolved ? "Resolved" : "Active"}`,
              ]}
            />
            <Scatter
              dataKey="severity"
            />
          </ScatterChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
