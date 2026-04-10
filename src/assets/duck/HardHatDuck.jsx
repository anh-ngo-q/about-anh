import BaseDuck from "./BaseDuck";

export default function HardHatDuck({ size = 120, className = "" }) {
  return (
    <BaseDuck size={size} className={className}>
      {/* Hat brim */}
      <ellipse cx="55" cy="28" rx="28" ry="5" fill="#f5a623" />
      {/* Hat dome */}
      <path
        d="M33 28 Q35 12 55 10 Q75 12 77 28"
        fill="#f5a623"
        stroke="#e6941a"
        strokeWidth="1"
      />
      {/* Hat stripe */}
      <rect x="36" y="22" width="38" height="3" rx="1" fill="#e6941a" />
    </BaseDuck>
  );
}
