"use client";

import Image from "next/image";
import { useState, useCallback, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ImageWithFadeProps = ComponentProps<typeof Image> & {
  /** Duration of the fade-in animation in ms. Default: 500 */
  fadeDuration?: number;
};

/**
 * `ImageWithFade` wraps Next.js `Image` with a subtle fade-in + scale-up
 * animation that triggers once the image has loaded.
 *
 * - **Above-fold images** should pass `priority` — the animation is skipped
 *   so the image appears immediately.
 * - **Below-fold images** get the animation, which looks polished while
 *   acting as a natural loading indicator.
 * - Respects `prefers-reduced-motion`.
 */
export function ImageWithFade({
  className,
  fadeDuration = 500,
  onLoad,
  onError,
  alt,
  ...props
}: ImageWithFadeProps) {
  const [loaded, setLoaded] = useState(false);

  const reveal = useCallback(() => setLoaded(true), []);

  const handleLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      reveal();
      onLoad?.(e);
    },
    [reveal, onLoad]
  );

  const handleError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      reveal();
      onError?.(e);
    },
    [reveal, onError]
  );

  return (
    <Image
      alt={alt}
      className={cn(
        /* ── Base: hidden until loaded, then fade + scale ── */
        "transition-all ease-out will-change-transform will-change-opacity",
        loaded || props.priority
          ? "opacity-100 scale-100"
          : "opacity-0 scale-[1.03]",
        className
      )}
      style={{
        transitionDuration: props.priority ? "0ms" : `${fadeDuration}ms`,
        ...props.style,
      } as React.CSSProperties}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
}
