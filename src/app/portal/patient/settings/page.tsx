"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Settings, Bell, User, Shield, Moon } from "lucide-react";

export default function PatientSettingsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">Patient Settings</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Personal Information
            </CardTitle>
            <CardDescription>
              Update your personal and medical information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="emergency-contact">Emergency Contact</Label>
              <Input id="emergency-contact" defaultValue="+1 (555) 123-4567" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="medical-id">Medical ID</Label>
              <Input id="medical-id" defaultValue="MED-001234" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="insurance">Insurance Provider</Label>
              <Input id="insurance" defaultValue="HealthCare Plus" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="allergies">Known Allergies</Label>
              <Input id="allergies" placeholder="Enter any known allergies" />
            </div>
          </CardContent>
        </Card>

        {/* Sleep Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Moon className="h-5 w-5" />
              Sleep Preferences
            </CardTitle>
            <CardDescription>
              Configure your sleep monitoring and comfort settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bedtime">Preferred Bedtime</Label>
              <Input id="bedtime" type="time" defaultValue="22:00" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="wake-time">Preferred Wake Time</Label>
              <Input id="wake-time" type="time" defaultValue="07:00" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="temperature">Preferred Temperature (°F)</Label>
              <Input id="temperature" type="number" defaultValue="72" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="smart-wake">Smart Wake Technology</Label>
              <Switch id="smart-wake" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notification Preferences
            </CardTitle>
            <CardDescription>
              Choose how and when you receive notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="notification-time">Quiet Hours Start</Label>
              <Input id="notification-time" type="time" defaultValue="21:00" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notification-end">Quiet Hours End</Label>
              <Input id="notification-end" type="time" defaultValue="08:00" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sleep-reminders">Sleep Reminders</Label>
              <Switch id="sleep-reminders" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="health-alerts">Health Alerts</Label>
              <Switch id="health-alerts" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="appointment-reminders">Appointment Reminders</Label>
              <Switch id="appointment-reminders" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Privacy & Security
            </CardTitle>
            <CardDescription>
              Manage your privacy and security settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="data-sharing">Data Sharing Preference</Label>
              <Select defaultValue="doctors-only">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No Sharing</SelectItem>
                  <SelectItem value="doctors-only">Doctors Only</SelectItem>
                  <SelectItem value="research">Research (Anonymous)</SelectItem>
                  <SelectItem value="full">Full Sharing</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="biometric-auth">Biometric Authentication</Label>
              <Switch id="biometric-auth" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-logout">Auto Logout</Label>
              <Switch id="auto-logout" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="location-tracking">Location Tracking</Label>
              <Switch id="location-tracking" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <div className="flex justify-end space-x-4">
        <Button variant="outline">Reset to Defaults</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}
