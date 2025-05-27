import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Server, Zap, Code } from "lucide-react"

export function Integrations() {
  const integrations = [
    {
      name: "Laravel API",
      description: "RESTful API backend",
      icon: Code,
      color: "bg-red-100 text-red-600",
      status: "Active",
    },
    {
      name: "PostgreSQL",
      description: "Primary database",
      icon: Database,
      color: "bg-blue-100 text-blue-600",
      status: "Connected",
    },
    {
      name: "Redis",
      description: "Caching & sessions",
      icon: Zap,
      color: "bg-orange-100 text-orange-600",
      status: "Active",
    },
    {
      name: "React",
      description: "Frontend framework",
      icon: Code,
      color: "bg-cyan-100 text-cyan-600",
      status: "Running",
    },
  ]

  const externalIntegrations = [
    { name: "AWS IoT Core", status: "Connected" },
    { name: "Google Cloud AI", status: "Active" },
    { name: "Stripe Payments", status: "Configured" },
    { name: "Twilio SMS", status: "Active" },
    { name: "SendGrid Email", status: "Active" },
    { name: "Slack Notifications", status: "Connected" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">System Integrations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built on modern, scalable technology stack with seamless third-party integrations
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {integrations.map((integration, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${integration.color}`}
                  >
                    <integration.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold mb-2">{integration.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{integration.description}</p>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {integration.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">External Service Integrations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {externalIntegrations.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">{service.name}</span>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {service.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-6">
                <Server className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg font-semibold mb-2">API-First Architecture</h3>
                <p className="text-gray-600">
                  Our RESTful API enables seamless integration with existing healthcare systems, EMRs, and third-party
                  applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
