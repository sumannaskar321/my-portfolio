// ─── PORTFOLIO DATA ───────────────────────────────────────────────
// Edit this file to update all your portfolio content in one place.

export const profile = {
  name: "Suman Naskar",
  initials: "SN",
  tagline: "Software Engineer · Full-Stack Developer (MEAN/MERN)",
  bio: "Software Engineer with 5 years of experience in full-stack development using the MEAN/MERN stack. Proficient in Angular, Node.js, Express.js, and MongoDB, building scalable, secure, and high-performance applications. Experienced in designing microservices and microfrontend architectures. Strong expertise in RESTful API development, performance optimization, and delivering enterprise-grade solutions.",
  photo: null, // Set to image path e.g. "/photo.jpg" to show a real photo
  roles: [
    { label: "Full-Stack Dev", color: "purple" },
    { label: "Microservices", color: "teal" },
    { label: "MEAN/MERN Stack", color: "amber" },
    { label: "Scalable Systems", color: "purple" },
    { label: "API Design", color: "teal" },
    // { label: "Cloud & DevOps", color: "amber" },
  ],
};

export const socials = [
  { label: "Email", href: "mailto:sumannaskar506@gmail.com", type: "email" },
  {
    label: "GitHub",
    href: "https://github.com/sumannaskar321",
    type: "github",
  },
  //{ label: "Twitter",  href: "https://twitter.com/sumannaskar", type: "twitter"},
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/suman-naskar-37401216b",
    type: "linkedin",
  },
];

export const contactItems = [
  {
    href: "mailto:sumannaskar506@gmail.com",
    iconName: "email",
    color: "purple",
    label: "Email",
    value: "sumannaskar506@gmail.com",
  },
  {
    href: "https://github.com/sumannaskar321",
    iconName: "github",
    color: "teal",
    label: "GitHub",
    value: "github.com/sumannaskar321",
  },
  {
    href: "https://www.linkedin.com/in/suman-naskar-37401216b",
    iconName: "linkedin",
    color: "amber",
    label: "LinkedIn",
    value: "linkedin.com/in/suman-naskar-37401216b",
  },
  // {
  //   href: "https://twitter.com/sumannaskar",
  //   iconName: "twitter",
  //   color: "coral",
  //   label: "Twitter / X",
  //   value: "@sumannaskar",
  // },
];

export const getPeriod = (startDateStr, endDateStr, showTotalExp) => {
  const start = new Date(startDateStr);
  const end = endDateStr === "Present" ? new Date() : new Date(endDateStr);

  let months = (end.getFullYear() - start.getFullYear()) * 12;
  months -= start.getMonth();
  months += end.getMonth();
  months += 1; // inclusive

  const yrs = Math.floor(months / 12);
  const mos = months % 12;

  let duration = [];
  if (yrs > 0) duration.push(`${yrs} yr${yrs > 1 ? "s" : ""}`);
  if (mos > 0) duration.push(`${mos} mo${mos > 1 ? "s" : ""}`);

  // if showTotalExp is true, return only the duration and replace yrs/yr to only Y amd for mo/mos to M
  if (showTotalExp)
    return duration
      .join(" ")
      .replace(/yr/g, "y")
      .replace(/mo/g, "m")
      .replace(/s/g, "")
      .replace(/ /g, "");

  const startYear = start.getFullYear();
  const endStr = endDateStr === "Present" ? "Present" : end.getFullYear();

  return `${startYear} — ${endStr} · ${duration.join(" ")}`;
};

export const stats = [
  {
    num: getPeriod("Apr 2021", "Present", true),
    label: "Years exp.",
    color: "purple",
  },
  { num: "30+", label: "Projects shipped", color: "teal" },
  { num: "10+", label: "Engineers led", color: "amber" },
];

export const experience = [
  {
    company: "Concentrix Catalyst",
    badge: "PRESENT",
    role: "Software Engineer",
    period: getPeriod("Apr 2024", "Present"),
    desc: [
      "Strengthened and optimized authentication workflows (login, signup, password reset) for T-Mobile applications using OAuth2 and JWT, improving security and user experience.",
      "Implemented MFA (OTP, Google Authenticator, email) to reduce unauthorized access.",
      "Built scalable, high-performance user modules using microfrontend and microservices architecture for T-Mobile applications.",
      "Reduced IAM API calls by 50% via Redis-based state management, lowering infrastructure costs.",
    ],
  },
  {
    company: "Algo Energy Tech Ventures (Xempla)",
    role: "Software Development Engineer - II",
    period: getPeriod("Oct 2021", "Mar 2024"),
    desc: [
      "Led full-stack development using Angular, Node.js, Express.js, MongoDB, and FastAPI, delivering scalable web applications.",
      "Developed Angular-based enterprise dashboards and operational modules for asset tracking and analytics.",
      "Designed dynamic form modules supporting auto-save, media uploads, and PDF reporting, efficiently handling complex nested datasets.",
      "Improved application performance by 40% through code optimization and efficient data handling.",
    ],
  },
  {
    company: "Inceptial Tech",
    role: "Associate Engineer",
    period: getPeriod("Apr 2021", "Sep 2021"),
    desc: [
      "Developed ERP web applications for Client Xempla using Angular, Node.js and MongoDB.",
      "Contributed to feature development, testing, and deployment.",
    ],
  },
];

export const education = [
  {
    company: "Gargi Memorial Institute of Technology, West Bengal",
    role: "Bachelor of Technology in Computer Science",
    period: "Jul 2017 — Jul 2021",
    desc: "",
  },
];

export const projects = [
  {
    icon: "🔐",
    color: "purple",
    name: "Digital Authentication System – T-Mobile",
    desc: "Optimized authentication flows and secured IAM using OAuth2, JWT, MFA, and Redis-based caching.",
    tags: ["Angular", "Node.js", "DynamoDB", "Redis", "MongoDB"],
    github: null,
    live: null,
  },
  {
    icon: "🏢",
    color: "teal",
    name: "Xempla EAM",
    desc: "CMMS platform with ERP features, RBAC, bulk QR code generation, and real-time analytics dashboards.",
    tags: ["Angular", "Node.js", "MongoDB", "FastAPI"],
    github: null,
    live: null,
  },
  // {
  //   icon: "🗂",
  //   color: "amber",
  //   name: "Prettyfolio",
  //   desc: "A personal webapp showcasing experience, interests and achievements.",
  //   tags: ["React", "Next.js"],
  //   github: "https://github.com/sumannaskar/prettyfolio",
  //   live: "https://prettyfolio.vercel.app",
  // },
  // {
  //   icon: "🔍",
  //   color: "coral",
  //   name: "Profilis",
  //   desc: "A high-performance, non-blocking profiler for Python web APIs.",
  //   tags: ["Python", "FastAPI"],
  //   github: "https://github.com/sumannaskar/profilis",
  //   live: null,
  // },
];

export const skills = [
  {
    group: "Frontend",
    color: "purple",
    items: [
      "Angular (v8-v19)",
      "React",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SCSS",
      "RxJS",
      "NgRx",
      "Redux",
    ],
  },
  {
    group: "Backend",
    color: "teal",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Python",
      "FastAPI",
      "MongoDB",
      "SQL",
      "Redis",
    ],
  },
  {
    group: "DevOps & Cloud",
    color: "amber",
    items: [
      "AWS",
      "EC2",
      "S3",
      "Lambda",
      "ApiGateway",
      "Git",
      "Docker",
      "Splunk",
      "CI/CD",
    ],
  },
  {
    group: "Architecture & Tools",
    color: "coral",
    items: [
      "Microservices",
      "Microfrontend",
      "Monolithic",
      "REST APIs",
      "OAuth2",
      "JWT",
    ],
  },
];
