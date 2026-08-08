"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { timeline } from "@/content/timeline";
import { ExternalLinkIcon } from "@/components/ui/external-link-icon";
import { Zap, Bolt, BookOpen, Globe, Award, TreePine, Music, Users, Lightbulb } from "lucide-react";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  robotics: Zap,
  electrical: Bolt,
  teaching: BookOpen,
  sanskrit: Globe,
  arts: Music,
  environmental: TreePine,
  leadership: Users,
  academic: Award,
};

const categoryColors: Record<string, string> = {
  robotics: "text-primary border-primary/30",
  electrical: "text-amber-400 border-amber-400/30",
  teaching: "text-emerald-400 border-emerald-400/30",
  sanskrit: "text-cyan-400 border-cyan-400/30",
  arts: "text-pink-400 border-pink-400/30",
  environmental: "text-green-400 border-green-400/30",
  leadership: "text-orange-400 border-orange-400/30",
  academic: "text-violet-400 border-violet-400/30",
};

export function TimelineSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="timeline" className="section-site border-y border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="label-eyebrow">Timeline</span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold tracking-tight">
            A working history
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Engineering, education, and leadership — running in parallel and compounding over time.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-transparent to-transparent" aria-hidden="true" />
          
          <div className="space-y-10">
            {timeline.map((entry, index) => {
              const Icon = categoryIcons[entry.category] || Lightbulb;
              const colorClass = categoryColors[entry.category] || "text-primary border-primary/30";

              return (
                <motion.div
                  key={entry.id}
                  initial={reducedMotion ? {} : { opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
                  className="relative pl-20"
                >
                  <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-background z-10" style={{ borderColor: colorClass.split(" ")[1]?.replace("border-", "") }}>
                    <span style={{ color: colorClass.split(" ")[0] }}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  
                  <div className="relative rounded-xl border border-border bg-surface p-5 sm:p-6 group">
                    <div className="absolute inset-0 gradient-border rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                      <div>
                        <span className="font-heading text-2xl font-semibold text-foreground">{entry.year}</span>
                        <span className={cn("ml-3 font-mono text-xs tracking-widest uppercase", colorClass)}>
                          {entry.category.toUpperCase()}
                        </span>
                      </div>
                      {entry.links && entry.links.length > 0 && (
                        <div className="flex gap-2">
                          {entry.links.map((link) => (
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
                    </div>
                    
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{entry.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{entry.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}