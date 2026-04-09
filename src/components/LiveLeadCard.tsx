import type { Lead } from "@/lib/mockData";

const statusColors: Record<string, string> = {
  New: "bg-slate-800 text-white",
  Qualifying: "bg-amber-600/30 text-amber-200",
  Proposal: "bg-emerald-600/30 text-emerald-200",
};

export function LiveLeadCard({ lead }: { lead: Lead }) {
  return (
    <div className="flex flex-col gap-3 rounded-3xl border border-white/5 bg-slate-900/60 p-4 backdrop-blur">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold text-white">{lead.name}</p>
          <p className="text-sm text-white/60">{lead.company}</p>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs ${statusColors[lead.status] ?? "bg-slate-700 text-white/70"}`}>
          {lead.status}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
        <p>{lead.source}</p>
        <p className="text-white/40">•</p>
        <p>Score {lead.score}</p>
        <p className="text-white/40">•</p>
        <p>{lead.budget}</p>
        <p className="text-white/40">•</p>
        <p>{lead.receivedAt}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {lead.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
