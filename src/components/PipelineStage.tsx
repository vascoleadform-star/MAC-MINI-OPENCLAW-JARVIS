type Stage = {
  stage: string;
  count: number;
  delta: string;
};

export function PipelineStage({ stage, count, delta }: Stage) {
  const isPositive = delta.startsWith("+");
  return (
    <div className="rounded-3xl border border-white/5 bg-slate-900/50 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm uppercase tracking-[0.2em] text-white/50">{stage}</p>
        <span className={`text-xs ${isPositive ? "text-emerald-300" : delta === "0" ? "text-white/40" : "text-rose-300"}`}>
          {delta}
        </span>
      </div>
      <p className="mt-4 text-3xl font-semibold text-white">{count}</p>
      <div className="mt-6 h-2 rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-gold to-beige"
          style={{ width: `${Math.min(count * 4, 100)}%` }}
        />
      </div>
    </div>
  );
}
