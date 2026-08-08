import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "desika-stotram",
    slug: "desika-stotram",
    title: "Desika Stotram Recitation Web App",
    year: "2026–Present",
    categories: ["Web Development", "Audio Processing", "Education", "Cultural Preservation"],
    summary: "A full-stack web application compiling Sanskrit works to teach students through guided audio recordings and explanations.",
    description: "Developing a comprehensive learning platform for Sanskrit recitation that provides guided audio recordings, explanations, and interactive learning tools for students worldwide. The platform addresses the need for accessible, structured digital learning materials for traditional Sanskrit texts.",
    problem: "Traditional Sanskrit learning materials lack guided digital experiences — students need interactive tools for clip selection, speed control, navigation, repetition, and shareable lesson links.",
    solution: "Building a web application with customizable learning features including audio clip selection, playback speed adjustment, real-time navigation, repetition settings, and shareable lesson links for collaborative learning.",
    impact: "Enabling global access to structured Sanskrit education with modern learning tools.",
    technologies: ["React", "Next.js", "TypeScript", "Web Audio API", "Tailwind CSS", "Vercel"],
    links: [
      { label: "Vedanta Desika Stotras (Reference)", href: "https://ramanuja.org/sri/Web/DesikaStotras", type: "website" },
      { label: "Prapatti Stotras (Reference)", href: "https://www.prapatti.com/categories/vedantadesikasstotramaala.php", type: "website" },
    ],
    media: [],
  },
  {
    id: "adaptive-mobility",
    slug: "adaptive-mobility",
    title: "Adaptive Mobility Recliner",
    year: "2024",
    categories: ["Robotics", "Electrical Engineering", "Assistive Technology", "Hardware"],
    summary: "Applying core robotics design principles to create a functional assistive technology prototype for individuals with severe mobility limitations.",
    description: "Designed and built a powered mobility recliner using CIM motors and a custom wired controller to provide accessible, directional control for individuals with severe mobility limitations. The project integrates motor controllers, electrical components, and control systems to ensure safe, reliable operation.",
    problem: "Individuals with severe mobility limitations lack affordable, customizable powered mobility solutions that can be adapted to their specific needs and control capabilities.",
    solution: "Engineered a custom wired controller with motor controllers driving CIM motors to provide directional powered mobility — integrating electrical systems, control logic, and mechanical actuation into a cohesive assistive device.",
    impact: "Demonstrates application of FRC robotics expertise (motor control, electrical integration, systems design) to real-world accessibility challenges.",
    technologies: ["CIM Motors", "Motor Controllers", "Custom Wired Controller", "Electrical Integration", "Control Systems", "CAD", "Wiring", "Soldering"],
    links: [],
    media: [],
  },
];