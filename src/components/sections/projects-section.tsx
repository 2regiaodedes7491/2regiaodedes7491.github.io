import Link from "next/link";
import { projects } from "@/content/projects";
import { ProjectRow } from "@/components/projects/project-row";
import { SectionLabel } from "@/components/primitives/section-label";
import { ArrowRight } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-site border-y border-border/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold tracking-tight">
              Two projects, one approach
            </h2>
            <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
              One in hardware, one in software — each starting from a real constraint.
            </p>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            All projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <div>
          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}