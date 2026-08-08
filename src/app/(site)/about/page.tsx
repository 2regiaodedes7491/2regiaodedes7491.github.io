import { Metadata } from "next";
import { AboutSection } from "@/components/sections/about-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "About — Stavya Srinath",
  description: "The common thread behind robotics, electrical engineering, STEM education, Sanskrit instruction, and community building.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-16 sm:py-20 border-b border-white/10 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold tracking-tight">
            Beyond the robot.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Systems thinking applies everywhere — electronics, dance, Sanskrit phonetics, and the people who learn them.
          </p>
        </div>
      </section>
      <AboutSection />
      <TimelineSection />
      <ContactSection />
    </>
  );
}