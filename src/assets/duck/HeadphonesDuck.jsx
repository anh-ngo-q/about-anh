import BaseDuck from "./BaseDuck";

export default function HeadphonesDuck({ size = 120, className = "" }) {
  return (
    <BaseDuck size={size} className={className}>
      {/* Headband */}
      <path
        d="M35 32 Q55 10 75 32"
        stroke="#555"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      {/* Left ear cup */}
      <rect x="30" y="28" width="10" height="14" rx="4" fill="#555" />
      <rect x="31" y="30" width="8" height="10" rx="3" fill="#a8e6cf" />
      {/* Right ear cup */}
      <rect x="72" y="28" width="10" height="14" rx="4" fill="#555" />
      <rect x="73" y="30" width="8" height="10" rx="3" fill="#a8e6cf" />
    </BaseDuck>
  );
}
