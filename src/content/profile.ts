import { Profile, ExternalLink } from "./types";

export const profile: Profile = {
  name: "Stavya Srinath",
  headline: "Robotics Engineer • Electrical Systems • Student Leader",
  thesis: "I build electrical and autonomous systems, lead high-performing robotics teams, and use engineering to make technical communities more accessible.",
  location: "San Jose, California",
  currentRole: "Vice President, FRC 2813 Gear Heads",
  email: "nrsspv@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/stavya-srinath", type: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/stavya-srinath", type: "linkedin" },
    { label: "Email", href: "mailto:nrsspv@gmail.com", type: "email" },
    { label: "Résumé", href: "/assets/resume.pdf", type: "website" },
  ],
};

export const externalLinks: ExternalLink[] = [
  { label: "FRC 2813 Website", href: "https://team2813.com", type: "team" },
  { label: "The Blue Alliance", href: "https://www.thebluealliance.com/team/2813", type: "blue-alliance" },
  { label: "Chief Delphi CAD Release", href: "https://www.chiefdelphi.com/t/frc-2813-gear-heads-2026-cad-release/519883", type: "chief-delphi" },
  { label: "FRC 2813 Instagram", href: "https://www.instagram.com/frc2813/", type: "instagram" },
  { label: "FRC 2813 Facebook", href: "https://www.facebook.com/team2813/", type: "facebook" },
  { label: "Green Ninja Film Festival", href: "https://web.greenninja.org/resources-gnff", type: "website" },
  { label: "Tabla Niketan (Bharatnatyam)", href: "https://www.tablaniketan.com", type: "website" },
  { label: "Prospect High School Robotics", href: "https://prospect.cuhsd.org/apps/pages/index.jsp?uREC_ID=2250373&type=d&pREC_ID=2574141", type: "website" },
];