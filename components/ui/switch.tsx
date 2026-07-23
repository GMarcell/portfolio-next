"use client";

import { cn } from "@/lib/utils";

interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  className?: string;
  size?: "sm" | "default";
  "aria-label"?: string;
}

function Switch({
  checked,
  onCheckedChange,
  className,
  size = "default",
  ...rest
}: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onCheckedChange(!checked)}
      data-size={size}
      className={cn(
        /* ── Root ─────────────────────────────────────────────── */
        "relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        "data-[size=default]:h-[18.4px] data-[size=default]:w-[32px]",
        "data-[size=sm]:h-[14px] data-[size=sm]:w-[24px]",
        "bg-input dark:bg-input/80",
        "aria-checked:bg-primary",
        className
      )}
      {...rest}
    >
      {/* ── Thumb ──────────────────────────────────────────────── */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none block rounded-full bg-background ring-0 transition-transform",
          "data-[size=default]:size-4 data-[size=sm]:size-3",
          "data-[size=default]:aria-checked:translate-x-[calc(100%-2px)]",
          "data-[size=sm]:aria-checked:translate-x-[calc(100%-2px)]",
          "data-[size=default]:translate-x-0",
          "data-[size=sm]:translate-x-0",
          "dark:aria-checked:bg-primary-foreground dark:bg-foreground"
        )}
        data-size={size}
        aria-checked={checked}
      />
    </button>
  );
}

export { Switch };
