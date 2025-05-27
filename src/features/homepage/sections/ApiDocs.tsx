import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Book, Zap, ExternalLink, Copy, Play } from "lucide-react"

export function ApiDocs() {
  const endpoints = [
    {
      method: "GET",
      endpoint: "/api/v1/sleep-data",
      description: "Retrieve sleep data for a specific date range",
      status: "Active",
    },
    {
      method: "POST",
      endpoint: "/api/v1/devices",
      description: "Register a new IoT device",
      status: "Active",
    },
    {
      method: "PUT",
      endpoint: "/api/v1/alerts",
      description: "Update alert configuration",
      status: "Active",
    },
    {
      method: "GET",
      endpoint: "/api/v1/analytics",
      description: "Get sleep analytics and insights",
      status: "Beta",
    },
  ]

  const features = [
    {
      icon: Code,
      title: "RESTful API",
      description: "Clean, intuitive REST endpoints with JSON responses",
    },
    {
      icon: Zap,
      title: "Real-time Data",
      description: "WebSocket connections for live data streaming",
    },
    {
      icon: Book,
      title: "Comprehensive Docs",
      description: "Interactive documentation with code examples and testing tools",
    },
  ]

  const codeExample = `// Example: Fetch sleep data
const response = await fetch('/api/v1/sleep-data', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  params: {
    date_from: '2024-01-01',
    date_to: '2024-01-07'
  }
});

const sleepData = await response.json();`

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">API Documentation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Integrate SmartRest data into your applications with our comprehensive REST API
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center bg-white">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Available Endpoints</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {endpoints.map((endpoint, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Badge
                          variant={
                            endpoint.method === "GET" ? "default" : endpoint.method === "POST" ? "secondary" : "outline"
                          }
                          className="font-mono text-xs"
                        >
                          {endpoint.method}
                        </Badge>
                        <div>
                          <code className="text-sm font-mono">{endpoint.endpoint}</code>
                          <p className="text-xs text-gray-600">{endpoint.description}</p>
                        </div>
                      </div>
                      <Badge variant={endpoint.status === "Active" ? "default" : "secondary"}>{endpoint.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Code Example
                  <Button variant="outline" size="sm">
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{codeExample}</code>
                </pre>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8 text-center">
                <Book className="h-16 w-16 mx-auto mb-6 text-blue-600" />
                <h3 className="text-xl font-semibold mb-4">Interactive API Explorer</h3>
                <p className="text-gray-600 mb-6">
                  Test our API endpoints directly in your browser with our interactive Swagger documentation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View API Docs
                  </Button>
                  <Button variant="outline" size="lg">
                    <Play className="mr-2 h-5 w-5" />
                    Try API
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
