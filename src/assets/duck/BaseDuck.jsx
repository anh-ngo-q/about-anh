export default function BaseDuck({ size = 120, children, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Body */}
      <ellipse cx="60" cy="75" rx="40" ry="30" fill="#f7d44c" />
      {/* Head */}
      <circle cx="55" cy="42" r="22" fill="#f7d44c" />
      {/* Beak */}
      <ellipse cx="78" cy="46" rx="12" ry="6" fill="#f5a623" />
      {/* Eye */}
      <circle cx="50" cy="38" r="3" fill="#1a1a2e" />
      {/* Eye highlight */}
      <circle cx="51" cy="37" r="1" fill="#ffffff" />
      {/* Wing */}
      <ellipse cx="45" cy="78" rx="18" ry="12" fill="#e6c233" transform="rotate(-15 45 78)" />
      {/* Belly highlight */}
      <ellipse cx="65" cy="80" rx="20" ry="12" fill="#fae07a" opacity="0.5" />
      {/* Accessories rendered as children */}
      {children}
    </svg>
  );
}
