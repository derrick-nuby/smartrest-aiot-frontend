"use client";

import { VitalSignsChart } from "@/features/dashboards/doctor/components/vital-signs-chart";
import { PatientComparisonChart } from "@/features/dashboards/doctor/components/patient-comparison-chart";
import { AlertTimelineChart } from "@/features/dashboards/doctor/components/alert-timeline-chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  healthImprovementData,
  disorderDistributionData,
  activityData,
  treatmentData,
  progressRadarData,
  medicationCorrelationData,
} from "@/features/dashboards/doctor/data/mock-data";
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  Bar,
  Line,
  Legend,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ScatterChart,
  Scatter,
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export default function DoctorDashboard() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Doctor Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor patient health, track treatment progress, and manage care plans
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Interactive Charts with Filtering */}
          <VitalSignsChart />
          <PatientComparisonChart />
          <AlertTimelineChart />

          {/* Health Improvement Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Patient Health Improvement Trend</CardTitle>
              <CardDescription>Track patient recovery over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  healthScore: { label: "Health Score", color: "hsl(var(--chart-1))" },
                  baselineScore: { label: "Baseline", color: "hsl(var(--chart-2))" },
                  targetScore: { label: "Target", color: "hsl(var(--chart-3))" },
                }}
                className="h-[300px]"
              >
                <AreaChart data={healthImprovementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={(value) =>
                      new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })
                    }
                  />
                  <YAxis domain={[50, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="healthScore"
                    stroke="hsl(var(--chart-1))"
                    fill="hsl(var(--chart-1))"
                    fillOpacity={0.3}
                  />
                  <Line type="monotone" dataKey="baselineScore" stroke="hsl(var(--chart-2))" strokeDasharray="5 5" />
                  <Line type="monotone" dataKey="targetScore" stroke="hsl(var(--chart-3))" strokeDasharray="3 3" />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Sleep Disorder Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Sleep Disorder Distribution</CardTitle>
              <CardDescription>Distribution of detected sleep disorders across patients</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{ value: { label: "Count" } }} className="h-[300px]">
                <PieChart>
                  <Pie
                    data={disorderDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {disorderDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Patient Activity Levels */}
          <Card>
            <CardHeader>
              <CardTitle>Patient Activity Levels</CardTitle>
              <CardDescription>Daily activity levels vs recommended activity</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  actualActivity: { label: "Actual Activity", color: "hsl(var(--chart-1))" },
                  recommendedActivity: { label: "Recommended", color: "hsl(var(--chart-2))" },
                  restQuality: { label: "Rest Quality", color: "hsl(var(--chart-3))" },
                }}
                className="h-[300px]"
              >
                <ComposedChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="actualActivity" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                  <Line
                    type="monotone"
                    dataKey="recommendedActivity"
                    stroke="hsl(var(--chart-2))"
                    strokeWidth={3}
                    strokeDasharray="5 5"
                  />
                  <Line type="monotone" dataKey="restQuality" stroke="hsl(var(--chart-3))" strokeWidth={2} />
                </ComposedChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Treatment Efficacy */}
          <Card>
            <CardHeader>
              <CardTitle>Treatment Efficacy</CardTitle>
              <CardDescription>Measure treatment effectiveness over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{ efficacyScore: { label: "Efficacy Score", color: "hsl(var(--chart-1))" } }}
                className="h-[300px]"
              >
                <AreaChart data={treatmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis domain={[40, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="efficacyScore"
                    stroke="hsl(var(--chart-1))"
                    fill="hsl(var(--chart-1))"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Patient Progress Radar */}
          <Card>
            <CardHeader>
              <CardTitle>Patient Progress Radar</CardTitle>
              <CardDescription>Multi-dimensional view of patient recovery metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  initialScore: { label: "Initial", color: "hsl(var(--chart-1))" },
                  currentScore: { label: "Current", color: "hsl(var(--chart-2))" },
                  targetScore: { label: "Target", color: "hsl(var(--chart-3))" },
                }}
                className="h-[300px]"
              >
                <RadarChart data={progressRadarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="metric" />
                  <PolarRadiusAxis domain={[0, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Radar
                    name="Initial"
                    dataKey="initialScore"
                    stroke="hsl(var(--chart-1))"
                    fill="hsl(var(--chart-1))"
                    fillOpacity={0.1}
                  />
                  <Radar
                    name="Current"
                    dataKey="currentScore"
                    stroke="hsl(var(--chart-2))"
                    fill="hsl(var(--chart-2))"
                    fillOpacity={0.3}
                  />
                  <Radar
                    name="Target"
                    dataKey="targetScore"
                    stroke="hsl(var(--chart-3))"
                    fill="hsl(var(--chart-3))"
                    fillOpacity={0.1}
                    strokeDasharray="5 5"
                  />
                </RadarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Medication Correlation */}
          <Card>
            <CardHeader>
              <CardTitle>Medication Efficacy Correlation</CardTitle>
              <CardDescription>Correlation between medication adherence and health metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{ healthImprovement: { label: "Health Improvement", color: "hsl(var(--chart-4))" } }}
                className="h-[300px]"
              >
                <ScatterChart data={medicationCorrelationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="adherenceRate"
                    domain={[70, 100]}
                    label={{ value: "Adherence Rate (%)", position: "insideBottom", offset: -10 }}
                  />
                  <YAxis
                    dataKey="healthImprovement"
                    domain={[40, 100]}
                    label={{ value: "Health Improvement (%)", angle: -90, position: "insideLeft" }}
                  />
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                    formatter={(value, name, props) => [
                      `${value}%`,
                      name === "healthImprovement" ? "Health Improvement" : "Adherence Rate",
                      `Patient: ${props.payload.patientName}`,
                    ]}
                  />
                  <Scatter dataKey="healthImprovement" fill="hsl(var(--chart-4))" />
                </ScatterChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
