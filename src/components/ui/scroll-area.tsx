"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const ScrollArea = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border/30", className)}
      {...props}
    />
  )
);
ScrollArea.displayName = "ScrollArea";

export { ScrollArea };