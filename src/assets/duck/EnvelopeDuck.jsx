import BaseDuck from "./BaseDuck";

export default function EnvelopeDuck({ size = 120, className = "" }) {
  return (
    <BaseDuck size={size} className={className}>
      {/* Letter/envelope held in beak */}
      <rect x="75" y="45" width="20" height="14" rx="2" fill="#f0f0f0" transform="rotate(-8 92 45)" />
      {/* Envelope flap */}
      <path d="M76 46 L85 53 L94 46" stroke="#ccc" strokeWidth="1.2" fill="none" transform="rotate(-8 92 45)" />
      {/* Envelope seal */}
      <circle cx="85" cy="55" r="2" fill="#ffcba4" transform="rotate(-8 92 45)" />
    </BaseDuck>
  );
}
