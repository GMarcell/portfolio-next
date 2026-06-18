"use client";

import { useTheme } from "@/components/layout/theme-provider";
import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-1.5">
      <span
        className="text-[10px] leading-none transition-colors duration-200 select-none"
        aria-hidden="true"
        style={{ color: isDark ? "var(--c-muted)" : "var(--c-content)" }}
      >
        ☀
      </span>
      <Switch
        checked={isDark}
        onCheckedChange={toggle}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      />
      <span
        className="text-[10px] leading-none transition-colors duration-200 select-none"
        aria-hidden="true"
        style={{ color: isDark ? "var(--c-content)" : "var(--c-muted)" }}
      >
        ☾
      </span>
    </div>
  );
}
