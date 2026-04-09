type Automation = {
  name: string;
  status: string;
  lastRun: string;
  detail: string;
};

const statusBadge: Record<string, string> = {
  active: "bg-emerald-500/20 text-emerald-200",
  tracking: "bg-sky-500/20 text-sky-200",
  watch: "bg-amber-500/20 text-amber-200",
};

export function AutomationList({ items }: { items: Automation[] }) {
  return (
    <div className="rounded-3xl border border-white/5 bg-slate-900/60 p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm uppercase tracking-[0.2em] text-white/60">Automations</p>
        <button className="text-xs text-gold hover:text-white">View rules</button>
      </div>
      <div className="mt-4 space-y-4">
        {items.map((automation) => (
          <div key={automation.name} className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4">
            <div>
              <p className="text-base font-semibold text-white">{automation.name}</p>
              <p className="text-sm text-white/50">{automation.detail}</p>
            </div>
            <div className="text-right text-sm text-white/60">
              <span className={`mr-4 rounded-full px-3 py-1 text-xs ${statusBadge[automation.status] ?? "bg-white/10"}`}>
                {automation.status}
              </span>
              <p>{automation.lastRun}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
