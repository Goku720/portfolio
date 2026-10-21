// components/About.tsx
import NotebookTag from "./NotebookTag";

const timeline = [
  { label: "MCA — Assam Engineering College", color: "sage" as const },
  { label: "6-month internship — KKHSOU IT Cell", color: "terracotta" as const },
  { label: "now: ML/AI + cybersecurity projects", color: "sage" as const },
];

export default function About() {
  return (
    <section id="about" className="py-14 flex flex-col items-center text-center">
      <div className="mb-6">
        <NotebookTag>a bit about me</NotebookTag>
      </div>

      <p className="text-ink-soft text-[15px] max-w-xl mb-8">
        MCA graduate from Assam Engineering College, Guwahati. Spent six
        months interning at KKHSOU&apos;s IT Cell, and I&apos;ve been
        building ML/AI and cybersecurity projects ever since — always
        looking for the next thing to dig into.
      </p>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* polaroid-style photo frame — now with the real doodle portrait */}
        <div className="bg-white rounded-lg p-3 shadow-lg -rotate-3 flex-shrink-0">
          <div className="w-40 h-40 rounded-md bg-terracotta/10 flex items-end justify-center overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/samir-portrait.png"
              alt="Samir Amin, doodle-style self portrait"
              className="w-full h-full object-contain object-bottom"
            />
          </div>
          <p className="text-center text-[13px] text-ink-soft mt-2 font-hand text-lg">
            samir, probably debugging
          </p>
        </div>

        {/* timeline */}
        <div className="flex flex-col gap-2 items-start">
          {timeline.map((step) => (
            <div key={step.label} className="flex items-center gap-3">
              <span
                className={`w-2 h-2 rounded-full flex-shrink-0 ${
                  step.color === "sage" ? "bg-sage" : "bg-terracotta"
                }`}
              />
              <span className="text-sm text-ink-soft">{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}