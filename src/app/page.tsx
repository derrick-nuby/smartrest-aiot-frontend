import { Hero } from "@/features/homepage/sections/Hero";
import { KeyMetrics } from "@/features/homepage/sections/KeyMetrics";
import { HowItWorks } from "@/features/homepage/sections/HowItWorks";
import { ProductShowcase } from "@/features/homepage/sections/ProductShowcase";
import { LiveDemo } from "@/features/homepage/sections/LiveDemo";
import { PatientStories } from "@/features/homepage/sections/PatientStories";
import { DoctorDashboard } from "@/features/homepage/sections/DoctorDashboard";
import { TemperatureControl } from "@/features/homepage/sections/TemperatureControl";
import { SleepAnalytics } from "@/features/homepage/sections/SleepAnalytics";
import { AlertsMessaging } from "@/features/homepage/sections/AlertsMessaging";
import { TechnicalSpecs } from "@/features/homepage/sections/TechnicalSpecs";
import { Integrations } from "@/features/homepage/sections/Integrations";
import { MobileApp } from "@/features/homepage/sections/MobileApp";
import { SecurityPrivacy } from "@/features/homepage/sections/SecurityPrivacy";
import { AdminTools } from "@/features/homepage/sections/AdminTools";
import { ApiDocs } from "@/features/homepage/sections/ApiDocs";
import { GetStarted } from "@/features/homepage/sections/GetStarted";
import { FAQ } from "@/features/homepage/sections/FAQ";
import { PartnersLogos } from "@/features/homepage/sections/PartnersLogos";
import { Footer } from "@/features/homepage/sections/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <KeyMetrics />
      <HowItWorks />
      <ProductShowcase />
      <LiveDemo />
      <PatientStories />
      <DoctorDashboard />
      <TemperatureControl />
      <SleepAnalytics />
      <AlertsMessaging />
      <TechnicalSpecs />
      <Integrations />
      <MobileApp />
      <SecurityPrivacy />
      <AdminTools />
      <ApiDocs />
      <GetStarted />
      <FAQ />
      <PartnersLogos />
      <Footer />
    </main>
  );
}
