// User roles in the system
export enum UserRole {
  PATIENT = "patient",
  DOCTOR = "doctor",
  CUSTOMER = "customer",
  ADMIN = "admin",
}

// Sensor types for smart bed readings
export enum SensorType {
  HEART_RATE = "heart_rate",
  PRESSURE = "pressure",
  TEMPERATURE = "temperature",
  HUMIDITY = "humidity",
  MOVEMENT = "movement",
  SLEEP_QUALITY = "sleep_quality",
}

// Biological sex options
export enum Sex {
  MALE = "M",
  FEMALE = "F",
  OTHER = "O",
}

// Message type classification
export enum MessageType {
  NOTIFICATION = "notification",
  ALERT = "alert",
  GENERAL = "general",
  MEDICAL = "medical",
  SYSTEM = "system",
}

// System log severity levels
export enum LogSeverity {
  DEBUG = "debug",
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
  CRITICAL = "critical",
}

// Instance status
export enum InstanceStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  PENDING = "pending",
  ERROR = "error",
}
