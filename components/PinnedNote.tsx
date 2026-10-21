// components/PinnedNote.tsx
export default function PinnedNote({
  children,
  rotate = -3,
}: {
  children: React.ReactNode;
  rotate?: number;
}) {
  return (
    <div className="relative inline-block" style={{ transform: `rotate(${rotate}deg)` }}>
      {/* pin */}
      <div
        className="absolute left-1/2 -top-2.5 -translate-x-1/2 w-4 h-4 rounded-full z-10 shadow-md"
        style={{
          background: "radial-gradient(circle at 35% 30%, #e8534a, #9c2f28)",
        }}
      />
      {/* torn grid-paper card */}
      <div
        className="relative px-6 py-5 shadow-lg"
        style={{
          backgroundColor: "#C7BEB0",
          backgroundImage:
            "linear-gradient(rgba(90,80,65,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(90,80,65,0.18) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          clipPath:
            "polygon(0% 5%, 6% 0%, 12% 4%, 18% 0%, 24% 4%, 30% 0%, 36% 4%, 42% 0%, 48% 4%, 54% 0%, 60% 4%, 66% 0%, 72% 4%, 78% 0%, 84% 4%, 90% 0%, 96% 4%, 100% 0%, 100% 95%, 94% 100%, 88% 96%, 82% 100%, 76% 96%, 70% 100%, 64% 96%, 58% 100%, 52% 96%, 46% 100%, 40% 96%, 34% 100%, 28% 96%, 22% 100%, 16% 96%, 10% 100%, 4% 96%, 0% 100%)",
        }}
      >
        {children}
      </div>
    </div>
  );
}