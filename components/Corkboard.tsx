// components/Corkboard.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PinnedNote from "./PinnedNote";

type Project = {
  id: string;
  label: string;
  top: string;
  left: string;
  rotate: number;
  width: string;
  description?: string;
  tags?: string[];
};

const projects: Project[] = [
  {
    id: "atlasour",
    label: "atlasour — couple's map app",
    top: "34%",
    left: "10%",
    rotate: -6,
    width: "18%",
    description:
      "a stylized couple's map app with pins, fog-of-war, and shared logs — built for me and neha.",
    tags: ["next.js", "mapbox gl js", "supabase"],
  },
  {
    id: "rag",
    label: "rag system from scratch",
    top: "8%",
    left: "42%",
    rotate: 3,
    width: "20%",
    description:
      "built from scratch — arxiv pdfs, chromadb, groq llm, and a flask api behind a simple frontend.",
    tags: ["flask", "chromadb", "groq"],
  },
  {
    id: "mochi",
    label: "dasai mochi diy",
    top: "10%",
    left: "70%",
    rotate: -4,
    width: "15%",
    description: "a little outside-of-code project — hand-making mochi for Dasai.",
  },
  {
    id: "eresource",
    label: "e-resource platform",
    top: "52%",
    left: "18%",
    rotate: 5,
    width: "18%",
  },
  {
    id: "wearable",
    label: "wearable health monitor",
    top: "48%",
    left: "68%",
    rotate: -3,
    width: "16%",
  },
];

export default function Corkboard() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = projects.find((p) => p.id === selectedId);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const wasDragged = useRef(false);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectedId(null);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const rulerNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18];

  return (
    <section id="work" className="py-14">
      {/* red frame */}
      <div
        className="bg-terracotta rounded-3xl p-5 max-w-5xl mx-auto"
        style={{ transform: "rotate(-2deg)" }}
      >
        {/* dark board — counter-rotated to sit level */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            backgroundColor: "#171717",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            aspectRatio: "16 / 9",
            transform: "rotate(2deg)",
          }}
        >
          {/* generous inset buffer so rotated corners never clip a dragged pin */}
          <div ref={constraintsRef} className="absolute inset-16 pointer-events-none" />

          {/* pinned heading note — fixed in place, top-left, not draggable */}
          <div className="absolute top-[6%] left-[4%] z-10">
            <PinnedNote>
              <p className="font-mono font-bold text-ink text-base leading-tight">
                Curious? 
              </p>
              <p className="font-mono text-ink-soft text-xs mt-1">
                Tap to peek.
              </p>
            </PinnedNote>
          </div>

          <div className="absolute left-3 top-0 bottom-0 flex flex-col justify-between py-6 text-white/40 text-[11px] font-mono">
            {rulerNumbers.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>

          {projects.map((p) => (
            <motion.button
              key={p.id}
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.1}
              dragMomentum={false}
              onDragStart={() => {
                wasDragged.current = true;
              }}
              onClick={() => {
                if (wasDragged.current) {
                  wasDragged.current = false;
                  return;
                }
                setSelectedId(p.id);
              }}
              className="absolute bg-white rounded-lg p-1.5 shadow-xl cursor-grab active:cursor-grabbing"
              style={{
                top: p.top,
                left: p.left,
                width: p.width,
                rotate: p.rotate,
              }}
              whileDrag={{ scale: 1.08, zIndex: 20 }}
            >
              <div className="aspect-[4/3] rounded-md bg-line mb-1" />
              <p className="text-[10px] text-ink-soft text-center leading-tight">
                {p.label}
              </p>
            </motion.button>
          ))}

          <p className="absolute bottom-4 right-6 text-white/70 text-[13px] font-hand">
            everything i build, i build with care.
          </p>
        </div>
      </div>

      {/* modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-50 flex items-center justify-center px-6 backdrop-blur-md bg-ink/20"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-cream-2/95 backdrop-blur-xl border border-line rounded-2xl p-8 max-w-md w-full text-left shadow-xl"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-terracotta-dark">
                  {selected.label}
                </h3>
                <button
                  onClick={() => setSelectedId(null)}
                  className="text-ink-soft hover:text-terracotta text-lg leading-none"
                >
                  ✕
                </button>
              </div>
              <div className="h-40 rounded-md bg-line mb-4" />
              <p className="text-sm text-ink-soft mb-4">
                {selected.description ?? "more details coming soon."}
              </p>
              {selected.tags && (
                <div className="flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-sage text-white text-xs px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}