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
      {/* Scarf around neck */}
      <path
        d="M35 58 Q55 52 75 58 Q78 62 75 66 Q55 60 35 66 Q32 62 35 58"
        fill="#a8e6cf"
      />
      {/* Scarf tail */}
      <path d="M70 62 L78 80 Q80 82 76 82 L68 66" fill="#a8e6cf" />
      <path d="M72 70 L77 78" stroke="#8fd4b8" strokeWidth="1.5" fill="none" />
    </BaseDuck>
  );
}
