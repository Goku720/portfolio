// components/BackgroundDoodles.tsx
// Wrap your page content with this to scatter a few hand-drawn doodles
// (Goku, and Riley the dog) faintly in the background, notebook-margin style.
//
// Usage:
//   <BackgroundDoodles>
//     <Nav />
//     <Hero />
//     <About />
//     ...
//   </BackgroundDoodles>

type Doodle = {
  src: string;
  alt: string;
  top: string;
  left?: string;
  right?: string;
  width: string;
  rotate: number;
  opacity: number;
};

const doodles: Doodle[] = [
  {
    src: "/images/goku-doodle.png",
    alt: "",
    top: "6%",
    right: "2%",
    width: "160px",
    rotate: 8,
    opacity: 0.6,
  },
  {
    src: "/images/riley-doodle.png",
    alt: "",
    top: "38%",
    left: "1%",
    width: "170px",
    rotate: -10,
    opacity: 0.6,
  },
  {
    src: "/images/goku-doodle.png",
    alt: "",
    top: "68%",
    left: "3%",
    width: "120px",
    rotate: -6,
    opacity: 0.6,
  },
  {
    src: "/images/riley-doodle.png",
    alt: "",
    top: "88%",
    right: "1%",
    width: "150px",
    rotate: 12,
    opacity: 0.6,
  },
];

export default function BackgroundDoodles({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {/* decorative layer — purely visual, sits behind everything */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        {doodles.map((d, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={d.src}
            alt={d.alt}
            style={{
              position: "absolute",
              top: d.top,
              left: d.left,
              right: d.right,
              width: d.width,
              transform: `rotate(${d.rotate}deg)`,
              opacity: d.opacity,
              filter: "grayscale(1)",
            }}
          />
        ))}
      </div>

      {/* actual page content, above the doodles */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}