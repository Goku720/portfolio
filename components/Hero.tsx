// components/Hero.tsx
"use client";

import { useEffect, useState } from "react";
import NotebookTag from "./NotebookTag";

const WORDS = ["honest", "thoughtful", "reliable", "warm", "useful"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  function nextWord() {
    setIndex((i) => (i + 1) % WORDS.length);
  }

  return (
    <div className="relative">
      <div
        className="absolute"
        style={{
          top: 0,
          right: 0,
          transform: "translate(-489px, -116px) rotate(-32deg)",
        }}
      >
        <NotebookTag>samir amin</NotebookTag>
      </div>

      {/* small role label */}
      <p className="text-sage-dark text-xs font-semibold tracking-[0.14em] uppercase mb-3">
        full-stack developer &amp; AI/ML engineer
      </p>

      {/* two-line headline — plain serif first line, cycling handwritten accent word */}
      <h1
        className="text-terracotta-dark text-4xl md:text-[42px] leading-[1.1] mb-1"
        style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
      >
        i build things that
      </h1>
      <h1
        onClick={nextWord}
        className="text-terracotta-dark font-hand text-5xl md:text-6xl leading-[1.1] mb-6 cursor-pointer select-none inline-block"
        title="click for another word"
      >
        feel {WORDS[index]}
      </h1>

      {/* small meta line, matching the "Cape Town • GMT" pattern */}
      <p className="text-terracotta text-sm" style={{ fontFamily: "'Fraunces', serif" }}>
        Guwahati, IN • GMT +5:30
      </p>
    </div>
  );
}