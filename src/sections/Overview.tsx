import { useMemo, useState } from "react";
import { LOCKED_DECISIONS, NAV } from "@/data/guidelines";
import { scrollToId } from "@/hooks/useDocNav";
import { cn } from "@/utils/cn";
import { Callout, CopyChip, Eyebrow, SectionShell, SubHead, Tabs } from "@/components/ui";

const ENGINE_STRIP = [
  { t: "The Need", c: "#B98F2D" },
  { t: "Architecture", c: "#1D4A54" },
  { t: "Capability", c: "#2A6B6B" },
  { t: "Capital", c: "#3D5A80" },
  { t: "Productive Use", c: "#12836B" },
];

export function Hero({ onSearch }: { onSearch: () => void }) {
  return (
    <header className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          maskImage: "radial-gradient(120% 80% at 70% 10%, #000 10%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(120% 80% at 70% 10%, #000 10%, transparent 75%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1180px] px-5 pb-14 pt-12 sm:px-8 lg:px-12 lg:pb-20 lg:pt-16">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-[4px] border border-[#A3D9C9]/40 bg-[#12836B]/15 px-2.5 py-1 font-mono text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#7FD7BE]">
            <span aria-hidden>●</span> Final baseline — locked &amp; approved
          </span>
          <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-white/45">
            v1.2.1 · September 2026
          </span>
        </div>

        <h1 className="mt-6 max-w-[18ch] text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[46px] lg:text-[58px]">
          UI Direction &amp;<br />
          <span className="text-[#7FD7BE]">Visual Guidelines</span>
        </h1>

        <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.14em] text-gold">
          Better World Capital Investments PLC
        </p>

        <p className="mt-6 max-w-[62ch] text-[16px] leading-[1.65] text-white/72 sm:text-[18px]">
          The holding company and <strong className="font-semibold text-white">Financial Engine</strong> of
          the Better World Ecosystem — reconnecting capital with the real economy. This is the interactive
          navigator for the locked design-system baseline.
        </p>

        {/* Canonical five-stage strip */}
        <div className="mt-9 flex flex-wrap items-center gap-x-1.5 gap-y-2">
          {ENGINE_STRIP.map((s, i) => (
            <div key={s.t} className="flex items-center gap-1.5">
              <span
                className="rounded-[3px] border px-2.5 py-1.5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.08em]"
                style={{ borderColor: `${s.c}90`, background: `${s.c}22`, color: "#fff" }}
              >
                {s.t}
              </span>
              {i < ENGINE_STRIP.length - 1 ? (
                <span aria-hidden className="text-white/30">
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => scrollToId("overview")}
            className="min-h-[44px] rounded-[4px] bg-white px-6 py-3 text-[14px] font-semibold text-ink transition-colors duration-150 hover:bg-[#EFF3F1]"
          >
            Start reading →
          </button>
          <button
            type="button"
            onClick={onSearch}
            className="min-h-[44px] rounded-[4px] border-[1.5px] border-white/35 px-6 py-3 text-[14px] font-semibold text-white transition-colors duration-150 hover:border-white hover:bg-white/10"
          >
            ⌕ Search the document
          </button>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-white/12 bg-white/12 sm:grid-cols-4">
          {[
            { k: "Sections", v: "18" },
            { k: "Core Colors", v: "08" },
            { k: "Type Tokens", v: "12" },
            { k: "Spatial Steps", v: "09" },
          ].map((s) => (
            <div key={s.k} className="bg-ink px-4 py-4">
              <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/45">{s.k}</dt>
              <dd className="tnum mt-1 font-mono text-[26px] font-bold leading-none text-white">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */

const CATS = ["All", "Color", "Type", "Layout", "Style", "System"] as const;

export function OverviewSection() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const [view, setView] = useState<"observation" | "interpretation">("observation");

  const rows = useMemo(
    () => (cat === "All" ? LOCKED_DECISIONS : LOCKED_DECISIONS.filter((d) => d.cat === cat)),
    [cat],
  );

  return (
    <SectionShell
      id="overview"
      num="00"
      title="Executive Summary & Design Mandate"
      lead="A clear, practical and disciplined visual foundation so designers and front-end engineers can build high-fidelity screens, components and interactive models without ambiguity or visual drift."
    >
      <div id="overview-mandate" className="scroll-mt-28 grid gap-5 lg:grid-cols-3">
        {[
          {
            t: "What BWCI Is",
            b: "The holding company and Financial Engine of the Better World Ecosystem — an institutional architect, not a product shelf.",
            g: "◧",
          },
          {
            t: "What It Does",
            b: "Identifies financing bottlenecks, engineers appropriate capital structures, and builds, acquires, partners with and connects delivery institutions.",
            g: "⇄",
          },
          {
            t: "Who It Serves",
            b: "Productive enterprises — SMEs, regional businesses and impact projects — alongside the institutional capital that funds them.",
            g: "◉",
          },
        ].map((c) => (
          <div key={c.t} className="rounded-[4px] border border-line bg-subtle p-5">
            <span aria-hidden className="font-mono text-[18px] text-emerald2">
              {c.g}
            </span>
            <h3 className="mt-2 text-[17px] font-semibold text-ink">{c.t}</h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-txt2">{c.b}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Callout kind="note" title="Target Audience">
          UI/UX designers · front-end engineers · creative directors · brand &amp; compliance teams.
          Status: <strong>Final Baseline — Locked &amp; Approved</strong> for high-fidelity Figma UI and
          prototyping.
        </Callout>
      </div>

      {/* Locked decisions matrix ------------------------------------------ */}
      <div id="overview-locked" className="mt-14 scroll-mt-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow tone="gold">🔒 Design System Baseline</Eyebrow>
            <h3 className="mt-1.5 text-[22px] font-semibold tracking-[-0.015em] text-ink">
              Locked Strategic Decisions Matrix
            </h3>
            <p className="mt-2 max-w-[68ch] text-[14.5px] text-txt2">
              Formally locked foundations guiding the transition from low-fidelity wireframes into
              high-fidelity UI. Filter by architectural area.
            </p>
          </div>
          <span className="tnum rounded-[4px] border border-line bg-subtle px-3 py-1.5 font-mono text-[11px] font-semibold text-txt2">
            {rows.length} / {LOCKED_DECISIONS.length} decisions
          </span>
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {CATS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={cn(
                "min-h-[34px] rounded-[4px] border px-3.5 py-1.5 text-[12.5px] font-medium transition-colors duration-150",
                cat === c
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-white text-txt2 hover:border-line-strong hover:text-ink",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-5 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line md:grid-cols-2">
          {rows.map((d) => (
            <div key={d.area} className="anim-in group bg-white p-5 transition-colors duration-200 hover:bg-subtle">
              <div className="flex items-start gap-3">
                {d.swatch ? (
                  <span
                    className="mt-0.5 h-9 w-9 shrink-0 rounded-[3px] border border-black/10"
                    style={{ background: d.swatch }}
                    aria-hidden
                  />
                ) : (
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-[3px] border border-line bg-cloud font-mono text-[11px] font-bold text-teal">
                    {d.cat.slice(0, 2).toUpperCase()}
                  </span>
                )}
                <div className="min-w-0">
                  <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
                    {d.area}
                  </div>
                  <div className="mt-1 text-[15.5px] font-semibold leading-[1.3] text-ink">{d.decision}</div>
                  <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[13px] leading-[1.55] text-txt2">
                    <span>{d.spec}</span>
                  </div>
                  {d.swatch ? <CopyChip value={d.swatch} className="mt-2.5" /> : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research foundation ---------------------------------------------- */}
      <div id="overview-research" className="mt-14 scroll-mt-28">
        <SubHead
          kicker="Methodology"
          title="Research Foundation & Benchmark Methodology"
          note="Patterns are informed by comparative analysis of leading international holding companies, sovereign investors and mission-driven financial institutions."
        />
        <div className="mb-5">
          <Tabs
            value={view}
            onChange={setView}
            items={[
              { id: "observation", label: "Benchmark Observations" },
              { id: "interpretation", label: "BWCI Interpretation" },
            ]}
          />
        </div>
        <div className="rounded-[4px] border border-line bg-subtle p-5 sm:p-6">
          {view === "observation" ? (
            <>
              <p className="max-w-[68ch] text-[15px] leading-[1.65] text-txt2">
                What peer institutions demonstrate on their live web properties — observed, documented, and
                referenced without reproduction.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Brookfield",
                  "Temasek",
                  "Mubadala",
                  "EXOR",
                  "Partners Group",
                  "Better Society Capital",
                  "Triodos Bank",
                  "Banking Circle",
                  "SC Ventures",
                  "Berkshire Hathaway",
                ].map((b) => (
                  <span
                    key={b}
                    className="rounded-[4px] border border-line bg-white px-2.5 py-1 text-[12.5px] text-txt2"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </>
          ) : (
            <p className="max-w-[68ch] text-[15px] leading-[1.65] text-txt2">
              How BWCI adapts and refines those principles to communicate its specific mission, two-register
              holding architecture, and ecosystem relationships. See{" "}
              <button
                type="button"
                onClick={() => scrollToId("benchmarks")}
                className="font-semibold text-emerald-dark underline decoration-1 underline-offset-4 hover:text-emerald2"
              >
                Section 17 — Benchmarks &amp; Dependencies
              </button>{" "}
              for the full mapping.
            </p>
          )}
          <p className="mt-4 border-t border-line pt-4 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
            Sources: competitor-reference-analysis.md · BWCI-website-reference-study.md
          </p>
        </div>
      </div>

      {/* Jump grid --------------------------------------------------------- */}
      <div className="mt-14">
        <Eyebrow>Document map</Eyebrow>
        <div className="mt-4 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {NAV.slice(1).map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => scrollToId(n.id)}
              className="group flex items-baseline gap-3 bg-white px-4 py-3.5 text-left transition-colors duration-150 hover:bg-cloud"
            >
              <span className="font-mono text-[11px] font-bold text-gold-dark">{n.num}</span>
              <span className="text-[14px] font-medium text-ink group-hover:text-emerald-dark">{n.title}</span>
              <span aria-hidden className="ml-auto text-[12px] text-muted opacity-0 transition-opacity group-hover:opacity-100">
                →
              </span>
            </button>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
