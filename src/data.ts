export const profile = {
  name: "Kim Limkhun",
  role: "Software Engineer",
  tagline:
    "Software Engineering graduate from CADT with hands-on experience in frontend development and backend quality assurance, building reliable, user-friendly web applications. A collaborative team player with strong communication, problem-solving, and adaptability skills, passionate about working with others to deliver quality software and continuously growing as a full-stack developer.",
  about: [
    "I studied Software Engineering at the Cambodia Academy of Digital Technology (CADT), with a strong interest in software development, quality assurance, and continuous learning.",
    "Through two internships and a capstone project, I have gained hands-on experience across the software development lifecycle — building frontend features, designing UI/UX, and validating APIs and business workflows as a QA engineer.",
    "My goal is to become a full-stack developer with a particular focus on back-end development, while continuously improving both my technical and professional skills.",
  ],
  email: "khunkimlim10@gmail.com",
  phone: "096 568 6658",
  phoneHref: "tel:+855965686658",
  location: "Sangkat Toul Sangke II, Khan Russey Keo, Phnom Penh, Cambodia",
  locationShort: "Phnom Penh, Cambodia",
  // Drop your CV into /public with this name to enable the download button.
  cvUrl: "/KimLimkhun-CV.pdf",
  // Drop your photo into /public with this name; initials are shown until then.
  photoUrl: "/me3.JPG",
  socials: [
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/limkhun-kim-637a222ba/",
    },
    { name: "Telegram", icon: "telegram", url: "https://t.me/mrrkhun1" },
    {
      name: "Facebook",
      icon: "facebook",
      url: "https://www.facebook.com/limkhun.kim.330468",
    },
  ] as const,
};

export const stats = [
  { value: "2", label: "Internships" },
  { value: "4+", label: "Years studying SE" },
  { value: "5", label: "Frameworks used" },
];

export type SkillGroup = { title: string; icon: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Fundamentals",
    icon: "◧",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Frameworks & Libraries",
    icon: "⚙",
    items: [
      "Laravel",
      "Elixir",
      "Flutter",
      "REST APIs",
      "React JS",
      "Nuxt.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Data & Tools",
    icon: "⛁",
    items: ["MySQL", "Git", "GitHub", "UI/UX Prototyping"],
  },
  {
    title: "Quality Assurance",
    icon: "✓",
    items: [
      "Test Case Design",
      "Manual Testing",
      "Automated Testing",
      "API Validation",
      "Defect Reporting",
    ],
  },
];

export const softSkills = [
  "Communication",
  "Time Management",
  "Team Collaboration",
  "Adaptability",
  "Responsibility",
  "Empathy",
  "Problem Solving",
];

export const languages = [
  { name: "Khmer", level: "Native", percent: 100 },
  { name: "English", level: "Upper-Intermediate", percent: 75 },
];

export type Links = { demo?: string; video?: string; code?: string };

export type Experience = {
  company: string;
  role: string;
  period: string;
  points: string[];
  tags: string[];
  links?: Links;
};

export const experiences: Experience[] = [
  {
    company: "EKYC Solutions Co., Ltd.",
    role: "Backend Quality Assurance Intern",
    period: "Jan – Jul 2026",
    points: [
      "Validated API behavior, business rules, and transaction workflows.",
      "Designed and executed test cases to validate system functionality and business requirements.",
      "Identified, documented, and reported defects during system testing.",
      "Participated in manual and automated testing activities throughout the software development lifecycle.",
    ],
    tags: ["API Testing", "Test Cases", "Automation", "SDLC"],
    // Paste URLs here — a button only appears for links that are filled in.
    links: { demo: "", video: "", code: "" },
  },
  {
    company: "EKYC Solutions Co., Ltd.",
    role: "Front-End Developer Intern",
    period: "May – Aug 2025",
    points: [
      "Developed and maintained frontend features using React.js and Tailwind CSS.",
      "Collaborated with senior developers to implement new system requirements.",
      "Participated in implementation, debugging, and feature enhancements.",
      "Worked closely with team members within a Kanban-based development environment.",
    ],
    tags: ["React.js", "Tailwind CSS", "Kanban"],
    // Paste URLs here — a button only appears for links that are filled in.
    links: { demo: "", video: "", code: "" },
  },
];

export type Project = {
  title: string;
  subtitle: string;
  role: string;
  period: string;
  description: string;
  points: string[];
  tags: string[];
  links?: Links;
};

export const projects: Project[] = [
  {
    title: "Smart Sched",
    subtitle: "Capstone Project I",
    role: "Frontend Developer & UI Designer",
    period: "Jul – April 2025",
    description:
      "A team scheduling application developed as my first capstone project at CADT. " +
      "My responsibilities included developing the landing and settings screens. " +
      "I also help the team to designed the user interface and user experience for the application.",
    points: [
      "Working with Tailwind and React js",
      "Be able to help team develop frontend components andpages",
      "Designing UI/UX for the application",
    ],
    tags: ["Frontend", "UI/UX", "Scrum", "Team Project"],
    links: { demo: "", video: "", code: "" },
  },
  {
    title: "Tver Task",
    subtitle: "Capstone Project II",
    role: "Frontend Developer & UI Designer",
    period: "Oct – Dec 2025",
    description:
      "A team task-management application built as my second capstone project at CADT." +
      "My responsibilities included developing the focus screen ." +
      "",
    points: [
      "Developed frontend components and integrated system features.",
      "Designed UI/UX prototypes and user workflows.",
      "Collaborated using Scrum methodology.",
      "Participated in project planning, testing, and feature discussions.",
    ],
    tags: ["Frontend", "UI/UX", "Scrum", "Team Project"],
    // Paste URLs here — a button only appears for links that are filled in.
    links: { demo: "", video: "", code: "" },
  },
];

export const education = {
  school: "Cambodia Academy of Digital Technology (CADT)",
  degree: "Bachelor's Degree in Computer Science",
  major: "Specialized in Software Engineering",
  period: "2022 – 2026",
  location: "Phnom Penh",
};
