"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { achievements } from "@/content/achievements";
import { ExternalLinkIcon } from "@/components/ui/external-link-icon";
import { SectionLabel } from "@/components/primitives/section-label";

const featuredIds = [
  "frc-global-ranking",
  "frc-regional-finalist",
  "frc-worlds",
  "funding",
  "green-ninja",
  "battery-safety",
];

export function RecognitionSection() {
  const reducedMotion = useReducedMotion();
  const featured = achievements.filter((a) => featuredIds.includes(a.id));

  return (
    <section id="recognition" className="section-site">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionLabel>Recognition</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold tracking-tight">
            Selected results
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((achievement, index) => (
            <motion.article
              key={achievement.id}
              initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.06 }}
              className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-5"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-heading text-2xl font-semibold text-primary">{achievement.metric}</span>
                <span className="font-mono text-xs text-muted-foreground">{achievement.year}</span>
              </div>
              <h3 className="font-medium text-foreground">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
              {achievement.links && achievement.links.length > 0 && (
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {achievement.links.map((link) => (
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
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}