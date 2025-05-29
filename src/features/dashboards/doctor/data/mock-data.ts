import type {
  VitalSignsData,
  PatientComparisonData,
  AlertTimelineData,
  HealthImprovementData,
  DisorderDistributionData,
  ActivityData,
  TreatmentData,
  ProgressRadarData,
  MedicationCorrelationData,
  PatientLoadData,
  DoctorFilterPeriod,
  PatientFilter,
} from "../types"

export const generateVitalSignsData = (period: DoctorFilterPeriod): VitalSignsData[] => {
  const data: VitalSignsData[] = []
  let hours: number

  switch (period) {
    case "24h":
      hours = 24
      break
    case "7d":
      hours = 168
      break
    case "30d":
      hours = 720
      break
    case "90d":
      hours = 2160
      break
    default:
      hours = 168
  }

  for (let i = 0; i < hours; i++) {
    const time = new Date()
    time.setHours(time.getHours() - (hours - i))

    data.push({
      timestamp: time.toISOString(),
      heartRate: Math.floor(Math.random() * 40) + 60, // 60-100 BPM
      bloodPressureSystolic: Math.floor(Math.random() * 40) + 110, // 110-150
      bloodPressureDiastolic: Math.floor(Math.random() * 20) + 70, // 70-90
      temperature: 36.5 + (Math.random() - 0.5) * 2, // 35.5-37.5°C
      respiration: Math.floor(Math.random() * 8) + 12, // 12-20 breaths/min
    })
  }

  return data
}

export const generatePatientComparisonData = (filter: PatientFilter): PatientComparisonData[] => {
  const allPatients = [
    { patientId: "P001", patientName: "John Smith", avgSleepQuality: 85, avgSleepDuration: 7.2, avgRestlessness: 15 },
    { patientId: "P002", patientName: "Sarah Johnson", avgSleepQuality: 92, avgSleepDuration: 8.1, avgRestlessness: 8 },
    { patientId: "P003", patientName: "Mike Davis", avgSleepQuality: 78, avgSleepDuration: 6.8, avgRestlessness: 25 },
    { patientId: "P004", patientName: "Emily Brown", avgSleepQuality: 88, avgSleepDuration: 7.9, avgRestlessness: 12 },
    { patientId: "P005", patientName: "David Wilson", avgSleepQuality: 65, avgSleepDuration: 5.5, avgRestlessness: 35 },
    { patientId: "P006", patientName: "Lisa Garcia", avgSleepQuality: 90, avgSleepDuration: 8.3, avgRestlessness: 10 },
    {
      patientId: "P007",
      patientName: "Robert Miller",
      avgSleepQuality: 72,
      avgSleepDuration: 6.2,
      avgRestlessness: 28,
    },
    { patientId: "P008", patientName: "Jennifer Lee", avgSleepQuality: 94, avgSleepDuration: 8.5, avgRestlessness: 6 },
  ]

  switch (filter) {
    case "critical":
      return allPatients.filter((p) => p.avgSleepQuality < 75)
    case "stable":
      return allPatients.filter((p) => p.avgSleepQuality >= 75 && p.avgSleepQuality < 90)
    case "improving":
      return allPatients.filter((p) => p.avgSleepQuality >= 90)
    default:
      return allPatients
  }
}

export const generateAlertTimelineData = (period: DoctorFilterPeriod): AlertTimelineData[] => {
  const data: AlertTimelineData[] = []
  const patients = ["P001", "P002", "P003", "P004", "P005"]
  const patientNames = ["John Smith", "Sarah Johnson", "Mike Davis", "Emily Brown", "David Wilson"]
  const alertTypes = ["HeartRate", "Temperature", "Breathing", "Movement", "BloodPressure"]

  let hours: number
  switch (period) {
    case "24h":
      hours = 24
      break
    case "7d":
      hours = 168
      break
    case "30d":
      hours = 720
      break
    case "90d":
      hours = 2160
      break
    default:
      hours = 168
  }

  const alertCount = Math.floor(hours / 12) // Average 1 alert per 12 hours

  for (let i = 0; i < alertCount; i++) {
    const time = new Date()
    time.setHours(time.getHours() - Math.floor(Math.random() * hours))

    const patientIndex = Math.floor(Math.random() * patients.length)

    data.push({
      time: time.toISOString(),
      patientId: patients[patientIndex],
      patientName: patientNames[patientIndex],
      alertType: alertTypes[Math.floor(Math.random() * alertTypes.length)],
      severity: Math.floor(Math.random() * 5) + 1,
      resolved: Math.random() > 0.3, // 70% resolved
    })
  }

  return data.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
}

export const healthImprovementData: HealthImprovementData[] = [
  { date: "2024-01-01", healthScore: 65, baselineScore: 60, targetScore: 85 },
  { date: "2024-01-08", healthScore: 68, baselineScore: 60, targetScore: 85 },
  { date: "2024-01-15", healthScore: 72, baselineScore: 60, targetScore: 85 },
  { date: "2024-01-22", healthScore: 75, baselineScore: 60, targetScore: 85 },
  { date: "2024-01-29", healthScore: 78, baselineScore: 60, targetScore: 85 },
  { date: "2024-02-05", healthScore: 82, baselineScore: 60, targetScore: 85 },
  { date: "2024-02-12", healthScore: 85, baselineScore: 60, targetScore: 85 },
  { date: "2024-02-19", healthScore: 87, baselineScore: 60, targetScore: 85 },
]

export const disorderDistributionData: DisorderDistributionData[] = [
  { name: "Sleep Apnea", value: 35, fill: "#0088FE" },
  { name: "Insomnia", value: 28, fill: "#00C49F" },
  { name: "Restless Leg", value: 18, fill: "#FFBB28" },
  { name: "Narcolepsy", value: 12, fill: "#FF8042" },
  { name: "Other", value: 7, fill: "#8884D8" },
]

export const activityData: ActivityData[] = [
  { day: "Mon", actualActivity: 7200, recommendedActivity: 8000, restQuality: 78 },
  { day: "Tue", actualActivity: 8500, recommendedActivity: 8000, restQuality: 82 },
  { day: "Wed", actualActivity: 6800, recommendedActivity: 8000, restQuality: 75 },
  { day: "Thu", actualActivity: 9200, recommendedActivity: 8000, restQuality: 85 },
  { day: "Fri", actualActivity: 7800, recommendedActivity: 8000, restQuality: 80 },
  { day: "Sat", actualActivity: 10500, recommendedActivity: 8000, restQuality: 88 },
  { day: "Sun", actualActivity: 6200, recommendedActivity: 8000, restQuality: 72 },
]

export const treatmentData: TreatmentData[] = [
  { week: 1, efficacyScore: 45, targetMin: 70, targetMax: 90 },
  { week: 2, efficacyScore: 52, targetMin: 70, targetMax: 90 },
  { week: 3, efficacyScore: 58, targetMin: 70, targetMax: 90 },
  { week: 4, efficacyScore: 65, targetMin: 70, targetMax: 90 },
  { week: 5, efficacyScore: 72, targetMin: 70, targetMax: 90 },
  { week: 6, efficacyScore: 78, targetMin: 70, targetMax: 90 },
  { week: 7, efficacyScore: 82, targetMin: 70, targetMax: 90 },
  { week: 8, efficacyScore: 85, targetMin: 70, targetMax: 90 },
]

export const progressRadarData: ProgressRadarData[] = [
  { metric: "Mobility", initialScore: 45, currentScore: 78, targetScore: 85 },
  { metric: "Pain Level", initialScore: 80, currentScore: 35, targetScore: 20 },
  { metric: "Sleep Quality", initialScore: 55, currentScore: 82, targetScore: 90 },
  { metric: "Energy Level", initialScore: 40, currentScore: 75, targetScore: 85 },
  { metric: "Mood", initialScore: 50, currentScore: 80, targetScore: 85 },
  { metric: "Cognitive Function", initialScore: 60, currentScore: 85, targetScore: 90 },
]

export const medicationCorrelationData: MedicationCorrelationData[] = [
  { adherenceRate: 95, healthImprovement: 85, patientId: "P001", patientName: "John Smith" },
  { adherenceRate: 88, healthImprovement: 72, patientId: "P002", patientName: "Sarah Johnson" },
  { adherenceRate: 92, healthImprovement: 78, patientId: "P003", patientName: "Mike Davis" },
  { adherenceRate: 76, healthImprovement: 45, patientId: "P004", patientName: "Emily Brown" },
  { adherenceRate: 85, healthImprovement: 68, patientId: "P005", patientName: "David Wilson" },
  { adherenceRate: 98, healthImprovement: 92, patientId: "P006", patientName: "Lisa Garcia" },
  { adherenceRate: 82, healthImprovement: 58, patientId: "P007", patientName: "Robert Miller" },
  { adherenceRate: 90, healthImprovement: 82, patientId: "P008", patientName: "Jennifer Lee" },
]

export const patientLoadData: PatientLoadData[] = [
  { value: 45, name: "Critical Care", fill: "#FF4444" },
  { value: 32, name: "Intensive Monitoring", fill: "#FF8800" },
  { value: 28, name: "Standard Care", fill: "#FFBB33" },
  { value: 18, name: "Recovery", fill: "#00C851" },
  { value: 12, name: "Discharge Ready", fill: "#007E33" },
]
