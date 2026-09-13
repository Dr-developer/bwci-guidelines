import {
  CORE_PALETTE,
  MOTION_TOKENS,
  NAV,
  SPACING_SCALE,
  STATUS_TOKENS,
  SURFACE_TOKENS,
  TOKEN_GROUPS,
  TYPE_SCALE,
} from "./guidelines";

export type SearchEntry = {
  id: string;
  title: string;
  kind: "Section" | "Subsection" | "Color" | "Type" | "Token" | "Status" | "Spacing" | "Motion" | "Rule";
  section: string;
  detail: string;
  keywords: string;
};

const SECTION_BY_ID = new Map<string, string>();
NAV.forEach((n) => {
  SECTION_BY_ID.set(n.id, `${n.num} ${n.title}`);
  n.children?.forEach((c) => SECTION_BY_ID.set(c.id, `${n.num} ${n.title}`));
});

const RULES: SearchEntry[] = [
  {
    id: "color-a11y",
    title: "Gold on white is prohibited below 24px",
    kind: "Rule",
    section: "02 Color System",
    detail: "Use #9E7720 (4.8:1) for any gold text under 24px on light surfaces.",
    keywords: "gold accessibility contrast B98F2D 9E7720 wcag small text",
  },
  {
    id: "color-status",
    title: "Never communicate status by color alone",
    kind: "Rule",
    section: "02 Color System",
    detail: "Every status element pairs a glyph/dot with explicit uppercase text and an 'as at' date.",
    keywords: "multi channel cueing status badge dot glyph as at date",
  },
  {
    id: "eng-levels",
    title: "Canonical five-stage model must never be replaced",
    kind: "Rule",
    section: "07 Financial Engine",
    detail:
      "Level 1 (Need → Architecture → Capability → Capital → Productive Use) governs hero communication; the six-stage operating model explains execution only.",
    keywords: "canonical brand rule five stage six stage progressive disclosure hero",
  },
  {
    id: "eco-encoding",
    title: "Anti-Hub Constraint",
    kind: "Rule",
    section: "08 Ecosystem",
    detail:
      "BWCI PLC must not be visually dominant to the extent that all relationships appear to originate, terminate or transact through it.",
    keywords: "anti hub constraint interface ring autonomy dashed pods independence",
  },
  {
    id: "motion-guardrails",
    title: "Motion is never required for comprehension",
    kind: "Rule",
    section: "12 Motion",
    detail: "Diagrams must be fully legible in their static state; honour prefers-reduced-motion.",
    keywords: "motion guardrail reduced motion static legible",
  },
  {
    id: "accessibility",
    title: "44 × 44px minimum touch target",
    kind: "Rule",
    section: "13 Accessibility",
    detail: "BWCI usability standard exceeding WCAG minimums; 400% zoom reflow required.",
    keywords: "touch target 44 zoom 400 reflow keyboard focus outline",
  },
  {
    id: "layout-spacing",
    title: "Body copy never exceeds 68ch",
    kind: "Rule",
    section: "04 Layout & Spacing",
    detail: "Approximately 680px maximum measure for comfortable reading comprehension.",
    keywords: "line length measure 68ch readable paragraph width",
  },
  {
    id: "cmp-audience",
    title: "SME language guardrail",
    kind: "Rule",
    section: "05 UI Components",
    detail:
      "SME pathway CTAs use restrained language ('Explore how your enterprise may connect') — never promising direct financing.",
    keywords: "sme guardrail language cta front door audience pathway",
  },
  {
    id: "dataviz",
    title: "Mandatory data citation line",
    kind: "Rule",
    section: "11 Data Visualization",
    detail: "Source: [Institution Name], [Report Title], [Publication Year]. Verified [Month Year].",
    keywords: "citation source data chart sankey bar line",
  },
  {
    id: "bm-dependencies",
    title: "BWCI PLC is never the central counterparty",
    kind: "Rule",
    section: "17 Benchmarks & Dependencies",
    detail:
      "Regulated services are conducted exclusively by authorised subsidiary entities, never directly by BWCI PLC.",
    keywords: "non intermediation regulated activities compliance counterparty subsidiary",
  },
];

export const SEARCH_INDEX: SearchEntry[] = [
  ...NAV.map<SearchEntry>((n) => ({
    id: n.id,
    title: `${n.num} · ${n.title}`,
    kind: "Section",
    section: n.group,
    detail: `Jump to section ${n.num}`,
    keywords: `${n.title} ${n.short} ${n.group}`,
  })),
  ...NAV.flatMap((n) =>
    (n.children ?? []).map<SearchEntry>((c) => ({
      id: c.id,
      title: c.title,
      kind: "Subsection",
      section: `${n.num} ${n.title}`,
      detail: n.title,
      keywords: `${c.title} ${n.title}`,
    })),
  ),
  ...CORE_PALETTE.map<SearchEntry>((c) => ({
    id: "color-core",
    title: `${c.name} — ${c.hex}`,
    kind: "Color",
    section: "02 Color System",
    detail: c.role,
    keywords: `${c.token} ${c.hex} ${c.name} ${c.role} ${c.usage}`,
  })),
  ...SURFACE_TOKENS.map<SearchEntry>((c) => ({
    id: "color-surface",
    title: `${c.token} — ${c.hex}`,
    kind: "Color",
    section: "02 Color System",
    detail: c.usage,
    keywords: `${c.token} ${c.hex} ${c.usage} surface neutral border`,
  })),
  ...STATUS_TOKENS.map<SearchEntry>((s) => ({
    id: "color-status",
    title: `${s.label} (Axis ${s.axis}: ${s.axisName})`,
    kind: "Status",
    section: "02 Color System",
    detail: s.meaning,
    keywords: `${s.id} ${s.label} ${s.meaning} axis ${s.axisName} badge`,
  })),
  ...TYPE_SCALE.map<SearchEntry>((t) => ({
    id: "type-scale",
    title: `${t.token} — ${t.desktop}px / ${t.mobile}px`,
    kind: "Type",
    section: "03 Typography System",
    detail: t.usage,
    keywords: `${t.token} ${t.familyName} ${t.usage} ${t.desktop} ${t.weightName}`,
  })),
  ...SPACING_SCALE.map<SearchEntry>((s) => ({
    id: "layout-spacing",
    title: `${s.token} — ${s.value}px`,
    kind: "Spacing",
    section: "04 Layout & Spacing",
    detail: s.usage,
    keywords: `${s.token} ${s.value} ${s.usage} 8pt grid`,
  })),
  ...MOTION_TOKENS.map<SearchEntry>((m) => ({
    id: "motion-tokens",
    title: `${m.token} — ${m.duration}`,
    kind: "Motion",
    section: "12 Motion & Interaction",
    detail: m.usage,
    keywords: `${m.token} ${m.duration} ${m.easing} ${m.curve} ${m.usage}`,
  })),
  ...TOKEN_GROUPS.flatMap((g) =>
    g.vars.map<SearchEntry>(([k, v]) => ({
      id: "tokens",
      title: k,
      kind: "Token",
      section: `16 Core Design Tokens · ${g.group}`,
      detail: v,
      keywords: `${k} ${v} ${g.group} css variable`,
    })),
  ),
  ...RULES,
];

export function searchDoc(query: string, limit = 40): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const scored: { e: SearchEntry; score: number }[] = [];
  for (const e of SEARCH_INDEX) {
    const hay = `${e.title} ${e.detail} ${e.keywords} ${e.section}`.toLowerCase();
    let score = 0;
    let ok = true;
    for (const t of terms) {
      const idx = hay.indexOf(t);
      if (idx === -1) {
        ok = false;
        break;
      }
      score += 40 - Math.min(30, idx / 4);
      if (e.title.toLowerCase().includes(t)) score += 35;
      if (e.title.toLowerCase().startsWith(t)) score += 25;
    }
    if (!ok) continue;
    if (e.kind === "Section") score += 18;
    if (e.kind === "Rule") score += 12;
    scored.push({ e, score });
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.e);
}
