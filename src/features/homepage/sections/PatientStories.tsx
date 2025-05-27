import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

export function PatientStories() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Chronic Insomnia Patient",
      image: "https://avatar.iran.liara.run/public",
      rating: 5,
      quote:
        "SmartRest completely transformed my sleep quality. The AI recommendations helped me identify patterns I never noticed before.",
    },
    {
      name: "Dr. Michael Chen",
      role: "Sleep Specialist",
      image: "https://avatar.iran.liara.run/public",
      rating: 5,
      quote:
        "The data accuracy is remarkable. I can now provide my patients with precise, actionable insights based on comprehensive sleep analysis.",
    },
    {
      name: "Emma Rodriguez",
      role: "New Mother",
      image: "https://avatar.iran.liara.run/public",
      rating: 5,
      quote:
        "As a new mom, tracking my fragmented sleep patterns has been invaluable. SmartRest helps me optimize the little sleep I get.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Patient Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real experiences from people who&apos;ve transformed their sleep with SmartRest
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-gray-700 italic">&quot;{testimonial.quote}&quot;</blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
