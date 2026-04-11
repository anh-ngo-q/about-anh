import BaseDuck from "./BaseDuck";

export default function ToastDuck({ size = 120, className = "" }) {
  return (
    <BaseDuck size={size} className={className}>
      {/* Toast/bread slice held in beak */}
      {/* Toast body */}
      <rect x="76" y="43" width="18" height="20" rx="3" fill="#e8c872" />
      {/* Toast crust (darker top edge) */}
      <path d="M76 46 Q76 43 79 43 L91 43 Q94 43 94 46" fill="#c4943a" />
      {/* Toast surface detail */}
      <circle cx="83" cy="51" r="1.5" fill="#d4b05a" opacity="0.6" />
      <circle cx="87" cy="55" r="1" fill="#d4b05a" opacity="0.6" />
      <circle cx="80" cy="57" r="1.2" fill="#d4b05a" opacity="0.6" />
    </BaseDuck>
  );
}
