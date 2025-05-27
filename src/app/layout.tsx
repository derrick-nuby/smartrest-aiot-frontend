import { Work_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { generateMetadata, viewport } from "./metadata";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export { generateMetadata, viewport };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${workSans.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

