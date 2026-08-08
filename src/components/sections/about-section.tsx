"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { SectionLabel } from "@/components/primitives/section-label";

const thesisLines = [
  "I build systems.",
  "",
  "Sometimes they're electrical.",
  "Sometimes they're robotic.",
  "Sometimes they're educational.",
  "And sometimes they're communities.",
];

const aboutParagraphs = [
  "That's the common thread behind everything on this page — from the CAN bus wiring on a 125lb competition robot to the Sanskrit pronunciation guides I record for students in three time zones.",
  "In robotics, I design the electrical architecture that makes autonomous movement possible: power distribution, motor control, sensor integration, and the communication backbone that ties it all together. As Vice President of FRC 2813, I've scaled our electrical team from 6 to 25 members and tripled female participation through hands-on mentorship.",
  "In education, I apply the same systems thinking to knowledge transfer — whether tutoring 40 MESA students in chemistry, designing Sanskrit curriculum that grew 470% with 90% retention, or building a web platform for guided recitation learning.",
  "In community, I build structures that amplify others: an environmental organization that won the Green Ninja Film Festival, and battery safety standards now adopted by 20+ FIRST teams.",
  "The tools change — soldering iron, keyboard, whiteboard, microphone — but the approach stays the same: understand the constraints, design for the people who'll use it, build it to last, and document it so others can build on top.",
];

export function AboutSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="about" className="section-site">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <div className="mb-12">
              <SectionLabel>01 / Thesis</SectionLabel>
              <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold tracking-tight">
                The common thread
              </h2>
            </div>

            <div className="space-y-6 font-mono text-base leading-relaxed">
              {thesisLines.map((line, index) => (
                <motion.p
                  key={index}
                  initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
                  className={cn(
                    "text-muted-foreground",
                    line === "" && "h-4",
                    line === "I build systems." && "text-foreground font-semibold text-lg",
                    line.startsWith("Sometimes") && "ml-4 text-sm"
                  )}
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </div>

          <div className="space-y-6 max-w-none">
            {aboutParagraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 + index * 0.1 }}
                className="text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}