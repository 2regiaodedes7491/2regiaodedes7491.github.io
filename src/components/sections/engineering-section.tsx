"use client";

import { useMemo, useState } from "react";
import { SectionLabel } from "@/components/primitives/section-label";
import { engineeringSystems } from "@/content/engineering";
import { EngineeringGraph } from "@/components/engineering/engineering-graph";
import { cn } from "@/lib/utils";

const systemCategories = [
  { id: "power", label: "Power", description: "Battery, distribution, safety" },
  { id: "communication", label: "Communication", description: "CAN backbone + wireless" },
  { id: "control", label: "Control", description: "roboRIO + software loops" },
  { id: "sensing", label: "Sensing", description: "IMU, vision, pose estimation" },
  { id: "actuation", label: "Actuation", description: "Motors, swerve, mechanisms" },
] as const;

export function EngineeringSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("power");
  const [selectedSystem, setSelectedSystem] = useState<string>("battery");

  const activeSystem = useMemo(
    () => engineeringSystems.find((s) => s.id === selectedSystem) ?? engineeringSystems[0],
    [selectedSystem]
  );
  const activeCategory = systemCategories.find((c) => c.id === selectedCategory);

  const systemsInCategory = useMemo(
    () => engineeringSystems.filter((s) => s.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <section id="electrical" className="section-site">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <SectionLabel>Engineering</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold tracking-tight">
            The electrical spine of a 125 lb robot
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            The 2026 competition robot&apos;s architecture — from the battery feed to actuator
            control. Select a subsystem to see how it works.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
          <div
            className="graph-panel relative overflow-hidden rounded-2xl border border-border"
            aria-label="Robot electrical architecture diagram"
          >
            <div className="absolute inset-0 bg-grid-subtle opacity-[0.25]" aria-hidden="true" />
            <EngineeringGraph
              selectedSystem={selectedSystem}
              onSelectSystem={setSelectedSystem}
              selectedCategory={selectedCategory}
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Subsystem category">
              {systemCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  aria-pressed={selectedCategory === cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    const first = engineeringSystems.find((s) => s.category === cat.id);
                    if (first) setSelectedSystem(first.id);
                  }}
                  className={cn(
                    "rounded-lg border px-3 py-2 text-left transition-all",
                    "border-border bg-surface-elevated hover:border-ring/40",
                    selectedCategory === cat.id && "border-ring bg-primary/10"
                  )}
                >
                  <span className="block font-mono text-[11px] tracking-[0.16em] uppercase text-foreground">
                    {cat.label}
                  </span>
                  <span className="block text-xs text-muted-foreground">{cat.description}</span>
                </button>
              ))}
            </div>

            <div
              className="flex flex-col gap-1 rounded-2xl border border-border bg-surface-elevated p-5"
              aria-live="polite"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary/80">
                {activeCategory?.label}
              </span>
              <h3 className="font-heading text-xl font-semibold tracking-tight">{activeSystem.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{activeSystem.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {activeSystem.connections.map((conn) => (
                  <span
                    key={conn}
                    className="rounded-full border border-border bg-surface px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                  >
                    {conn.replace(/-/g, " ")}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2" aria-label={`${activeCategory?.label} subsystems`}>
          {systemsInCategory.map((system) => (
            <button
              key={system.id}
              type="button"
              aria-pressed={selectedSystem === system.id}
              onClick={() => setSelectedSystem(system.id)}
              className={cn(
                "rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all hover:text-foreground hover:border-primary/40",
                selectedSystem === system.id && "border-primary bg-primary/10 text-foreground"
              )}
            >
              {system.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}