export type Lead = {
  id: string;
  name: string;
  company: string;
  source: string;
  status: string;
  score: number;
  budget: string;
  receivedAt: string;
  tags: string[];
};

export const liveLeads: Lead[] = [
  {
    id: "ld_001",
    name: "Ariana Costa",
    company: "VoltEdge",
    source: "Website",
    status: "New",
    score: 82,
    budget: "$65k",
    receivedAt: "2m ago",
    tags: ["enterprise", "priority"],
  },
  {
    id: "ld_002",
    name: "Duarte Ramos",
    company: "Northwind",
    source: "LinkedIn",
    status: "Qualifying",
    score: 74,
    budget: "$28k",
    receivedAt: "6m ago",
    tags: ["saas"],
  },
  {
    id: "ld_003",
    name: "Lia Moreira",
    company: "PulseGrid",
    source: "Referral",
    status: "Proposal",
    score: 91,
    budget: "$110k",
    receivedAt: "14m ago",
    tags: ["strategic", "intl"],
  },
];

export const pipeline = [
  {
    stage: "New",
    count: 18,
    delta: "+6",
    color: "bg-slate-800",
  },
  {
    stage: "Qualifying",
    count: 9,
    delta: "-2",
    color: "bg-slate-800",
  },
  {
    stage: "Engaged",
    count: 11,
    delta: "+1",
    color: "bg-slate-800",
  },
  {
    stage: "Proposal",
    count: 7,
    delta: "+3",
    color: "bg-slate-800",
  },
  {
    stage: "Won",
    count: 3,
    delta: "0",
    color: "bg-slate-800",
  },
];

export const metrics = [
  {
    label: "Leads today",
    value: "42",
    sublabel: "+18% vs avg",
  },
  {
    label: "Median response",
    value: "12m",
    sublabel: "SLA on track",
  },
  {
    label: "Conversion",
    value: "28%",
    sublabel: "+4 pts",
  },
  {
    label: "Pipeline value",
    value: "$1.8M",
    sublabel: "$420k qualified",
  },
];

export const analytics = {
  sources: [
    { label: "Website", value: 38 },
    { label: "LinkedIn", value: 21 },
    { label: "Referral", value: 15 },
    { label: "Outbound", value: 11 },
  ],
  trend: [72, 80, 64, 90, 88, 95, 110],
};

export const automations = [
  {
    name: "New lead notify",
    status: "active",
    lastRun: "2m ago",
    detail: "DM + Slack",
  },
  {
    name: "Stale lead alert",
    status: "tracking",
    lastRun: "15m ago",
    detail: "11 queued",
  },
  {
    name: "Qualified highlight",
    status: "active",
    lastRun: "32m ago",
    detail: "3 escalations",
  },
  {
    name: "Duplicate merge",
    status: "watch",
    lastRun: "1h ago",
    detail: "2 pending",
  },
];

export const activityTimeline = [
  {
    time: "03:41",
    actor: "Automation",
    summary: "Lead score recalculated (91)",
    context: "PulseGrid",
  },
  {
    time: "03:32",
    actor: "Andre",
    summary: "Moved Lia → Proposal",
    context: "Proposal deck drafted",
  },
  {
    time: "03:21",
    actor: "System",
    summary: "Duplicate detected",
    context: "Northwind vs old record",
  },
  {
    time: "03:17",
    actor: "Automation",
    summary: "Stale lead ping",
    context: "Apollo Medical, 36h idle",
  },
];
