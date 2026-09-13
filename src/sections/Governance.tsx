import { useState } from "react";
import { DO_DONT, MOTION_TOKENS, REFLOW } from "@/data/guidelines";
import { cn } from "@/utils/cn";
import {
  Callout,
  CopyChip,
  Eyebrow,
  SectionShell,
  SubHead,
  Tabs,
  TableShell,
  Td,
  Th,
} from "@/components/ui";

const A11Y = [
  {
    t: "Standard",
    b: "Target WCAG 2.2 Level AA across all public web pages.",
    glyph: "◆",
  },
  {
    t: "Color independence",
    b: "Status, maturity and relationship types must never be communicated by color alone.",
    glyph: "◑",
  },
  {
    t: "Gold enforcement",
    b: "#B98F2D on white is strictly prohibited for text under 24px; use #9E7720 (4.8:1) for small text and badge labels on light backgrounds.",
    glyph: "▲",
  },
  {
    t: "Touch targets",
    b: "Minimum interactive touch target of 44 × 44px on touch devices as the BWCI usability standard, exceeding WCAG minimums.",
    glyph: "▣",
  },
  {
    t: "Keyboard navigation",
    b: "Full tab navigation support with a visible focus indicator: outline 2px solid #12836B, offset 2px.",
    glyph: "⌨",
  },
  {
    t: "Zoom & scaling (reflow)",
    b: "Layouts and typography must remain functional and readable at up to 400% browser zoom, with 200% as an intermediate QA checkpoint.",
    glyph: "⤢",
  },
  {
    t: "Non-text & SVG",
    b: "Informative SVG diagrams must provide an accessible name and description; decorative SVGs must be hidden with aria-hidden=\"true\".",
    glyph: "◫",
  },
];

export function GovernanceSections() {
  const [playing, setPlaying] = useState<string | null>(null);
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [ddMode, setDdMode] = useState<"both" | "do" | "dont">("both");
  const [bigTouch, setBigTouch] = useState(true);

  const play = (token: string) => {
    setPlaying(null);
    window.setTimeout(() => setPlaying(token), 20);
  };

  return (
    <>
      {/* ------------------------------------------------------------ 12 MOTION */}
      <SectionShell
        id="motion"
        num="12"
        title="Motion & Interaction Direction"
        tone="subtle"
        lead="Calm, purposeful and architectural — reinforcing relationships and hierarchy rather than providing superficial decoration."
      >
        <div id="motion-tokens" className="scroll-mt-28">
          <SubHead
            kicker="12.1"
            title="Motion Timing & Easing Tokens"
            note="Press “Play” on any token to preview its real duration and easing curve."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {MOTION_TOKENS.map((m) => {
              const active = playing === m.token;
              return (
                <div key={m.token} className="rounded-[4px] border border-line bg-white p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <code className="font-mono text-[13px] font-bold text-ink">{m.token}</code>
                    <button
                      type="button"
                      onClick={() => play(m.token)}
                      className="min-h-[32px] rounded-[4px] border border-line bg-subtle px-3 py-1.5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.08em] text-txt2 transition-colors duration-150 hover:border-emerald2 hover:text-emerald-dark"
                    >
                      ▶ Play
                    </button>
                  </div>

                  <div className="relative mt-4 h-10 overflow-hidden rounded-[3px] border border-line-subtle bg-cloud p-1.5">
                    <div
                      key={`${m.token}-${active}`}
                      className="h-full rounded-[2px] bg-ink"
                      style={{
                        width: active ? "100%" : "12%",
                        animation: active ? `bwci-grow ${m.ms}ms ${m.curve} both` : undefined,
                      }}
                    />
                    <span className="tnum pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 font-mono text-[10px] font-bold text-white mix-blend-difference">
                      {m.ms}ms
                    </span>
                  </div>

                  <dl className="mt-4 space-y-1.5 border-t border-line-subtle pt-3.5">
                    <div className="flex items-baseline justify-between gap-3 text-[12.5px]">
                      <dt className="text-muted">Duration</dt>
                      <dd className="tnum font-mono text-[11.5px] font-semibold text-ink">{m.duration}</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-3 text-[12.5px]">
                      <dt className="text-muted">Easing</dt>
                      <dd className="font-mono text-[11.5px] text-ink">{m.easing}</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-3 text-[12.5px]">
                      <dt className="shrink-0 text-muted">Curve</dt>
                      <dd className="font-mono text-[10.5px] text-txt2">{m.curve}</dd>
                    </div>
                  </dl>
                  <p className="mt-3 text-[13px] leading-[1.55] text-txt2">{m.usage}</p>
                  <CopyChip value={`--bwci-${m.token}`} className="mt-3" />
                </div>
              );
            })}
          </div>
          <style>{`@keyframes bwci-grow { from { width: 12% } to { width: 100% } }`}</style>
        </div>

        <div id="motion-guardrails" className="mt-14 scroll-mt-28">
          <SubHead kicker="12.2" title="Motion Guardrails" />
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-[4px] border-[1.5px] border-[#E6B8B8] bg-[#FBECEC] p-5">
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#8C2F2F]">
                ✕ Avoid
              </div>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-[#8C2F2F]">
                Constant looping animations, bouncy spring physics, or parallax clutter.
              </p>
            </div>
            <div className="rounded-[4px] border-[1.5px] border-[#A3D9C9] bg-[#E8F5F1] p-5">
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#0D6E59]">
                ✔ Essential rule
              </div>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-[#0A4F40]">
                Motion must never be required to understand the Financial Engine or any core concept. Diagrams
                must be fully legible in their static state.
              </p>
            </div>
            <div className="rounded-[4px] border-[1.5px] border-[#A3D9C9] bg-[#E8F5F1] p-5">
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#0D6E59]">
                ✔ Reduced motion
              </div>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-[#0A4F40]">
                Honor <code className="font-mono text-[12px]">prefers-reduced-motion</code> by instantly
                rendering final states without animation.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* ------------------------------------------------------------- 13 A11Y */}
      <SectionShell
        id="accessibility"
        num="13"
        title="Accessibility Baseline"
        lead="WCAG 2.2 Level AA across all public web pages, with BWCI-specific standards that exceed the minimum in touch sizing and status cueing."
      >
        <div className="grid gap-4 lg:grid-cols-[1fr_minmax(0,380px)]">
          <div className="grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2">
            {A11Y.map((a) => (
              <div key={a.t} className="bg-white p-5">
                <div className="flex items-center gap-2.5">
                  <span
                    aria-hidden
                    className="grid h-7 w-7 place-items-center rounded-[3px] bg-cloud font-mono text-[12px] text-teal"
                  >
                    {a.glyph}
                  </span>
                  <h4 className="text-[14.5px] font-semibold text-ink">{a.t}</h4>
                </div>
                <p className="mt-2 text-[13px] leading-[1.6] text-txt2">{a.b}</p>
              </div>
            ))}
          </div>

          <aside className="space-y-4">
            <div className="rounded-[4px] border border-line bg-white p-5">
              <Eyebrow>Touch target simulator</Eyebrow>
              <label className="mt-3 flex cursor-pointer items-center gap-2.5 text-[13px] text-txt2">
                <input
                  type="checkbox"
                  checked={bigTouch}
                  onChange={(e) => setBigTouch(e.target.checked)}
                  className="h-4 w-4 accent-[#12836B]"
                />
                Enforce BWCI 44 × 44px standard
              </label>
              <div className="mt-4 flex flex-wrap items-center gap-3 rounded-[3px] border border-dashed border-line bg-subtle p-4">
                {["◧", "⇄", "▲"].map((g) => (
                  <button
                    key={g}
                    type="button"
                    className="grid place-items-center rounded-[4px] border border-line bg-white text-[14px] text-ink transition-all duration-250"
                    style={{ width: bigTouch ? 44 : 28, height: bigTouch ? 44 : 28 }}
                    aria-label={`Sample control ${g}`}
                  >
                    {g}
                  </button>
                ))}
                <span className="tnum font-mono text-[11px] text-txt2">
                  {bigTouch ? "44 × 44px ✓" : "28 × 28px ✕ below minimum"}
                </span>
              </div>
            </div>

            <div className="rounded-[4px] border border-line bg-white p-5">
              <Eyebrow>Focus indicator</Eyebrow>
              <p className="mt-2 text-[13px] leading-[1.55] text-txt2">
                Tab into the control below to see the locked focus ring.
              </p>
              <button
                type="button"
                className="mt-3 min-h-[44px] rounded-[4px] border-[1.5px] border-ink px-5 py-2.5 text-[13.5px] font-semibold text-ink"
              >
                Focusable control
              </button>
              <CopyChip
                value="outline: 2px solid #12836B; outline-offset: 2px;"
                label="focus token"
                className="mt-3"
              />
            </div>
          </aside>
        </div>
      </SectionShell>

      {/* -------------------------------------------------------- 14 RESPONSIVE */}
      <SectionShell
        id="responsive"
        num="14"
        title="Responsive Design"
        tone="subtle"
        lead="Complex diagrams undergo structural reflow across devices rather than simple CSS down-scaling."
      >
        <div className="mb-5">
          <Tabs
            value={device}
            onChange={setDevice}
            items={[
              { id: "desktop", label: "Desktop ≥ 1024px" },
              { id: "mobile", label: "Mobile < 768px" },
            ]}
          />
        </div>

        <div className="grid gap-px overflow-hidden rounded-[4px] border border-line bg-line">
          {REFLOW.map((r, i) => (
            <div key={i} className="grid gap-px bg-line md:grid-cols-2">
              <div
                className={cn(
                  "p-5 transition-colors duration-300",
                  device === "desktop" ? "bg-white" : "bg-subtle opacity-55",
                )}
              >
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-muted">
                  Desktop ≥ 1024px
                </div>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink">{r.desktop}</p>
              </div>
              <div
                className={cn(
                  "p-5 transition-colors duration-300",
                  device === "mobile" ? "bg-white" : "bg-subtle opacity-55",
                )}
              >
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-muted">
                  Mobile &lt; 768px
                </div>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink">{r.mobile}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reflow specimen */}
        <div className="mt-6 rounded-[4px] border border-line bg-white p-5 sm:p-6">
          <Eyebrow>Engine chassis reflow specimen</Eyebrow>
          <div
            className={cn(
              "mt-4 gap-2.5 transition-all duration-500",
              device === "desktop" ? "grid grid-cols-3 lg:grid-cols-6" : "mx-auto flex max-w-[280px] flex-col",
            )}
          >
            {["01 Identify", "02 Engineer", "03 Build", "04 Mobilise", "05 Use", "06 Scale"].map((s, i) => (
              <div key={s} className="relative rounded-[4px] border border-line bg-subtle p-3">
                <span className="tnum font-mono text-[11px] font-bold text-gold-dark">{s.split(" ")[0]}</span>
                <div className="text-[13px] font-semibold text-ink">{s.split(" ")[1]}</div>
                {device === "mobile" && i < 5 ? (
                  <span
                    aria-hidden
                    className="absolute -bottom-[9px] left-5 z-10 text-[11px] text-[#B98F2D]"
                  >
                    ↓
                  </span>
                ) : null}
              </div>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-txt2">
            {device === "desktop"
              ? "Horizontal 6-stage chassis with dual return arcs rendered beneath the rail."
              : "Vertical stack with gold progress rail and a single vertical return connector."}
          </p>
        </div>

        <div className="mt-6">
          <Callout kind="note" title="Mobile navigation">
            Full-screen drawer with primary links, an expandable platform accordion with inline status tags,
            and direct audience action buttons.
          </Callout>
        </div>
      </SectionShell>

      {/* ---------------------------------------------------------- 15 DO/DON'T */}
      <SectionShell
        id="dodont"
        num="15"
        title="Do / Don’t Visual Matrix"
        lead="The fast reference. Filter to a single column when reviewing designs against the baseline."
      >
        <div className="mb-5">
          <Tabs
            value={ddMode}
            onChange={setDdMode}
            items={[
              { id: "both", label: "Both columns" },
              { id: "do", label: "✔ Do only" },
              { id: "dont", label: "✕ Don’t only" },
            ]}
          />
        </div>

        <div className="space-y-3">
          {DO_DONT.map((d) => (
            <div key={d.cat} className="overflow-hidden rounded-[4px] border border-line bg-white">
              <div className="flex items-center gap-2.5 border-b border-line bg-subtle px-4 py-2.5">
                <span aria-hidden className="font-mono text-[13px] text-teal">
                  {d.icon}
                </span>
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-ink">
                  {d.cat}
                </span>
              </div>
              <div
                className={cn(
                  "grid gap-px bg-line",
                  ddMode === "both" ? "md:grid-cols-2" : "grid-cols-1",
                )}
              >
                {ddMode !== "dont" ? (
                  <div className="bg-white p-4">
                    <div className="flex gap-2.5">
                      <span
                        aria-hidden
                        className="mt-[1px] grid h-5 w-5 shrink-0 place-items-center rounded-[3px] bg-[#0D6E59] text-[11px] font-bold text-white"
                      >
                        ✔
                      </span>
                      <p className="text-[13.5px] leading-[1.6] text-txt2">{d.do}</p>
                    </div>
                  </div>
                ) : null}
                {ddMode !== "do" ? (
                  <div className="bg-white p-4">
                    <div className="flex gap-2.5">
                      <span
                        aria-hidden
                        className="mt-[1px] grid h-5 w-5 shrink-0 place-items-center rounded-[3px] bg-[#8C2F2F] text-[11px] font-bold text-white"
                      >
                        ✕
                      </span>
                      <p className="text-[13.5px] leading-[1.6] text-txt2">{d.dont}</p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <TableShell caption="Do and don't quick reference">
            <thead>
              <tr>
                <Th>Category</Th>
                <Th>✔ Do</Th>
                <Th>✕ Don’t</Th>
              </tr>
            </thead>
            <tbody>
              {DO_DONT.map((d) => (
                <tr key={d.cat} className="transition-colors duration-150 hover:bg-cloud">
                  <Td className="font-semibold text-ink">{d.cat}</Td>
                  <Td>{d.do}</Td>
                  <Td>{d.dont}</Td>
                </tr>
              ))}
            </tbody>
          </TableShell>
        </div>
      </SectionShell>
    </>
  );
}
