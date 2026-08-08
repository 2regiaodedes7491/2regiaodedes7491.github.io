import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/content/projects";
import { ContactSection } from "@/components/sections/contact-section";
import { ProjectCover } from "@/components/projects/project-cover";
import { SectionLabel } from "@/components/primitives/section-label";
import { ExternalLinkIcon, ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Stavya Srinath`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const adjacent = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="section-site border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to projects
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:items-center">
            <div>
              <SectionLabel className="mb-4">{project.year}</SectionLabel>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
                {project.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.categories.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <ProjectCover project={project} index={index} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-site">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-5">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Role</span>
              <p className="mt-1 font-medium">{project.categories[0]}</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-5">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Timeline</span>
              <p className="mt-1 font-medium">{project.year}</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-5">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Stack</span>
              <p className="mt-1 font-medium">{project.technologies.slice(0, 4).join(" · ")}</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-5">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Status</span>
              <p className="mt-1 font-medium">
                {project.year === "2026–Present" ? "In development" : "Completed"}
              </p>
            </div>
          </div>

          <div className="mt-14 space-y-14">
            {project.problem && (
              <section>
                <SectionLabel>The Problem</SectionLabel>
                <p className="mt-4 text-foreground/90 text-lg leading-relaxed">{project.problem}</p>
              </section>
            )}

            {project.solution && (
              <section>
                <SectionLabel>The Approach</SectionLabel>
                <p className="mt-4 text-foreground/90 text-lg leading-relaxed">{project.solution}</p>
              </section>
            )}

            {project.impact && (
              <section>
                <SectionLabel>The Impact</SectionLabel>
                <p className="mt-4 text-foreground/90 text-lg leading-relaxed">{project.impact}</p>
              </section>
            )}

            {project.technologies.length > 0 && (
              <section>
                <SectionLabel>Technologies</SectionLabel>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-surface-elevated px-3 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {project.links && project.links.length > 0 && (
              <section>
                <SectionLabel>References</SectionLabel>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </section>

      <section className="section-site border-t border-border/60 bg-surface/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={`/projects/${adjacent.slug}`}
            className="group flex flex-col gap-2 rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-primary/40"
          >
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
              Next project
            </span>
            <span className="flex items-center justify-between gap-4">
              <span className="font-heading text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                {adjacent.title}
              </span>
              <ArrowRight className="h-6 w-6 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </section>

      <ContactSection />
    </>
  );
}