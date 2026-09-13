import { useState } from "react";
import { PHOTO_APPROVED, PHOTO_PROHIBITED } from "@/data/guidelines";
import { Callout, Eyebrow, SectionShell, SubHead, Tabs } from "@/components/ui";

const PHOTOS = [
  {
    src: "https://images.pexels.com/photos/34194575/pexels-photo-34194575.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "A worker operates a milling machine in an industrial setting.",
    cat: "Advanced manufacturing",
    credit: "Freek Wolsink / Pexels",
  },
  {
    src: "https://images.pexels.com/photos/6877845/pexels-photo-6877845.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Farm workers picking crops in a green field with large baskets.",
    cat: "Agriculture & food hubs",
    credit: "Quang Nguyen Vinh / Pexels",
  },
  {
    src: "https://images.pexels.com/photos/7843974/pexels-photo-7843974.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "A logistics worker in uniform checking packages outdoors.",
    cat: "Multimodal logistics",
    credit: "Kampus Production / Pexels",
  },
  {
    src: "https://images.pexels.com/photos/6961122/pexels-photo-6961122.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Workers installing solar panels on a sunny day.",
    cat: "Clean tech & local energy",
    credit: "Hoan Ngọc / Pexels",
  },
  {
    src: "https://images.pexels.com/photos/39351197/pexels-photo-39351197.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "A man working on textile machinery in a modern factory.",
    cat: "Real economic activity",
    credit: "Galib Rahman Nadim / Pexels",
  },
  {
    src: "https://images.pexels.com/photos/29226694/pexels-photo-29226694.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "A hand operating a drill press in a workshop.",
    cat: "Workshops & human operators",
    credit: "Sergei Starostin / Pexels",
  },
];

const ICONS: { name: string; cat: string; path: React.ReactNode }[] = [
  {
    name: "Engine chassis",
    cat: "System & Architecture",
    path: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M7 10h4M7 14h10M15 10h2" />
      </>
    ),
  },
  {
    name: "Two-way flow",
    cat: "System & Architecture",
    path: (
      <>
        <path d="M4 9h16M20 9l-3-3M20 9l-3 3" />
        <path d="M20 15H4M4 15l3-3M4 15l3 3" />
      </>
    ),
  },
  {
    name: "Modular platform",
    cat: "System & Architecture",
    path: (
      <>
        <rect x="3" y="4" width="7" height="7" rx="1.5" />
        <rect x="14" y="4" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="6" rx="1.5" />
        <rect x="14" y="14" width="7" height="6" rx="1.5" />
      </>
    ),
  },
  {
    name: "Manufacturing",
    cat: "Real Economy",
    path: (
      <>
        <path d="M3 20V10l5 3V10l5 3V10l5 3v7z" />
        <path d="M3 20h18" />
      </>
    ),
  },
  {
    name: "Logistics",
    cat: "Real Economy",
    path: (
      <>
        <rect x="2" y="7" width="12" height="9" rx="1.5" />
        <path d="M14 10h4l3 3v3h-7z" />
        <circle cx="7" cy="18" r="1.6" />
        <circle cx="17" cy="18" r="1.6" />
      </>
    ),
  },
  {
    name: "Agriculture",
    cat: "Real Economy",
    path: (
      <>
        <path d="M12 21V9" />
        <path d="M12 12c-3 0-5-2-5-5 3 0 5 2 5 5z" />
        <path d="M12 12c3 0 5-2 5-5-3 0-5 2-5 5z" />
        <path d="M5 21h14" />
      </>
    ),
  },
  {
    name: "Governance",
    cat: "Governance & Trust",
    path: (
      <>
        <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" />
        <path d="M9.5 12l1.8 1.9L15 10" />
      </>
    ),
  },
  {
    name: "Verified record",
    cat: "Governance & Trust",
    path: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h4" />
      </>
    ),
  },
  {
    name: "Lens filter",
    cat: "Interactive Controls",
    path: (
      <>
        <circle cx="11" cy="11" r="6" />
        <path d="M20 20l-4.5-4.5" />
      </>
    ),
  },
  {
    name: "Disclosure",
    cat: "Interactive Controls",
    path: (
      <>
        <path d="M6 9l6 6 6-6" />
      </>
    ),
  },
];

const CHART_DATA = [
  { label: "Unmet MSME gap", value: 5.7, color: "#B98F2D" },
  { label: "Addressed via banks", value: 3.1, color: "#3D5A80" },
  { label: "Non-bank channels", value: 1.4, color: "#12836B" },
  { label: "Public / DFI", value: 0.9, color: "#1D4A54" },
];

export function CraftSections() {
  const [graded, setGraded] = useState(true);
  const [iconSize, setIconSize] = useState(24);
  const [chart, setChart] = useState<"bar" | "gap" | "line">("bar");

  return (
    <>
      {/* ---------------------------------------------------------- 09 PHOTO */}
      <SectionShell
        id="photography"
        num="09"
        title="Photography Direction"
        lead="Photography grounds BWCI’s institutional architecture in the physical real economy — unstaged, documentary, and human."
      >
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <Eyebrow>Approved subject matter — live specimen grid</Eyebrow>
          <label className="flex min-h-[36px] cursor-pointer items-center gap-2.5 rounded-[4px] border border-line bg-white px-3 py-2 font-mono text-[11px] uppercase tracking-[0.06em] text-txt2">
            <input
              type="checkbox"
              checked={graded}
              onChange={(e) => setGraded(e.target.checked)}
              className="h-4 w-4 accent-[#12836B]"
            />
            BWCI grading
          </label>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.map((p) => (
            <figure key={p.src} className="overflow-hidden rounded-[4px] border border-line bg-white">
              <div className="relative aspect-[16/10] overflow-hidden bg-cloud">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-[filter] duration-500"
                  style={{
                    filter: graded ? "saturate(0.78) contrast(1.04) brightness(0.97)" : "none",
                  }}
                />
                {graded ? (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 mix-blend-multiply"
                    style={{ background: "rgba(18,48,57,0.10)" }}
                  />
                ) : null}
              </div>
              <figcaption className="flex items-center justify-between gap-3 px-3.5 py-2.5">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-ink">
                  {p.cat}
                </span>
                <span className="text-[11px] text-muted">{p.credit}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-[4px] border-[1.5px] border-[#A3D9C9] bg-[#E8F5F1] p-5">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#0D6E59]">
              ✔ Approved subject matter
            </div>
            <ul className="mt-3 space-y-1.5">
              {PHOTO_APPROVED.map((x) => (
                <li key={x} className="flex gap-2.5 text-[13.5px] leading-[1.55] text-[#0A4F40]">
                  <span aria-hidden>•</span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[4px] border-[1.5px] border-[#E6B8B8] bg-[#FBECEC] p-5">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#8C2F2F]">
              ✕ Strictly prohibited imagery
            </div>
            <ul className="mt-3 space-y-1.5">
              {PHOTO_PROHIBITED.map((x) => (
                <li key={x} className="flex gap-2.5 text-[13.5px] leading-[1.55] text-[#8C2F2F]">
                  <span aria-hidden>•</span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id="photo-style" className="mt-10 scroll-mt-28">
          <SubHead kicker="9.1" title="Style, Human Presence & Color Grading" />
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                t: "Show activity, not assets",
                b: "Prefer an engineer operating a fabrication tool or logistics workers coordinating freight over static, empty industrial buildings.",
              },
              {
                t: "Documentary style",
                b: "Authentic, unstaged moments. Subjects engaged in real work — never smiling into the lens.",
              },
              {
                t: "Lighting",
                b: "Natural daylight, architectural window light, or authentic workshop ambient light. Avoid glossy studio flashes.",
              },
              {
                t: "Grading",
                b: "Controlled, slightly muted tones with restrained saturation and subtle deep-slate influence matching #123039.",
              },
            ].map((c) => (
              <div key={c.t} className="rounded-[4px] border border-line bg-white p-4">
                <h4 className="text-[14px] font-semibold leading-[1.3] text-ink">{c.t}</h4>
                <p className="mt-1.5 text-[13px] leading-[1.55] text-txt2">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* ----------------------------------------------------------- 10 ICON */}
      <SectionShell
        id="iconography"
        num="10"
        title="Iconography"
        tone="subtle"
        lead="Monoline, architectural and geometric on a 24px master grid — 1.5px consistent stroke weight, 2.0px for 32px display icons, and 2px corner radii."
      >
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <Eyebrow>Master grid specimen</Eyebrow>
          <label className="flex items-center gap-3">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted">Render size</span>
            <input
              type="range"
              min={16}
              max={48}
              step={4}
              value={iconSize}
              onChange={(e) => setIconSize(Number(e.target.value))}
              className="w-32 accent-[#12836B]"
              aria-label="Icon render size"
            />
            <span className="tnum font-mono text-[11px] font-bold text-ink">{iconSize}px</span>
          </label>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
          {ICONS.map((ic) => (
            <div key={ic.name} className="flex flex-col items-center gap-2.5 bg-white p-5 text-center">
              <div
                className="grid place-items-center rounded-[3px] border border-dashed border-line"
                style={{ width: iconSize + 16, height: iconSize + 16 }}
              >
                <svg
                  width={iconSize}
                  height={iconSize}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#123039"
                  strokeWidth={iconSize >= 32 ? 2 : 1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  {ic.path}
                </svg>
              </div>
              <div>
                <div className="text-[12.5px] font-semibold leading-tight text-ink">{ic.name}</div>
                <div className="mt-0.5 font-mono text-[9.5px] uppercase tracking-[0.06em] text-muted">
                  {ic.cat}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Callout kind="rule" title="Production rule">
            Icons must be custom-designed SVG vectors or sourced from a single coherent icon family. Unicode
            glyphs in documentation are conceptual placeholders only.
          </Callout>
          <Callout kind="note" title="Categories">
            System &amp; Architecture · Real Economy (industry / logistics / agriculture) · Governance &amp;
            Trust · Interactive Controls.
          </Callout>
        </div>
      </SectionShell>

      {/* -------------------------------------------------------- 11 DATAVIZ */}
      <SectionShell
        id="dataviz"
        num="11"
        title="Data Visualization"
        lead="Use the simplest chart type that accurately communicates the evidence — and always carry the citation."
      >
        <div className="mb-5">
          <Tabs
            value={chart}
            onChange={setChart}
            items={[
              { id: "bar", label: "Bar chart" },
              { id: "gap", label: "Comparison gap bar" },
              { id: "line", label: "Line chart" },
            ]}
          />
        </div>

        <div className="rounded-[4px] border border-line bg-white p-5 sm:p-7">
          <Eyebrow>Illustrative placeholder — subject to verification</Eyebrow>
          <h3 className="mt-1.5 text-[19px] font-semibold tracking-[-0.015em] text-ink">
            MSME financing channels, indicative distribution (US$ trillions)
          </h3>

          {chart === "bar" ? (
            <div className="anim-in mt-6 space-y-3.5">
              {CHART_DATA.map((d) => (
                <div key={d.label}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-[13.5px] text-txt2">{d.label}</span>
                    <span className="tnum font-mono text-[12.5px] font-bold text-ink">${d.value}T</span>
                  </div>
                  <div className="mt-1.5 h-5 w-full rounded-[2px] bg-cloud">
                    <div
                      className="h-full rounded-[2px] transition-[width] duration-700"
                      style={{ width: `${(d.value / 6) * 100}%`, background: d.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {chart === "gap" ? (
            <div className="anim-in mt-6">
              <div className="flex h-10 w-full overflow-hidden rounded-[2px] border border-line">
                <div className="grid place-items-center bg-[#3D5A80] text-[11px] font-semibold text-white" style={{ width: "35%" }}>
                  Supplied
                </div>
                <div
                  className="grid place-items-center bg-[#B98F2D] text-[11px] font-semibold text-white"
                  style={{ width: "65%" }}
                >
                  Unmet gap
                </div>
              </div>
              <div className="tnum mt-2 flex justify-between font-mono text-[11px] text-txt2">
                <span>$3.1T supplied</span>
                <span>$5.7T unmet</span>
              </div>
              <p className="mt-4 max-w-[62ch] text-[14px] leading-[1.6] text-txt2">
                Gap bars are the preferred encoding for “the disconnect” — they make the shortfall the visual
                subject rather than the supply.
              </p>
            </div>
          ) : null}

          {chart === "line" ? (
            <div className="anim-in mt-6">
              <svg viewBox="0 0 600 200" className="h-52 w-full" role="img" aria-label="Indicative trend line chart">
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="40"
                    y1={20 + i * 40}
                    x2="590"
                    y2={20 + i * 40}
                    stroke="#E2E9E6"
                    strokeWidth="1"
                  />
                ))}
                <polyline
                  points="40,160 150,140 260,120 370,86 480,62 590,40"
                  fill="none"
                  stroke="#12836B"
                  strokeWidth="2"
                />
                <polyline
                  points="40,170 150,166 260,158 370,152 480,148 590,144"
                  fill="none"
                  stroke="#B98F2D"
                  strokeWidth="2"
                  strokeDasharray="6 5"
                />
                {[40, 150, 260, 370, 480, 590].map((x, i) => (
                  <text key={x} x={x} y="192" fontSize="10" fill="#6C8085" textAnchor="middle" fontFamily="JetBrains Mono">
                    {2021 + i}
                  </text>
                ))}
              </svg>
              <div className="mt-2 flex flex-wrap gap-4 font-mono text-[11px] text-txt2">
                <span className="flex items-center gap-2">
                  <span className="h-0.5 w-6 bg-[#12836B]" /> Demand for productive capital
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-0.5 w-6 border-t-2 border-dashed border-[#B98F2D]" /> Available supply
                </span>
              </div>
            </div>
          ) : null}

          <p className="mt-6 border-t border-line-subtle pt-4 font-mono text-[11px] leading-[1.5] text-muted">
            Source: [Institution Name], [Report Title], [Publication Year]. Verified [Month Year].
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Callout kind="rule" title="Supported chart types">
            Bar charts, line charts, comparison gap bars, and Sankey capital flow diagrams where genuinely
            useful. Nothing decorative, no 3D, no gauge dials.
          </Callout>
          <Callout kind="warn" title="Mandatory citation rule">
            Every data graphic must carry a clear source line in the format shown above. No exceptions for
            marketing surfaces.
          </Callout>
        </div>
      </SectionShell>
    </>
  );
}
