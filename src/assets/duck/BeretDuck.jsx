import BaseDuck from "./BaseDuck";

export default function BeretDuck({ size = 120, className = "" }) {
  return (
    <BaseDuck size={size} className={className}>
      {/* Beret base */}
      <ellipse cx="52" cy="26" rx="22" ry="6" fill="#ffcba4" />
      {/* Beret puff */}
      <path
        d="M32 26 Q30 14 52 12 Q72 14 68 26"
        fill="#ffcba4"
      />
      {/* Beret nub */}
      <circle cx="50" cy="12" r="3" fill="#ffcba4" />
      <circle cx="50" cy="12" r="2" fill="#f0b88a" />
    </BaseDuck>
  );
}
