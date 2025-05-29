"use client";

import { Scatter, ScatterChart, XAxis, YAxis, CartesianGrid } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { healthCorrelationData } from "../data/mock-data";

const chartConfig = {
  healthMetric: {
    label: "Resting Heart Rate",
    color: "hsl(var(--chart-5))",
  },
};

export function HealthCorrelationChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Health Trend Correlation</CardTitle>
        <CardDescription>Correlation between sleep quality and resting heart rate</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <ScatterChart data={healthCorrelationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="sleepQuality"
              domain={[70, 100]}
              label={{ value: "Sleep Quality Score", position: "insideBottom", offset: -10 }}
            />
            <YAxis
              dataKey="healthMetric"
              domain={[55, 80]}
              label={{ value: "Resting Heart Rate (BPM)", angle: -90, position: "insideLeft" }}
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              formatter={(value, name) => [
                `${value}${name === "healthMetric" ? " BPM" : ""}`,
                name === "healthMetric" ? "Heart Rate" : "Sleep Quality",
              ]}
            />
            <Scatter dataKey="healthMetric" fill="var(--color-healthMetric)" />
          </ScatterChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
