import { Metadata } from "next";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import { achievements } from "@/content/achievements";
import { education } from "@/content/education";
import { profile } from "@/content/profile";
import { ExternalLinkIcon } from "@/components/ui/external-link-icon";
import { ContactSection } from "@/components/sections/contact-section";
import { Download, Zap, Code, Award, BookOpen, MapPin, FileText, Users, Mail, GitBranch } from "lucide-react";

export const metadata: Metadata = {
  title: "Résumé — Stavya Srinath",
  description: "Complete résumé for Stavya Srinath — Robotics Engineer, Electrical Systems Lead, STEM Educator, Sanskrit Instructor, Environmental Advocate, Classical Dancer.",
};

const skills = {
  hardware: ["CAN Bus", "PDU", "Pneumatics", "WCS + Swerve", "Vision", "Soldering"],
  software: ["Python", "HTML", "PathPlanner", "CAD (Onshape/SolidWorks)"],
};

export default function ResumePage() {
  return (
    <div>
      <section className="section-site border-b border-border/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
            <div>
              <h1 className="font-heading text-4xl sm:text-5xl font-semibold tracking-tight">
                {profile.name}
              </h1>
              <p className="mt-2 text-lg text-primary font-medium">{profile.headline}</p>
              <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">{profile.thesis}</p>
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              <a
                href="https://github.com/stavya-srinath"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <GitBranch className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/stavya-srinath"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Users className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email
              </a>
              <a
                href="/resume-download"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-all hover:bg-accent"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download PDF
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" aria-hidden="true" />{profile.location}</span>
            <span className="flex items-center gap-1.5"><FileText className="h-4 w-4" aria-hidden="true" />{profile.currentRole}</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <h2 className="font-heading text-2xl font-semibold mb-6 flex items-center gap-3">
            <Zap className="h-6 w-6 text-primary" aria-hidden="true" />
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp) => (
              <article key={exp.id}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-xl font-semibold">{exp.organization}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{exp.role}</span>
                      <span aria-hidden="true">•</span>
                      <span>{exp.start} — {exp.end}</span>
                      {exp.location && <><span aria-hidden="true">•</span><span>{exp.location}</span></>}
                    </div>
                  </div>
                  {exp.links && exp.links.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.links.map((link) => (
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
                <p className="mt-3 text-muted-foreground leading-relaxed">{exp.description}</p>
                <ul className="mt-3 space-y-2" role="list">
                  {exp.highlights.map((highlight, index) => (
                    <li key={index} className="text-sm text-muted-foreground relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-primary/50">
                      {highlight}
                    </li>
                  ))}
                </ul>
                {exp.metrics && exp.metrics.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-4">
                    {exp.metrics.map((metric) => (
                      <div key={metric.label} className="text-sm">
                        <span className="font-semibold text-primary">{metric.value}</span>{" "}
                        <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">{metric.label}</span>
                        {metric.context && <span className="text-muted-foreground"> — {metric.context}</span>}
                      </div>
                    ))}
                  </div>
                )}
                {exp.technologies.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-2.5 py-1 rounded-full border border-border bg-surface text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-semibold mb-6 flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" aria-hidden="true" />
            Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <article key={project.id} className="rounded-xl border border-border bg-surface p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-lg font-semibold">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.categories.map((cat) => (
                        <span key={cat} className="text-xs px-2 py-1 rounded border border-border bg-surface-elevated text-muted-foreground">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                </div>
                <p className="mt-3 text-muted-foreground leading-relaxed">{project.summary}</p>
                {project.technologies.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-2.5 py-1 rounded-full border border-border bg-surface-elevated text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-semibold mb-6 flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" aria-hidden="true" />
            Achievements
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement) => (
              <article key={achievement.id} className="rounded-xl border border-border bg-surface p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Award className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-mono text-xs tracking-widest uppercase text-primary/70 dark:text-primary/80">
                      {achievement.category.toUpperCase()}
                    </span>
                    {achievement.year && <span className="ml-2 font-mono text-xs text-muted-foreground">{achievement.year}</span>}
                  </div>
                </div>
                <h3 className="font-medium text-foreground mb-1">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                {achievement.metric && <div className="font-heading text-xl font-semibold text-primary">{achievement.metric}</div>}
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-semibold mb-6 flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />
            Education & Skills
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-lg font-semibold mb-3">{education.highSchool.name}</h3>
              <p className="text-muted-foreground">{education.highSchool.location} • Class of {education.highSchool.graduation}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                GPA {education.highSchool.gpa.weighted} weighted / {education.highSchool.gpa.unweighted} unweighted • {education.highSchool.apCount} AP courses
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground" role="list">
                {education.highSchool.activities.map((activity) => (
                  <li key={activity} className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-primary/50">{activity}</li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-surface p-5">
                <h4 className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">Hardware</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.hardware.map((skill) => (
                    <span key={skill} className="text-xs px-2.5 py-1 rounded-full border border-border bg-surface-elevated text-muted-foreground">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border bg-surface p-5">
                <h4 className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">Software & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.software.map((skill) => (
                    <span key={skill} className="text-xs px-2.5 py-1 rounded-full border border-border bg-surface-elevated text-muted-foreground">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold mb-3">Sanskrit Instruction</h3>
              <p className="text-muted-foreground">{education.sanskrit.organization} • {education.sanskrit.role} since {education.sanskrit.since}</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground" role="list">
                {education.sanskrit.stats.map((stat) => (
                  <li key={stat} className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-primary/50">{stat}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold mb-3">Bharatnatyam</h3>
              <p className="text-muted-foreground">{education.dance.academy} • since {education.dance.since}</p>
              <div className="mt-3 space-y-3">
                {education.certifications.map((cert) => (
                  <div key={cert.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 rounded-xl border border-border bg-surface">
                    <div>
                      <div className="font-medium">{cert.name}</div>
                      <div className="text-sm text-muted-foreground">{cert.issuer} • {cert.year}</div>
                    </div>
                    <div className="flex gap-3">
                      {cert.links.map((link) => (
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
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <ContactSection />
    </div>
  );
}