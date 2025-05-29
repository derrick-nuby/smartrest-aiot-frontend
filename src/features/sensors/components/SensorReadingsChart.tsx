"use client";

import { useState } from "react";
import { useHistoricalSensorData } from "../hooks/useSensorHooks";
import { SensorType } from "../types/SensorTypes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import { Loader2 } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface SensorReadingsChartProps {
  patientId: string;
}

export const SensorReadingsChart = ({ patientId }: SensorReadingsChartProps) => {
  const [sensorType, setSensorType] = useState<SensorType>(SensorType.HEART_RATE);
  const [dateRange, setDateRange] = useState({
    from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    to: new Date(),
  });
  const { data, isLoading, isError } = useHistoricalSensorData({
    patient_id: patientId,
    type: sensorType,
    from: dateRange.from.toISOString().split("T")[0],
    to: dateRange.to.toISOString().split("T")[0],
  });

  // Handle the paginated API response structure
  const sensorReadings = data?.data || [];

  const chartData = sensorReadings.length > 0 ? sensorReadings.map((reading) => ({
    timestamp: new Date(reading.timestamp).toLocaleTimeString(),
    date: new Date(reading.timestamp).toLocaleDateString(),
    value: reading.sensor_value,
    unit: reading.sensor_unit || "",
  })) : [];

  const getSensorTypeLabel = (type: SensorType): string => {
    return type
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const getYAxisLabel = (): string => {
    if (!sensorReadings.length) return "";
    return sensorReadings[0].sensor_unit || "";
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle>Sensor Readings</CardTitle>
            <CardDescription>Historical sensor data visualization</CardDescription>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Select value={sensorType} onValueChange={(value) => setSensorType(value as SensorType)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select sensor type" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(SensorType).map((type) => (
                  <SelectItem key={type} value={type}>
                    {getSensorTypeLabel(type)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <DateRangePicker value={dateRange} onChange={setDateRange} align="end" className="w-full sm:w-auto" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="line" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="line">Line Chart</TabsTrigger>
            <TabsTrigger value="area">Area Chart</TabsTrigger>
          </TabsList>
          <TabsContent value="line" className="w-full">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>) : isError ? (
                <div className="text-center p-8">
                  <p className="text-destructive">Failed to load sensor data. Please try again later.</p>
                </div>
              ) : !sensorReadings.length ? (
                <div className="text-center p-8">
                  <p className="text-muted-foreground">No sensor data available for the selected period.</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Try selecting a different date range or sensor type.
                  </p>
                </div>
              ) : (
              <div className="h-[350px] w-full">
                <ChartContainer config={{
                  sensorData: {
                    label: getSensorTypeLabel(sensorType),
                    color: "#8884d8"
                  }
                }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <XAxis dataKey="timestamp" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value}`}
                        label={{ value: getYAxisLabel(), angle: -90, position: "insideLeft" }}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#8884d8"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <ChartTooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <ChartTooltipContent>
                                <div className="text-sm font-medium">{payload[0].payload.date}</div>
                                <div className="text-sm font-medium">{payload[0].payload.timestamp}</div>
                                <div className="text-sm">
                                  {getSensorTypeLabel(sensorType)}: {payload[0].value} {payload[0].payload.unit}
                                </div>
                              </ChartTooltipContent>
                            );
                          }
                          return null;
                        }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
                <div className="flex items-center justify-center mt-2">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-sm"
                      style={{ backgroundColor: "#8884d8" }}
                    />
                    <span className="text-sm text-muted-foreground">
                      {getSensorTypeLabel(sensorType)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>
          <TabsContent value="area" className="w-full">
            {/* Similar implementation for area chart */}
            <div className="text-center p-8">
              <p className="text-muted-foreground">Area chart view coming soon.</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
