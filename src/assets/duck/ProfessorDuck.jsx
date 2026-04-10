import BaseDuck from "./BaseDuck";

export default function ProfessorDuck({ size = 120, className = "" }) {
  return (
    <BaseDuck size={size} className={className}>
      {/* Left lens */}
      <circle cx="44" cy="37" r="7" stroke="#555" strokeWidth="2" fill="none" />
      {/* Right lens */}
      <circle cx="60" cy="37" r="7" stroke="#555" strokeWidth="2" fill="none" />
      {/* Bridge */}
      <path d="M51 37 L53 36" stroke="#555" strokeWidth="2" strokeLinecap="round" />
      {/* Left temple */}
      <path d="M37 37 L32 34" stroke="#555" strokeWidth="2" strokeLinecap="round" />
    </BaseDuck>
  );
}
