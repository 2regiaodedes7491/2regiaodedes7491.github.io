import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExternalLinkIconProps {
  className?: string;
}

export function ExternalLinkIcon({ className }: ExternalLinkIconProps) {
  return <ExternalLink className={cn("h-3 w-3", className)} aria-hidden="true" />;
}