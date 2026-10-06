import {
  FiServer,
  FiCreditCard,
  FiLayout,
  FiDatabase,
  FiShield,
  FiMessageCircle,
} from "react-icons/fi";

// Shared by the client and developer Services pages
export const services = [
  {
    Icon: FiServer,
    title: "Backend & API Development",
    desc: "Secure, well-documented REST APIs and server-side systems built for reliability and scale.",
    tags: ["Node.js", "Express", "Laravel"],
  },
  {
    Icon: FiCreditCard,
    title: "Fintech & Payment Integrations",
    desc: "Payments, transfers, wallets, and fee logic, plus integrations with payment gateways, banking APIs, and KYC/AML providers.",
    tags: ["Payments", "KYC/AML", "Webhooks"],
  },
  {
    Icon: FiLayout,
    title: "Full-Stack Web Development",
    desc: "Complete web applications, from the database to a fast, responsive frontend your users will enjoy.",
    tags: ["React", "Vue.js", "Tailwind"],
  },
  {
    Icon: FiDatabase,
    title: "Database Design",
    desc: "Efficient schemas, safe transactions, and query tuning for data you can trust under heavy load.",
    tags: ["PostgreSQL", "MySQL"],
  },
  {
    Icon: FiShield,
    title: "Security & Performance",
    desc: "Authentication, access control, and encryption for sensitive data, plus optimization for faster, more efficient apps.",
    tags: ["Auth", "Encryption", "Optimization"],
  },
  {
    Icon: FiMessageCircle,
    title: "Technical Consultation",
    desc: "Guidance on architecture, technology choices, and project planning before you commit time and budget.",
    tags: ["Architecture", "Planning"],
  },
];
