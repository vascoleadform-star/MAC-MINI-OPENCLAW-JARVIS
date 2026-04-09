type TimelineItem = {
  time: string;
  actor: string;
  summary: string;
  context: string;
};

export function ActivityTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="rounded-3xl border border-white/5 bg-slate-900/60 p-5">
      <p className="text-sm uppercase tracking-[0.2em] text-white/60">Activity</p>
      <div className="mt-4 space-y-4">
        {items.map((item) => (
          <div key={`${item.time}-${item.summary}`} className="flex gap-4">
            <div className="text-sm text-white/50 w-16">{item.time}</div>
            <div className="flex-1 rounded-2xl border border-white/5 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-white/40">{item.actor}</p>
              <p className="mt-1 text-white">{item.summary}</p>
              <p className="text-sm text-white/50">{item.context}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
