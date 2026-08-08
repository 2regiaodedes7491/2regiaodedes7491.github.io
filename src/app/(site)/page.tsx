import { Hero } from "@/components/hero/hero";
import { StatusStrip } from "@/components/primitives/status-strip";
import { SectionLabel } from "@/components/primitives/section-label";
import { MetricStrip } from "@/components/primitives/metric-strip";
import { ProjectsSection } from "@/components/sections/projects-section";
import { EngineeringSection } from "@/components/sections/engineering-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { featuredMetrics } from "@/content/home";

export default function Home() {
  return (
    <>
      <Hero />
      <StatusStrip />

      <ProjectsSection />

      <EngineeringSection />

      <section className="section-site" aria-labelledby="impact-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SectionLabel>Impact</SectionLabel>
            <h2 id="impact-heading" className="mt-4 font-heading text-3xl sm:text-4xl font-semibold tracking-tight">
              Systems that scale
            </h2>
          </div>
          <MetricStrip metrics={featuredMetrics} />
        </div>
      </section>

      <AboutSection />
      <ContactSection />
    </>
  );
}