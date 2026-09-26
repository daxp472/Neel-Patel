import { personal, skills, education, SITE_URL } from "@/data/resume";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import EducationContact from "@/components/EducationContact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Neel Patel | CNC Set-Up Operator & Machinist | Brampton, Ontario`,
  description:
    "Portfolio of Neel Patel, CNC Set-Up Operator and Machinist based in Brampton, Ontario. Experienced in 4-axis CNC operations, CNC laser cutting, press-brake, SolidWorks, AutoCAD, and precision inspection.",
  alternates: {
    canonical: SITE_URL,
  },
};

// JSON-LD structured data — schema.org/Person & schema.org/WebSite
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: personal.name,
    jobTitle: personal.titleShort,
    description:
      "CNC Set-Up Operator and Machinist with hands-on experience in 4-axis CNC operations, laser cutting, press-brake, SolidWorks, AutoCAD, and precision inspection.",
    url: SITE_URL,
    email: personal.email,
    telephone: personal.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brampton",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    knowsAbout: skills.flatMap((cat) => cat.skills),
    alumniOf: education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.institution,
      address: {
        "@type": "PostalAddress",
        addressLocality: edu.location,
      },
    })),
    hasOccupation: {
      "@type": "Occupation",
      name: "CNC Machinist and Set-Up Operator",
      skills: skills.flatMap((cat) => cat.skills).join(", "),
      responsibilities:
        "Setting up and operating 4-axis CNC mills, CNC laser cutting, press-brake machinery, performing first-off quality inspections with micrometers and vernier calipers.",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: `${personal.name} — CNC Set-Up Operator & Machinist Portfolio`,
    description:
      "Precision manufacturing, 4-axis CNC machining, CAD/CAM, and quality inspection portfolio of Neel Patel.",
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
    inLanguage: "en-CA",
  },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <Experience />
      <Skills />
      <EducationContact />
    </>
  );
}
