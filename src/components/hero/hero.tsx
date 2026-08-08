import { FileText } from "lucide-react";
import { profile } from "@/content/profile";
import { AmbientField } from "@/components/primitives/ambient-field";
import { HeroPortrait } from "@/components/hero/hero-portrait";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero" aria-hidden="true" />
      <AmbientField variant="hero" className="opacity-60" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:px-8 lg:grid-cols-[1.15fr_0.85fr] py-16 lg:py-24">
        <div>
          <p className="animate-in label-eyebrow mb-6 !text-primary/80">
            Student Engineer · Robotics · Electrical Systems
          </p>

          <h1 className="animate-in max-w-3xl font-heading text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.05]" style={{ animationDelay: "100ms" }}>
            I build systems<span className="text-primary">.</span>
            <br className="hidden sm:block" /> They move people
            <br className="hidden sm:block" /> and people move with them<span className="text-primary">.</span>
          </h1>

          <p className="animate-in mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-muted-foreground" style={{ animationDelay: "200ms" }}>
            {profile.thesis}
          </p>

          <div className="animate-in mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground" style={{ animationDelay: "300ms" }}>
            <span className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span className="font-medium text-foreground">{profile.currentRole}</span>
            </span>
            <span className="font-mono text-xs tracking-[0.18em] uppercase">{profile.location}</span>
          </div>

          <div className="animate-in mt-10 flex flex-wrap gap-3" style={{ animationDelay: "400ms" }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Explore work
            </a>
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-medium transition-all hover:bg-accent hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              Résumé
            </a>
          </div>
        </div>

        <HeroPortrait className="mx-auto mt-12 w-full max-w-[300px] sm:max-w-sm lg:mt-0 lg:max-w-lg" />
      </div>
    </section>
  );
}