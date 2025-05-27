import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Building2, Award, Users } from "lucide-react";

export function PartnersLogos() {
  const hospitals = [
    { name: "Mayo Clinic", logo: "https://img.logo.dev/mayoclinic.org?token=pk_EukGe_j0RaqwDHREVfu85g&size=120" },
    { name: "Johns Hopkins", logo: "https://img.logo.dev/hopkinsmedicine.org?token=pk_EukGe_j0RaqwDHREVfu85g&size=120" },
    { name: "Cleveland Clinic", logo: "https://img.logo.dev/clevelandclinic.org?token=pk_EukGe_j0RaqwDHREVfu85g&size=120" },
    { name: "Mass General", logo: "https://img.logo.dev/massgeneral.org?token=pk_EukGe_j0RaqwDHREVfu85g&size=120" },
    { name: "Stanford Health", logo: "https://img.logo.dev/stanfordhealthcare.org?token=pk_EukGe_j0RaqwDHREVfu85g&size=120" },
    { name: "UCLA Medical", logo: "https://img.logo.dev/uclahealth.org?token=pk_EukGe_j0RaqwDHREVfu85g&size=120" },
  ];

  const research = [
    { name: "Harvard Medical", logo: "https://img.logo.dev/hms.harvard.edu?token=pk_EukGe_j0RaqwDHREVfu85g&size=120" },
    { name: "MIT Research", logo: "https://img.logo.dev/mit.edu?token=pk_EukGe_j0RaqwDHREVfu85g&size=120" },
    { name: "NIH Institute", logo: "https://img.logo.dev/nih.gov?token=pk_EukGe_j0RaqwDHREVfu85g&size=120" },
    { name: "Sleep Foundation", logo: "https://img.logo.dev/sleepfoundation.org?token=pk_EukGe_j0RaqwDHREVfu85g&size=120" },
  ];

  const certifications = [
    { name: "FDA Approved", logo: "https://img.logo.dev/fda.gov?token=pk_EukGe_j0RaqwDHREVfu85g&size=120" },
    { name: "CE Certified", logo: "https://img.logo.dev/ec.europa.eu?token=pk_EukGe_j0RaqwDHREVfu85g&size=120" },
    { name: "ISO 27001", logo: "https://img.logo.dev/iso.org?token=pk_EukGe_j0RaqwDHREVfu85g&size=120" },
    { name: "HIPAA Compliant", logo: "https://img.logo.dev/hhs.gov?token=pk_EukGe_j0RaqwDHREVfu85g&size=120" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Leading Institutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            SmartRest is trusted by top hospitals, research institutions, and healthcare organizations worldwide
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Building2 className="mr-3 h-6 w-6 text-blue-600" />
                Healthcare Partners
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                {hospitals.map((hospital, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
                  >
                    <Image
                      src={hospital.logo || "/placeholder.svg"}
                      alt={`${hospital.name} logo`}
                      width={120}
                      height={60}
                      className="max-w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Users className="mr-3 h-6 w-6 text-green-600" />
                Research Institutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                {research.map((institution, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
                  >
                    <Image
                      src={institution.logo || "/placeholder.svg"}
                      alt={`${institution.name} logo`}
                      width={120}
                      height={60}
                      className="max-w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Award className="mr-3 h-6 w-6 text-purple-600" />
                Certifications & Compliance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
                  >
                    <Image
                      src={cert.logo || "/placeholder.svg"}
                      alt={`${cert.name} certification`}
                      width={120}
                      height={60}
                      className="max-w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Join Our Partner Network</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Interested in partnering with SmartRest? We&apos;re always looking to collaborate with innovative
                  healthcare organizations and research institutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="mailto:partnerships@smartrest.com" className="text-blue-600 hover:underline font-medium">
                    partnerships@smartrest.com
                  </a>
                  <span className="text-gray-400 hidden sm:inline">•</span>
                  <a href="/partners" className="text-blue-600 hover:underline font-medium">
                    Learn More About Partnerships
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
