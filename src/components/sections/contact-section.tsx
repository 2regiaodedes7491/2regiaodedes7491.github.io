"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { profile } from "@/content/profile";
import { Mail, GitBranch, User, MapPin, Send, FileText } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "Email", href: `mailto:${profile.email}`, description: "Best for inquiries" },
  { icon: GitBranch, label: "GitHub", href: "https://github.com/stavya-srinath", description: "Code & projects" },
  { icon: User, label: "LinkedIn", href: "https://linkedin.com/in/stavya-srinath", description: "Professional network" },
  { icon: MapPin, label: "Location", href: "#", description: "San Jose, California" },
];

export function ContactSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="contact" className="section-site">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="font-mono text-xs tracking-widest text-primary/70 dark:text-primary/80 uppercase">
            Contact
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold tracking-tight">
            Say hello
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Email is fastest. I respond within a couple of days.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-3xl mx-auto mb-16">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
              className="group rounded-xl border border-border bg-surface p-6 text-center transition-all hover:border-primary/40 hover:bg-surface-elevated"
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <link.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-medium text-foreground">{link.label}</h3>
              <p className="text-sm text-muted-foreground mt-1">{link.description}</p>
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/resume"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]"
          >
            <FileText className="h-5 w-5" aria-hidden="true" />
            Download Résumé
            <Send className="h-4 w-4 ml-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}