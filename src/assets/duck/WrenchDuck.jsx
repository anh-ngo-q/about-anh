import BaseDuck from "./BaseDuck";

export default function WrenchDuck({ size = 120, className = "" }) {
  return (
    <BaseDuck size={size} className={className}>
      {/* Wrench handle */}
      <rect
        x="22"
        y="65"
        width="4"
        height="28"
        rx="2"
        fill="#888"
        transform="rotate(-30 24 79)"
      />
      {/* Wrench head */}
      <path
        d="M10 58 L18 52 L22 56 L18 62 Z"
        fill="#999"
        transform="rotate(-30 16 57)"
      />
      <path
        d="M10 62 L18 68 L22 64 Z"
        fill="#999"
        transform="rotate(-30 16 65)"
      />
    </BaseDuck>
  );
}
