import { Metric } from "@/content/types";

interface MetricStripProps {
  metrics: Metric[];
}

export function MetricStrip({ metrics }: MetricStripProps) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
      {metrics.map((metric) => (
        <div key={metric.label} className="flex flex-col gap-1">
          <dt className="order-2 font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
            {metric.label}
          </dt>
          <dd className="order-1 font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            {metric.value}
          </dd>
          {metric.context && (
            <dd className="order-3 text-xs text-muted-foreground/70">{metric.context}</dd>
          )}
        </div>
      ))}
    </dl>
  );
}