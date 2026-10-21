// components/FeaturedProjects.tsx — the section wrapping a grid of ProjectCards
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section className="py-14">
      <h2 className="text-2xl font-bold text-terracotta-dark mb-2">
        featured projects
      </h2>
      <p className="text-ink-soft text-[15px] mb-8">
        the ones i&apos;m proudest of
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="atlasour"
          description="a stylized couple's map app with pins, fog-of-war, and shared logs — built for me and neha."
          tags={["next.js", "mapbox gl js", "supabase"]}
        />
        <ProjectCard
          title="rag system"
          description="built from scratch — arxiv pdfs, chromadb, groq llm, and a flask api behind a simple frontend."
          tags={["flask", "chromadb", "groq"]}
        />
      </div>
    </section>
  );
}