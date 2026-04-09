type MetricCardProps = {
  label: string;
  value: string;
  sublabel: string;
};

export function MetricCard({ label, value, sublabel }: MetricCardProps) {
  return (
    <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-deepBlue/80 via-midnight to-black/60 p-5 shadow-xl shadow-black/40">
      <p className="text-sm uppercase tracking-[0.2em] text-white/60">{label}</p>
      <p className="mt-3 text-4xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-gold/80">{sublabel}</p>
    </div>
  );
}
