// components/Footer.tsx
export default function Footer() {
  return (
    <footer id="contact" className="text-center py-16 border-t border-line mt-10">
      <p className="text-ink-soft text-[15px] mb-4">
        let&apos;s build something together
      </p>
        <a
        href="mailto:samiramin720@gmail.com"
        className="inline-block bg-terracotta text-white font-semibold text-[15px] px-7 py-3 rounded-xl mb-6"
      >
        say hello
      </a>
      <div className="flex justify-center gap-6 text-sm text-ink-soft">
        <a
          href="https://github.com/Goku720"
          target="_blank"
          rel="noopener"
          className="hover:text-terracotta transition-colors"
        >
          github
        </a>
        <a
          href="https://linkedin.com/in/samir-amin-96227425a/"
          target="_blank"
          rel="noopener"
          className="hover:text-terracotta transition-colors"
        >
          linkedin
        </a>
      </div>
    </footer>
  );
}