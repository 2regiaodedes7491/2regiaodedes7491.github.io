import { Metadata } from "next";
import { RoboticsSection } from "@/components/sections/robotics-section";
import { EngineeringSection } from "@/components/sections/engineering-section";
import { TeachingSection } from "@/components/sections/teaching-section";
import { LeadershipSection } from "@/components/sections/leadership-section";
import { RecognitionSection } from "@/components/sections/recognition-section";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Experience — Stavya Srinath",
  description: "Robotics leadership, electrical systems engineering, STEM teaching, Sanskrit instruction, and community leadership.",
};

export default function ExperiencePage() {
  return (
    <>
      <section className="section-site border-b border-border/60 bg-surface/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-primary/80">Experience</p>
          <h1 className="mt-4 font-heading text-4xl sm:text-5xl font-semibold tracking-tight">
            Where I work
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Competitive robotics, electrical architecture, education, and community leadership.
          </p>
          <nav aria-label="Experience sections" className="mt-8 flex flex-wrap gap-2">
            {[
              { href: "#robotics", label: "Robotics" },
              { href: "#electrical", label: "Electrical" },
              { href: "#teaching", label: "Teaching" },
              { href: "#leadership", label: "Leadership" },
              { href: "#recognition", label: "Recognition" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </section>
      <RoboticsSection />
      <EngineeringSection />
      <TeachingSection />
      <LeadershipSection />
      <RecognitionSection />
      <ContactSection />
    </>
  );
}