// components/UnfoldPage.tsx — wraps any section, unfolds open as it scrolls into view
"use client";

import { useEffect, useRef, useState } from "react";

export default function UnfoldPage({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0); // 0 = folded away, 1 = flat/open

  useEffect(() => {
    function handleScroll() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      // starts unfolding once its top reaches the bottom of the viewport,
      // finishes once its top reaches the middle of the viewport
      const raw = (window.innerHeight - rect.top) / (window.innerHeight * 0.6);
      setProgress(Math.min(Math.max(raw, 0), 1));
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rotateX = 60 - progress * 60; // 60deg (folded) -> 0deg (flat)

  return (
    <div style={{ perspective: "1400px" }}>
      <div
        ref={ref}
        style={{
          transform: `rotateX(${rotateX}deg)`,
          transformOrigin: "50% 0% 0",
          opacity: 0.4 + progress * 0.6,
        }}
        className="bg-cream-2 border-4 border-terracotta rounded-b-2xl px-8 py-16 max-w-2xl mx-auto"
      >
        {children}
      </div>
    </div>
  );
}