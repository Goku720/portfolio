// components/ProjectCard.tsx
export default function ProjectCard({
  title,
  description,
  tags,
}: {
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="bg-cream-2 border border-line rounded-2xl p-6">
      <h3 className="text-lg font-bold text-terracotta-dark mb-2">{title}</h3>
      <p className="text-sm text-ink-soft mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-sage text-white text-xs px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}