import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Smartphone, Download, Star, Users } from "lucide-react";

export function MobileApp() {
  const features = [
    "Real-time sleep monitoring",
    "Personalized insights",
    "Smart alarm integration",
    "Health data export",
    "Family sharing",
    "Offline mode support",
  ];

  const stats = [
    { icon: Star, value: "4.8", label: "App Store Rating" },
    { icon: Download, value: "50K+", label: "Downloads" },
    { icon: Users, value: "12K+", label: "Active Users" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <Badge className="mb-4">Mobile Experience</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">SmartRest Mobile App</h2>
            <p className="text-gray-600 mb-8">
              Take your sleep data with you. Monitor, analyze, and improve your sleep quality from anywhere with our
              intuitive mobile application.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1">
                <Download className="mr-2 h-5 w-5" />
                Download for iOS
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                <Download className="mr-2 h-5 w-5" />
                Download for Android
              </Button>
            </div>
          </div>

          <div className="relative">
            <Card className="overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 border-0">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Smartphone className="mr-2 h-6 w-6" />
                  App Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="relative mx-auto" style={{ width: "250px", height: "500px" }}>
                  <Image
                    src="https://images.pexels.com/photos/6347724/pexels-photo-6347724.jpeg"
                    alt="SmartRest mobile app interface showing sleep dashboard"
                    fill
                    className="object-cover rounded-3xl shadow-2xl"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
              FREE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
