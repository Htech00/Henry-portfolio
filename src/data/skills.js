import {
  FiCode,
  FiServer,
  FiDatabase,
  FiCreditCard,
  FiLayout,
  FiTool,
} from "react-icons/fi";

// Shared by the client Skills page and the developer Skills & About pages
export const skillGroups = [
  {
    Icon: FiServer,
    name: "Backend",
    key: "backend",
    items: ["Node.js", "Express", "NestJS", "Laravel", "CodeIgniter", "REST APIs"],
  },
  {
    Icon: FiCreditCard,
    name: "Fintech & Integrations",
    key: "integrations",
    items: ["Payment Gateways", "Banking APIs", "KYC/AML", "Remita", "Webhooks"],
  },
  {
    Icon: FiDatabase,
    name: "Databases",
    key: "databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
  },
  {
    Icon: FiCode,
    name: "Languages",
    key: "languages",
    items: ["JavaScript", "TypeScript", "PHP", "Java", "SQL"],
  },
  {
    Icon: FiLayout,
    name: "Frontend",
    key: "frontend",
    items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML/CSS", "jQuery"],
  },
  {
    Icon: FiTool,
    name: "DevOps & Tools",
    key: "tools",
    items: ["Git", "GitHub", "Vercel", "Netlify", "Vite", "VS Code"],
  },
];

export const practices = [
  "Authentication & Authorization",
  "Data Security & Encryption",
  "Testing & Debugging",
  "Performance Optimization",
  "Responsive Design",
  "Accessibility",
];
