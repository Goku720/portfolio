// components/NotebookSpread.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import ScrollCue from "./ScrollCue";

// shared grid-paper texture — bigger cells, closer to the reference's visible squares
const gridPaperStyle = {
  backgroundImage:
    "linear-gradient(rgba(138,122,98,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(138,122,98,0.08) 1px, transparent 1px)",
  backgroundSize: "40px 40px",
};

export default function NotebookSpread({
  top,
  bottom,
}: {
  top: React.ReactNode;
  bottom: React.ReactNode;
}) {
  const bottomRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      if (!bottomRef.current) return;

      const rect = bottomRef.current.getBoundingClientRect();
      const raw =
        (window.innerHeight - rect.top) / (window.innerHeight * 0.6);

      setProgress(Math.min(Math.max(raw, 0), 1));
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bottomRotateX = 60 - progress * 70;

  return (
    <div
      className="max-w-4xl mx-auto px-4"
      style={{ perspective: "1400px" }}
    >
      {/* TOP FLAP — border, text, and illustration all stay fully solid.
          Only the grid-line layer underneath them fades. */}
      <div
        className="relative bg-terracotta pt-6"
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          borderTopLeftRadius: "45px",
          borderTopRightRadius: "45px",
        }}
      >
        <div
          className="relative bg-cream-2 px-14 flex flex-col justify-center overflow-visible"
          style={{
            borderRadius: "16px 16px 0 0",
            aspectRatio: "4 / 2.5",
            transform: "perspective(4105px) rotateX(-5deg)",
            transformOrigin: "50% 100% 0",
          }}
        >
          {/* Grid-line layer — the ONLY thing that fades */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              ...gridPaperStyle,
              borderRadius: "16px 16px 0 0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 55%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 55%, transparent 100%)",
            }}
          />

          {/* Main content — fully opaque, sits above the grid layer */}
          <div className="relative z-10">{top}</div>

          {/* Scroll sticker / photo — fully opaque, above everything */}
          <ScrollCue
            className="z-20"
            style={{
              position: "absolute",
              right: "8%",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        </div>

        {/* Ribbon curl */}
        <div className="relative h-0">
          <svg
            className="absolute -left-2 -top-2 w-8 h-10"
            viewBox="0 0 32 40"
            fill="none"
          >
            <path
              d="M16 2C16 2 4 10 4 20C4 30 16 38 16 38"
              stroke="#C4693F"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.75"
            />
          </svg>
        </div>
      </div>

      {/* Spacer — fills the gap with terracotta */}
      <div
        className="bg-terracotta"
        style={{ height: "4px" }}
      />

      {/* BOTTOM FLAP */}
      <div
        ref={bottomRef}
        className="relative bg-terracotta pb-6"
        style={{
          transform: `perspective(3310px) rotateX(${bottomRotateX}deg)`,
          transformOrigin: "50% 0% 0",
          paddingLeft: "20px",
          paddingRight: "20px",
          borderBottomLeftRadius: "45px",
          borderBottomRightRadius: "45px",
        }}
      >
        <div
          className="relative bg-cream-2 px-14 text-left"
          style={{
            borderRadius: "0 0 16px 16px",
            aspectRatio: "4 / 2.5",
          }}
        >
          {bottom}
        </div>
      </div>
    </div>
  );
}