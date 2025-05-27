import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Users, BarChart3, AlertCircle, Calendar, ArrowRight } from "lucide-react";

export function DoctorDashboard() {
  const features = [
    {
      icon: Users,
      title: "Multi-Patient Management",
      description: "Monitor up to 100 patients simultaneously",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive sleep pattern analysis and trends",
    },
    {
      icon: AlertCircle,
      title: "Smart Alerts",
      description: "Automated notifications for critical events",
    },
    {
      icon: Calendar,
      title: "Appointment Integration",
      description: "Sync with existing healthcare management systems",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <Badge className="mb-4">Healthcare Professionals</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Doctor Dashboard Preview</h2>
            <p className="text-gray-600 mb-8">
              Empower healthcare providers with comprehensive patient sleep data, advanced analytics, and seamless
              integration with existing workflows.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
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

            <Button size="lg">
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Patient Dashboard
                <Badge variant="outline">Live</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Image
                src="https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg"
                alt="Doctor dashboard interface showing patient sleep data"
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
