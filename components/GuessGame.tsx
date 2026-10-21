// components/GuessGame.tsx
"use client";

import { useState } from "react";

type Question = {
  prompt: string;
  options: string[];
  correctIndex: number;
  reveal: string;
};

const QUESTIONS: Question[] = [
  {
    prompt: "how long did it take me to realize a bug was just a missing semicolon?",
    options: ["5 minutes", "45 minutes", "2 hours, and a full re-read of the docs"],
    correctIndex: 2,
    reveal: "two hours. i questioned my entire understanding of javascript before i found it.",
  },
  {
    prompt: "which am i actually better at?",
    options: ["writing clean code the first time", "writing code, then rewriting it four times"],
    correctIndex: 1,
    reveal: "my git history is basically a diary titled \"fix\", \"actually fix\", \"fix for real this time\".",
  },
  {
    prompt: "how many browser tabs are open right now?",
    options: ["3, very organized", "30+, and one's a stackoverflow answer from 2013"],
    correctIndex: 1,
    reveal: "there's a 2013 answer about a deprecated jquery plugin in there. i refuse to close it.",
  },
];

export default function GuessGame() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const q = QUESTIONS[step];
  const isLast = step === QUESTIONS.length - 1;

  function handleSelect(i: number) {
    if (selected !== null) return;
    setSelected(i);
  }

  function handleNext() {
    if (isLast) {
      setStep(0);
    } else {
      setStep((s) => s + 1);
    }
    setSelected(null);
  }

  return (
    <div className="text-left">
      <p className="font-hand text-2xl text-terracotta-dark mb-4">
        guess samir
      </p>

      <p className="text-ink text-[15px] mb-4">{q.prompt}</p>

      <div className="flex flex-col gap-2 mb-4">
        {q.options.map((opt, i) => {
          const isChosen = selected === i;
          const isCorrect = i === q.correctIndex;
          const showState = selected !== null;

          return (
            <button
              key={opt}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
              className={`text-left px-4 py-2.5 rounded-lg border text-sm transition-colors ${
                showState && isCorrect
                  ? "bg-sage text-white border-sage"
                  : showState && isChosen
                  ? "bg-terracotta/15 border-terracotta text-terracotta-dark"
                  : "bg-white border-line text-ink-soft hover:border-terracotta"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className="bg-cream-2 border border-line rounded-lg px-4 py-3 mb-4">
          <p className="text-ink-soft text-sm italic">{q.reveal}</p>
        </div>
      )}

      {selected !== null && (
        <button
          onClick={handleNext}
          className="text-terracotta-dark font-semibold text-sm hover:underline"
        >
          {isLast ? "start over ↺" : "next →"}
        </button>
      )}
    </div>
  );
}