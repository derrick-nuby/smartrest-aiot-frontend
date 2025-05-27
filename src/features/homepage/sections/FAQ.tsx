import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle } from "lucide-react"

export function FAQ() {
  const faqs = [
    {
      question: "How accurate is the sleep monitoring?",
      answer:
        "Our IoT sensors provide medical-grade accuracy with less than 2% variance compared to clinical polysomnography. The system uses advanced AI algorithms to analyze multiple data points including heart rate, breathing patterns, movement, and temperature for comprehensive sleep stage detection.",
    },
    {
      question: "Is my health data secure and private?",
      answer:
        "Absolutely. We implement bank-level security with AES-256 encryption, HIPAA compliance, and GDPR adherence. Your data is never sold to third parties, and you maintain complete control over your information with the ability to export or delete it at any time.",
    },
    {
      question: "How long does the device battery last?",
      answer:
        "The SmartRest sensors feature industry-leading battery life of up to 30 days on a single charge under typical usage. The device includes wireless charging capabilities and low-battery alerts to ensure uninterrupted monitoring.",
    },
    {
      question: "Can multiple people use the same mattress?",
      answer:
        "Yes! Our advanced sensor array can distinguish between multiple users and track individual sleep patterns simultaneously. Each person gets their own personalized dashboard and insights while sharing the same SmartRest system.",
    },
    {
      question: "What happens if my internet connection is lost?",
      answer:
        "The SmartRest system includes local storage capabilities and can operate offline for up to 7 days. Once connectivity is restored, all data is automatically synchronized to the cloud, ensuring no sleep data is ever lost.",
    },
    {
      question: "Do you offer integration with existing healthcare systems?",
      answer:
        "Yes, we provide comprehensive API integration for healthcare providers, including compatibility with major EMR systems, FHIR standards, and custom integration options. Our enterprise solutions are designed specifically for clinical environments.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about SmartRest technology and features
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircle className="mr-3 h-6 w-6 text-blue-600" />
                Common Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Still have questions?</h3>
                <p className="text-gray-600 mb-4">
                  Our support team is here to help you get the most out of your SmartRest experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="mailto:support@smartrest.com" className="text-blue-600 hover:underline">
                    support@smartrest.com
                  </a>
                  <span className="text-gray-400 hidden sm:inline">•</span>
                  <a href="tel:+1-800-SMARTREST" className="text-blue-600 hover:underline">
                    1-800-SMARTREST
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
