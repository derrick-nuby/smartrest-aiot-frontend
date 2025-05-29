"use client"

import { useState } from "react"
import { useHistoricalSensorData } from "../hooks/useSensorHooks"
import { SensorType } from "../types/SensorTypes"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DateRangePicker } from "@/components/ui/date-range-picker"
import { Button } from "@/components/ui/button"
import { Loader2, Download } from "lucide-react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface SensorDataTableProps {
  patientId: string
}

export const SensorDataTable = ({ patientId }: SensorDataTableProps) => {
  const [sensorType, setSensorType] = useState<SensorType | "all">("all")
  const [dateRange, setDateRange] = useState({
    from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    to: new Date(),
  })
  const [limit, setLimit] = useState(50)
  const [page, setPage] = useState(1)

  const { data, isLoading, isError } = useHistoricalSensorData({
    patient_id: patientId,
    type: sensorType === "all" ? undefined : sensorType,
    from: dateRange.from.toISOString().split("T")[0],
    to: dateRange.to.toISOString().split("T")[0],
    limit: limit,
  })

  const formatSensorName = (type: string): string => {
    return type
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  const handleExportCSV = () => {
    if (!data?.readings.length) return

    // Create CSV content
    const headers = ["Reading ID", "Sensor Type", "Value", "Unit", "Timestamp", "Notes"]
    const csvContent = [
      headers.join(","),
      ...data.readings.map((reading) =>
        [
          reading.reading_id,
          reading.sensor_type,
          reading.sensor_value,
          reading.sensor_unit || "",
          reading.timestamp,
          reading.notes || "",
        ].join(","),
      ),
    ].join("\n")

    // Create download link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", `sensor-data-${patientId}-${new Date().toISOString().split("T")[0]}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const paginatedData = data?.readings.slice((page - 1) * 10, page * 10)
  const totalPages = data?.readings ? Math.ceil(data.readings.length / 10) : 0

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle>Sensor Data</CardTitle>
            <CardDescription>Historical sensor readings</CardDescription>
          </div>
          <div className="flex flex-wrap gap-2">
            <Select value={sensorType} onValueChange={(value) => setSensorType(value as SensorType | "all")}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All sensor types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All sensor types</SelectItem>
                {Object.values(SensorType).map((type) => (
                  <SelectItem key={type} value={type}>
                    {formatSensorName(type)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <DateRangePicker value={dateRange} onChange={setDateRange} align="end" className="w-full sm:w-auto" />
            <Button variant="outline" onClick={handleExportCSV} disabled={!data?.readings.length}>
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : isError ? (
          <div className="text-center p-8">
            <p className="text-destructive">Failed to load sensor data. Please try again later.</p>
          </div>
        ) : !data?.readings.length ? (
          <div className="text-center p-8">
            <p className="text-muted-foreground">No sensor data available for the selected period.</p>
          </div>
        ) : (
          <>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sensor Type</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Unit</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedData?.map((reading) => (
                    <TableRow key={reading.reading_id}>
                      <TableCell className="font-medium">{formatSensorName(reading.sensor_type)}</TableCell>
                      <TableCell>{reading.sensor_value}</TableCell>
                      <TableCell>{reading.sensor_unit || "-"}</TableCell>
                      <TableCell>{new Date(reading.timestamp).toLocaleString()}</TableCell>
                      <TableCell>{reading.notes || "-"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {totalPages > 1 && (
              <Pagination className="mt-4">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                      disabled={page === 1}
                    />
                  </PaginationItem>

                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum
                    if (totalPages <= 5) {
                      pageNum = i + 1
                    } else if (page <= 3) {
                      pageNum = i + 1
                    } else if (page >= totalPages - 2) {
                      pageNum = totalPages - 4 + i
                    } else {
                      pageNum = page - 2 + i
                    }

                    return (
                      <PaginationItem key={pageNum}>
                        <PaginationLink isActive={pageNum === page} onClick={() => setPage(pageNum)}>
                          {pageNum}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  })}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={page === totalPages}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </>
        )}
      </CardContent>
    </Card>
  )
}
