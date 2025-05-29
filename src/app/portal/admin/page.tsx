"use client";

import { SystemUsageChart } from "@/features/dashboards/admin/components/system-usage-chart";
import { ServerPerformanceChart } from "@/features/dashboards/admin/components/server-performance-chart";
import { DeviceStatusChart } from "@/features/dashboards/admin/components/device-status-chart";
import { ErrorRateChart } from "@/features/dashboards/admin/components/error-rate-chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  userRoleData,
  dataVolumeData,
  apiPerformanceData,
  adoptionFunnelData,
  geographicData,
  systemHealthData,
} from "@/features/dashboards/admin/data/mock-data";
import {
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ScatterChart,
  Scatter,
  Treemap,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">Monitor system performance, user analytics, and infrastructure health</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Interactive Charts with Filtering */}
          <SystemUsageChart />
          <ServerPerformanceChart />
          <DeviceStatusChart />
          <ErrorRateChart />

          {/* User Role Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>User Role Distribution</CardTitle>
              <CardDescription>Breakdown of users by role</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{ value: { label: "Count" } }} className="h-[300px]">
                <PieChart>
                  <Pie
                    data={userRoleData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {userRoleData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Data Volume by Type */}
          <Card>
            <CardHeader>
              <CardTitle>Data Volume by Type</CardTitle>
              <CardDescription>Volume of different data types collected</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  sensorData: { label: "Sensor Data (GB)", color: "hsl(var(--chart-1))" },
                  userGeneratedData: { label: "User Data (GB)", color: "hsl(var(--chart-2))" },
                  analyticsData: { label: "Analytics (GB)", color: "hsl(var(--chart-3))" },
                  totalGrowth: { label: "Growth %", color: "hsl(var(--chart-4))" },
                }}
                className="h-[300px]"
              >
                <ComposedChart data={dataVolumeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="sensorData" stackId="a" fill="hsl(var(--chart-1))" />
                  <Bar dataKey="userGeneratedData" stackId="a" fill="hsl(var(--chart-2))" />
                  <Bar dataKey="analyticsData" stackId="a" fill="hsl(var(--chart-3))" />
                  <Line type="monotone" dataKey="totalGrowth" stroke="hsl(var(--chart-4))" strokeWidth={3} />
                </ComposedChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* API Performance */}
          <Card>
            <CardHeader>
              <CardTitle>API Performance</CardTitle>
              <CardDescription>Response times for API endpoints</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{ responseTime: { label: "Response Time (ms)", color: "hsl(var(--chart-5))" } }}
                className="h-[300px]"
              >
                <ScatterChart data={apiPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="callVolume" label={{ value: "Call Volume", position: "insideBottom", offset: -10 }} />
                  <YAxis
                    dataKey="responseTime"
                    label={{ value: "Response Time (ms)", angle: -90, position: "insideLeft" }}
                  />
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                    formatter={(value, name, props) => [
                      `${value}ms`,
                      "Response Time",
                      `Endpoint: ${props.payload.endpoint}`,
                      `Error Rate: ${props.payload.errorRate}%`,
                    ]}
                  />
                  <Scatter dataKey="responseTime" fill="hsl(var(--chart-5))" />
                </ScatterChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* User Adoption Funnel */}
          <Card>
            <CardHeader>
              <CardTitle>User Adoption Funnel</CardTitle>
              <CardDescription>User journey through registration to active usage</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{ count: { label: "Users", color: "hsl(var(--chart-1))" } }}
                className="h-[300px]"
              >
                <ComposedChart data={adoptionFunnelData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="stage" type="category" width={120} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="count" fill="hsl(var(--chart-1))" radius={[0, 4, 4, 0]} />
                </ComposedChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Geographic Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Geographic Distribution</CardTitle>
              <CardDescription>User distribution by geographic region</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{ size: { label: "Users" } }} className="h-[300px]">
                <Treemap data={geographicData} dataKey="size" aspectRatio={4 / 3} stroke="#fff" fill="#8884d8" />
              </ChartContainer>
            </CardContent>
          </Card>

          {/* System Health Radar */}
          <Card>
            <CardHeader>
              <CardTitle>System Health Radar</CardTitle>
              <CardDescription>Multi-dimension system health metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  score: { label: "Score", color: "hsl(var(--chart-1))" },
                  acceptableThreshold: { label: "Threshold", color: "hsl(var(--chart-2))" },
                }}
                className="h-[300px]"
              >
                <RadarChart data={systemHealthData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="metric" />
                  <PolarRadiusAxis domain={[80, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Radar
                    name="Current Score"
                    dataKey="score"
                    stroke="hsl(var(--chart-1))"
                    fill="hsl(var(--chart-1))"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  <Radar
                    name="Threshold"
                    dataKey="acceptableThreshold"
                    stroke="hsl(var(--chart-2))"
                    fill="hsl(var(--chart-2))"
                    fillOpacity={0.1}
                    strokeWidth={2}
                    strokeDasharray="5 5"
                  />
                </RadarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
