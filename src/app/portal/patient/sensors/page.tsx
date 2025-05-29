"use client";

import { useState, useEffect } from "react";
import { SensorReadingsChart, LatestSensorReadingsCard } from "@/features/sensors";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Thermometer, Heart, Waves } from "lucide-react";

export default function SensorsPage() {
  const [patientId, setPatientId] = useState<string>("");

  useEffect(() => {
    // Get patient ID from localStorage or use current user data
    const userData = localStorage.getItem("userData");
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setPatientId(user.id || "patient-default");
      } catch (error) {
        console.error("Error parsing user data:", error);
        setPatientId("patient-default");
      }
    } else {
      // Fallback to a default patient ID
      setPatientId("patient-default");
    }
  }, []);
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">My Health Sensors</h1>
          <p className="text-muted-foreground">
            Monitor your vital signs and sleep quality through integrated smart sensors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Heart Rate</CardTitle>
              <Heart className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">72 bpm</div>
              <p className="text-xs text-muted-foreground">Normal range</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Temperature</CardTitle>
              <Thermometer className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98.6°F</div>
              <p className="text-xs text-muted-foreground">Optimal</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Movement</CardTitle>
              <Activity className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Low</div>
              <p className="text-xs text-muted-foreground">Sleep detected</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Breathing</CardTitle>
              <Waves className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">16/min</div>
              <p className="text-xs text-muted-foreground">Steady rhythm</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="current" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="current">Current Readings</TabsTrigger>
            <TabsTrigger value="trends">Historical Trends</TabsTrigger>
            <TabsTrigger value="alerts">Health Alerts</TabsTrigger>
          </TabsList>          <TabsContent value="current" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <LatestSensorReadingsCard patientId={patientId} />
              <Card>
                <CardHeader>
                  <CardTitle>Sleep Quality Score</CardTitle>
                  <CardDescription>Based on sensor data from last night</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-6xl font-bold text-primary">8.2</div>
                    <Badge variant="secondary" className="text-lg px-4 py-2">Excellent</Badge>
                    <p className="text-sm text-muted-foreground">
                      Great sleep quality with optimal temperature and minimal movement
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Sensor Data Trends</CardTitle>
                <CardDescription>7-day historical view of your health metrics</CardDescription>
              </CardHeader>              <CardContent>
                <SensorReadingsChart patientId={patientId} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Health Alerts
                  <Badge variant="secondary">All Normal</Badge>
                </CardTitle>
                <CardDescription>Monitor important health indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg bg-green-50 border-green-200">
                  <div>
                    <h4 className="font-semibold text-green-700">Sleep Quality Improved</h4>
                    <p className="text-sm text-muted-foreground">Your sleep score increased by 15% this week</p>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">Good News</Badge>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-semibold">Temperature Optimal</h4>
                    <p className="text-sm text-muted-foreground">Mattress temperature is in your preferred range</p>
                  </div>
                  <Badge variant="outline">Normal</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
