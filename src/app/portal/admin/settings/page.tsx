"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Settings, Bell, Shield, Database, Users } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">Admin Settings</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* System Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              System Configuration
            </CardTitle>
            <CardDescription>
              Configure system-wide settings and preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="system-name">System Name</Label>
              <Input id="system-name" defaultValue="SmartREST AIoT System" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="data-retention">Data Retention (days)</Label>
              <Input id="data-retention" type="number" defaultValue="365" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
              <Switch id="maintenance-mode" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="debug-logging">Debug Logging</Label>
              <Switch id="debug-logging" />
            </div>
          </CardContent>
        </Card>

        {/* User Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              User Management
            </CardTitle>
            <CardDescription>
              Control user access and permissions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="max-users">Maximum Users</Label>
              <Input id="max-users" type="number" defaultValue="1000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
              <Input id="session-timeout" type="number" defaultValue="30" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-approval">Auto-approve Registrations</Label>
              <Switch id="auto-approval" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="require-2fa">Require 2FA</Label>
              <Switch id="require-2fa" />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Security Settings
            </CardTitle>
            <CardDescription>
              Configure security and compliance settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password-policy">Minimum Password Length</Label>
              <Input id="password-policy" type="number" defaultValue="8" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="failed-attempts">Max Failed Login Attempts</Label>
              <Input id="failed-attempts" type="number" defaultValue="5" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="encryption">Data Encryption</Label>
              <Switch id="encryption" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="audit-logging">Audit Logging</Label>
              <Switch id="audit-logging" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notification Settings
            </CardTitle>
            <CardDescription>
              Configure system notifications and alerts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="alert-email">Alert Email</Label>
              <Input id="alert-email" type="email" defaultValue="admin@smartrest.com" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <Switch id="email-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sms-alerts">SMS Alerts</Label>
              <Switch id="sms-alerts" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="critical-alerts">Critical System Alerts</Label>
              <Switch id="critical-alerts" defaultChecked />
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
