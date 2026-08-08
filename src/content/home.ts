import { Metric } from "./types";

export const featuredMetrics: Metric[] = [
  { value: "6 → 25", label: "Electrical Team", context: "FRC 2813 electrical subteam" },
  { value: "4 → 12", label: "Female Members", context: "Subteam participation" },
  { value: "470%", label: "Sanskrit Growth", context: "40+ global students, ages 4–16" },
  { value: "210+", label: "STEM Students", context: "TA across four disciplines" },
];

export const statusStrip: { label: string; value: string }[] = [
  { label: "VP", value: "FRC 2813" },
  { label: "Electrical", value: "Systems Lead" },
  { label: "STEM", value: "Teaching" },
  { label: "Building", value: "Desika Stotram" },
];