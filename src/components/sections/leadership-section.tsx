"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { experience } from "@/content/experience";
import { Users, Target, TrendingUp, Lightbulb, Heart, Globe } from "lucide-react";

const leadershipExperiences = experience.filter(e => 
  ["leadership", "environmental", "teaching", "sanskrit"].includes(e.type)
);

const impactAreas = [
  { icon: Users, title: "PEOPLE", description: "80+ team members, 40 MESA students, 40+ Sanskrit students, 5,000+ outreach impact" },
  { icon: Target, title: "PROCESSES", description: "Sprint planning, mentorship programs, curriculum design, safety protocols" },
  { icon: Lightbulb, title: "MENTORSHIP", description: "Electrical team 6→25, female participation 4→12, 90% Sanskrit retention" },
  { icon: TrendingUp, title: "EXECUTION", description: "$100K+ funding, 4 Regional Finals, 3 Worlds, Green Ninja Winner" },
  { icon: Heart, title: "INCLUSION", description: "Girls in STEM Day, MESA equity, global Sanskrit access, battery safety standards" },
  { icon: Globe, title: "IMPACT", description: "430+ outreach hrs, 215+ teaching hrs, 20+ teams adopting standards" },
];

export function LeadershipSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="leadership" className="section-site border-y border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="label-eyebrow">Leadership</span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold tracking-tight">
            Building people around systems
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From robotics operations to global education — leadership is building structures that let others do their best work.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {impactAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
              className="relative rounded-xl border border-border bg-surface p-6 group"
            >
              <div className="absolute inset-0 gradient-border rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true" />
              <div className="relative flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <area.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{area.title}</h3>
              </div>
              <p className="relative text-sm text-muted-foreground leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-8">
          {leadershipExperiences.map((exp, expIndex) => (
            <motion.div
              key={exp.id}
              initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 + expIndex * 0.1 }}
              className="relative rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-heading text-xl font-semibold">{exp.organization}</h3>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{exp.role}</span>
                    <span>•</span>
                    <span>{exp.start} — {exp.end}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="max-w-none text-muted-foreground mb-6">
                <p>{exp.description}</p>
              </div>

              <ul className="space-y-3" role="list">
                {exp.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 + index * 0.06 }}
                    className="flex items-start gap-3 text-sm relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/50"
                  >
                    {highlight}
                  </motion.li>
                ))}
              </ul>

              {exp.metrics && exp.metrics.length > 0 && (
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {exp.metrics.map((metric) => (
                    <div key={metric.label} className="text-center p-4 rounded-xl border border-border bg-surface">
                      <div className="font-heading text-2xl sm:text-3xl font-semibold text-primary">{metric.value}</div>
                      <div className="font-mono text-xs tracking-widest uppercase text-primary/70 dark:text-primary/80">{metric.label}</div>
                      {metric.context && <div className="text-[11px] text-muted-foreground mt-1">{metric.context}</div>}
                    </div>
                  ))}
                </div>
              )}

              {exp.technologies.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-2.5 py-1 rounded-full border border-border bg-surface text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}