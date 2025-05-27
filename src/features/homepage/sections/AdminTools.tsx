import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Users, Settings, BarChart3, Shield, Database, Bell } from "lucide-react";

export function AdminTools() {
  const adminFeatures = [
    {
      icon: Users,
      title: "User Management",
      description: "Comprehensive user administration with role-based permissions",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Advanced reporting and analytics dashboard for insights",
    },
    {
      icon: Shield,
      title: "Security Controls",
      description: "Monitor access logs, security events, and compliance status",
    },
    {
      icon: Bell,
      title: "Alert Management",
      description: "Configure system-wide alerts and notification preferences",
    },
    {
      icon: Settings,
      title: "System Configuration",
      description: "Customize system settings, integrations, and workflows",
    },
    {
      icon: BarChart3,
      title: "Performance Monitoring",
      description: "Real-time system performance and health monitoring",
    },
  ];

  const stats = [
    { label: "Active Users", value: "2,847", change: "+12%" },
    { label: "Devices Online", value: "1,923", change: "+8%" },
    { label: "Data Points/Day", value: "45.2M", change: "+15%" },
    { label: "System Uptime", value: "99.97%", change: "+0.02%" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <Badge className="mb-4">Administration</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Powerful Admin Tools</h2>
            <p className="text-gray-600 mb-8">
              Comprehensive administrative interface for managing users, monitoring system performance, and maintaining
              security across your SmartRest deployment.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-gray-50">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                    <Badge variant="outline" className="text-xs mt-1 text-green-600 border-green-600">
                      {stat.change}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              {adminFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg">Access Admin Panel</Button>
          </div>

          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Admin Dashboard
                <Badge variant="outline">Live Preview</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Image
                src="https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg"
                alt="Admin dashboard interface showing user management and system analytics"
                width={600}
                height={400}
                className="w-full"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
