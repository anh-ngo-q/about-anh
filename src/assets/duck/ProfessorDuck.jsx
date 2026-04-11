import BaseDuck from "./BaseDuck";

export default function ProfessorDuck({ size = 120, className = "" }) {
  return (
    <BaseDuck size={size} className={className}>
      <g transform="rotate(-4, 78, 39)">
        <ellipse cx="67" cy="38" rx="7" ry="4.5" stroke="#111" strokeWidth="1.8" fill="rgba(180,220,255,0.12)" />
        <ellipse cx="81" cy="37" rx="6" ry="4" stroke="#111" strokeWidth="1.8" fill="rgba(180,220,255,0.12)" />
        {/* <path d="M76 39 Q78 38.5 77 38.5" stroke="#111" strokeWidth="1.8" fill="none" strokeLinecap="round" /> */}
        {/* <path d="M62 38.5 Q57 37 52 36" stroke="#111" strokeWidth="1.8" fill="none" strokeLinecap="round" /> */}
        {/* <path d="M89 37 Q91 36.5 93 36" stroke="#111" strokeWidth="1.5" fill="none" strokeLinecap="round" /> */}
      </g>
    </BaseDuck>
  );
}