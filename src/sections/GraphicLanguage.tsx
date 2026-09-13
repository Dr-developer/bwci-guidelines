import { PROHIBITED_GRAPHICS, STROKE_GRAMMAR } from "@/data/guidelines";
import { Callout, Eyebrow, SectionShell, SubHead } from "@/components/ui";

function StrokeSpecimen({ glyph }: { glyph: string }) {
  const common = { fill: "none", strokeWidth: 1.5, vectorEffect: "non-scaling-stroke" as const };
  return (
    <svg viewBox="0 0 120 40" className="h-10 w-full" aria-hidden>
      {glyph === "→" ? (
        <>
          <line x1="8" y1="20" x2="104" y2="20" stroke="#123039" {...common} />
          <path d="M104 20 l-8 -5 l0 10 z" fill="#123039" />
        </>
      ) : glyph === "⇄" ? (
        <>
          <line x1="16" y1="20" x2="104" y2="20" stroke="#12836B" {...common} />
          <path d="M104 20 l-8 -5 l0 10 z" fill="#12836B" />
          <path d="M16 20 l8 -5 l0 10 z" fill="#12836B" />
        </>
      ) : glyph === "---" ? (
        <line x1="8" y1="20" x2="112" y2="20" stroke="#8A9E99" strokeDasharray="6 5" {...common} />
      ) : glyph === "⤹" ? (
        <>
          <path d="M104 12 C 104 34, 20 34, 18 16" stroke="#B98F2D" strokeDasharray="6 5" {...common} />
          <path d="M18 14 l-5 9 l10 0 z" fill="#B98F2D" />
        </>
      ) : (
        <rect x="8" y="7" width="104" height="26" rx="3" stroke="#3D5A80" strokeDasharray="8 5" {...common} />
      )}
    </svg>
  );
}

export function GraphicLanguageSection() {
  return (
    <SectionShell
      id="graphic"
      num="06"
      title="Graphic Language"
      tone="subtle"
      lead="Structural, schematic and relational. The graphic language communicates how institutions, platforms and capital connect to productive use."
    >
      <div id="gl-strokes" className="scroll-mt-28">
        <SubHead
          kicker="6.0"
          title="Line & Stroke Grammar"
          note="Every stroke carries a fixed semantic meaning within the BWCI architecture."
        />
        <div className="grid gap-px overflow-hidden rounded-[4px] border border-line bg-line md:grid-cols-2 xl:grid-cols-3">
          {STROKE_GRAMMAR.map((s) => (
            <div key={s.name} className="bg-white p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-ink">
                  {s.name}
                </span>
                <span aria-hidden className="font-mono text-[15px] text-muted">
                  {s.glyph}
                </span>
              </div>
              <div className="my-3 rounded-[3px] border border-line-subtle bg-subtle px-2 py-2">
                <StrokeSpecimen glyph={s.glyph} />
              </div>
              <p className="text-[13px] leading-[1.55] text-txt2">{s.meaning}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="gl-abstract" className="mt-14 scroll-mt-28">
        <SubHead kicker="6.1" title="Abstract Concept Representation" />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[4px] border-[1.5px] border-[#A3D9C9] bg-[#E8F5F1] p-5">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#0D6E59]">
              ✔ Correct — operating system schematic
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-1.5">
              {["Need", "Architecture", "Capability", "Capital", "Productive Use"].map((s, i, arr) => (
                <span key={s} className="flex items-center gap-1.5">
                  <span className="rounded-[3px] border border-[#0D6E59]/30 bg-white px-2 py-1 font-mono text-[10px] font-semibold text-[#0D6E59]">
                    {s}
                  </span>
                  {i < arr.length - 1 ? (
                    <span aria-hidden className="text-[#0D6E59]/50">
                      →
                    </span>
                  ) : null}
                </span>
              ))}
            </div>
            <svg viewBox="0 0 320 30" className="mt-2 h-8 w-full" aria-hidden>
              <path
                d="M300 4 C 300 26, 20 26, 14 8"
                fill="none"
                stroke="#12836B"
                strokeWidth="1.5"
                strokeDasharray="6 5"
              />
              <path d="M14 6 l-4 8 l9 0 z" fill="#12836B" />
            </svg>
            <p className="text-[13px] leading-[1.55] text-[#0D6E59]">
              Clear return loops show circulation and compounding — the system renews itself.
            </p>
          </div>

          <div className="rounded-[4px] border-[1.5px] border-[#E6B8B8] bg-[#FBECEC] p-5">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#8C2F2F]">
              ✕ Wrong — linear marketing funnel
            </div>
            <div className="mt-4 space-y-1.5">
              {[100, 74, 48, 24].map((w, i) => (
                <div
                  key={w}
                  className="mx-auto rounded-[3px] border border-[#8C2F2F]/25 bg-white/70 py-1.5 text-center font-mono text-[10px] text-[#8C2F2F]"
                  style={{ width: `${w}%` }}
                >
                  Step {i + 1}
                </div>
              ))}
            </div>
            <p className="mt-4 text-[13px] leading-[1.55] text-[#8C2F2F]">
              Consumer checkout steps and one-way funnels misrepresent BWCI as a transactional product
              pipeline.
            </p>
          </div>
        </div>
      </div>

      <div id="gl-prohibited" className="mt-14 scroll-mt-28">
        <SubHead kicker="6.2" title="Prohibited Graphic Tropes" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PROHIBITED_GRAPHICS.map((p) => (
            <div
              key={p}
              className="flex items-start gap-3 rounded-[4px] border border-[#E6B8B8] bg-white p-4"
            >
              <span
                aria-hidden
                className="mt-[1px] grid h-5 w-5 shrink-0 place-items-center rounded-[3px] bg-[#8C2F2F] text-[11px] font-bold text-white"
              >
                ✕
              </span>
              <span className="text-[13.5px] leading-[1.55] text-txt2">{p}</span>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <Eyebrow>Iconography &amp; diagram production</Eyebrow>
          <div className="mt-2">
            <Callout kind="rule" title="Semantic over decorative">
              Every stroke, frame and arrowhead must encode a defined relationship. If a graphic element does
              not carry meaning in the BWCI architecture, it should not be drawn.
            </Callout>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
