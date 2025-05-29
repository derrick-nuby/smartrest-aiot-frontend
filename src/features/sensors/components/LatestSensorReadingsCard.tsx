"use client"

import { useLatestSensorReadings } from "../hooks/useSensorHooks"
import { SensorType } from "../types/SensorTypes"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Heart, Thermometer, Wind, Activity } from "lucide-react"

interface LatestSensorReadingsCardProps {
  patientId: string
}

export const LatestSensorReadingsCard = ({ patientId }: LatestSensorReadingsCardProps) => {
  const { data, isLoading, isError } = useLatestSensorReadings(patientId)

  const getSensorIcon = (type: string) => {
    switch (type) {
      case SensorType.HEART_RATE:
        return <Heart className="h-5 w-5 text-red-500" />
      case SensorType.TEMPERATURE:
        return <Thermometer className="h-5 w-5 text-orange-500" />
      case SensorType.BREATHING_RATE:
        return <Wind className="h-5 w-5 text-blue-500" />
      default:
        return <Activity className="h-5 w-5 text-primary" />
    }
  }

  const formatSensorName = (type: string): string => {
    return type
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  const getTimeAgo = (timestamp: string): string => {
    const now = new Date()
    const readingTime = new Date(timestamp)
    const diffMs = now.getTime() - readingTime.getTime()
    const diffMins = Math.round(diffMs / 60000)

    if (diffMins < 1) return "Just now"
    if (diffMins === 1) return "1 minute ago"
    if (diffMins < 60) return `${diffMins} minutes ago`

    const diffHours = Math.floor(diffMins / 60)
    if (diffHours === 1) return "1 hour ago"
    if (diffHours < 24) return `${diffHours} hours ago`

    const diffDays = Math.floor(diffHours / 24)
    if (diffDays === 1) return "1 day ago"
    return `${diffDays} days ago`
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Latest Readings</CardTitle>
          <CardDescription>Current sensor data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <Skeleton className="h-6 w-[120px]" />
                <Skeleton className="h-6 w-[80px]" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  if (isError) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Latest Readings</CardTitle>
          <CardDescription>Current sensor data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center p-4">
            <p className="text-destructive">Failed to load sensor readings</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  const sensorTypes = Object.keys(data?.readings || {})

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Latest Readings</CardTitle>
            <CardDescription>Current sensor data</CardDescription>
          </div>
          <Badge variant="outline" className="ml-2">
            Updated {data?.timestamp ? getTimeAgo(data.timestamp) : "N/A"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        {sensorTypes.length === 0 ? (
          <div className="text-center p-4">
            <p className="text-muted-foreground">No sensor readings available</p>
          </div>
        ) : (
          <div className="space-y-4">
            {sensorTypes.map((type) => {
              const reading = data?.readings[type as SensorType]
              if (!reading) return null

              return (
                <div key={type} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getSensorIcon(type)}
                    <span className="font-medium">{formatSensorName(type)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{reading.value}</span>
                    <span className="text-muted-foreground text-sm">{reading.unit}</span>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
