import BaseDuck from "./BaseDuck";

export default function ToastDuck({ size = 120, className = "" }) {
  return (
    <BaseDuck size={size} className={className}>
      {/* Toast/bread slice held in beak */}
      {/* Toast body */}
      <rect x="82" y="36" width="18" height="20" rx="3" fill="#e8c872" />
      {/* Toast crust (darker top edge) */}
      <path d="M82 39 Q82 36 85 36 L97 36 Q100 36 100 39" fill="#c4943a" />
      {/* Toast surface detail */}
      <circle cx="89" cy="44" r="1.5" fill="#d4b05a" opacity="0.6" />
      <circle cx="93" cy="48" r="1" fill="#d4b05a" opacity="0.6" />
      <circle cx="86" cy="50" r="1.2" fill="#d4b05a" opacity="0.6" />
    </BaseDuck>
  );
}
