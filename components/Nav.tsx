// components/Nav.tsx
export default function Nav() {
  return (
    <nav className="relative flex justify-center items-center pt-32 pb-8">
      {/* left doodle accent */}
      <svg
        className="absolute left-6 top-8 w-10 h-10 text-sage opacity-60 hidden md:block"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M20 36C20 36 8 28 8 16C8 9 13 4 20 8C27 4 32 9 32 16C32 28 20 36 20 36Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="flex gap-8 text-[15px] text-ink-soft">
        <a href="#work" className="hover:text-terracotta transition-colors">
          work
        </a>
        <a href="#about" className="hover:text-terracotta transition-colors">
          about
        </a>
        <a href="#contact" className="hover:text-terracotta transition-colors">
          connect
        </a>
      </div>

      {/* right doodle accent */}
      <svg
        className="absolute right-6 top-8 w-10 h-10 text-terracotta opacity-50 hidden md:block"
        viewBox="0 0 40 40"
        fill="none"
      >
        <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M20 4V12M20 28V36M4 20H12M28 20H36M9 9L14 14M26 26L31 31M31 9L26 14M14 26L9 31"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </nav>
  );
}