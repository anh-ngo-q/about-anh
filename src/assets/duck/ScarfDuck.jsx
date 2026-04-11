import BaseDuck from "./BaseDuck";

export default function ScarfDuck({ size = 120, className = "" }) {
  return (
    <BaseDuck size={size} className={className}>
      {/* Winter wool beanie */}
      <path
        d="M33 30 Q33 12 55 10 Q77 12 77 30"
        fill="#a8e6cf"
      />
      {/* Beanie ribbed brim */}
      <rect x="33" y="27" width="44" height="6" rx="3" fill="#8fd4b8" />
      {/* Beanie fold lines */}
      <path d="M38 29 L38 32" stroke="#7cc4a8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M45 29 L45 32" stroke="#7cc4a8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M52 29 L52 32" stroke="#7cc4a8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M59 29 L59 32" stroke="#7cc4a8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M66 29 L66 32" stroke="#7cc4a8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M73 29 L73 32" stroke="#7cc4a8" strokeWidth="1.5" strokeLinecap="round" />
      {/* Pompom */}
      <circle cx="55" cy="8" r="5" fill="#a8e6cf" />
      <circle cx="53" cy="7" r="2" fill="#c4f0dd" />
      {/* Scarf */}
<path d="M31 53.5 Q31 50 35 50 Q52 59 71 50 Q75 50 75 53.5 Q75 57 71 57 Q52 68 35 57 Q31 57 31 53.5 Z" fill="#a8e6cf" />
<path d="M33 55 Q52 64 72 55" stroke="#8fd4b8" strokeWidth="1.2" fill="none" strokeLinecap="round" />

{/* Tail */}
<path d="M67 55 Q70 66 68 80 Q67 85 62 85 Q57 85 58 80 Q60 68 63 56Z" fill="#a8e6cf" />
<path d="M65 61 Q66 72 64 81" stroke="#8fd4b8" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </BaseDuck>
  );
}
