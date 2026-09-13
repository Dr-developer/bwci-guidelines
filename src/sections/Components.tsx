import { useState } from "react";
import { STATUS_TOKENS } from "@/data/guidelines";
import { cn } from "@/utils/cn";
import { Callout, CopyChip, Eyebrow, SectionShell, StatusBadge, SubHead } from "@/components/ui";

const NAV_LINKS = [
  "The Financial Engine",
  "Our Ecosystem",
  "Platforms & Institutions",
  "Why It Matters",
  "Impact & Better World",
];

const BUTTON_SPECS = [
  {
    name: "Primary Action",
    rows: [
      ["Background", "#123039"],
      ["Text", "#FFFFFF"],
      ["Hover", "#1D4A54"],
      ["Padding", "12px 24px"],
      ["Radius", "4px"],
    ],
  },
  {
    name: "Secondary Action",
    rows: [
      ["Background", "Transparent"],
      ["Border", "1.5px #123039"],
      ["Text", "#123039"],
      ["Hover", "#EFF3F1"],
      ["Padding", "12px 24px"],
    ],
  },
  {
    name: "Text Link",
    rows: [
      ["Background", "None"],
      ["Text", "#12836B"],
      ["Hover", "#0D6E59 + Arrow"],
      ["Underline offset", "4px"],
      ["Font-weight", "600"],
    ],
  },
];

const PLATFORMS = [
  {
    name: "Providence Asset Management",
    mandate:
      "Institutional asset management platform originating and managing productive real-economy investment strategies.",
    entity: "[AUTHORISED ENTITY NAME — SUBJECT TO VERIFICATION]",
    role: "04 Mobilise · 05 Productive Use",
    status: STATUS_TOKENS[0],
  },
  {
    name: "Private Capital Platform",
    mandate:
      "Structured private credit and growth capital vehicles engineered for regional productive enterprises.",
    entity: "[DELIVERING ENTITY — SUBJECT TO VERIFICATION]",
    role: "02 Engineer · 04 Mobilise",
    status: STATUS_TOKENS[1],
  },
  {
    name: "Trade Finance Capability",
    mandate:
      "Working-capital and supply-chain finance pathways connecting exporters to wholesale liquidity.",
    entity: "[PARTNER-DELIVERED — SUBJECT TO VERIFICATION]",
    role: "03 Build/Partner · 05 Productive Use",
    status: STATUS_TOKENS[4],
  },
];

const FORM_STEPS = [
  { label: "Entity Type", options: ["SME / Operating Business", "Impact Project", "Institutional Investor", "Strategic Partner"] },
  { label: "Region / Sector", options: ["Manufacturing", "Agriculture & Food", "Logistics & Freight", "Clean Energy"] },
  { label: "Objective", options: ["Growth capital architecture", "Working capital pathway", "Co-investment mandate", "Capability partnership"] },
];

const ENTITY_ROWS = [
  { entity: "Providence Asset Management", register: "Group Company", stage: "04 · 05", value: "1,118,411" },
  { entity: "Private Capital Platform", register: "Group Company", stage: "02 · 04", value: "977,300" },
  { entity: "Trade Finance Capability", register: "Partner Capability", stage: "03 · 05", value: "412,050" },
  { entity: "FinTech Infrastructure", register: "Group Company", stage: "03", value: "88,640" },
];

export function ComponentsSection() {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<string[]>([]);

  return (
    <SectionShell
      id="components"
      num="05"
      title="UI Components"
      tone="subtle"
      lead="Functional, restrained and structured. Components prioritise clear typography, crisp borders and unambiguous metadata over decorative treatments."
    >
      {/* 5.1 Navigation ------------------------------------------------------ */}
      <div id="cmp-nav" className="scroll-mt-28">
        <SubHead
          kicker="5.1"
          title="Navigation Architecture & Header"
          note="Five primary narrative items plus one utility link. Audience routing lives on the homepage, not the sticky header."
        />
        <div className="overflow-hidden rounded-[4px] border border-line bg-white">
          <div className="flex items-center gap-2 border-b border-line bg-cloud px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
              Header specimen — desktop ≥ 1024px
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-1 gap-y-2 bg-ink px-5 py-4">
            <span className="mr-5 font-mono text-[15px] font-bold tracking-[0.08em] text-white">BWCI</span>
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                type="button"
                className="min-h-[36px] rounded-[3px] px-3 py-2 text-[13px] text-white/75 transition-colors duration-150 hover:bg-white/10 hover:text-white"
              >
                {l}
              </button>
            ))}
            <button
              type="button"
              className="ml-auto min-h-[36px] rounded-[4px] border border-white/35 px-3.5 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-150 hover:border-white hover:bg-white/10"
            >
              Corporate / IR ↗
            </button>
          </div>
          <div className="grid gap-px bg-line sm:grid-cols-2">
            <div className="bg-white p-5">
              <Eyebrow>Primary links (5)</Eyebrow>
              <ol className="tnum mt-2 space-y-1 font-mono text-[12.5px] text-txt2">
                {NAV_LINKS.map((l, i) => (
                  <li key={l}>
                    <span className="text-muted">0{i + 1}</span> {l}
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-white p-5">
              <Eyebrow>Audience routing placement</Eyebrow>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-txt2">
                The dual front door (<em>For SMEs &amp; Impact Projects</em> /{" "}
                <em>For Investors &amp; Partners</em>) is housed prominently on the{" "}
                <strong className="text-ink">Homepage (Act 8)</strong>, preventing visual competition in the
                sticky top header.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5.2 Buttons --------------------------------------------------------- */}
      <div id="cmp-buttons" className="mt-14 scroll-mt-28">
        <SubHead kicker="5.2" title="Buttons & Call-to-Action" />
        <div className="grid gap-4 lg:grid-cols-3">
          {BUTTON_SPECS.map((b, i) => (
            <div key={b.name} className="flex flex-col rounded-[4px] border border-line bg-white">
              <div className="grid min-h-[112px] place-items-center border-b border-line bg-cloud p-6">
                {i === 0 ? (
                  <button
                    type="button"
                    className="min-h-[44px] rounded-[4px] bg-ink px-6 py-3 text-[14px] font-semibold text-white transition-colors duration-150 hover:bg-teal"
                  >
                    Explore the Engine
                  </button>
                ) : i === 1 ? (
                  <button
                    type="button"
                    className="min-h-[44px] rounded-[4px] border-[1.5px] border-ink px-6 py-3 text-[14px] font-semibold text-ink transition-colors duration-150 hover:bg-cloud"
                  >
                    View the Ecosystem
                  </button>
                ) : (
                  <button
                    type="button"
                    className="group inline-flex min-h-[44px] items-center gap-1.5 text-[14px] font-semibold text-emerald2 underline decoration-1 underline-offset-4 transition-colors duration-150 hover:text-emerald-dark"
                  >
                    Explore platform overview
                    <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                  </button>
                )}
              </div>
              <div className="p-5">
                <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-ink">{b.name}</h4>
                <dl className="mt-3 space-y-1.5">
                  {b.rows.map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-3 text-[12.5px]">
                      <dt className="text-muted">{k}</dt>
                      <dd className="font-mono text-[11.5px] font-semibold text-ink">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <Callout kind="warn" title="Elevation & shadow rule">
            Avoid decorative drop shadows. Functional elevation may use extremely subtle shadows —{" "}
            <code className="font-mono text-[12px]">0 1px 3px rgba(18, 48, 57, 0.05)</code> — only where
            required for active dropdowns or interactive focus states.
          </Callout>
        </div>
      </div>

      {/* 5.3 Platform cards --------------------------------------------------- */}
      <div id="cmp-platform" className="mt-14 scroll-mt-28">
        <SubHead
          kicker="5.3"
          title="Platform & Institution Cards"
          note="Platform name, two-line strategic mandate, status badge, delivering entity disclosure and an “as at” date. Never consumer loan forms or product sales pitches at this tier."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {PLATFORMS.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col rounded-[4px] border border-line bg-white p-5 transition-colors duration-200 hover:border-teal"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h4 className="max-w-[22ch] text-[17px] font-semibold leading-[1.3] tracking-[-0.01em] text-ink">
                  {p.name}
                </h4>
                <StatusBadge {...p.status} size="sm" />
              </div>
              <p className="mt-3 text-[14px] leading-[1.6] text-txt2">{p.mandate}</p>
              <dl className="mt-4 space-y-2 border-t border-line-subtle pt-4">
                <div>
                  <dt className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-muted">
                    Delivering entity
                  </dt>
                  <dd className="mt-0.5 font-mono text-[11px] leading-[1.45] text-txt2">{p.entity}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-muted">
                    Role in engine
                  </dt>
                  <dd className="mt-0.5 font-mono text-[11px] text-txt2">{p.role}</dd>
                </div>
              </dl>
              <div className="mt-4 flex items-end justify-between gap-3 border-t border-line-subtle pt-3.5">
                <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-emerald2 transition-colors group-hover:text-emerald-dark">
                  Explore Platform Overview
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </span>
                <span className="tnum shrink-0 font-mono text-[10px] uppercase tracking-[0.06em] text-muted">
                  As at Sep 2026
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 5.4 Audience pathways ------------------------------------------------ */}
      <div id="cmp-audience" className="mt-14 scroll-mt-28">
        <SubHead kicker="5.4" title="Audience Pathway Cards — Dual Front Door" />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              kicker: "For SMEs & Impact Projects",
              title: "Connecting Productive Enterprise to Scalable Capital Architecture",
              bullets: [
                "Independent growth & resilience",
                "Structured institutional access",
                "Connection without consolidation",
              ],
              cta: "Engage with the Ecosystem",
              color: "#12836B",
            },
            {
              kicker: "For Institutional Investors & Partners",
              title: "Mobilising Capital into High-Impact Real Economy Opportunities",
              bullets: [
                "Governed, scalable pipeline",
                "Multi-tier risk mitigation",
                "Sourced, verified market impact",
              ],
              cta: "Partner with Better World",
              color: "#3D5A80",
            },
          ].map((a) => (
            <article key={a.kicker} className="flex flex-col rounded-[4px] border border-line bg-white">
              <div className="border-b border-line px-5 py-3" style={{ background: `${a.color}0F` }}>
                <div
                  className="font-mono text-[10.5px] font-bold uppercase tracking-[0.1em]"
                  style={{ color: a.color }}
                >
                  {a.kicker}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h4 className="text-[19px] font-semibold leading-[1.3] tracking-[-0.015em] text-ink">
                  {a.title}
                </h4>
                <ul className="mt-4 space-y-2">
                  {a.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-[14px] leading-[1.55] text-txt2">
                      <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: a.color }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="mt-6 min-h-[44px] w-full rounded-[4px] border-[1.5px] border-ink px-5 py-3 text-[14px] font-semibold text-ink transition-colors duration-150 hover:bg-ink hover:text-white"
                >
                  {a.cta} →
                </button>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-5">
          <Callout kind="warn" title="Language guardrail">
            The SME pathway CTA uses restrained language (<em>“Explore how your enterprise may connect”</em>),
            never promising direct financing.
          </Callout>
        </div>
      </div>

      {/* 5.5 Metric cards ------------------------------------------------------ */}
      <div id="cmp-metric" className="mt-14 scroll-mt-28">
        <SubHead kicker="5.5" title="Sourced Market Evidence Metric Cards" />
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[4px] border border-line bg-white p-6 sm:p-8">
            <div className="tnum font-mono text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[44px]">
              $5.7 TRILLION
            </div>
            <p className="mt-3 max-w-[40ch] text-[16px] leading-[1.55] text-txt2">
              The global unmet financing gap for MSMEs in developing and developed markets.
            </p>
            <p className="mt-5 border-t border-line-subtle pt-3.5 text-[12px] text-muted">
              Source: IFC / World Bank SME Finance Forum{" "}
              <span className="font-mono uppercase tracking-[0.06em]">(illustrative placeholder)</span>
            </p>
          </div>
          <div className="rounded-[4px] border border-line bg-ink p-6 text-white sm:p-8">
            <Eyebrow tone="light">Inverted variant</Eyebrow>
            <div className="tnum mt-3 font-mono text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-gold sm:text-[44px]">
              65 MILLION
            </div>
            <p className="mt-3 max-w-[40ch] text-[16px] leading-[1.55] text-white/72">
              Formal MSMEs in developing economies whose financing needs remain unmet or underserved.
            </p>
            <p className="mt-5 border-t border-white/15 pt-3.5 text-[12px] text-white/50">
              Source: IFC MSME Finance Gap{" "}
              <span className="font-mono uppercase tracking-[0.06em]">(illustrative placeholder)</span>
            </p>
          </div>
        </div>
        <div className="mt-5">
          <Callout kind="rule" title="Rule & verification note">
            Metric cards on the public narrative site highlight macro disconnects and market data with sourced
            citations, rather than self-reported vanity numbers. Specific figures and source attributions in
            UI mockups are illustrative placeholders subject to verification by the research workstream before
            publication.
          </Callout>
        </div>
      </div>

      {/* 5.6 Forms --------------------------------------------------------------- */}
      <div id="cmp-forms" className="mt-14 scroll-mt-28">
        <SubHead
          kicker="5.6"
          title="Forms & Progressive Qualification"
          note="Multi-step qualification (Entity Type → Region/Sector → Objective) rather than instant transactional forms."
        />
        <div className="grid gap-4 lg:grid-cols-[minmax(0,460px)_1fr]">
          <div className="rounded-[4px] border border-line bg-white p-5 sm:p-6">
            <div className="flex items-center gap-2">
              {FORM_STEPS.map((s, i) => (
                <div key={s.label} className="flex flex-1 items-center gap-2">
                  <span
                    className={cn(
                      "grid h-6 w-6 shrink-0 place-items-center rounded-full font-mono text-[10px] font-bold transition-colors duration-200",
                      i <= step ? "bg-ink text-white" : "bg-cloud text-muted",
                    )}
                  >
                    {i + 1}
                  </span>
                  {i < FORM_STEPS.length - 1 ? (
                    <span
                      className={cn("h-px flex-1 transition-colors duration-200", i < step ? "bg-ink" : "bg-line")}
                    />
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-5">
              <label className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
                Step {step + 1} of 3 — {FORM_STEPS[step].label}
              </label>
              <div className="mt-2.5 space-y-2">
                {FORM_STEPS[step].options.map((o) => {
                  const selected = picked[step] === o;
                  return (
                    <button
                      key={o}
                      type="button"
                      onClick={() => {
                        const next = [...picked];
                        next[step] = o;
                        setPicked(next);
                        if (step < 2) window.setTimeout(() => setStep(step + 1), 180);
                      }}
                      className={cn(
                        "flex min-h-[44px] w-full items-center gap-2.5 rounded-[4px] border px-4 py-3 text-left text-[14px] transition-all duration-150",
                        selected
                          ? "border-[1.5px] border-ink bg-cloud font-medium text-ink"
                          : "border-line bg-white text-txt2 hover:border-line-strong",
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "grid h-4 w-4 shrink-0 place-items-center rounded-full border",
                          selected ? "border-ink bg-ink text-white" : "border-line-strong",
                        )}
                      >
                        {selected ? <span className="text-[8px]">✓</span> : null}
                      </span>
                      {o}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 flex gap-2">
              <button
                type="button"
                disabled={step === 0}
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                className="min-h-[44px] rounded-[4px] border-[1.5px] border-ink px-5 py-2.5 text-[13.5px] font-semibold text-ink transition-colors duration-150 hover:bg-cloud disabled:cursor-not-allowed disabled:border-line disabled:text-muted"
              >
                Back
              </button>
              <button
                type="button"
                disabled={step === 2}
                onClick={() => setStep((s) => Math.min(2, s + 1))}
                className="min-h-[44px] flex-1 rounded-[4px] bg-ink px-5 py-2.5 text-[13.5px] font-semibold text-white transition-colors duration-150 hover:bg-teal disabled:cursor-not-allowed disabled:bg-line-strong"
              >
                {step === 2 ? "Submit enquiry" : "Continue"}
              </button>
            </div>
            <p className="mt-3 text-[11.5px] leading-[1.5] text-muted">
              Routing disclosure: enquiries are directed to the appropriate authorised entity. BWCI PLC does
              not provide regulated services directly.
            </p>
          </div>

          <div className="rounded-[4px] border border-line bg-white p-5 sm:p-6">
            <Eyebrow>Input specification</Eyebrow>
            <div className="mt-4 space-y-4">
              <label className="block">
                <span className="text-[13px] font-medium text-ink">Default input</span>
                <input
                  placeholder="1px solid #D5E0DC · radius 4px"
                  className="mt-1.5 min-h-[44px] w-full rounded-[4px] border border-line bg-white px-4 py-3 text-[14px] text-ink outline-none placeholder:text-muted"
                />
              </label>
              <label className="block">
                <span className="text-[13px] font-medium text-ink">Focused state</span>
                <input
                  placeholder="1.5px solid #123039"
                  className="mt-1.5 min-h-[44px] w-full rounded-[4px] border-[1.5px] border-ink bg-white px-4 py-3 text-[14px] text-ink outline-none placeholder:text-muted"
                />
              </label>
              <p className="text-[12.5px] leading-[1.55] text-txt2">
                12px vertical / 16px horizontal padding · 4px border radius · 44px minimum interactive height.
              </p>
              <div className="flex flex-wrap gap-2 border-t border-line-subtle pt-4">
                <CopyChip value="border: 1px solid #D5E0DC" label="default border" />
                <CopyChip value="border: 1.5px solid #123039" label="focus border" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5.7 Tables --------------------------------------------------------------- */}
      <div id="cmp-tables" className="mt-14 scroll-mt-28">
        <SubHead kicker="5.7" title="Tables & Entity Lists" />
        <div className="overflow-x-auto rounded-[4px] border border-line bg-white">
          <table className="w-full min-w-[620px] border-collapse text-left">
            <thead>
              <tr>
                {["Entity", "Register", "Engine stage", "Indicative value"].map((h, i) => (
                  <th
                    key={h}
                    scope="col"
                    className={cn(
                      "border-b-[1.5px] border-line bg-subtle px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-ink",
                      i === 3 && "text-right",
                    )}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ENTITY_ROWS.map((r) => (
                <tr key={r.entity} className="transition-colors duration-150 hover:bg-cloud">
                  <td className="border-b border-line-subtle px-5 py-4 text-[14px] font-medium text-ink">
                    {r.entity}
                  </td>
                  <td className="border-b border-line-subtle px-5 py-4 text-[13.5px] text-txt2">{r.register}</td>
                  <td className="tnum border-b border-line-subtle px-5 py-4 font-mono text-[12.5px] text-txt2">
                    {r.stage}
                  </td>
                  <td className="tnum border-b border-line-subtle px-5 py-4 text-right font-mono text-[13px] text-ink">
                    {r.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            ["Header", "#F7F9F8 bg · 11px Mono SemiBold uppercase · 1.5px bottom border"],
            ["Rows", "Hover #EFF3F1 · cell padding 16px 20px · 1px #E2E9E6 divider"],
            ["Numbers", "Right-aligned with tabular lining numerals"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-[4px] border border-line bg-white p-4">
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-muted">{k}</div>
              <p className="mt-1 text-[12.5px] leading-[1.55] text-txt2">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
