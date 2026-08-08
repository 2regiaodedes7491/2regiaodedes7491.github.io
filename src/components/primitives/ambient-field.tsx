"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

interface AmbientFieldProps {
  className?: string;
  variant?: "hero" | "section" | "project";
}

export function AmbientField({ className, variant = "section" }: AmbientFieldProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;

    const supportsPointer = window.matchMedia("(pointer: fine)").matches;
    if (!supportsPointer) return;

    const onPointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--mouse-x", `${x}px`);
      el.style.setProperty("--mouse-y", `${y}px`);
    };

    el.addEventListener("pointermove", onPointerMove);
    return () => el.removeEventListener("pointermove", onPointerMove);
  }, [reducedMotion]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ "--mouse-x": "50%", "--mouse-y": "50%" } as CSSProperties}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent gradient-base" />
      <div
        className={cn(
          "absolute inset-0 opacity-70",
          variant === "hero" && "opacity-90"
        )}
        style={{
          background:
            "radial-gradient(420px circle at var(--mouse-x) var(--mouse-y), color-mix(in srgb, var(--primary) 12%, transparent), transparent 70%)",
        }}
      />
      {!reducedMotion && (
        <div className="absolute inset-0 drift-slow">
          <div className="absolute rounded-full blur-3xl" style={{ width: "40%", aspectRatio: "1", left: "-10%", top: "-20%", background: "color-mix(in srgb, var(--chart-2) 10%, transparent)" }} />
          <div className="absolute rounded-full blur-3xl" style={{ width: "35%", aspectRatio: "1", right: "-8%", bottom: "-15%", background: "color-mix(in srgb, var(--chart-3) 9%, transparent)" }} />
        </div>
      )}
      <div className="absolute inset-0 bg-grid-subtle opacity-[0.35]" />
    </div>
  );
}