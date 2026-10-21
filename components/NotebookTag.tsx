export default function NotebookTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-block -rotate-2">
      {/* tape mark */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 -rotate-6 w-9 h-3.5 bg-terracotta/30" />
      <div className="bg-white border border-line border-l-4 border-l-terracotta px-6 py-2.5 shadow-sm font-hand text-2xl text-ink">
        {children}
      </div>
    </div>
  );
}