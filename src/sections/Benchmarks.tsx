import { useState } from "react";
import { BENCHMARKS, DEPENDENCIES } from "@/data/guidelines";
import { cn } from "@/utils/cn";
import { Accordion, Callout, Eyebrow, SectionShell, SubHead } from "@/components/ui";

export function BenchmarksSection() {
  const [active, setActive] = useState(0);
  const b = BENCHMARKS[active];

  return (
    <SectionShell
      id="benchmarks"
      num="17"
      title="Benchmark References & Content Dependencies"
      tone="subtle"
      lead="How peer institutions inform BWCI’s interface decisions — and the non-visual constraints that must clear compliance before publication."
    >
      <div id="bm-observations" className="scroll-mt-28">
        <SubHead
          kicker="17.1"
          title="Benchmark Observations vs. BWCI Interpretations"
          note="Select an institution to compare the documented observation with BWCI’s adapted UI application."
        />

        <div className="grid gap-4 lg:grid-cols-[minmax(0,280px)_1fr]">
          <ul className="max-h-[460px] space-y-1 overflow-y-auto pr-1">
            {BENCHMARKS.map((x, i) => (
              <li key={x.inst}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className={cn(
                    "flex min-h-[48px] w-full items-center justify-between gap-3 rounded-[4px] border px-4 py-2.5 text-left transition-all duration-200",
                    active === i
                      ? "border-teal bg-ink text-white"
                      : "border-line bg-white text-txt2 hover:border-line-strong hover:text-ink",
                  )}
                >
                  <span className={cn("text-[13.5px] leading-[1.3]", active === i && "font-semibold")}>
                    {x.inst}
                  </span>
                  <span
                    className={cn(
                      "shrink-0 font-mono text-[10px]",
                      active === i ? "text-gold" : "text-muted",
                    )}
                  >
                    {x.ref}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="anim-in grid gap-px overflow-hidden rounded-[4px] border border-line bg-line md:grid-cols-2">
            <div className="bg-white p-6">
              <Eyebrow>Benchmark observation</Eyebrow>
              <h4 className="mt-1.5 text-[18px] font-semibold text-ink">{b.inst}</h4>
              <p className="mt-3 text-[14.5px] leading-[1.65] text-txt2">{b.obs}</p>
              <p className="mt-4 border-t border-line-subtle pt-3 font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted">
                competitor-reference-analysis.md {b.ref}
              </p>
            </div>
            <div className="bg-[#E8F5F1] p-6">
              <Eyebrow tone="emerald">BWCI interpretation & UI application</Eyebrow>
              <p className="mt-3 text-[14.5px] leading-[1.65] text-[#0A4F40]">{b.app}</p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Callout kind="note" title="Intellectual & legal integrity">
            This document distinguishes clearly between what peer institutions demonstrate on their live web
            properties and how BWCI adapts those principles. Benchmarks are never reproduced — only
            interpreted.
          </Callout>
        </div>
      </div>

      <div id="bm-dependencies" className="mt-14 scroll-mt-28">
        <SubHead
          kicker="17.2"
          title="Content & Compliance Dependencies"
          note="Strategic content and legal dependencies managed in copywriting and compliance review, rather than visual design rules."
        />
        <div className="space-y-2">
          {DEPENDENCIES.map((d, i) => (
            <Accordion
              key={d.title}
              defaultOpen={i === 0}
              title={d.title}
              meta={
                <span className="rounded-[3px] border border-[#E8C46B] bg-[#FDF8EB] px-1.5 py-0.5 font-mono text-[9.5px] font-bold uppercase tracking-[0.06em] text-[#7D5B0F]">
                  Non-visual constraint
                </span>
              }
            >
              {d.body}
            </Accordion>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
