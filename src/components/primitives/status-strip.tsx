import { statusStrip } from "@/content/home";
import { SectionLabel } from "@/components/primitives/section-label";

export function StatusStrip() {
  return (
    <section className="section-site border-y border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-baseline sm:justify-between">
          <SectionLabel>Currently</SectionLabel>
          <dl className="flex flex-wrap gap-x-8 gap-y-2">
            {statusStrip.map((item) => (
              <div key={item.label} className="flex flex-col gap-0.5">
                <dt className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="font-medium text-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}