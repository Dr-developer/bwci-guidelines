import { useState } from "react";
import { BREAKPOINTS, SPACING_SCALE } from "@/data/guidelines";
import { cn } from "@/utils/cn";
import {
  Callout,
  CopyChip,
  Eyebrow,
  SectionShell,
  SubHead,
  TableShell,
  Td,
  Th,
} from "@/components/ui";

const CONTAINERS = [
  {
    name: "Standard Content Container",
    width: 1280,
    token: "--bwci-container-max",
    use: "Default layout canvas for sections, cards and navigation.",
    color: "#123039",
  },
  {
    name: "Wide Diagram Container",
    width: 1440,
    token: "--bwci-container-diagram",
    use: "Full horizontal Financial Engine and Ecosystem diagrams.",
    color: "#3D5A80",
  },
  {
    name: "Narrow Editorial Container",
    width: 768,
    token: "--bwci-container-narrow",
    use: "Perspectives essays, Chairman’s letters and legal governance texts (60–75 characters).",
    color: "#12836B",
  },
];

export function LayoutSection() {
  const [bp, setBp] = useState(0);
  const [showGrid, setShowGrid] = useState(true);
  const active = BREAKPOINTS[bp];

  return (
    <SectionShell
      id="layout"
      num="04"
      title="Layout & Spacing"
      lead="An 8-point spatial grid with a 4-point micro-grid for component alignment, expressed through three fixed container widths."
    >
      {/* 4.1 Containers ------------------------------------------------------ */}
      <div id="layout-containers" className="scroll-mt-28">
        <SubHead kicker="4.1" title="Container Widths & Responsive Breakpoints" />

        <div className="space-y-2.5">
          {CONTAINERS.map((c) => (
            <div key={c.name} className="rounded-[4px] border border-line bg-white p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-baseline gap-2.5">
                  <span className="tnum font-mono text-[13px] font-bold" style={{ color: c.color }}>
                    {c.width}px
                  </span>
                  <span className="text-[14.5px] font-semibold text-ink">{c.name}</span>
                </div>
                <CopyChip value={c.token} />
              </div>
              <div
                className="mt-2.5 h-2 rounded-full"
                style={{ background: c.color, width: `${(c.width / 1440) * 100}%` }}
                aria-hidden
              />
              <p className="mt-2 text-[13px] leading-[1.55] text-txt2">{c.use}</p>
            </div>
          ))}
        </div>

        {/* Grid visualiser */}
        <div className="mt-8 overflow-hidden rounded-[4px] border border-line bg-white">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-subtle px-4 py-3">
            <div className="flex flex-wrap gap-1.5">
              {BREAKPOINTS.map((b, i) => (
                <button
                  key={b.name}
                  type="button"
                  onClick={() => setBp(i)}
                  aria-pressed={bp === i}
                  className={cn(
                    "min-h-[34px] rounded-[4px] border px-3 py-1.5 text-[12.5px] font-medium transition-colors duration-150",
                    bp === i
                      ? "border-ink bg-ink text-white"
                      : "border-line bg-white text-txt2 hover:border-line-strong hover:text-ink",
                  )}
                >
                  {b.name}
                </button>
              ))}
            </div>
            <label className="flex cursor-pointer items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-txt2">
              <input
                type="checkbox"
                checked={showGrid}
                onChange={(e) => setShowGrid(e.target.checked)}
                className="h-4 w-4 accent-[#12836B]"
              />
              Column overlay
            </label>
          </div>

          <div className="bg-cloud p-4 sm:p-6">
            <div className="mb-3 flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-[10.5px] uppercase tracking-[0.08em] text-txt2">
              <span>
                Range <strong className="text-ink">{active.range}</strong>
              </span>
              <span>
                Columns <strong className="text-ink">{active.cols}</strong>
              </span>
              <span>
                Gutter <strong className="text-ink">{active.gutter}</strong>
              </span>
              <span>
                Margins <strong className="text-ink">{active.margins}</strong>
              </span>
            </div>

            <div className="relative overflow-hidden rounded-[3px] border border-line bg-white p-3">
              <div
                className="grid transition-all duration-300"
                style={{
                  gridTemplateColumns: `repeat(${active.cols}, minmax(0, 1fr))`,
                  gap: active.gutter,
                }}
              >
                {Array.from({ length: active.cols }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex h-24 items-end justify-center rounded-[2px] pb-1.5 font-mono text-[9.5px] transition-colors duration-300",
                      showGrid ? "bg-[#12836B]/10 text-[#0D6E59]" : "bg-transparent text-transparent",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 text-[13px] text-txt2">{active.behavior}</p>
          </div>
        </div>

        <div className="mt-6">
          <TableShell caption="Responsive breakpoints">
            <thead>
              <tr>
                <Th>Breakpoint</Th>
                <Th>Range</Th>
                <Th className="text-right">Cols</Th>
                <Th className="text-right">Gutter</Th>
                <Th>Margins</Th>
                <Th>Layout behaviour</Th>
              </tr>
            </thead>
            <tbody>
              {BREAKPOINTS.map((b, i) => (
                <tr
                  key={b.name}
                  onMouseEnter={() => setBp(i)}
                  className={cn("transition-colors duration-150", bp === i ? "bg-cloud" : "hover:bg-subtle")}
                >
                  <Td className="font-semibold text-ink">{b.name}</Td>
                  <Td className="tnum font-mono text-[12px]">{b.range}</Td>
                  <Td className="tnum text-right font-mono text-[12px]">{b.cols}</Td>
                  <Td className="tnum text-right font-mono text-[12px]">{b.gutter}</Td>
                  <Td className="tnum font-mono text-[12px]">{b.margins}</Td>
                  <Td>{b.behavior}</Td>
                </tr>
              ))}
            </tbody>
          </TableShell>
        </div>
      </div>

      {/* 4.2 Spacing --------------------------------------------------------- */}
      <div id="layout-spacing" className="mt-14 scroll-mt-28">
        <SubHead
          kicker="4.2"
          title="Spacing & Vertical Rhythm — 8pt Grid"
          note="Nine locked steps. Bars are rendered at true pixel scale."
        />
        <div className="overflow-hidden rounded-[4px] border border-line bg-white">
          {SPACING_SCALE.map((s, i) => (
            <div
              key={s.token}
              className={cn(
                "flex flex-wrap items-center gap-x-5 gap-y-2 px-5 py-3 transition-colors duration-150 hover:bg-subtle",
                i > 0 && "border-t border-line-subtle",
              )}
            >
              <code className="w-[92px] shrink-0 font-mono text-[12px] font-semibold text-ink">{s.token}</code>
              <span className="tnum w-[52px] shrink-0 text-right font-mono text-[12px] text-txt2">
                {s.value}px
              </span>
              <span
                className="h-5 shrink-0 rounded-[2px] bg-[#12836B]"
                style={{ width: s.value, minWidth: 4 }}
                aria-hidden
              />
              <span className="min-w-[200px] flex-1 text-[13px] text-txt2">{s.usage}</span>
              <CopyChip value={`--bwci-${s.token}`} label={`${s.value}px`} />
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Callout kind="rule" title="Readable line length">
            Body text paragraphs must never exceed <code className="font-mono text-[12px]">max-width: 68ch</code>{" "}
            (approximately 680px) to ensure comfortable reading comprehension.
          </Callout>
          <div className="rounded-[4px] border border-line bg-white p-5">
            <Eyebrow>Measure demonstration</Eyebrow>
            <p className="mt-2 max-w-[68ch] border-l-2 border-emerald2 pl-3 text-[15px] leading-[1.65] text-txt2">
              BWCI is the holding company and Financial Engine of the Better World Ecosystem. Its role is
              reconnecting capital with the real economy by identifying financing bottlenecks and engineering
              appropriate capital structures — this paragraph is clamped to exactly 68ch.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
