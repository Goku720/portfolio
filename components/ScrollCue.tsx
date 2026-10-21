// components/ScrollCue.tsx
export default function ScrollCue({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`relative select-none ${className}`}
      style={{
        width: "190px",
        ...style,
      }}
    >
      {/* sun */}
      <svg
        className="absolute"
        style={{ top: "-14%", right: "6%", width: "15%", zIndex: 0 }}
        viewBox="0 0 40 40"
        fill="none"
      >
        <circle cx="20" cy="20" r="7" stroke="#C4693F" strokeWidth="1.6" opacity="0.55" />
        <path
          d="M20 2V8M20 32V38M2 20H8M32 20H38M7 7L11.5 11.5M28.5 28.5L33 33M33 7L28.5 11.5M11.5 28.5L7 33"
          stroke="#C4693F"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>

      {/* tall side branches, BEHIND the character */}
      <svg
        className="absolute"
        style={{ top: "8%", left: "-16%", width: "132%", height: "78%", zIndex: 0 }}
        viewBox="0 0 220 200"
        fill="none"
      >
        <path
          d="M20 200 C18 150 25 100 15 60 M15 60 C22 68 30 66 34 58 M15 60 C10 70 0 70 -4 60 M15 60 C22 50 30 50 34 42"
          stroke="#8A9A73"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M200 200 C202 148 194 96 206 55 M206 55 C199 63 191 61 187 53 M206 55 C211 65 221 65 225 55 M206 55 C199 45 191 45 187 37"
          stroke="#8A9A73"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
      </svg>

      {/* the character */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/neha-sticker-cropped.png"
        alt=""
        className="relative w-full h-auto"
        style={{
          aspectRatio: "606 / 863",
          zIndex: 1,
          filter: "drop-shadow(0 6px 10px rgba(58,52,44,0.18))",
        }}
      />

      {/* bushes at the base — IN FRONT of the character, filled so it actually covers her legs */}
      <svg
        className="absolute pointer-events-none"
        style={{ top: "66%", left: "-24%", width: "148%", height: "40%", zIndex: 2 }}
        viewBox="0 0 220 70"
        fill="none"
      >
        <path
          d="M5 65 C-5 48 10 30 32 32 C34 20 62 18 66 30 C72 22 92 24 90 36 C100 34 108 44 96 50 C104 56 92 66 76 63 C74 66 40 66 5 65 Z"
          stroke="#5F6E48"
          strokeWidth="1.6"
          fill="#B7C4A0"
          opacity="0.95"
        />
        <path
          d="M130 66 C120 52 132 34 154 36 C158 24 186 22 190 34 C202 30 214 40 204 48 C214 52 204 64 188 62 C186 66 152 66 130 66 Z"
          stroke="#5F6E48"
          strokeWidth="1.6"
          fill="#B7C4A0"
          opacity="0.95"
        />
        <path
          d="M92 66 C88 58 98 52 108 55 C112 48 124 50 124 58 C130 56 134 62 126 66 Z"
          stroke="#5F6E48"
          strokeWidth="1.4"
          fill="#B7C4A0"
          opacity="0.9"
        />
      </svg>

      {/* single leaf, IN FRONT, left side */}
      <svg
        className="absolute pointer-events-none"
        style={{ top: "58%", left: "-16%", width: "20%", height: "22%", zIndex: 2 }}
        viewBox="0 0 40 50"
        fill="none"
      >
        <path
          d="M14 40 C14 20 24 6 24 6 C24 6 34 20 24 40 C24 40 14 40 14 40 Z M24 6 V40"
          stroke="#C4693F"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.55"
        />
      </svg>

      {/* overhanging leaf fronds, IN FRONT of the character's top edges */}
      <svg
        className="absolute pointer-events-none"
        style={{ top: "-6%", left: "-14%", width: "128%", height: "45%", zIndex: 2 }}
        viewBox="0 0 220 100"
        fill="none"
      >
        <path
          d="M-5 -5 C15 5 25 20 22 38 C30 30 40 32 42 42 C34 40 26 44 24 52"
          stroke="#8A9A73"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
        />
        <path
          d="M225 -5 C205 5 195 20 198 38 C190 30 180 32 178 42 C186 40 194 44 196 52"
          stroke="#8A9A73"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
        />
      </svg>

      {/* flowers with curved stems, IN FRONT of the character */}
      <svg
        className="absolute pointer-events-none"
        style={{ top: "62%", left: "-20%", width: "142%", height: "44%", zIndex: 2 }}
        viewBox="0 0 220 100"
        fill="none"
      >
        {/* flower 1 — bottom left */}
        <g opacity="0.7">
          <circle cx="20" cy="70" r="3" fill="#C4693F" />
          <circle cx="14" cy="66" r="3.5" stroke="#C4693F" strokeWidth="1.3" fill="none" />
          <circle cx="26" cy="66" r="3.5" stroke="#C4693F" strokeWidth="1.3" fill="none" />
          <circle cx="14" cy="74" r="3.5" stroke="#C4693F" strokeWidth="1.3" fill="none" />
          <circle cx="26" cy="74" r="3.5" stroke="#C4693F" strokeWidth="1.3" fill="none" />
          <path d="M20 73 Q16 82 20 90" stroke="#8A9A73" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        </g>

        {/* flower 2 — smaller, bottom left, offset */}
        <g opacity="0.6">
          <circle cx="42" cy="84" r="2.2" fill="#8A9A73" />
          <circle cx="38" cy="81" r="2.6" stroke="#8A9A73" strokeWidth="1.1" fill="none" />
          <circle cx="46" cy="81" r="2.6" stroke="#8A9A73" strokeWidth="1.1" fill="none" />
          <circle cx="38" cy="87" r="2.6" stroke="#8A9A73" strokeWidth="1.1" fill="none" />
          <circle cx="46" cy="87" r="2.6" stroke="#8A9A73" strokeWidth="1.1" fill="none" />
          <path d="M42 87 Q46 93 42 98" stroke="#8A9A73" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        </g>

        {/* flower 3 — bottom right */}
        <g opacity="0.7">
          <circle cx="196" cy="68" r="3" fill="#C4693F" />
          <circle cx="190" cy="64" r="3.5" stroke="#C4693F" strokeWidth="1.3" fill="none" />
          <circle cx="202" cy="64" r="3.5" stroke="#C4693F" strokeWidth="1.3" fill="none" />
          <circle cx="190" cy="72" r="3.5" stroke="#C4693F" strokeWidth="1.3" fill="none" />
          <circle cx="202" cy="72" r="3.5" stroke="#C4693F" strokeWidth="1.3" fill="none" />
          <path d="M196 71 Q200 80 196 88" stroke="#8A9A73" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        </g>

        {/* flower 4 — smaller, bottom right, offset */}
        <g opacity="0.6">
          <circle cx="174" cy="82" r="2.2" fill="#8A9A73" />
          <circle cx="170" cy="79" r="2.6" stroke="#8A9A73" strokeWidth="1.1" fill="none" />
          <circle cx="178" cy="79" r="2.6" stroke="#8A9A73" strokeWidth="1.1" fill="none" />
          <circle cx="170" cy="85" r="2.6" stroke="#8A9A73" strokeWidth="1.1" fill="none" />
          <circle cx="178" cy="85" r="2.6" stroke="#8A9A73" strokeWidth="1.1" fill="none" />
          <path d="M174 85 Q170 91 174 96" stroke="#8A9A73" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        </g>
      </svg>

      {/* Editable text over the blank sign */}
      <div
        className="absolute flex items-center justify-center text-center pointer-events-none"
        style={{
          top: "60%",
          left: "9%",
          right: "9%",
          bottom: "11%",
          zIndex: 3,
        }}
      >
        <span className="font-hand text-ink text-xl leading-tight -rotate-1">
          scroll down ↓
        </span>
      </div>
    </div>
  );
}