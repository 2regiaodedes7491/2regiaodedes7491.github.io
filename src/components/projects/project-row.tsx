import Link from "next/link";
import { Project } from "@/content/types";
import { ArrowRight } from "lucide-react";

interface ProjectRowProps {
  project: Project;
  index: number;
}

function statusFor(project: Project) {
  return project.year === "2026–Present" ? "In development" : "Completed";
}

export function ProjectRow({ project, index }: ProjectRowProps) {
  return (
    <article className="group grid gap-3 border-b border-border/60 py-6 transition-colors last:border-b-0 sm:grid-cols-[64px_1fr] sm:items-start">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`${project.title} — case study`}
        className="hidden h-full sm:block"
      >
        <span className="font-mono text-sm text-muted-foreground transition-colors group-hover:text-primary">
          /{String(index + 1).padStart(2, "0")}
        </span>
      </Link>

      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <Link href={`/projects/${project.slug}`} className="font-heading text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
            {project.title}
          </Link>
          <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
        </div>

        <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          {project.categories.slice(0, 2).map((cat) => (
            <span key={cat} className="rounded-full border border-border bg-surface px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {cat}
            </span>
          ))}
          <span className="rounded-full border border-border bg-surface px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
            {project.technologies.slice(0, 3).join(" · ")}
          </span>
          <span className="rounded-full border border-primary/30 bg-primary/5 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-primary">
            {statusFor(project)}
          </span>
        </div>

        {project.impact && (
          <p className="mt-3 flex items-start gap-2 text-sm text-foreground/90">
            <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            {project.impact}
          </p>
        )}

        <Link
          href={`/projects/${project.slug}`}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Case study
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}