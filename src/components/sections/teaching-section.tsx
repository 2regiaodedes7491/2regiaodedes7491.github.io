"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { experience } from "@/content/experience";
import { BookOpen, Users, Globe, Award, Brain } from "lucide-react";

const teachingExperience = experience.find(e => e.id === "teaching-assistant");
const sanskritExperience = experience.find(e => e.id === "sanskrit-instructor");

const teachingStats = [
  { icon: BookOpen, value: "4", label: "STEM Disciplines", detail: "Biology, Anatomy & Physiology, Chemistry + MESA" },
  { icon: Users, value: "40", label: "MESA Students", detail: "Weekly tutoring, equity-focused" },
  { icon: Globe, value: "40+", label: "Global Sanskrit Students", detail: "Ages 4–16, 3 time zones" },
  { icon: Award, value: "215+", label: "Instruction Hours", detail: "Virtual Sanskrit teaching" },
  { icon: Brain, value: "90%", label: "Retention Rate", detail: "Sanskrit program sustainability" },
  { icon: Globe, value: "470%", label: "Enrollment Growth", detail: "7 → 40 students" },
];

export function TeachingSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="teaching" className="section-site">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="label-eyebrow">Teaching</span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold tracking-tight">
            Engineering, explained
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical knowledge only creates impact when it can be transferred. 210+ students supported across STEM and Sanskrit.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-16">
          {teachingStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={reducedMotion ? {} : { opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
              className="relative rounded-xl border border-border bg-surface p-5 text-center group"
            >
              <div className="absolute inset-0 gradient-border rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true" />
              <div className="relative flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <stat.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="relative font-heading text-3xl sm:text-4xl font-semibold text-foreground">{stat.value}</div>
              <div className="relative font-mono text-xs tracking-widest uppercase text-primary/70 dark:text-primary/80 mb-1">{stat.label}</div>
              <div className="relative text-[11px] text-muted-foreground">{stat.detail}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {teachingExperience && (
            <motion.div
              initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <BookOpen className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold">{teachingExperience.organization}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{teachingExperience.role}</span>
                    <span>•</span>
                    <span>{teachingExperience.start} — {teachingExperience.end}</span>
                    <span>•</span>
                    <span>{teachingExperience.location}</span>
                  </div>
                </div>
              </div>

              <div className="max-w-none text-muted-foreground mb-6">
                <p>{teachingExperience.description}</p>
              </div>

              <ul className="space-y-3" role="list">
                {teachingExperience.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 + index * 0.08 }}
                    className="flex items-start gap-3 text-sm relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/50"
                  >
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {sanskritExperience && (
            <motion.div
              initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="relative rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Globe className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold">{sanskritExperience.organization}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{sanskritExperience.role}</span>
                    <span>•</span>
                    <span>{sanskritExperience.start} — {sanskritExperience.end}</span>
                    <span>•</span>
                    <span>{sanskritExperience.location}</span>
                  </div>
                </div>
              </div>

              <div className="max-w-none text-muted-foreground mb-6">
                <p>{sanskritExperience.description}</p>
              </div>

              <ul className="space-y-3" role="list">
                {sanskritExperience.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 + index * 0.08 }}
                    className="flex items-start gap-3 text-sm relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/50"
                  >
                    {highlight}
                  </motion.li>
                ))}
              </ul>

              {sanskritExperience.metrics && sanskritExperience.metrics.length > 0 && (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {sanskritExperience.metrics.map((metric) => (
                    <div key={metric.label} className="text-center p-4 rounded-xl border border-border bg-surface">
                      <div className="font-heading text-2xl font-semibold text-primary">{metric.value}</div>
                      <div className="font-mono text-xs tracking-widest uppercase text-primary/70 dark:text-primary/80">{metric.label}</div>
                      {metric.context && <div className="text-[11px] text-muted-foreground mt-1">{metric.context}</div>}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}