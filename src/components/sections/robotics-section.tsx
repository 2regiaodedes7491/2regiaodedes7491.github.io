"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { experience } from "@/content/experience";
import { ExternalLinkIcon } from "@/components/ui/external-link-icon";
import { Trophy, Award, Users, DollarSign, Clock, Globe } from "lucide-react";

const frcExperience = experience.find(e => e.id === "frc-vp");
const electricalExperience = experience.find(e => e.id === "frc-electrical");

const statCards = [
  { icon: Users, value: "80+", label: "Team Members", context: "Competitive robotics organization" },
  { icon: Award, value: "Top 3%", label: "Global Ranking", context: "FRC worldwide" },
  { icon: Trophy, value: "4", label: "Regional Finalist", context: "Competition titles" },
  { icon: Trophy, value: "3", label: "Worlds Invitations", context: "FRC Championships" },
  { icon: DollarSign, value: "$100K+", label: "Funding Raised", context: "Sponsorships & grants" },
  { icon: Clock, value: "430+", label: "Outreach Hours", context: "Community STEM impact" },
  { icon: Globe, value: "5,000+", label: "Students Impacted", context: "Outreach programs" },
];

export function RoboticsSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="robotics" className="section-site border-y border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="label-eyebrow">Robotics</span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold tracking-tight">
            FRC 2813 Gear Heads
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            An 80+ member competitive robotics organization operating at the intersection of electrical engineering,
            autonomous systems, and community impact.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 mb-16">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={reducedMotion ? {} : { opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
              className="relative rounded-xl border border-border bg-surface p-5 sm:p-6 text-center group"
            >
              <div className="absolute inset-0 gradient-border rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true" />
              <div className="relative flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <stat.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="relative font-heading text-3xl sm:text-4xl font-semibold text-foreground">{stat.value}</div>
              <div className="relative font-mono text-xs tracking-widest uppercase text-primary/70 dark:text-primary/80 mb-1">{stat.label}</div>
              <div className="relative text-[11px] text-muted-foreground">{stat.context}</div>
            </motion.div>
          ))}
        </div>

        {frcExperience && (
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative rounded-2xl border border-border bg-surface p-6 sm:p-8 mb-12"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <h3 className="font-heading text-2xl font-semibold">{frcExperience.organization}</h3>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{frcExperience.role}</span>
                  <span>•</span>
                  <span>{frcExperience.start} — {frcExperience.end}</span>
                  <span>•</span>
                  <span>{frcExperience.location}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {frcExperience.links?.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLinkIcon className="h-3 w-3" aria-hidden="true" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="max-w-none text-muted-foreground mb-6">
              <p>{frcExperience.description}</p>
            </div>

            <ul className="space-y-3" role="list">
              {frcExperience.highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 + index * 0.08 }}
                  className="flex items-start gap-3 text-sm relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/50"
                >
                  {highlight}
                </motion.li>
              ))}
            </ul>

            {frcExperience.technologies.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {frcExperience.technologies.map((tech) => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded-full border border-border bg-surface text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {electricalExperience && (
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <h3 className="font-heading text-2xl font-semibold">{electricalExperience.organization} — Electrical Systems</h3>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{electricalExperience.role}</span>
                  <span>•</span>
                  <span>{electricalExperience.start} — {electricalExperience.end}</span>
                  <span>•</span>
                  <span>{electricalExperience.location}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {electricalExperience.links?.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLinkIcon className="h-3 w-3" aria-hidden="true" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 mb-6">
              <div className="rounded-xl border border-border bg-surface p-5">
                <h4 className="font-mono text-xs tracking-widest uppercase text-primary/70 dark:text-primary/80 mb-3">TEAM SCALING</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Electrical Team Members</span>
                      <span className="font-semibold">6 → 25</span>
                    </div>
                    <div className="h-2 bg-border/60 rounded-full overflow-hidden">
                      <motion.div
                        initial={reducedMotion ? { width: "312%" } : { width: "0%" }}
                        animate={{ width: "312%" }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                        className="h-full bg-primary rounded-full"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Female Participation</span>
                      <span className="font-semibold">4 → 12</span>
                    </div>
                    <div className="h-2 bg-border/60 rounded-full overflow-hidden">
                      <motion.div
                        initial={reducedMotion ? { width: "300%" } : { width: "0%" }}
                        animate={{ width: "300%" }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                        className="h-full bg-primary rounded-full"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5">
                <h4 className="font-mono text-xs tracking-widest uppercase text-primary/70 dark:text-primary/80 mb-3">INDUSTRY IMPACT</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Battery Safety Standards Adopted</span>
                    <span className="font-semibold text-primary">20+ Teams</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Cross-Functional Integration</span>
                    <span className="font-semibold text-primary">Mechanical • Software • Operations</span>
                  </div>
                </div>
              </div>
            </div>

            <ul className="space-y-3" role="list">
              {electricalExperience.highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 + index * 0.08 }}
                  className="flex items-start gap-3 text-sm relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/50"
                >
                  {highlight}
                </motion.li>
              ))}
            </ul>

            {electricalExperience.technologies.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {electricalExperience.technologies.map((tech) => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded-full border border-border bg-surface text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}