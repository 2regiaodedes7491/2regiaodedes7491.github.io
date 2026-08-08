"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Theme toggle">
        <Monitor className="h-5 w-5" aria-hidden="true" />
      </Button>
    );
  }

  const themes = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "system", icon: Monitor, label: "System" },
    { value: "dark", icon: Moon, label: "Dark" },
  ];

  return (
    <div
      className="flex items-center gap-1 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10 dark:border-white/10 p-1"
      role="group"
      aria-label="Theme selection"
    >
      {themes.map((t) => {
        const Icon = t.icon;
        const isActive = theme === t.value;
        return (
          <Button
            key={t.value}
            variant={isActive ? "default" : "ghost"}
            size="icon"
            className="h-9 w-9 rounded-md"
            onClick={() => setTheme(t.value)}
            aria-label={`Switch to ${t.label} theme`}
            aria-pressed={isActive}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </Button>
        );
      })}
    </div>
  );
}