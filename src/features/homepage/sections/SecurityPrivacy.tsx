import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, UserCheck, Server, FileCheck } from "lucide-react"

export function SecurityPrivacy() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data encrypted with AES-256 encryption both in transit and at rest",
      badge: "Military Grade",
    },
    {
      icon: Shield,
      title: "GDPR Compliant",
      description: "Full compliance with European data protection regulations",
      badge: "Certified",
    },
    {
      icon: UserCheck,
      title: "Role-Based Access",
      description: "Granular permissions and multi-factor authentication",
      badge: "Enterprise",
    },
    {
      icon: Eye,
      title: "Privacy by Design",
      description: "Data minimization and purpose limitation built into our architecture",
      badge: "Core Principle",
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "SOC 2 Type II certified cloud infrastructure with 99.9% uptime",
      badge: "Audited",
    },
    {
      icon: FileCheck,
      title: "HIPAA Compliant",
      description: "Healthcare-grade security for medical data protection",
      badge: "Healthcare",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Security & Privacy</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your health data deserves the highest level of protection. We implement enterprise-grade security measures
            to keep your information safe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <h3 className="font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-white border-blue-200">
            <CardContent className="p-8 text-center">
              <Shield className="h-16 w-16 mx-auto mb-6 text-blue-600" />
              <h3 className="text-2xl font-bold mb-4">Your Data, Your Control</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We believe in complete transparency about how your data is collected, used, and protected. You maintain
                full control over your health information with the ability to export or delete your data at any time.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="text-green-600 border-green-600">
                  Zero Data Selling
                </Badge>
                <Badge variant="outline" className="text-blue-600 border-blue-600">
                  Data Portability
                </Badge>
                <Badge variant="outline" className="text-purple-600 border-purple-600">
                  Right to Deletion
                </Badge>
                <Badge variant="outline" className="text-orange-600 border-orange-600">
                  Transparent Policies
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
