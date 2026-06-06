type Tone = "moody-1" | "moody-2" | "moody-3";

export function MoodyImage({
  tone = "moody-1",
  className = "",
  label,
  children,
}: {
  tone?: Tone;
  className?: string;
  label?: string;
  children?: React.ReactNode;
}) {
  const bg =
    tone === "moody-1" ? "bg-moody-1" : tone === "moody-2" ? "bg-moody-2" : "bg-moody-3";
  return (
    <div className={`relative overflow-hidden ${bg} ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/30" />
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.18), transparent 55%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.4), transparent 55%)",
        }}
      />
      {label && (
        <div className="absolute left-4 top-4 font-sans text-[10px] uppercase tracking-[0.2em] text-white/40">
          {label}
        </div>
      )}
      {children}
    </div>
  );
}
