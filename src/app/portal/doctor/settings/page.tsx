"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Settings, Bell, User, Shield, Clock } from "lucide-react";

export default function DoctorSettingsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">Doctor Settings</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Professional Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Professional Information
            </CardTitle>
            <CardDescription>
              Update your professional details and credentials
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="license-number">Medical License Number</Label>
              <Input id="license-number" defaultValue="MD123456789" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialty">Specialty</Label>
              <Select defaultValue="sleep-medicine">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sleep-medicine">Sleep Medicine</SelectItem>
                  <SelectItem value="pulmonology">Pulmonology</SelectItem>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="neurology">Neurology</SelectItem>
                  <SelectItem value="internal-medicine">Internal Medicine</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="hospital">Hospital/Clinic</Label>
              <Input id="hospital" defaultValue="SmartREST Medical Center" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Input id="experience" type="number" defaultValue="10" />
            </div>
          </CardContent>
        </Card>

        {/* Patient Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Patient Management
            </CardTitle>
            <CardDescription>
              Configure patient monitoring and care settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="consultation-duration">Default Consultation Duration (minutes)</Label>
              <Input id="consultation-duration" type="number" defaultValue="30" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="follow-up-interval">Follow-up Interval (days)</Label>
              <Input id="follow-up-interval" type="number" defaultValue="7" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-reminders">Automatic Appointment Reminders</Label>
              <Switch id="auto-reminders" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="patient-portal">Patient Portal Access</Label>
              <Switch id="patient-portal" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Alert Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Alert Preferences
            </CardTitle>
            <CardDescription>
              Configure when and how you receive patient alerts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="critical-threshold">Critical Alert Threshold</Label>
              <Select defaultValue="high">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="email-alerts">Email Alerts</Label>
              <Switch id="email-alerts" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sms-alerts">SMS Alerts</Label>
              <Switch id="sms-alerts" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="push-notifications">Push Notifications</Label>
              <Switch id="push-notifications" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Security & Privacy */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Security & Privacy
            </CardTitle>
            <CardDescription>
              Manage your security and privacy preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
              <Input id="session-timeout" type="number" defaultValue="60" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="two-factor">Two-Factor Authentication</Label>
              <Switch id="two-factor" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="biometric">Biometric Login</Label>
              <Switch id="biometric" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="data-sharing">Research Data Sharing</Label>
              <Switch id="data-sharing" />
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
