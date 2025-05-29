"use client";

import { useState, useEffect } from "react";
import { SensorReadingsChart, LatestSensorReadingsCard, SensorDataTable } from "@/features/sensors";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Users, TrendingUp, AlertTriangle } from "lucide-react";

export default function SensorsPage() {
  const [selectedPatientId, setSelectedPatientId] = useState<string>("");

  useEffect(() => {
    // For doctors, we might want to show a default patient or all patients
    // You can modify this logic based on your requirements
    setSelectedPatientId("all-patients"); // Default to showing all patients
  }, []);
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Patient Sensor Monitoring</h1>
          <p className="text-muted-foreground">
            Monitor patient vital signs and health metrics in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Patients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">Currently monitored</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sensor Coverage</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98.5%</div>
              <p className="text-xs text-muted-foreground">Operational sensors</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Data Points</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.4K</div>
              <p className="text-xs text-muted-foreground">Today&apos;s readings</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Require attention</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="patients">Patient Data</TabsTrigger>
            <TabsTrigger value="alerts">Critical Alerts</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <LatestSensorReadingsCard patientId={selectedPatientId} />
              <Card>
                <CardHeader>
                  <CardTitle>Patient Status Summary</CardTitle>
                  <CardDescription>Current status of monitored patients</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Stable</span>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-20 bg-gray-200 rounded-full">
                        <div className="h-2 w-16 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-muted-foreground">20</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Monitoring</span>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-20 bg-gray-200 rounded-full">
                        <div className="h-2 w-3 bg-yellow-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-muted-foreground">3</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Critical</span>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-20 bg-gray-200 rounded-full">
                        <div className="h-2 w-1 bg-red-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-muted-foreground">1</span>
                    </div>
                  </div>
                </CardContent>
              </Card>            </div>
            <SensorReadingsChart patientId={selectedPatientId} />
          </TabsContent>

          <TabsContent value="patients" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Patient Sensor Data</CardTitle>
                <CardDescription>Detailed sensor readings for all patients</CardDescription>
              </CardHeader>              <CardContent>
                <SensorDataTable patientId={selectedPatientId} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Critical Patient Alerts
                  <Badge variant="destructive">2 Active</Badge>
                </CardTitle>
                <CardDescription>Immediate attention required</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg border-destructive/20 bg-destructive/5">
                  <div>
                    <h4 className="font-semibold text-destructive">Irregular Heart Rate</h4>
                    <p className="text-sm text-muted-foreground">Patient: John Doe | Room 204 | 120 BPM</p>
                  </div>
                  <Badge variant="destructive">Critical</Badge>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg border-yellow-200 bg-yellow-50">
                  <div>
                    <h4 className="font-semibold text-yellow-700">Temperature Fluctuation</h4>
                    <p className="text-sm text-muted-foreground">Patient: Jane Smith | Room 156 | 101.2°F</p>
                  </div>
                  <Badge variant="secondary">Warning</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Sensor Data Reports</CardTitle>
                <CardDescription>Generate and download patient sensor reports</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Daily Report</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Generate daily sensor data summary for all patients
                      </p>
                      <button className="w-full bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm">
                        Generate Report
                      </button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Weekly Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Comprehensive weekly health trends and patterns
                      </p>
                      <button className="w-full bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm">
                        Generate Report
                      </button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
