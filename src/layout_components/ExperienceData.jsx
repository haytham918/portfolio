import umichLogo from "../assets/umich-logo-ref-square.png";
import { FcGoogle } from "react-icons/fc";

export const experienceData = [
  {
    id: 1,
    period: "2023 — 2025",
    title: "Research Assistant",
    organization: "University of Michigan",
    areas: [
      "Computer Science Engineering",
      "School of Information",
      "Statistics",
      "Civil & Environmental Engineering",
    ],
    logo: {
      type: "image",
      value: umichLogo,
      label: "University of Michigan",
    },
  },
  {
    id: 2,
    period: "2024 — 2025",
    title: "EECS 482 Operating Systems Teaching Assistant",
    organization: "University of Michigan",
    logo: {
      type: "image",
      value: umichLogo,
      label: "University of Michigan",
    },
  },
  {
    id: 3,
    period: "2025 — 2026",
    title: "Software Engineer",
    organization: "TikTok",
    logo: {
      type: "icon",
      value: "streamline-logos:tiktok-logo-block",
      label: "TikTok",
    },
  },
  {
    id: 4,
    period: "2026",
    title: "Software Engineer",
    organization: "Google",
    logo: {
      type: "component",
      value: FcGoogle,
      label: "Google",
    },
  },
];
