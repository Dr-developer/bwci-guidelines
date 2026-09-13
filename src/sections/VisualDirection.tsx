import { useState } from "react";
import { ANTI_PERSONAS, PRINCIPLES } from "@/data/guidelines";
import { cn } from "@/utils/cn";
import { Callout, Eyebrow, SectionShell, SubHead } from "@/components/ui";

const PILLARS = [
  {
    t: "Institutional Gravitas",
    b: "Restrained, governed, dated & verified.",
    long: "Grounded, permanent, and disciplined. Avoids flashiness, hype, or superficial trends.",
    c: "#123039",
  },
  {
    t: "Financial Architecture",
    b: "Engine chassis, two-way flows, modular systems.",
    long: "Communicates systems, operating mechanisms and modular capabilities through clean lines and clear hierarchies.",
    c: "#3D5A80",
  },
  {
    t: "Real Economy Connection",
    b: "Documentary photography of active work.",
    long: "Connects capital to physical assets, workshops, factories, logistics, and human builders.",
    c: "#12836B",
  },
];

export function VisualDirectionSection() {
  const [open, setOpen] = useState<number | null>(1);

  return (
    <SectionShell
      id="visual-direction"
      num="01"
      title="Visual Direction"
      tone="subtle"
      lead="BWCI’s visual presentation should feel institutional, contemporary, structured, and directly connected to real economic activity."
    >
      {/* 1.1 Brand Character ---------------------------------------------- */}
      <div id="vd-character" className="scroll-mt-28">
        <SubHead kicker="1.1" title="Brand Character" />

        <div className="overflow-hidden rounded-[4px] border border-line bg-white">
          <div className="border-b border-line bg-ink px-6 py-6 text-center">
            <Eyebrow tone="light">BWCI Visual Identity</Eyebrow>
            <p className="mt-2 text-[19px] font-semibold leading-[1.3] tracking-[-0.015em] text-white sm:text-[24px]">
              “Institutional Architecture for the Real Economy”
            </p>
          </div>
          <div className="relative grid gap-px bg-line md:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.t} className="group bg-white p-6 transition-colors duration-200 hover:bg-subtle">
                <span className="block h-[3px] w-10 rounded-full" style={{ background: p.c }} aria-hidden />
                <h4 className="mt-4 text-[17px] font-semibold leading-[1.3] text-ink">{p.t}</h4>
                <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.06em] text-muted">{p.b}</p>
                <p className="mt-3 text-[14px] leading-[1.6] text-txt2">{p.long}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 1.2 Principles ---------------------------------------------------- */}
      <div id="vd-principles" className="mt-14 scroll-mt-28">
        <SubHead
          kicker="1.2"
          title="Core Design Principles"
          note="Seven governing principles. Select one to read the full definition."
        />
        <div className="grid gap-4 lg:grid-cols-[minmax(0,320px)_1fr]">
          <ul className="space-y-1.5">
            {PRINCIPLES.map((p) => (
              <li key={p.n}>
                <button
                  type="button"
                  onClick={() => setOpen(p.n)}
                  aria-pressed={open === p.n}
                  className={cn(
                    "flex min-h-[48px] w-full items-center gap-3 rounded-[4px] border px-4 py-2.5 text-left transition-all duration-200",
                    open === p.n
                      ? "border-teal bg-ink text-white"
                      : "border-line bg-white text-txt2 hover:border-line-strong hover:bg-white",
                  )}
                >
                  <span
                    className={cn(
                      "tnum font-mono text-[11px] font-bold",
                      open === p.n ? "text-gold" : "text-muted",
                    )}
                  >
                    0{p.n}
                  </span>
                  <span className={cn("text-[13.5px] leading-[1.35]", open === p.n && "font-semibold")}>
                    {p.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <div className="rounded-[4px] border border-line bg-white p-6 sm:p-8">
            {PRINCIPLES.filter((p) => p.n === open).map((p) => (
              <div key={p.n} className="anim-in">
                <Eyebrow tone="emerald">Principle 0{p.n}</Eyebrow>
                <h4 className="mt-2 text-[22px] font-semibold leading-[1.25] tracking-[-0.015em] text-ink sm:text-[26px]">
                  {p.title}
                </h4>
                <p className="mt-4 max-w-[62ch] text-[16px] leading-[1.65] text-txt2">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 1.3 Anti-personas ------------------------------------------------- */}
      <div id="vd-anti" className="mt-14 scroll-mt-28">
        <SubHead
          kicker="1.3"
          title="Anti-Personas — What BWCI Must Not Look Like"
          note="Five visual identities that would actively damage institutional credibility."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {ANTI_PERSONAS.map((a) => (
            <article
              key={a.n}
              className="group relative flex flex-col overflow-hidden rounded-[4px] border border-line bg-white transition-colors duration-200 hover:border-[#E8C46B]"
            >
              <div className="flex items-center gap-3 border-b border-line bg-[#FDF8EB] px-5 py-3.5">
                <span
                  aria-hidden
                  className="grid h-8 w-8 place-items-center rounded-[3px] border border-[#E8C46B] bg-white text-[15px]"
                >
                  {a.icon}
                </span>
                <div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#7D5B0F]">
                    ✕ Anti-Persona 0{a.n}
                  </div>
                  <h4 className="text-[15.5px] font-semibold leading-tight text-ink">{a.name}</h4>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3.5 p-5">
                <div>
                  <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
                    Tropes to avoid
                  </div>
                  <p className="mt-1 text-[13.5px] leading-[1.6] text-txt2">{a.tropes}</p>
                </div>
                <div>
                  <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
                    Why it fails BWCI
                  </div>
                  <p className="mt-1 text-[13.5px] leading-[1.6] text-txt2">{a.why}</p>
                </div>
                <div className="mt-auto border-t border-line-subtle pt-3">
                  <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-dark">
                    Benchmark precedent
                  </div>
                  <p className="mt-1 text-[12.5px] leading-[1.55] text-txt2">{a.benchmark}</p>
                </div>
              </div>
            </article>
          ))}
          <div className="flex items-center rounded-[4px] border border-dashed border-line-strong bg-cloud p-5">
            <Callout kind="rule" title="The positive brief">
              Institutional, contemporary, structured and directly connected to real economic activity —
              credible to allocators and DFIs, legible to enterprise operators.
            </Callout>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
