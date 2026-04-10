import BaseDuck from "./BaseDuck";

export default function EnvelopeDuck({ size = 120, className = "" }) {
  return (
    <BaseDuck size={size} className={className}>
      {/* Letter/envelope held in beak */}
      <rect x="82" y="38" width="20" height="14" rx="2" fill="#f0f0f0" transform="rotate(-8 92 45)" />
      {/* Envelope flap */}
      <path d="M83 39 L92 46 L101 39" stroke="#ccc" strokeWidth="1.2" fill="none" transform="rotate(-8 92 45)" />
      {/* Envelope seal */}
      <circle cx="92" cy="48" r="2" fill="#ffcba4" transform="rotate(-8 92 45)" />
    </BaseDuck>
  );
}
