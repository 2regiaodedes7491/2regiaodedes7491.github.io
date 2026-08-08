import { Experience, Metric } from "./types";

const metricsFRCVP: Metric[] = [
  { value: "80+", label: "Team Members", context: "Competitive robotics organization" },
  { value: "Top 3%", label: "Global Ranking", context: "FRC worldwide" },
  { value: "4", label: "Regional Finalist Titles", context: "Competition achievements" },
  { value: "3", label: "World Championship Invitations", context: "FRC Championships" },
  { value: "$100K+", label: "Funding Raised", context: "Sponsorships & grants" },
  { value: "430+", label: "Outreach Hours", context: "Community STEM impact" },
  { value: "5,000+", label: "Students Impacted", context: "Outreach programs" },
];

const metricsElectrical: Metric[] = [
  { value: "6 → 25", label: "Electrical Team Growth", context: "Subteam scaling" },
  { value: "4 → 12", label: "Female Participation", context: "Tripled representation" },
  { value: "20+", label: "Teams Adopting Standards", context: "Battery safety protocols" },
];

export const experience: Experience[] = [
  {
    id: "frc-vp",
    organization: "FRC 2813 Gear Heads",
    role: "Vice President",
    start: "May 2026",
    end: "Present",
    location: "Saratoga, CA",
    type: "robotics",
    description: "Direct end-to-end operations for an 80+ member competitive robotics organization, coordinating student leads and adult mentors through weekly sprint planning and milestone tracking.",
    highlights: [
      "Spearheaded technical and operational strategies that propelled the team to a top 3% global ranking, securing 4 Regional Finalist titles and 3 World Championship invitations",
      "Architected sponsorship campaigns and grant proposals that successfully raised $100K+ in funding",
      "Orchestrated large-scale community initiatives including FTC SkillUp Workshop, Girls in STEM Day, and FLL+ micro:bits camps — mobilizing members to log 430+ outreach hours impacting 5,000+ local students",
      "Coordinate weekly sprint planning and milestone tracking across mechanical, electrical, software, and operations subteams",
    ],
    technologies: ["Strategic Planning", "Team Leadership", "Fundraising", "STEM Outreach", "Project Management"],
    metrics: metricsFRCVP,
    links: [
      { label: "Team Website", href: "https://team2813.com", type: "team" },
      { label: "The Blue Alliance", href: "https://www.thebluealliance.com/team/2813", type: "blue-alliance" },
      { label: "Instagram", href: "https://www.instagram.com/frc2813/", type: "instagram" },
    ],
  },
  {
    id: "frc-electrical",
    organization: "FRC 2813 Gear Heads",
    role: "Electrical Lead & Subject Matter Expert",
    start: "Oct 2024",
    end: "Present",
    location: "Saratoga, CA",
    type: "electrical",
    description: "Oversaw the design, wiring, and integration of the robot's complete electrical ecosystem, managing CAN bus networks, Power Distribution Units (PDUs), and MK4i/MK5N swerve drive modules.",
    highlights: [
      "Scaled the electrical subteam from 6 to 25 members and intentionally tripled female participation (4 → 12) by developing targeted, hands-on technical mentorship programs",
      "Designed and integrated CAN bus networks, PDUs, motor controllers, and MK4i/MK5N swerve drive modules",
      "Collaborated with mechanical and software subteams to wire ASICs, integrate complex vision systems, and deploy PathPlanner autonomous routines for highly accurate field navigation",
      "Pioneered rigorous battery safety and handling protocols subsequently adopted as best practices by 20+ FIRST teams nationwide, including a nationally ranked program",
      "Led 2026 robot electrical architecture — documented in Chief Delphi CAD release",
    ],
    technologies: ["CAN Bus", "PDU", "MK4i/MK5N Swerve", "PathPlanner", "Vision Systems", "Battery Safety", "PCB Design", "Soldering", "Wiring"],
    metrics: metricsElectrical,
    links: [
      { label: "2026 CAD Release (Chief Delphi)", href: "https://www.chiefdelphi.com/t/frc-2813-gear-heads-2026-cad-release/519883", type: "chief-delphi" },
      { label: "The Blue Alliance 2026", href: "https://www.thebluealliance.com/team/2813/2026", type: "blue-alliance" },
    ],
  },
  {
    id: "teaching-assistant",
    organization: "Prospect High School",
    role: "Multidisciplinary STEM Teaching Assistant",
    start: "Aug 2024",
    end: "Present",
    location: "Saratoga, CA",
    type: "teaching",
    description: "Selected by faculty as the first multi-serving Teaching Assistant in cohort, simultaneously supporting lab prep, classroom instruction, and grading across 4 rigorous STEM disciplines.",
    highlights: [
      "Break down high-level scientific and mathematical concepts into accessible, digestible explanations for diverse learning styles in Biology, Anatomy & Physiology, and Chemistry",
      "Dedicate weekly hours to tutoring 40 MESA (Mathematics, Engineering, Science Achievement) students, fostering academic confidence and equity in underrepresented STEM communities",
      "Support lab preparation, classroom instruction, and grading across 4 STEM disciplines",
      "210+ students supported through TA and MESA programs",
    ],
    technologies: ["Biology", "Anatomy & Physiology", "Chemistry", "MESA Tutoring", "Curriculum Support"],
    metrics: [
      { value: "4", label: "STEM Disciplines", context: "Simultaneous TA support" },
      { value: "40", label: "MESA Students", context: "Weekly tutoring" },
      { value: "210+", label: "Students Supported", context: "TA + MESA combined" },
    ],
    links: [
      { label: "Prospect High School Robotics", href: "https://prospect.cuhsd.org/apps/pages/index.jsp?uREC_ID=2250373&type=d&pREC_ID=2574141", type: "website" },
    ],
  },
  {
    id: "sanskrit-instructor",
    organization: "Desika Stotrapaadam",
    role: "Sanskrit Instructor & Global Educator",
    start: "2019",
    end: "Present",
    location: "Remote",
    type: "sanskrit",
    description: "Deliver 215+ hours of virtual Sanskrit instruction to an international roster of 40+ students (ages 4–16), designing customized lesson plans that simplify complex phonetics for non-native speakers.",
    highlights: [
      "Grew program enrollment by 470% (7 → 40 students) while sustaining a 90% retention rate by organizing interactive global recitation showcases",
      "Foster cross-cultural connections and celebrate student progress across multiple time zones through structured virtual performances and community events",
      "Design customized lesson plans simplifying complex Sanskrit phonetics for non-native speakers",
      "Organize global recitation showcases and virtual performances",
    ],
    technologies: ["Sanskrit", "Virtual Instruction", "Curriculum Design", "Phonetics", "Cross-cultural Education"],
    metrics: [
      { value: "215+", label: "Instruction Hours", context: "Virtual teaching" },
      { value: "40+", label: "Global Students", context: "Ages 4–16" },
      { value: "470%", label: "Enrollment Growth", context: "7 → 40 students" },
      { value: "90%", label: "Retention Rate", context: "Sustained engagement" },
    ],
    links: [
      { label: "Vedanta Desika Stotras Reference", href: "https://ramanuja.org/sri/Web/DesikaStotras", type: "website" },
      { label: "Prapatti Stotras", href: "https://www.prapatti.com/categories/vedantadesikasstotramaala.php", type: "website" },
    ],
  },
  {
    id: "soap-founder",
    organization: "SOAP@PHS (Save Our Amazing Planet)",
    role: "Founder & President",
    start: "Aug 2023",
    end: "Present",
    location: "San Jose, CA",
    type: "environmental",
    description: "Founded a student-led environmental action group from the ground up, scaling active membership by 300% (10 → 40 students) through engaging sustainability campaigns.",
    highlights: [
      "Directed the end-to-end planning of student-led environmental service projects, coordinating team logistics and volunteer efforts to achieve measurable campus sustainability goals",
      "Directed award-winning environmental media and service initiatives, culminating in a 2025 Green Ninja Film Festival Win for highlighting actionable ecological solutions",
      "Scaled membership from 10 to 40 students (300% growth) through engaging sustainability campaigns",
      "Coordinate environmental service projects and volunteer logistics",
    ],
    technologies: ["Environmental Advocacy", "Project Management", "Community Organizing", "Sustainability"],
    metrics: [
      { value: "10 → 40", label: "Membership Growth", context: "300% increase" },
      { value: "2025", label: "Green Ninja Film Festival Winner", context: "Environmental media" },
    ],
    links: [
      { label: "Green Ninja Film Festival", href: "https://web.greenninja.org/resources-gnff", type: "website" },
      { label: "Green Ninja Blog 2024", href: "https://web.greenninja.org/blog/green-ninja-film-festival-2024", type: "website" },
    ],
  },
];