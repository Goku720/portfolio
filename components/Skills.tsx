// components/Skills.tsx
type Category = {
  title: string;
  color: "sage" | "terracotta";
  top: string;
  left: string;
  rotate: number;
  width: string;
  items: string[];
};

const categories: Category[] = [
  {
    title: "languages",
    color: "sage",
    top: "4%",
    left: "6%",
    rotate: -5,
    width: "22%",
    items: ["Python", "JavaScript", "TypeScript"],
  },
  {
    title: "frontend",
    color: "terracotta",
    top: "8%",
    left: "70%",
    rotate: 4,
    width: "22%",
    items: ["Next.js", "React", "Mapbox GL JS", "Tailwind"],
  },
  {
    title: "backend / ml",
    color: "sage",
    top: "60%",
    left: "8%",
    rotate: 3,
    width: "22%",
    items: ["Flask", "TensorFlow", "Celery", "Redis"],
  },
  {
    title: "tools",
    color: "terracotta",
    top: "58%",
    left: "68%",
    rotate: -4,
    width: "22%",
    items: ["Supabase", "Git", "Docker"],
  },
];

export default function Skills() {
  return (
    <section className="py-14">
      <div className="max-w-5xl mx-auto relative" style={{ aspectRatio: "16 / 10" }}>
        {/* square-ish category cards */}
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="absolute bg-white rounded-xl p-4 shadow-lg border border-line aspect-square flex flex-col justify-center"
            style={{
              top: cat.top,
              left: cat.left,
              width: cat.width,
              transform: `rotate(${cat.rotate}deg)`,
            }}
          >
            <p
              className={`font-hand text-lg mb-2 ${
                cat.color === "sage" ? "text-sage-dark" : "text-terracotta-dark"
              }`}
            >
              {cat.title}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className={`text-[11px] px-2 py-0.5 rounded-full text-white ${
                    cat.color === "sage" ? "bg-sage" : "bg-terracotta"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* torn-paper note, centered */}
        <div
          className="absolute top-1/2 left-1/2 z-10"
          style={{ transform: "translate(-50%, -50%) rotate(-2deg)" }}
        >
          <div
            className="relative px-7 py-6 shadow-xl"
            style={{
              backgroundColor: "#F0E6D6",
              backgroundImage:
                "repeating-linear-gradient(transparent, transparent 27px, rgba(120,140,180,0.35) 28px)",
              clipPath:
                "polygon(0% 4%, 4% 0%, 9% 3%, 14% 0%, 19% 3%, 24% 0%, 29% 3%, 34% 0%, 39% 3%, 44% 0%, 49% 3%, 54% 0%, 59% 3%, 64% 0%, 69% 3%, 74% 0%, 79% 3%, 84% 0%, 89% 3%, 94% 0%, 100% 4%, 100% 100%, 0% 100%)",
            }}
          >
            <div
              className="absolute left-4 top-0 bottom-0 w-[1.5px]"
              style={{ backgroundColor: "rgba(196,105,63,0.5)" }}
            />
            <p className="font-hand text-2xl text-ink pl-3 leading-snug">
              what i work with
            </p>
            <p className="text-ink-soft text-sm pl-3 mt-1">
              a rough map of my toolbox
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}