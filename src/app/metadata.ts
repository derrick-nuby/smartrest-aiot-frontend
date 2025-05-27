import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://smartrest.aiot";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: "SmartRest AIoT - Intelligent Sleep & Health Monitoring",
      template: "%s | SmartRest AIoT",
    },
    description:
      "SmartRest AIoT enhances sleep quality and monitors health using an intelligent mattress with IoT, AI, and mobile/web applications. Track vital signs like heart rate, breathing, temperature, and movement.",
    keywords: [
      "SmartRest AIoT",
      "intelligent mattress",
      "sleep quality",
      "health monitoring",
      "IoT",
      "AI",
      "vital signs monitoring",
      "heart rate tracking",
      "breathing patterns",
      "mattress temperature control",
      "movement sensors",
    ],
    authors: [{ name: "SmartRest AIoT Team" }],
    creator: "SmartRest AIoT",
    publisher: "SmartRest AIoT Solutions",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteUrl,
      siteName: "SmartRest AIoT",
      title: "SmartRest AIoT - Intelligent Sleep & Health Monitoring",
      description:
        "SmartRest AIoT enhances sleep quality and monitors health using an intelligent mattress with IoT, AI, and mobile/web applications. Track vital signs like heart rate, breathing, temperature, and movement.",
      images: [
        {
          url: `${siteUrl}/images/site-main.png`, // Please update this image path if necessary
          width: 1200,
          height: 630,
          alt: "SmartRest AIoT - Intelligent Sleep & Health Monitoring",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "SmartRest AIoT - Intelligent Sleep & Health Monitoring",
      description:
        "SmartRest AIoT enhances sleep quality and monitors health using an intelligent mattress with IoT, AI, and mobile/web applications. Track vital signs like heart rate, breathing, temperature, and movement.",
      images: [`${siteUrl}/images/site-main.png`], // Please update this image path if necessary
      creator: "@SmartRestAIoT", // Consider creating/using an actual Twitter handle
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/images/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" }, // Please update these icon paths if necessary
        { url: "/images/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [{ url: "/images/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }], // Please update these icon paths if necessary
      other: [{ rel: "mask-icon", url: "/images/favicons/safari-pinned-tab.svg", color: "#5bbad5" }], // Please update these icon paths if necessary
    },
    manifest: "/images/favicons/site.webmanifest", // Please update this manifest path if necessary
  };
}