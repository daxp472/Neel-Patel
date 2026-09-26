import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/data/resume";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Neel Patel | CNC Set-Up Operator & Machinist | Brampton, Ontario`,
    template: `%s | Neel Patel — CNC Machinist`,
  },
  description:
    "Portfolio of Neel Patel, CNC Set-Up Operator and Machinist in Brampton, Ontario. Hands-on expertise in 4-axis CNC machining, CNC laser cutting, press-brake operations, SolidWorks, AutoCAD, Haas & Mitsubishi controls, and precision GD&T inspection.",
  keywords: [
    "Neel Patel",
    "CNC Machinist Brampton",
    "CNC Set-Up Operator Ontario",
    "4-Axis CNC Machining",
    "CNC Milling",
    "CNC Laser Cutting",
    "Press Brake Operator",
    "Tool and Die Maker",
    "SolidWorks CAD Designer",
    "AutoCAD Manufacturing",
    "GD&T Inspection",
    "Haas CNC Controls",
    "Mitsubishi CNC Controls",
    "Metacut Inc",
    "Sheridan College Mechanical Engineering",
  ],
  authors: [{ name: "Neel Patel", url: SITE_URL }],
  creator: "Neel Patel",
  publisher: "Neel Patel",
  formatDetection: {
    email: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: "Neel Patel Portfolio",
    title: "Neel Patel | CNC Set-Up Operator & Machinist | Brampton, Ontario",
    description:
      "Portfolio of Neel Patel, CNC Set-Up Operator and Machinist in Brampton, Ontario. 4-axis CNC, Laser Cutting, Press Brake, SolidWorks & Precision Inspection.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Neel Patel — CNC Set-Up Operator & Machinist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neel Patel | CNC Set-Up Operator & Machinist | Brampton, Ontario",
    description:
      "Portfolio of Neel Patel, CNC Set-Up Operator and Machinist in Brampton, Ontario. 4-axis CNC, Laser Cutting, Press Brake, SolidWorks & Precision Inspection.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: SITE_URL,
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <NavBar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
