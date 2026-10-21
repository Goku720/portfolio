"use client";

import { useEffect, useRef, useState } from "react";
import NotebookTag from "./NotebookTag";

const HEADLINE_WORDS = ["reliable", "thoughtful", "delightful", "honest"];

export default function NotebookHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  // headline word cycles on its own — independent of scroll
  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % HEADLINE_WORDS.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const raw = -rect.top / (rect.height - window.innerHeight);
      setProgress(Math.min(Math.max(raw, 0), 1));
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Top page: starts nearly flat (-5deg), swings up and back out of view
  const topRotateX = -5 - progress * 95; // -5deg -> -100deg
  // Bottom page: starts folded away (60deg), unfolds upright to 0deg
  const bottomRotateX = 60 - progress * 60; // 60deg -> 0deg
  // fade the top page out near the end of the swing so it doesn't visually clip weirdly
  const topOpacity = 1 - Math.max(progress - 0.7, 0) / 0.3;

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* perspective + preserve-3d live on the DIRECT parent of the rotated pages */}
        <div
          className="relative w-full max-w-2xl"
          style={{ perspective: "1400px", transformStyle: "preserve-3d" }}
        >
          {/* Top page — hero, hinged at its bottom edge */}
          <div
            className="absolute inset-x-0 bottom-1/2 bg-cream-2 border-4 border-terracotta rounded-t-2xl px-8 py-16 text-center"
            style={{
              // transform: `rotateX(${topRotateX}deg)`,
              // transformOrigin: "50% 100% 0",
              opacity: topOpacity,
              backfaceVisibility: "hidden",
              zIndex: 2,
            }}
          >
            <div className="mb-5">
              <NotebookTag>samir amin</NotebookTag>
            </div>

            <span className="inline-block bg-sage text-white text-[13px] px-4 py-1.5 rounded-full mb-6">
              full-stack developer · AI/ML engineer
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-terracotta-dark mb-4">
              hi, i&apos;m samir
            </h1>

            <p className="max-w-lg mx-auto text-ink-soft text-[17px] mb-7">
              i build things that feel{" "}
              <span className="relative inline-block min-w-[7ch] h-[1.4em] align-bottom text-terracotta font-semibold">
                {HEADLINE_WORDS.map((word, i) => (
                  <span
                    key={word}
                    className="absolute left-0 top-0 transition-all duration-500"
                    style={{
                      opacity: i === wordIndex ? 1 : 0,
                      transform: i === wordIndex ? "translateY(0)" : "translateY(-8px)",
                    }}
                  >
                    {word}
                  </span>
                ))}
              </span>{" "}
              — from map apps to retrieval systems, with a little warmth baked in.
            </p>

            <a
              href="#work"
              className="inline-block bg-terracotta text-white font-semibold text-[15px] px-7 py-3 rounded-xl"
            >
              see my work
            </a>
          </div>

          {/* Binder — decorative spine at the seam, not animated */}
          <div
            className="absolute inset-x-0 top-1/2 h-2 bg-terracotta-dark rounded-full -translate-y-1/2"
            style={{ zIndex: 3 }}
          />

          {/* Bottom page — next section, hinged at its top edge */}
          <div
            className="absolute inset-x-0 top-1/2 bg-cream-2 border-4 border-terracotta rounded-b-2xl px-8 py-16 text-left"
            style={{
              transform: `rotateX(${bottomRotateX}deg)`,
              transformOrigin: "50% 0% 0",
              backfaceVisibility: "hidden",
              zIndex: 1,
            }}
          >
            <p className="text-terracotta font-semibold mb-4">3 things i believe in</p>
            <p className="text-ink-soft">— your checklist / beliefs content goes here —</p>
          </div>
        </div>
      </div>
    </div>
  );
}