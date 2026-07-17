"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "portfolio-theme";

/**
 * Reads theme from the <html> class — this is already set by the
 * inline script in layout.tsx before React hydrates.
 */
function getThemeFromDOM(): Theme {
  if (typeof window === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

/**
 * Applies a theme change with an optional View Transition for a smooth crossfade.
 * Falls back to immediate class toggle when the API isn't supported.
 */
function applyThemeWithTransition(theme: Theme) {
  const root = document.documentElement;
  const isDark = theme === "dark";

  if (typeof document.startViewTransition === "function") {
    // Snapshot the current page, toggle the class, then crossfade to the new state
    document.startViewTransition(() => {
      root.classList.toggle("dark", isDark);
    });
  } else {
    root.classList.toggle("dark", isDark);
  }

  localStorage.setItem(STORAGE_KEY, theme);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getThemeFromDOM);
  const isInitialRender = useRef(true);

  useEffect(() => {
    const root = document.documentElement;

    // First render: DOM class was already set by inline script.
    // Just sync localStorage without touching the DOM.
    if (isInitialRender.current) {
      isInitialRender.current = false;

      // Ensure state matches the actual DOM class (handles SSR mismatch)
      // The inline script already set the correct DOM class before hydration
      const actualTheme = root.classList.contains("dark") ? "dark" : "light";
      if (actualTheme !== theme) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTheme(actualTheme);
      }

      localStorage.setItem(STORAGE_KEY, actualTheme);
      return;
    }

    // Subsequent renders (user toggle): update DOM + localStorage
    applyThemeWithTransition(theme);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(() => ({ theme, toggle }), [theme, toggle]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
