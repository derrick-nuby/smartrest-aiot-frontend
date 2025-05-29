"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Settings, Bell, User, CreditCard, Package } from "lucide-react";

export default function CustomerSettingsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">Customer Settings</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Account Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Account Information
            </CardTitle>
            <CardDescription>
              Update your account and contact information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company-name">Company Name</Label>
              <Input id="company-name" defaultValue="SmartREST Solutions" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="billing-address">Billing Address</Label>
              <Input id="billing-address" defaultValue="123 Business Ave, Tech City, TC 12345" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tax-id">Tax ID / VAT Number</Label>
              <Input id="tax-id" defaultValue="TAX-123456789" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Select defaultValue="healthcare">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="hospitality">Hospitality</SelectItem>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="corporate">Corporate</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Product Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Product Management
            </CardTitle>
            <CardDescription>
              Configure your product preferences and settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="default-warranty">Default Warranty Period (months)</Label>
              <Input id="default-warranty" type="number" defaultValue="24" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="support-level">Support Level</Label>
              <Select defaultValue="premium">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Basic</SelectItem>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-updates">Automatic Product Updates</Label>
              <Switch id="auto-updates" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="remote-diagnostics">Remote Diagnostics</Label>
              <Switch id="remote-diagnostics" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Billing & Payments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Billing & Payments
            </CardTitle>
            <CardDescription>
              Manage your billing preferences and payment methods
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="billing-cycle">Billing Cycle</Label>
              <Select defaultValue="monthly">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="annually">Annually</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="currency">Preferred Currency</Label>
              <Select defaultValue="usd">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD</SelectItem>
                  <SelectItem value="eur">EUR</SelectItem>
                  <SelectItem value="gbp">GBP</SelectItem>
                  <SelectItem value="cad">CAD</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-pay">Automatic Payments</Label>
              <Switch id="auto-pay" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="invoice-email">Email Invoices</Label>
              <Switch id="invoice-email" defaultChecked />
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
              Configure your notification preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="notification-email">Notification Email</Label>
              <Input id="notification-email" type="email" defaultValue="notifications@company.com" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="product-updates">Product Updates</Label>
              <Switch id="product-updates" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="maintenance-alerts">Maintenance Alerts</Label>
              <Switch id="maintenance-alerts" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="billing-notifications">Billing Notifications</Label>
              <Switch id="billing-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="marketing-emails">Marketing Emails</Label>
              <Switch id="marketing-emails" />
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
