import { useState } from "react";
import { TYPE_SCALE } from "@/data/guidelines";
import { cn } from "@/utils/cn";
import { Callout, CopyChip, Eyebrow, SectionShell, SubHead, Tabs } from "@/components/ui";

const FAMILIES = [
  {
    id: "sans",
    name: "Plus Jakarta Sans",
    role: "Primary Workhorse Sans",
    use: "All headings, body copy, navigation, buttons and UI cards.",
    why: "Crisp geometry, tall x-height and open apertures provide excellent legibility in multi-column institutional layouts.",
    fallback: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
    css: "var(--bwci-font-sans)",
    sample: "Reconnecting capital with the real economy",
    cls: "font-sans",
  },
  {
    id: "mono",
    name: "JetBrains Mono",
    role: "Data & System Mono",
    use: "Stage numbers (01 IDENTIFY), timestamps (AS AT SEP 2026), financial metrics, architectural IDs.",
    why: "Tabular lining figures prevent column jitter in data tables and convey precision.",
    fallback: "SF Mono, Menlo, Monaco, Courier New, monospace",
    css: "var(--bwci-font-mono)",
    sample: "01 IDENTIFY · $5.7T · AS AT SEP 2026",
    cls: "font-mono",
  },
  {
    id: "serif",
    name: "Newsreader",
    role: "Optional Editorial Serif",
    use: "Restricted exclusively to the Chairman’s Annual Letter and long-form institutional Perspectives.",
    why: "Adds dignified editorial pacing for essays without complicating the general UI.",
    fallback: "Georgia, serif",
    css: "var(--bwci-font-serif)",
    sample: "A letter on the patient architecture of capital",
    cls: "font-serif",
  },
] as const;

export function TypographySection() {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [custom, setCustom] = useState("");

  return (
    <SectionShell
      id="typography"
      num="03"
      title="Typography System"
      tone="subtle"
      lead="A contemporary high-precision sans for interface hierarchy, a monospaced family for technical and financial data, and an optional editorial serif for long-form thought leadership."
    >
      {/* 3.1 Typefaces ------------------------------------------------------ */}
      <div id="type-faces" className="scroll-mt-28">
        <SubHead kicker="3.1" title="Typeface Selection" />
        <div className="grid gap-4 lg:grid-cols-3">
          {FAMILIES.map((f) => (
            <article key={f.id} className="flex flex-col rounded-[4px] border border-line bg-white">
              <div className="border-b border-line bg-cloud px-5 py-6">
                <p className={cn("text-[21px] leading-[1.25] text-ink", f.cls)}>{f.sample}</p>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div>
                  <Eyebrow>{f.role}</Eyebrow>
                  <h4 className="mt-1 text-[18px] font-semibold text-ink">{f.name}</h4>
                </div>
                <p className="text-[13.5px] leading-[1.6] text-txt2">
                  <span className="font-semibold text-ink">Role: </span>
                  {f.use}
                </p>
                <p className="text-[13.5px] leading-[1.6] text-txt2">
                  <span className="font-semibold text-ink">Rationale: </span>
                  {f.why}
                </p>
                <div className="mt-auto border-t border-line-subtle pt-3">
                  <div className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-muted">Fallbacks</div>
                  <code className="mt-1 block font-mono text-[11px] leading-[1.5] text-txt2">{f.fallback}</code>
                  <CopyChip value={f.css} className="mt-2.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 3.2 Scale ---------------------------------------------------------- */}
      <div id="type-scale" className="mt-14 scroll-mt-28">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>3.2</Eyebrow>
            <h3 className="mt-1.5 text-[22px] font-semibold tracking-[-0.015em] text-ink">
              Typographic Hierarchy & Scale
            </h3>
            <p className="mt-2 max-w-[64ch] text-[14.5px] text-txt2">
              Live rendering of every locked scale token. Switch the viewport to compare desktop and mobile
              sizes, or type your own copy to test in place.
            </p>
          </div>
          <Tabs
            value={device}
            onChange={setDevice}
            items={[
              { id: "desktop", label: "Desktop" },
              { id: "mobile", label: "Mobile" },
            ]}
          />
        </div>

        <label className="mb-5 block">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
            Preview text override
          </span>
          <input
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            placeholder="Type to replace all sample strings…"
            className="mt-1.5 min-h-[44px] w-full rounded-[4px] border border-line bg-white px-4 py-3 text-[15px] text-ink outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted focus:border-ink focus:shadow-[inset_0_0_0_0.5px_#123039]"
          />
        </label>

        <div className="overflow-hidden rounded-[4px] border border-line bg-white">
          {TYPE_SCALE.map((t, i) => {
            const size = device === "desktop" ? t.desktop : t.mobile;
            const text = custom.trim() || t.sample;
            return (
              <div
                key={t.token}
                className={cn(
                  "grid gap-4 p-5 transition-colors duration-150 hover:bg-subtle lg:grid-cols-[minmax(0,1fr)_300px]",
                  i > 0 && "border-t border-line-subtle",
                )}
              >
                <div className="min-w-0 overflow-hidden">
                  <div
                    className={cn(
                      "text-ink",
                      t.family === "mono" ? "font-mono" : t.family === "serif" ? "font-serif" : "font-sans",
                      t.upper && "uppercase",
                      t.family === "mono" && "tnum",
                    )}
                    style={{
                      fontSize: size,
                      fontWeight: t.weight,
                      letterSpacing: t.tracking.replace("+", ""),
                      lineHeight: Number(t.lineHeight.split(" ")[0]),
                    }}
                  >
                    {text}
                  </div>
                </div>
                <div className="flex flex-col gap-2 border-t border-line-subtle pt-3 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <code className="font-mono text-[11.5px] font-bold text-ink">{t.token}</code>
                    <CopyChip value={t.token} label="copy" />
                  </div>
                  <dl className="tnum grid grid-cols-2 gap-x-3 gap-y-1 font-mono text-[10.5px] text-txt2">
                    <div className="flex justify-between gap-2">
                      <dt className="text-muted">SIZE</dt>
                      <dd className="font-semibold text-ink">{size}px</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-muted">WEIGHT</dt>
                      <dd>{t.weight}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-muted">LH</dt>
                      <dd>{t.lineHeight}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-muted">TRACK</dt>
                      <dd>{t.tracking}</dd>
                    </div>
                  </dl>
                  <p className="text-[12px] leading-[1.5] text-txt2">{t.usage}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3.3 Numbers -------------------------------------------------------- */}
      <div id="type-numbers" className="mt-14 scroll-mt-28">
        <SubHead kicker="3.3" title="Numbers, Dates & Formatting Rules" />
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[4px] border border-line bg-white p-5">
            <Eyebrow>01 — Tabular numerals</Eyebrow>
            <p className="mt-2 text-[14px] leading-[1.6] text-txt2">
              <code className="font-mono text-[12.5px]">font-feature-settings: "tnum" 1</code> is applied to
              all financial figures, market statistics and data tables to maintain clean vertical column
              alignment.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-line bg-line">
              {[
                { label: "Without tnum", cls: "" },
                { label: "With tnum ✓", cls: "tnum" },
              ].map((v) => (
                <div key={v.label} className="bg-white p-3">
                  <div className="font-mono text-[9.5px] uppercase tracking-[0.08em] text-muted">{v.label}</div>
                  <div className={cn("mt-1.5 space-y-0.5 text-right font-mono text-[14px] text-ink", v.cls)}>
                    <div>1,118,411</div>
                    <div>977,300</div>
                    <div>5,700,000</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[4px] border border-line bg-white p-5">
            <Eyebrow>02 — “As at” date stamps</Eyebrow>
            <ul className="mt-3 space-y-2.5 text-[13.5px] leading-[1.6] text-txt2">
              <li className="flex gap-2.5">
                <span className="mt-[3px] shrink-0 rounded-[3px] border border-[#A3D9C9] bg-[#E8F5F1] px-1.5 font-mono text-[9.5px] font-bold text-[#0D6E59]">
                  MANDATORY
                </span>
                <span>
                  Regulatory disclosures, entity status badges, ownership verification notes, time-sensitive
                  macroeconomic statistics.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-[3px] shrink-0 rounded-[3px] border border-[#E8C46B] bg-[#FDF8EB] px-1.5 font-mono text-[9.5px] font-bold text-[#7D5B0F]">
                  ADVISED
                </span>
                <span>Ecosystem maps and operational summaries.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-[3px] shrink-0 rounded-[3px] border border-[#BDCCD0] bg-[#F0F4F5] px-1.5 font-mono text-[9.5px] font-bold text-[#384C51]">
                  NOT REQ.
                </span>
                <span>Static navigation, explanatory prose, general UI components.</span>
              </li>
            </ul>
            <div className="mt-4 space-y-2 border-t border-line-subtle pt-4">
              <div>
                <div className="font-mono text-[9.5px] uppercase tracking-[0.08em] text-muted">
                  Default snapshot format
                </div>
                <code className="tnum mt-1 block font-mono text-[12.5px] font-bold text-ink">
                  OPERATING · AS AT SEPTEMBER 2026
                </code>
              </div>
              <div>
                <div className="font-mono text-[9.5px] uppercase tracking-[0.08em] text-muted">
                  Verified audit format
                </div>
                <code className="tnum mt-1 block font-mono text-[12.5px] font-bold text-ink">
                  AS AT SEPTEMBER 2026 · VERIFIED SEPTEMBER 2026
                </code>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Callout kind="warn" title="Verification discipline">
            The verified audit format is used <strong>strictly</strong> when formal internal or legal
            verification has occurred. Never apply it speculatively.
          </Callout>
        </div>
      </div>
    </SectionShell>
  );
}
