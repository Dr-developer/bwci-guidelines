import { useState } from "react";
import { INTERFACE_NODES, LENSES, STATUS_TOKENS } from "@/data/guidelines";
import { cn } from "@/utils/cn";
import { Callout, Eyebrow, SectionShell, StatusBadge, SubHead } from "@/components/ui";

const ENCODING_RULES = [
  {
    n: 1,
    title: "Interface Prominence & Anti-Hub Constraint",
    body: "The Interface Ring (Platforms & Delivery Vehicles) is given primary visual weight. BWCI PLC at the center is the architect, but must not be visually dominant to the extent that all relationships appear to originate, terminate, or transact through BWCI. Independent participant pods must retain visual autonomy.",
  },
  {
    n: 2,
    title: "Connection Without Consolidation",
    body: "Outer participant pods (Investors, Partners, SMEs) use dashed outlines (1.5px dashed), visibly confirming that participants remain independent businesses and are not consolidated into BWCI.",
  },
  {
    n: 3,
    title: "Two-Way Architectural Flows (⇄)",
    body: "Connectors feature double arrowheads representing reciprocal relationships — Capital ⇄ Outcomes, Enterprise Needs ⇄ Capital Pathways, Capability ⇄ Access, Commerce ⇄ Capability. Direct transactional financial intermediation claims are strictly avoided.",
  },
  {
    n: 4,
    title: "Interactive System Lenses",
    body: "The diagram supports 4 interactive lens filters for customised exploration: View as SME / Project · View as Institutional Investor · View as Partner · Full System View.",
  },
];

function Pod({
  title,
  detail,
  dim,
  color,
  accentLabel,
}: {
  title: string;
  detail: string;
  dim: boolean;
  color: string;
  accentLabel?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[4px] border-[1.5px] border-dashed p-4 transition-all duration-500",
        dim ? "opacity-30" : "opacity-100",
      )}
      style={{ borderColor: dim ? "#8A9E99" : color, background: dim ? "transparent" : `${color}0D` }}
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-[14.5px] font-semibold leading-[1.25] text-ink">{title}</h4>
        {accentLabel ? (
          <span
            className="shrink-0 rounded-[3px] border px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.06em]"
            style={{ color, borderColor: `${color}66`, background: "#fff" }}
          >
            {accentLabel}
          </span>
        ) : null}
      </div>
      <p className="mt-1.5 text-[12.5px] leading-[1.5] text-txt2">{detail}</p>
    </div>
  );
}

function Connector({ label, dim, color }: { label: string; dim: boolean; color: string }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-1 py-2 transition-opacity duration-500",
        dim ? "opacity-25" : "opacity-100",
      )}
    >
      <span aria-hidden className="font-mono text-[13px] leading-none" style={{ color }}>
        ⇅
      </span>
      <span
        className="rounded-[3px] border bg-white px-2 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.06em]"
        style={{ color, borderColor: `${color}55` }}
      >
        {label}
      </span>
    </div>
  );
}

export function EcosystemSection() {
  const [lens, setLens] = useState<string>("full");
  const [rule, setRule] = useState(1);

  const show = (id: string) => lens === "full" || id === lens;

  return (
    <SectionShell
      id="ecosystem"
      num="08"
      title="Better World Ecosystem"
      lead="The network of independent participants connecting around the Financial Engine — connection without consolidation."
    >
      {/* Lens controls */}
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
          System lens
        </span>
        {LENSES.map((l) => (
          <button
            key={l.id}
            type="button"
            onClick={() => setLens(l.id)}
            aria-pressed={lens === l.id}
            className={cn(
              "min-h-[36px] rounded-full border px-4 py-1.5 text-[12.5px] font-medium transition-colors duration-200",
              lens === l.id
                ? "border-ink bg-ink text-white"
                : "border-line bg-cloud text-txt2 hover:border-line-strong hover:bg-white hover:text-ink",
            )}
          >
            {l.label}
          </button>
        ))}
      </div>

      {/* Diagram */}
      <div className="relative overflow-hidden rounded-[4px] border border-line bg-subtle p-4 sm:p-6 lg:p-8">
        <div className="rounded-[4px] border-[1.5px] border-dashed border-line-strong p-4 sm:p-6">
          <div className="mb-4 text-center font-mono text-[9.5px] font-semibold uppercase tracking-[0.14em] text-muted">
            ▢ Technology · Data · Governance &amp; Risk — outer spanning boundary envelope
          </div>

          {/* Top pods */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Pod
                title="Investors & Capital Pod"
                detail="Institutional allocators, banks, DFIs, funds"
                dim={!show("investor")}
                color="#3D5A80"
                accentLabel="Independent"
              />
              <Connector label="Capital ⇄ Outcomes" dim={!show("investor")} color="#3D5A80" />
            </div>
            <div>
              <Pod
                title="Strategic Partners Pod"
                detail="Tech enablers, knowledge, advisory & research"
                dim={!show("partner")}
                color="#1D4A54"
                accentLabel="Independent"
              />
              <Connector label="Capability ⇄ Access" dim={!show("partner")} color="#1D4A54" />
            </div>
          </div>

          {/* Interface ring */}
          <div className="rounded-[4px] border-[2px] border-ink bg-white p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-[15px] font-semibold text-ink">
                The Interface Ring — Platforms &amp; Delivery Vehicles
              </h4>
              <span className="rounded-[3px] bg-ink px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.08em] text-white">
                Primary visual weight
              </span>
            </div>
            <div className="mt-3.5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {INTERFACE_NODES.map((n) => {
                const st = n.status === "OPERATING" ? STATUS_TOKENS[0] : STATUS_TOKENS[1];
                return (
                  <div
                    key={n.name}
                    className="rounded-[4px] border border-line bg-subtle p-3 transition-colors duration-200 hover:border-teal"
                  >
                    <div className="text-[13px] font-semibold leading-[1.25] text-ink">{n.name}</div>
                    <div className="mt-1.5">
                      <StatusBadge {...st} size="sm" />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex justify-center">
              <div className="rounded-[4px] border-[1.5px] border-ink bg-ink px-6 py-4 text-center">
                <div className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-white/50">
                  Architect · not counterparty
                </div>
                <div className="mt-1 text-[16px] font-bold tracking-[0.02em] text-white">BWCI PLC HUB</div>
                <div className="font-mono text-[10.5px] text-[#7FD7BE]">(Financial Engine)</div>
              </div>
            </div>
          </div>

          {/* Bottom pod */}
          <div className="mx-auto max-w-[520px]">
            <Connector label="Enterprise Needs ⇄ Capital Pathways" dim={!show("sme")} color="#12836B" />
            <Pod
              title="Real Economy Pod"
              detail="SMEs, regional enterprises, sustainable impact projects"
              dim={!show("sme")}
              color="#12836B"
              accentLabel="Independent"
            />
          </div>
        </div>

        <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
          Lens: {LENSES.find((l) => l.id === lens)?.label} · dashed outlines confirm participants remain
          independent businesses
        </p>
      </div>

      {/* Legend */}
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { g: "▭", l: "Solid 2px frame", d: "Interface Ring — primary connective layer" },
          { g: "⌐ ¬", l: "1.5px dashed", d: "Non-owned, independent participant pods" },
          { g: "⇄", l: "Double arrowhead", d: "Reciprocal, two-way relationship" },
          { g: "▢", l: "Spanning envelope", d: "Technology, data, governance & risk boundary" },
        ].map((x) => (
          <div key={x.l} className="rounded-[4px] border border-line bg-white p-4">
            <span aria-hidden className="font-mono text-[15px] text-teal">
              {x.g}
            </span>
            <div className="mt-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-ink">
              {x.l}
            </div>
            <p className="mt-1 text-[12.5px] leading-[1.5] text-txt2">{x.d}</p>
          </div>
        ))}
      </div>

      {/* 8.1 Encoding rules */}
      <div id="eco-encoding" className="mt-14 scroll-mt-28">
        <SubHead kicker="8.1" title="Key Visual Encoding Rules" />
        <div className="grid gap-4 lg:grid-cols-[minmax(0,300px)_1fr]">
          <ul className="space-y-1.5">
            {ENCODING_RULES.map((r) => (
              <li key={r.n}>
                <button
                  type="button"
                  onClick={() => setRule(r.n)}
                  aria-pressed={rule === r.n}
                  className={cn(
                    "flex min-h-[48px] w-full items-center gap-3 rounded-[4px] border px-4 py-2.5 text-left transition-all duration-200",
                    rule === r.n
                      ? "border-teal bg-ink text-white"
                      : "border-line bg-white text-txt2 hover:border-line-strong",
                  )}
                >
                  <span
                    className={cn("font-mono text-[11px] font-bold", rule === r.n ? "text-gold" : "text-muted")}
                  >
                    0{r.n}
                  </span>
                  <span className={cn("text-[13px] leading-[1.35]", rule === r.n && "font-semibold")}>
                    {r.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <div className="rounded-[4px] border border-line bg-white p-6 sm:p-8">
            {ENCODING_RULES.filter((r) => r.n === rule).map((r) => (
              <div key={r.n} className="anim-in">
                <Eyebrow tone="emerald">Encoding rule 0{r.n}</Eyebrow>
                <h4 className="mt-2 text-[21px] font-semibold leading-[1.25] tracking-[-0.015em] text-ink">
                  {r.title}
                </h4>
                <p className="mt-4 max-w-[64ch] text-[15px] leading-[1.65] text-txt2">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <Callout kind="warn" title="Anti-hub constraint">
            Never draw a solar hub-and-spoke empire. BWCI PLC is the architect at the centre of the
            architecture — not the central counterparty of every transaction. Participants maintain
            independent legal relationships.
          </Callout>
        </div>
      </div>
    </SectionShell>
  );
}
