export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="50" cy="50" r="38" stroke="var(--brand-mint)" strokeOpacity="0.4" strokeWidth="3" />
      <line x1="27" y1="73" x2="73" y2="27" stroke="var(--brand-gold)" strokeWidth="6" strokeLinecap="round" />
      <line x1="27" y1="27" x2="73" y2="73" stroke="var(--brand-mint)" strokeWidth="6" strokeLinecap="round" />
      <circle cx="50" cy="50" r="5" fill="var(--brand-gold)" />
    </svg>
  );
}

export function LogoWordmark({ withTagline = false }: { withTagline?: boolean }) {
  return (
    <div>
      <p className="font-serif text-xl font-bold tracking-wide text-white">AXIS</p>
      {withTagline && (
        <p className="text-[10px] uppercase tracking-wider text-brand-mint">
          Estrutura Comercial Inteligente
        </p>
      )}
    </div>
  );
}
