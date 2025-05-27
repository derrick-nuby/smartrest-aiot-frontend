import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function ProductShowcase() {
  const products = [
    {
      name: "SmartRest Pro",
      image: "https://images.pexels.com/photos/8817677/pexels-photo-8817677.jpeg",
      price: "$2,999",
      features: ["Advanced AI Analytics", "Temperature Control", "Heart Rate Monitoring"],
      badge: "Most Popular",
    },
    {
      name: "SmartRest Essential",
      image: "https://images.pexels.com/photos/11416418/pexels-photo-11416418.jpeg",
      price: "$1,799",
      features: ["Basic Sleep Tracking", "Movement Detection", "Mobile App"],
      badge: "Best Value",
    },
    {
      name: "SmartRest Enterprise",
      image: "https://images.pexels.com/photos/30797333/pexels-photo-30797333/free-photo-of-detailed-waning-gibbous-moon-in-winter-sky.jpeg",
      price: "$4,999",
      features: ["Hospital Grade", "Multi-Patient Support", "API Integration"],
      badge: "Healthcare",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your SmartRest</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From personal use to healthcare facilities, we have the perfect solution for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="relative hover:shadow-xl transition-shadow">
              {product.badge && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">{product.badge}</Badge>
              )}
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                <div className="text-3xl font-bold text-blue-600 mb-4">{product.price}</div>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
