import { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectRow } from "@/components/projects/project-row";
import { SectionLabel } from "@/components/primitives/section-label";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Projects — Stavya Srinath",
  description: "Engineering projects spanning assistive hardware and cultural preservation — Adaptive Mobility Recliner and Desika Stotram web app.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="section-site border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Projects</SectionLabel>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl sm:text-5xl font-semibold tracking-tight">
            Built from the constraints up
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Assistive hardware and software for Sanskrit education — each project starts with a
            real user and a real limitation.
          </p>
        </div>
      </section>

      <section className="section-site">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-surface-elevated/60 px-6">
            {projects.map((project, index) => (
              <ProjectRow key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}