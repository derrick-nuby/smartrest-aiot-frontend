import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { UserPlus, Mail, LogIn, ArrowRight } from "lucide-react"

export function GetStarted() {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Account",
      description: "Sign up with your email and create your SmartRest profile",
      action: "Register Now",
      time: "2 minutes",
    },
    {
      icon: Mail,
      title: "Verify Email",
      description: "Check your inbox and click the verification link we sent",
      action: "Check Email",
      time: "1 minute",
    },
    {
      icon: LogIn,
      title: "Start Monitoring",
      description: "Log in to your dashboard and begin tracking your sleep",
      action: "Login",
      time: "30 seconds",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started in Minutes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of users who have transformed their sleep quality with SmartRest
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <Card key={index} className="relative text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <Badge variant="outline" className="mb-4">
                    {step.time}
                  </Badge>
                  <Button variant="outline" className="w-full">
                    {step.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Sleep?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Join our community of sleep enthusiasts and start your journey to better rest tonight. No credit card
                required for your free trial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-blue-600">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Schedule Demo
                </Button>
              </div>
              <p className="text-xs text-blue-200 mt-4">14-day free trial • No setup fees • Cancel anytime</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
