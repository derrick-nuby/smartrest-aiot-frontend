"use client";

import { useState } from "react";
import { useSleepReport } from "../hooks/useAnalyticsHooks";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface SleepReportCardProps {
  patientId: string;
}

export const SleepReportCard = ({ patientId }: SleepReportCardProps) => {
  const [date, setDate] = useState<Date>(new Date());

  const { data, isLoading, isError } = useSleepReport({
    patient_id: patientId,
    date: format(date, "yyyy-MM-dd")
  });

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const sleepStagesData = data ? [
    { name: "Awake", value: data.sleep_stages.awake, color: "#94a3b8" },
    { name: "Light", value: data.sleep_stages.light, color: "#60a5fa" },
    { name: "Deep", value: data.sleep_stages.deep, color: "#3b82f6" },
    { name: "REM", value: data.sleep_stages.rem, color: "#1d4ed8" }
  ] : [];

  const getSleepScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle>Sleep Report</CardTitle>
            <CardDescription>Daily sleep analysis</CardDescription>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-[240px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(newDate) => newDate && setDate(newDate)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : isError ? (
          <div className="text-center p-8">
            <p className="text-destructive">Failed to load sleep report. Please try again later.</p>
          </div>
        ) : !data ? (
          <div className="text-center p-8">
            <p className="text-muted-foreground">No sleep data available for the selected date.</p>
          </div>
        ) : (
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="stages">Sleep Stages</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
                  <span className="text-sm text-muted-foreground">Sleep Score</span>
                  <span className={cn("text-4xl font-bold", getSleepScoreColor(data.sleep_score))}>
                    {data.sleep_score}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">out of 100</span>
                </div>

                <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
                  <span className="text-sm text-muted-foreground">Total Sleep</span>
                  <span className="text-4xl font-bold">
                    {data.sleep_duration.total_hours}h {data.sleep_duration.minutes}m
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">hours:minutes</span>
                </div>

                <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
                  <span className="text-sm text-muted-foreground">Avg Heart Rate</span>
                  <span className="text-4xl font-bold">{data.avg_heart_rate}</span>
                  <span className="text-xs text-muted-foreground mt-1">bpm</span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="stages">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-[250px]">
                  <ChartContainer config={{
                    awake: { label: "Awake", color: "#94a3b8" },
                    light: { label: "Light", color: "#60a5fa" },
                    deep: { label: "Deep", color: "#3b82f6" },
                    rem: { label: "REM", color: "#1d4ed8" }
                  }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={sleepStagesData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {sleepStagesData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              return (
                                <ChartTooltipContent>
                                  <div className="text-sm font-medium">{payload[0].name}</div>
                                  <div className="text-sm">
                                    {formatDuration(payload[0].value as number)}
                                  </div>
                                </ChartTooltipContent>
                              );
                            }
                            return null;
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex flex-col gap-2">
                    {sleepStagesData.map((item) => (
                      <div key={item.name} className="flex items-center gap-2">
                        <div
                          className="h-3 w-3 rounded-sm"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm text-muted-foreground">
                          {item.name}: {formatDuration(item.value)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="details">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Sleep Efficiency</h3>
                    <p className="text-2xl font-bold">{data.sleep_efficiency}%</p>
                    <p className="text-sm text-muted-foreground">Time asleep vs. time in bed</p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Times Awoken</h3>
                    <p className="text-2xl font-bold">{data.awakenings}</p>
                    <p className="text-sm text-muted-foreground">Number of wake episodes</p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Restlessness</h3>
                    <p className="text-2xl font-bold">{data.restlessness_score}/10</p>
                    <p className="text-sm text-muted-foreground">Movement during sleep</p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Temperature</h3>
                    <p className="text-2xl font-bold">{data.avg_temperature}°C</p>
                    <p className="text-sm text-muted-foreground">Average body temperature</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        )}
      </CardContent>
    </Card>
  );
};
