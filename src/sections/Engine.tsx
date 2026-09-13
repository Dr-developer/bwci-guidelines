import { useState } from "react";
import { ENGINE_L1, ENGINE_L2, ENGINE_L3 } from "@/data/guidelines";
import { cn } from "@/utils/cn";
import { Callout, Eyebrow, SectionShell, SubHead, Tabs } from "@/components/ui";

type Level = "l1" | "l2" | "l3";

function ReturnArc({
  label,
  color,
  active,
  height,
  inset,
}: {
  label: string;
  color: string;
  active: boolean;
  height: number;
  inset: number;
}) {
  return (
    <div className="pointer-events-none absolute inset-x-0" style={{ top: "100%", height }}>
      <svg
        viewBox={`0 0 1000 ${height}`}
        preserveAspectRatio="none"
        className="h-full w-full overflow-visible"
        aria-hidden
      >
        <path
          d={`M ${1000 - inset} 0 C ${1000 - inset} ${height * 0.9}, ${inset} ${height * 0.9}, ${inset} 4`}
          fill="none"
          stroke={color}
          strokeWidth={active ? 2 : 1.25}
          strokeDasharray="7 6"
          opacity={active ? 1 : 0.35}
          className={active ? "flow-dash" : undefined}
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${inset} 0 l -5 9 l 10 0 z`}
          fill={color}
          opacity={active ? 1 : 0.35}
        />
      </svg>
      <span
        className="absolute left-1/2 -translate-x-1/2 rounded-[3px] border bg-white px-2 py-0.5 font-mono text-[9.5px] font-bold uppercase tracking-[0.08em] transition-opacity duration-200"
        style={{
          top: height * 0.62,
          color,
          borderColor: color,
          opacity: active ? 1 : 0.5,
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function EngineSection() {
  const [level, setLevel] = useState<Level>("l1");
  const [stage, setStage] = useState<string>("01");
  const [loop, setLoop] = useState<"both" | "circulation" | "scale">("both");

  const l1Active = ENGINE_L1.find((s) => s.code === stage) ?? ENGINE_L1[0];
  const l2Active = ENGINE_L2.find((s) => s.code === stage) ?? ENGINE_L2[0];

  return (
    <SectionShell
      id="engine"
      num="07"
      title="Financial Engine Visual Direction"
      tone="dark"
      lead="How BWCI transforms financing challenges into appropriate capital architecture — rendered as an operating system schematic, never a marketing funnel."
    >
      <div id="eng-levels" className="scroll-mt-28">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <Tabs
            tone="dark"
            value={level}
            onChange={setLevel}
            items={[
              { id: "l1", label: "Level 1 · Conceptual" },
              { id: "l2", label: "Level 2 · Operating" },
              { id: "l3", label: "Level 3 · Sub-systems" },
            ]}
          />
          {level === "l2" ? (
            <div className="flex flex-wrap gap-1.5">
              {(
                [
                  { id: "both", label: "Both loops", c: "#FFFFFF" },
                  { id: "circulation", label: "Circulation 05→01", c: "#12836B" },
                  { id: "scale", label: "Scale 06→01", c: "#B98F2D" },
                ] as const
              ).map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => setLoop(l.id)}
                  aria-pressed={loop === l.id}
                  className={cn(
                    "min-h-[34px] rounded-[4px] border px-3 py-1.5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.06em] transition-colors duration-150",
                    loop === l.id
                      ? "border-transparent text-ink"
                      : "border-white/25 text-white/65 hover:border-white/50 hover:text-white",
                  )}
                  style={loop === l.id ? { background: l.c, color: l.id === "both" ? "#123039" : "#fff" } : undefined}
                >
                  {l.label}
                </button>
              ))}
            </div>
          ) : null}
        </div>

        {/* ---------------------------------------------------------- LEVEL 1 */}
        {level === "l1" ? (
          <div className="anim-in">
            <div className="rounded-[4px] border border-white/12 bg-white/[0.03] p-5 pb-24 sm:p-7 sm:pb-28">
              <Eyebrow tone="light">Hero conceptual model — what the Financial Engine does</Eyebrow>
              <div className="relative mt-5">
                <div className="grid gap-2.5 md:grid-cols-5">
                  {ENGINE_L1.map((s, i) => (
                    <button
                      key={s.code}
                      type="button"
                      onClick={() => setStage(s.code)}
                      aria-pressed={stage === s.code}
                      className={cn(
                        "group relative rounded-[4px] border p-4 text-left transition-all duration-300",
                        stage === s.code
                          ? "border-white/60 bg-white/10"
                          : "border-white/15 bg-white/[0.02] hover:border-white/35",
                      )}
                    >
                      <span
                        className="block h-[3px] w-8 rounded-full"
                        style={{ background: s.color }}
                        aria-hidden
                      />
                      <span className="mt-3 block font-mono text-[10px] uppercase tracking-[0.1em] text-white/45">
                        {s.code}
                      </span>
                      <span className="mt-0.5 block text-[15px] font-semibold leading-[1.25] text-white">
                        {s.title}
                      </span>
                      <span className="mt-1 block text-[11.5px] leading-[1.4] text-white/55">{s.sub}</span>
                      {i < ENGINE_L1.length - 1 ? (
                        <span
                          aria-hidden
                          className="absolute -right-[13px] top-1/2 z-10 hidden -translate-y-1/2 text-[13px] text-white/35 md:block"
                        >
                          →
                        </span>
                      ) : null}
                    </button>
                  ))}
                </div>
                <ReturnArc
                  label="Feedback & compounding loop"
                  color="#7FD7BE"
                  active
                  height={74}
                  inset={90}
                />
              </div>
            </div>
            <div className="anim-in mt-4 rounded-[4px] border border-white/12 bg-white/[0.04] p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="rounded-[3px] px-2 py-1 font-mono text-[10px] font-bold text-white"
                  style={{ background: l1Active.color }}
                >
                  STAGE {l1Active.code}
                </span>
                <h4 className="text-[20px] font-semibold tracking-[-0.015em] text-white">{l1Active.title}</h4>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/45">
                  {l1Active.sub}
                </span>
              </div>
              <p className="mt-3 max-w-[68ch] text-[15px] leading-[1.65] text-white/72">{l1Active.body}</p>
            </div>
          </div>
        ) : null}

        {/* ---------------------------------------------------------- LEVEL 2 */}
        {level === "l2" ? (
          <div className="anim-in">
            <div className="rounded-[4px] border border-white/12 bg-white/[0.03] p-5 pb-32 sm:p-7 sm:pb-36">
              <Eyebrow tone="light">Operating mechanism — how BWCI operates the engine</Eyebrow>
              <div className="relative mt-5">
                <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-6">
                  {ENGINE_L2.map((s, i) => (
                    <button
                      key={s.code}
                      type="button"
                      onClick={() => setStage(s.code)}
                      aria-pressed={stage === s.code}
                      className={cn(
                        "group relative rounded-[4px] border p-4 text-left transition-all duration-300",
                        stage === s.code
                          ? "border-white/60 bg-white/10"
                          : "border-white/15 bg-white/[0.02] hover:border-white/35",
                      )}
                    >
                      <span className="tnum block font-mono text-[16px] font-bold leading-none text-gold">
                        {s.code}
                      </span>
                      <span className="mt-2 block text-[14px] font-semibold leading-[1.25] text-white">
                        {s.title}
                      </span>
                      {i < ENGINE_L2.length - 1 ? (
                        <span
                          aria-hidden
                          className="absolute -right-[13px] top-1/2 z-10 hidden -translate-y-1/2 text-[13px] text-white/35 lg:block"
                        >
                          →
                        </span>
                      ) : null}
                    </button>
                  ))}
                </div>
                <ReturnArc
                  label="Circulation loop · 05 → 01"
                  color="#12836B"
                  active={loop !== "scale"}
                  height={62}
                  inset={140}
                />
                <div className="pointer-events-none absolute inset-0">
                  <ReturnArc
                    label="Scale loop · 06 → 01"
                    color="#B98F2D"
                    active={loop !== "circulation"}
                    height={112}
                    inset={70}
                  />
                </div>
              </div>
            </div>
            <div className="anim-in mt-4 rounded-[4px] border border-white/12 bg-white/[0.04] p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-[3px] bg-gold px-2 py-1 font-mono text-[10px] font-bold text-ink">
                  {l2Active.code}
                </span>
                <h4 className="text-[20px] font-semibold tracking-[-0.015em] text-white">{l2Active.title}</h4>
              </div>
              <p className="mt-3 max-w-[68ch] text-[15px] leading-[1.65] text-white/72">{l2Active.body}</p>
            </div>
          </div>
        ) : null}

        {/* ---------------------------------------------------------- LEVEL 3 */}
        {level === "l3" ? (
          <div className="anim-in rounded-[4px] border border-white/12 bg-white/[0.03] p-5 sm:p-7">
            <Eyebrow tone="light">Capability sub-systems — supporting institutional enablers</Eyebrow>
            <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {ENGINE_L3.map((s) => (
                <div key={s.title} className="rounded-[4px] border border-white/15 bg-white/[0.04] p-5">
                  <h4 className="text-[15px] font-semibold leading-[1.3] text-white">{s.title}</h4>
                  <p className="mt-2 text-[13px] leading-[1.55] text-white/60">{s.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-[4px] border border-dashed border-white/25 px-4 py-3 text-center font-mono text-[10.5px] uppercase tracking-[0.1em] text-white/50">
              ▢ Technology · Data · Governance &amp; Risk — spanning boundary envelope
            </div>
          </div>
        ) : null}
      </div>

      {/* Canonical rule ------------------------------------------------------ */}
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <div className="rounded-[4px] border-l-[3px] border-gold border-y border-r border-white/12 bg-white/[0.04] p-5">
          <Eyebrow tone="light">Canonical brand rule</Eyebrow>
          <p className="mt-2 text-[14px] leading-[1.62] text-white/75">
            Level 1 is the <strong className="text-white">canonical five-stage conceptual model</strong> used
            for primary navigation and hero communication. Level 2 is the six-stage operating model used to
            explain execution, institutional assembly and compounding scale. The six-stage model is a deeper
            explanatory representation and{" "}
            <strong className="text-gold">must never replace or contradict</strong> the canonical five-stage
            model in hero communication.
          </p>
        </div>
        <div className="rounded-[4px] border-l-[3px] border-[#7FD7BE] border-y border-r border-white/12 bg-white/[0.04] p-5">
          <Eyebrow tone="light">Progressive disclosure rule</Eyebrow>
          <p className="mt-2 text-[14px] leading-[1.62] text-white/75">
            Each diagram view should expose only the semantic layer necessary for the user’s current task.
            Additional architecture, entity, status and flow detail must be revealed progressively through
            interaction or dedicated drill-down views.
          </p>
        </div>
      </div>

      {/* 7.1 Loops ------------------------------------------------------------- */}
      <div id="eng-loops" className="mt-14 scroll-mt-28">
        <SubHead kicker="7.1" tone="dark" title="The Two Differentiator Return Loops" />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              n: "Circulation Loop",
              style: "Emerald dashed arc",
              path: "Stage 05 (Productive Use) → Stage 01 (Identify)",
              quote:
                "Capital can be redeployed through participating structures, renewing capacity for new needs.",
              c: "#12836B",
            },
            {
              n: "Scale Loop",
              style: "Gold dashed arc",
              path: "Stage 06 (Scale) → Stage 01 (Identify)",
              quote: "Validated structures become repeatable templates across sectors.",
              c: "#B98F2D",
            },
          ].map((l) => (
            <div key={l.n} className="rounded-[4px] border border-white/12 bg-white/[0.03] p-5">
              <div className="flex items-center gap-2.5">
                <span className="h-0 w-9 border-t-2 border-dashed" style={{ borderColor: l.c }} aria-hidden />
                <h4 className="text-[17px] font-semibold text-white">{l.n}</h4>
              </div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.08em]" style={{ color: l.c }}>
                {l.style}
              </div>
              <div className="mt-1 font-mono text-[12px] text-white/55">{l.path}</div>
              <p className="mt-3 border-l-2 pl-3 text-[14px] italic leading-[1.6] text-white/72" style={{ borderColor: l.c }}>
                “{l.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 7.2 Worked example ---------------------------------------------------- */}
      <div id="eng-worked" className="mt-14 scroll-mt-28">
        <SubHead kicker="7.2" tone="dark" title="Worked Example Mode — Subject to Verification" />
        <div className="rounded-[4px] border border-white/12 bg-white/[0.03] p-5 sm:p-6">
          <p className="max-w-[68ch] text-[15px] leading-[1.65] text-white/72">
            Providence Asset Management (PAM) is used as the illustrative worked example in the design system
            to demonstrate how a need is engineered into an operating entity.
          </p>
          <div className="mt-5 grid gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
            {ENGINE_L2.map((s, i) => (
              <div
                key={s.code}
                className={cn(
                  "rounded-[4px] border p-3.5",
                  i <= 4 ? "border-[#12836B]/50 bg-[#12836B]/10" : "border-dashed border-white/20 bg-transparent",
                )}
              >
                <div className="tnum font-mono text-[11px] font-bold text-white/55">{s.code}</div>
                <div className="mt-1 text-[12.5px] font-semibold leading-[1.3] text-white">{s.title}</div>
                <div className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.08em] text-white/40">
                  {i <= 4 ? "Demonstrated" : "Pipeline"}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-[4px] border-l-[3px] border-gold border-y border-r border-white/12 bg-[#B98F2D]/10 p-4">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-gold">
              ! Verification dependency note
            </div>
            <p className="mt-1.5 text-[13.5px] leading-[1.6] text-white/75">
              Entity status, regulatory permissions, ownership structure and “first operational case study”
              phrasing are subject to formal verification by BWCI legal and compliance teams prior to public
              launch.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Callout kind="locked" title="Abstract concept representation">
          Abstract workflows must be presented as <strong>operating system schematics</strong> with clear
          return loops — never as linear marketing funnels or consumer checkout steps.
        </Callout>
      </div>
    </SectionShell>
  );
}
