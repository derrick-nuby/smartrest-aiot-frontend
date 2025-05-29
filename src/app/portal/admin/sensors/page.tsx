"use client";

import { useState, useEffect } from "react";
import { SensorReadingsChart, LatestSensorReadingsCard, SensorDataTable } from "@/features/sensors";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Thermometer, Zap, Wifi } from "lucide-react";

export default function SensorsPage() {
  const [patientId, setPatientId] = useState<string>("");

  useEffect(() => {
    // For admin, always show all patients data
    setPatientId("all-patients");
  }, []);
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Sensor Management</h1>
          <p className="text-muted-foreground">
            Monitor and manage IoT sensors across all SmartRest devices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Sensors</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Temperature Sensors</CardTitle>
              <Thermometer className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">324</div>
              <p className="text-xs text-muted-foreground">98.2% operational</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Power Status</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">99.7%</div>
              <p className="text-xs text-muted-foreground">System uptime</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Connectivity</CardTitle>
              <Wifi className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,201</div>
              <p className="text-xs text-muted-foreground">Connected devices</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="readings">Real-time Data</TabsTrigger>
            <TabsTrigger value="table">Data Table</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sensor Distribution</CardTitle>
                  <CardDescription>Types and locations of active sensors</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <p className="text-muted-foreground">Sensor distribution chart will be displayed here</p>
                </CardContent>
              </Card>
              <LatestSensorReadingsCard patientId="system-admin" />
            </div>
          </TabsContent>

          <TabsContent value="readings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Real-time Sensor Readings</CardTitle>
                <CardDescription>Live data from all connected sensors</CardDescription>
              </CardHeader>
              <CardContent>
                <SensorReadingsChart patientId="system-admin" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="table" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Sensor Data Table</CardTitle>
                <CardDescription>Detailed sensor readings and device information</CardDescription>
              </CardHeader>              <CardContent>
                <SensorDataTable patientId={patientId} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Sensor Alerts
                  <Badge variant="destructive">3 Critical</Badge>
                </CardTitle>
                <CardDescription>Monitor sensor health and alert conditions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg border-destructive/20 bg-destructive/5">
                  <div>
                    <h4 className="font-semibold text-destructive">Temperature Sensor Offline</h4>
                    <p className="text-sm text-muted-foreground">Device ID: TS-4401 | Room 204</p>
                  </div>
                  <Badge variant="destructive">Critical</Badge>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg border-yellow-200 bg-yellow-50">
                  <div>
                    <h4 className="font-semibold text-yellow-700">Low Battery</h4>
                    <p className="text-sm text-muted-foreground">Device ID: HS-2301 | Room 156</p>
                  </div>
                  <Badge variant="secondary">Warning</Badge>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-semibold">Connectivity Issue</h4>
                    <p className="text-sm text-muted-foreground">Device ID: MS-1205 | Room 89</p>
                  </div>
                  <Badge variant="outline">Info</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
