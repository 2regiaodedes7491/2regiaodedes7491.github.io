import { Project } from "@/content/types";

interface ProjectCoverProps {
  project: Project;
  index: number;
}

const COVER_GRADIENTS: Record<string, string> = {
  "desika-stotram":
    "radial-gradient(circle at 20% 15%, oklch(0.55 0.18 278 / 0.5), transparent 55%), radial-gradient(circle at 85% 80%, oklch(0.75 0.12 330 / 0.35), transparent 55%), linear-gradient(135deg, oklch(0.13 0.012 265), oklch(0.16 0.02 275))",
  "adaptive-mobility":
    "radial-gradient(circle at 80% 20%, oklch(0.7 0.13 205 / 0.45), transparent 55%), radial-gradient(circle at 10% 85%, oklch(0.65 0.15 30 / 0.4), transparent 55%), linear-gradient(135deg, oklch(0.13 0.012 265), oklch(0.15 0.015 250))",
};

export function ProjectCover({ project, index }: ProjectCoverProps) {
  const background = COVER_GRADIENTS[project.slug] ?? COVER_GRADIENTS["adaptive-mobility"];

  return (
    <div
      className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border"
      style={{ background }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-grid-subtle opacity-40" />
      <span className="absolute right-4 top-3 font-heading text-7xl font-semibold tracking-tight text-white/10">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="absolute bottom-4 left-4 flex flex-col gap-2">
        <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/70">
          {project.year}
        </span>
        <span className="max-w-[220px] font-mono text-[11px] tracking-[0.14em] uppercase text-white/60">
          {project.categories[0]}
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      <div
        className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full border border-white/10"
        style={{ boxShadow: "0 0 0 24px oklch(1 0 0 / 0.04), 0 0 0 48px oklch(1 0 0 / 0.03)" }}
      />
    </div>
  );
}