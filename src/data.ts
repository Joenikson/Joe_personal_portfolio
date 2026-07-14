import { Project, Skill, TimelineItem, Service } from './types';

export const portfolioOwner = {
  firstName: "Joe",
  lastName: "Nikson J",
  fullName: "Joe Nikson J",
  title: "Frontend Engineer & UI Engineer",
  greeting: "Hello, I'm",
  tagline:
    "I build high-performance web experiences with pixel-perfect layouts, responsive interfaces, and premium aesthetics.",
  shortIntro:
    "I specialize in turning complex design visions into elegant, accessible, and performant digital realities. Combining deep analytical technical expertise with creative visual intuition, my work focuses on clean architecture and highly intuitive user experiences.",

   avatar: "src/assets/images/joe_photo.jpeg",
   heroIllustration: "src/assets/images/developer_illustration_1783526275736.jpg",

  resumeUrl: "/joe_nikson_resume.pdf",

  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "joenikson592@gmail.com",
    phone: "+91 91 2345 6789",
    location: "Kallakurichi, Tamil Nadu",
  },

  education: "B.E. in Computer Science - Paavai Engineering College",

  objective:
    "To engineer robust, scalable, and beautifully intuitive frontend interfaces that elevate brands and offer exceptional accessibility and user delight.",
};

export const skillsData: Skill[] = [
  {
    name: "HTML5",
    category: "frontend",
    iconName: "FileHtml",
    description: "Semantic layouts, SEO best practices, and standard accessibility patterns (WAI-ARIA)."
  },
  {
    name: "CSS3",
    category: "frontend",
    iconName: "Palette",
    description: "Tailwind CSS, Flexbox, Grid layouts, custom keyframe animations, and modern responsive design."
  },
  {
    name: "JavaScript",
    category: "frontend",
    iconName: "FileCode",
    description: "ES6+ standards, asynchronous operations, event architecture, DOM manipulation, and performance optimization."
  },
  {
    name: "React",
    category: "frontend",
    iconName: "Atom",
    description: "Component architecture, React Hooks, state management, virtual DOM reconciliation, and code-splitting."
  },
  {
    name: "Bootstrap",
    category: "frontend",
    iconName: "Grid3X3",
    description: "Responsive structural frameworks, utility-first custom implementations, and speed prototyping."
  },
  {
    name: "Git",
    category: "tools",
    iconName: "GitBranch",
    description: "Version control systems, branching strategies, merge conflict resolution, and secure codebases."
  },
  {
    name: "GitHub",
    category: "tools",
    iconName: "Github",
    description: "Collaborative workflows, code reviews, Actions (CI/CD pipelines), and open-source contributions."
  },
  {
    name: "Responsive Design",
    category: "frontend",
    iconName: "MonitorPhone",
    description: "Fluid fluid-grid structures, media queries, desktop-first precision, and mobile-first implementations."
  }
];

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "Smart Subscription Manager",
    description:
      "A subscription tracking platform that helps users avoid unwanted auto-renewal charges from free trials and recurring subscriptions.",
    image: "src/assets/images/fintech_project_1783526291301.jpg",
    tags: ["React", "Tailwind CSS", "TypeScript", "D3.js", "Motion"],
    liveUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: "project-2",
    title: "NovaAI Content Engineering Workspace",
    description:
      "An intuitive collaborative portal integrating natural language processors for dynamic article summaries, prompt customization layouts, and automated SEO tags generation.",
    image: "src/assets/images/ai_project_1783526304671.jpg",
    tags: ["React", "Tailwind CSS", "Gemini API", "TypeScript", "Motion"],
    liveUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: "project-3",
    title: "ChronoCraft Luxury Watch Atelier",
    description:
      "A highly responsive, custom-styled e-commerce boutique featuring dynamic checkout components, custom micro-interactions, fluid catalog grids, and elegant typography.",
    image: "src/assets/images/ecommerce_project_1783526321475.jpg",
    tags: ["React", "Tailwind CSS", "State Management", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: "project-4",
    title: "Synapse Collaborative Kanban Workspace",
    description:
      "A multi-workspace digital kanban board featuring real-time client-side transitions, drag-and-drop feedback, modern progress meters, and color-coded tags.",
    image: "src/assets/images/task_project_1783526335666.jpg",
    tags: ["React", "CSS Grid", "TypeScript", "Motion", "LocalStorage"],
    liveUrl: "#",
    githubUrl: "https://github.com",
  },
];
export const timelineData: TimelineItem[] = [
  {
    id: "t-1",
    year: "2024 - Present",
    title: "Lead Frontend Engineer",
    subtitle: "PixelCraft Interactive",
    description:
      "Architecting high-performance client portals and building responsive interfaces using React.",
    type: "internship",
  },
  {
    id: "t-2",
    year: "2025 - 2026",
    title: "Full Stack Web Development",
    subtitle: "Litz Tech - Coimbatore",
    description:
      "Developed responsive dashboard systems and improved accessibility using React and Tailwind CSS.",
    type: "internship",
  },
  {
    id: "t-3",
    year: "2023 - 2027",
    title: "B.E. Computer Science Engineering",
    subtitle: "Paavai Engineering College",
    description:
      "Currently pursuing Computer Science Engineering.",
    type: "education",
  },
  {
    id: "t-4",
    year: "2024",
    title: "Frontend Development",
    subtitle: "Infosys Springboard",
    description:
      "Completed frontend development certification.",
    type: "certification",
  },
];
export const servicesData: Service[] = [
  {
    id: "s-1",
    title: "Frontend Development",
    description:
      "Building fast, responsive and scalable React applications.",
    iconName: "Code2",
  },
  {
    id: "s-2",
    title: "Responsive Web Design",
    description:
      "Designing websites that work perfectly across all devices.",
    iconName: "MonitorPhone",
  },
  {
    id: "s-3",
    title: "UI/UX Implementation",
    description:
      "Creating modern user interfaces with smooth animations and clean layouts.",
    iconName: "Layers",
  },
];