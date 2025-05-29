"use client";

import { SleepQualityChart } from "@/features/dashboards/patient/components/sleep-quality-chart";
import { TemperatureChart } from "@/features/dashboards/patient/components/temperature-chart";
import { HeartRateChart } from "@/features/dashboards/patient/components/heart-rate-chart";
import { MovementChart } from "@/features/dashboards/patient/components/movement-chart";
import { SleepStagesChart } from "@/features/dashboards/patient/components/sleep-stages-chart";
import { SleepDurationChart } from "@/features/dashboards/patient/components/sleep-duration-chart";
import { BreathingChart } from "@/features/dashboards/patient/components/breathing-chart";
import { EnvironmentChart } from "@/features/dashboards/patient/components/environment-chart";
import { HealthCorrelationChart } from "@/features/dashboards/patient/components/health-correlation-chart";

export default function PatientDashboard() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Patient Dashboard</h1>
          <p className="text-muted-foreground">Monitor your sleep patterns, health metrics, and mattress performance</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Row 1 - Interactive Charts with Filtering */}
          <SleepQualityChart />
          <TemperatureChart />

          {/* Row 2 - Interactive Charts with Filtering */}
          <HeartRateChart />
          <MovementChart />

          {/* Row 3 - Static Charts */}
          <SleepStagesChart />
          <SleepDurationChart />

          {/* Row 4 - Static Charts */}
          <BreathingChart />
          <EnvironmentChart />

          {/* Row 5 - Correlation Chart */}
          <HealthCorrelationChart />
        </div>
      </div>
    </div>
  );
}
