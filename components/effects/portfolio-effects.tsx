"use client";

import { useEffect, useEffectEvent, useRef, useState } from "react";

export function PortfolioEffects() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringRefPosition = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);
  const idleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isDesktopPointer, setIsDesktopPointer] = useState(false);

  const updateCursor = useEffectEvent((x: number, y: number) => {
    const cursor = cursorRef.current;

    if (!cursor) {
      return;
    }

    // Use translate3d for GPU-accelerated compositing instead of left/top
    cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const handleChange = () => setIsDesktopPointer(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const revealedElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isDesktopPointer) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
      updateCursor(event.clientX, event.clientY);

      // Reset idle timer — stop ring rAF after 2s of inactivity
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }

      // If ring animation was stopped, restart it
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(animateRing);
      }

      idleTimeoutRef.current = setTimeout(() => {
        if (frameRef.current) {
          window.cancelAnimationFrame(frameRef.current);
          frameRef.current = null;
        }
      }, 1000);
    };

    const animateRing = () => {
      const ring = ringRef.current;

      if (!ring) {
        return;
      }

      ringRefPosition.current.x += (mouseRef.current.x - ringRefPosition.current.x) * 0.12;
      ringRefPosition.current.y += (mouseRef.current.y - ringRefPosition.current.y) * 0.12;

      // Use translate3d for GPU-accelerated compositing
      ring.style.transform = `translate3d(${ringRefPosition.current.x}px, ${ringRefPosition.current.y}px, 0)`;
      frameRef.current = window.requestAnimationFrame(animateRing);
    };

    document.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }

      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
    };
  }, [isDesktopPointer]);

  useEffect(() => {
    if (!isDesktopPointer) {
      return;
    }

    const interactiveElements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "a, button, [data-hover-target='true']"
      )
    );

    const addHoverState = () => {
      cursorRef.current?.classList.add("hover");
      ringRef.current?.classList.add("hover");
    };

    const removeHoverState = () => {
      cursorRef.current?.classList.remove("hover");
      ringRef.current?.classList.remove("hover");
    };

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", addHoverState);
      element.addEventListener("mouseleave", removeHoverState);
    });

    return () => {
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", addHoverState);
        element.removeEventListener("mouseleave", removeHoverState);
      });
    };
  }, [isDesktopPointer]);

  return (
    <>
      <div
        ref={cursorRef}
        aria-hidden="true"
        className={`cursor${isDesktopPointer ? " is-visible" : ""}`}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`cursor-ring${isDesktopPointer ? " is-visible" : ""}`}
      />
    </>
  );
}
