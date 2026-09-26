// data/resume.ts
// Single source of truth — all content from Neel Patel's resume PDF.
// Edit this file to update any content displayed on the site.

export const SITE_URL = "https://patel-neel.netlify.app";

export const personal = {
  name: "Neel Patel",
  title: "CNC Set-Up Operator | CNC Machinist | Fabrication & Manufacturing",
  titleShort: "CNC Set-Up Operator & Machinist",
  location: "Brampton, Ontario, Canada",
  locationDisplay: "Brampton, Ontario",
  phone: "(289) 885-3846",
  email: "patelneel4820@gmail.com",
  resumePdf: "/Neel_Patel_Resume.pdf",
} as const;

export const heroSummary =
  "CNC Set-Up Operator and Machinist with hands-on experience in 4-axis CNC operations, laser cutting, press-brake, and precision inspection — skilled with Haas and Mitsubishi controls, SolidWorks, and AutoCAD.";

export const professionalSummary =
  "CNC Set-Up Operator and Machinist with hands-on experience in CNC machining, 4-axis CNC operations, CNC machine setup, tooling, machine maintenance, troubleshooting, CNC laser cutting, press-brake operations, and precision inspection. Experienced in reading and interpreting fabrication drawings, engineering drawings, blueprints, dimensions, tolerances, and production specifications. Skilled with Haas and Mitsubishi CNC controls, SolidWorks, AutoCAD, vernier calipers, micrometers, and manufacturing processes. Strong mechanical aptitude with experience supporting production requirements, quality standards, preventive maintenance, equipment troubleshooting, and process improvement. Experienced supervising and supporting production teams, communicating production information, and working with minimal supervision while maintaining safe, accurate, and efficient operations.";

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  location: string | null;
  dateRange: string;
  dateStart: string;
  dateEnd: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "metacut",
    role: "CAD Designer / CNC Laser & Press Brake Operator",
    company: "Metacut Inc.",
    location: "Mississauga, ON",
    dateRange: "June 2024 – April 2025",
    dateStart: "2024-06",
    dateEnd: "2025-04",
    bullets: [
      "Operated CNC laser cutting and press-brake equipment to fabricate sheet-metal components according to fabrication drawings, blueprints, CAD files, and production specifications.",
      "Created and interpreted 2D/3D SolidWorks and AutoCAD models for sheet-metal components, tooling concepts, and production-ready assemblies.",
      "Generated flat patterns and bend allowances to support accurate CNC fabrication and proper component fit.",
      "Created manufacturing drawings, Bills of Materials (BOMs), and technical specifications to support CNC fabrication operations.",
      "Operated Trumpf TLF 4000 laser equipment and Baykal APHS 31160 press-brake equipment in a production environment.",
      "Applied tooling knowledge, machine settings, and manufacturing processes to support efficient and cost-effective production.",
      "Performed first-off inspections using vernier calipers and micrometers to verify dimensional accuracy and GD&T requirements.",
      "Interpreted complex blueprints, dimensions, tolerances, and GD&T requirements with minimal supervision.",
      "Conducted routine maintenance and troubleshooting of CNC machinery to minimize downtime and maintain machine performance.",
      "Collaborated with production and engineering teams to resolve manufacturing issues and maintain production priorities.",
    ],
  },
  {
    id: "corrtech",
    role: "CNC Machinist",
    company: "Corr-tech Energy Limited",
    location: null,
    dateRange: "December 2022 – November 2023",
    dateStart: "2022-12",
    dateEnd: "2023-11",
    bullets: [
      "Machined precision mechanical components on CNC milling machines, including 4-axis CNC equipment, according to drawings, specifications, and production requirements.",
      "Performed CNC machine setup, including tooling and machine preparation, to support consistent machining operations.",
      "Read and interpreted blueprints and manufacturing drawings to confirm component dimensions, tolerances, and machining requirements.",
      "Adjusted machining parameters and machine settings to maintain production output and component quality.",
      "Selected appropriate cutting tools and tooling based on machining requirements, component geometry, and production needs.",
      "Used micrometers and vernier calipers to inspect finished components and verify dimensional conformance with design specifications.",
      "Supported first-piece and ongoing quality inspections to maintain dimensional accuracy and production standards.",
      "Maintained CNC machines, tooling, and work areas to support reliable and safe manufacturing operations.",
      "Identified machining and dimensional issues and communicated equipment or production problems to the appropriate team members.",
      "Applied practical knowledge of machining processes, cutting tools, equipment operation, and manufacturing methods.",
    ],
  },
  {
    id: "pandavas",
    role: "Production Supervisor",
    company: "Pandavas Machining",
    location: null,
    dateRange: "November 2020 – October 2022",
    dateStart: "2020-11",
    dateEnd: "2022-10",
    bullets: [
      "Directed CNC/VMC production operations to meet quality, productivity, and production targets while maintaining machine uptime.",
      "Coordinated machining and tooling activities supporting the fabrication of mechanical components.",
      "Maintained VMC equipment to support reliable operation, high accuracy, and quality requirements.",
      "Inspected CNC/VMC machines to identify equipment problems and supported troubleshooting and corrective action.",
      "Applied machining, tooling, and equipment knowledge to resolve production issues and improve component accuracy.",
      "Improved manufacturing processes to increase production efficiency and reduce production time and cost.",
      "Prepared production reports and communicated production status, equipment issues, and operational updates to management.",
      "Helped team members understand production priorities, performance targets, and operational requirements.",
      "Supported team members and production activities in a fast-paced manufacturing environment while maintaining quality and safety.",
    ],
  },
];

export type SkillCategory = {
  id: string;
  label: string;
  code: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    id: "cnc-setup",
    label: "CNC & Setup",
    code: "CAT-01",
    skills: [
      "CNC Set-Up",
      "CNC Machine Operation",
      "4-Axis CNC Operations",
      "CNC Milling",
      "CNC Machining Centers",
      "CNC Laser Cutting",
      "Press Brake Operation",
      "Machine Setup",
      "Tool Selection",
      "Tooling",
      "Machine Parameters & Adjustments",
      "Haas CNC Controls",
      "Mitsubishi CNC Controls",
      "Manual Machine Operation",
    ],
  },
  {
    id: "drawings-production",
    label: "Drawings & Production",
    code: "CAT-02",
    skills: [
      "Fabrication Drawings",
      "Engineering Drawings",
      "Blueprints",
      "Shop Drawings",
      "CAD Files",
      "Dimensions & Tolerances",
      "Production Specifications",
      "Work Orders",
      "Manufacturing Documentation",
      "Production Requirements",
      "On-Time Order Completion",
    ],
  },
  {
    id: "quality-inspection",
    label: "Quality & Inspection",
    code: "CAT-03",
    skills: [
      "First-Piece Inspection",
      "Precision Dimensional Inspection",
      "Vernier Calipers",
      "Micrometers",
      "Tape Measure",
      "Gauges",
      "GD&T",
      "Dimensional Verification",
      "Quality Control",
      "Attention to Detail",
    ],
  },
  {
    id: "maintenance-troubleshooting",
    label: "Maintenance & Troubleshooting",
    code: "CAT-04",
    skills: [
      "Preventive Maintenance",
      "Daily PM Checks",
      "CNC Equipment Maintenance",
      "Equipment Troubleshooting",
      "Machine Inspection",
      "Corrective Adjustments",
      "Equipment Malfunction Reporting",
      "Production Problem Solving",
      "Machine Uptime",
    ],
  },
  {
    id: "cad-software",
    label: "CAD & Software",
    code: "CAT-05",
    skills: ["SolidWorks", "AutoCAD", "CATIA V5", "Microsoft Office 365"],
  },
];

export type EducationItem = {
  id: string;
  institution: string;
  location: string;
  credential: string;
  dateRange: string;
  dateStart: string;
  dateEnd: string;
  status: "in-progress" | "completed";
  subjects: string[];
};

export const education: EducationItem[] = [
  {
    id: "sheridan",
    institution: "Sheridan College",
    location: "Brampton, Ontario",
    credential: "Mechanical Engineering Design",
    dateRange: "January 2024 – August 2026",
    dateStart: "2024-01",
    dateEnd: "2026-08",
    status: "in-progress",
    subjects: [
      "Mechanical Design",
      "SolidWorks",
      "AutoCAD",
      "CATIA V5",
      "Engineering Drawings",
      "Manufacturing Processes",
      "CNC & Machining Fundamentals",
      "Engineering Materials",
      "Mechanical Components",
      "Technical Documentation",
    ],
  },
  {
    id: "igtr",
    institution: "Indo-German Tool Room (IGTR)",
    location: "Ahmedabad, India",
    credential: "Diploma in Tool & Die Making",
    dateRange: "August 2016 – September 2020",
    dateStart: "2016-08",
    dateEnd: "2020-09",
    status: "completed",
    subjects: [
      "Tool & Die Design",
      "CNC Machining",
      "CNC Milling",
      "Tool Design",
      "Die Design",
      "Jigs & Fixtures",
      "Engineering Drawing",
      "Precision Measurement",
      "Manufacturing Technology",
      "Machining Processes",
      "Cutting Tools",
    ],
  },
];

export const additionalStrengths = [
  "Strong mechanical aptitude",
  "CNC setup and operation",
  "4-axis CNC experience",
  "Precision measurement",
  "Blueprint and fabrication drawing interpretation",
  "Preventive maintenance",
  "Equipment troubleshooting",
  "Tool selection",
  "Quality and dimensional accuracy",
  "Production prioritization",
  "Team building and support",
  "Ability to train and support employees",
  "Attention to detail",
  "Safe work practices",
  "Ability to work independently",
];
