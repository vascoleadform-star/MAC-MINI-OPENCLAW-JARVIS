type AnalyticsProps = {
  sources: { label: string; value: number }[];
  trend: number[];
};

export function AnalyticsPanel({ sources, trend }: AnalyticsProps) {
  const max = Math.max(...sources.map((s) => s.value));

  return (
    <div className="rounded-3xl border border-white/5 bg-slate-900/60 p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm uppercase tracking-[0.2em] text-white/60">Sources</p>
        <p className="text-xs text-white/40">24h rolling</p>
      </div>
      <div className="mt-4 grid gap-3">
        {sources.map((source) => (
          <div key={source.label}>
            <div className="flex items-center justify-between text-sm text-white/70">
              <p>{source.label}</p>
              <p>{source.value}</p>
            </div>
            <div className="mt-1 h-2 rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-gold to-amber-300"
                style={{ width: `${(source.value / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <p className="text-sm uppercase tracking-[0.2em] text-white/60">Trend</p>
        <div className="mt-4 flex h-24 items-end gap-2">
          {trend.map((point, idx) => (
            <div
              key={`${point}-${idx}`}
              className="w-full rounded-t-full bg-gradient-to-t from-slate-800 to-gold/80"
              style={{ height: `${Math.max(point / 1.2, 30)}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
