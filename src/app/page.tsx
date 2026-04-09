import { MetricCard } from "@/components/MetricCard";
import { LiveLeadCard } from "@/components/LiveLeadCard";
import { PipelineStage } from "@/components/PipelineStage";
import { AnalyticsPanel } from "@/components/AnalyticsPanel";
import { AutomationList } from "@/components/AutomationList";
import { ActivityTimeline } from "@/components/ActivityTimeline";
import {
  metrics,
  liveLeads,
  pipeline,
  analytics,
  automations,
  activityTimeline,
} from "@/lib/mockData";

export default function Home() {
  return (
    <div className="space-y-10 pb-16">
      <header className="rounded-3xl border border-white/5 bg-gradient-to-r from-slate-900/80 to-black/40 p-8 shadow-glow">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-gold">LeadForm HQ</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Operator Control Panel</h1>
            <p className="mt-2 max-w-2xl text-base text-white/60">
              Live intelligence across intake, pipeline health, and automations. Built for high-velocity operators
              who need perfect context in under 5 seconds.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-white/70">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">Live leads</p>
              <p className="text-3xl font-semibold text-white">{liveLeads.length}</p>
              <p className="text-emerald-300">+3 in last 15m</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-white/70">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">Signals today</p>
              <p className="text-3xl font-semibold text-white">58</p>
              <p className="text-gold">14 automations armed</p>
            </div>
          </div>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[2.2fr,1.2fr]">
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Live feed</p>
            <button className="text-xs text-gold hover:text-white">View intake log</button>
          </div>
          <div className="space-y-4">
            {liveLeads.map((lead) => (
              <LiveLeadCard key={lead.id} lead={lead} />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Pipeline</p>
            <button className="text-xs text-gold hover:text-white">Automation matrix</button>
          </div>
          <div className="grid gap-4">
            {pipeline.map((stage) => (
              <PipelineStage key={stage.stage} {...stage} />
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.6fr,1.2fr]">
        <ActivityTimeline items={activityTimeline} />
        <AnalyticsPanel sources={analytics.sources} trend={analytics.trend} />
      </section>

      <section>
        <AutomationList items={automations} />
      </section>
    </div>
  );
}
