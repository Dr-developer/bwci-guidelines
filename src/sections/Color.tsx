import { useState } from "react";
import { CORE_PALETTE, STATUS_TOKENS, SURFACE_TOKENS, type ColorToken } from "@/data/guidelines";
import { contrast, isLight, ratioLabel, verdict } from "@/utils/contrast";
import { cn } from "@/utils/cn";
import {
  Callout,
  CopyChip,
  Eyebrow,
  SectionShell,
  StatusBadge,
  SubHead,
  Tabs,
  TableShell,
  Td,
  Th,
} from "@/components/ui";

function PassPill({ label }: { label: string }) {
  const tone =
    label === "AAA"
      ? { bg: "#E8F5F1", fg: "#0A4F40", bd: "#85CEBA" }
      : label === "AA"
        ? { bg: "#E0F3ED", fg: "#0D6E59", bd: "#A3D9C9" }
        : label === "FAIL"
          ? { bg: "#FBECEC", fg: "#8C2F2F", bd: "#E6B8B8" }
          : { bg: "#FDF8EB", fg: "#7D5B0F", bd: "#E8C46B" };
  return (
    <span
      className="inline-block rounded-[3px] border px-1.5 py-0.5 font-mono text-[9.5px] font-bold uppercase tracking-[0.06em]"
      style={{ background: tone.bg, color: tone.fg, borderColor: tone.bd }}
    >
      {label}
    </span>
  );
}

function Swatch({ c, onSelect, selected }: { c: ColorToken; onSelect: () => void; selected: boolean }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "group overflow-hidden rounded-[4px] border text-left transition-all duration-200",
        selected ? "border-ink ring-1 ring-ink" : "border-line hover:border-line-strong",
      )}
    >
      <div
        className="flex h-24 items-end justify-between p-3"
        style={{ background: c.hex, color: isLight(c.hex) ? "#123039" : "#fff" }}
      >
        <span className="font-mono text-[11px] font-bold tracking-[0.04em]">{c.hex}</span>
        <span className="font-mono text-[10px] opacity-70">{c.ratio}</span>
      </div>
      <div className="bg-white px-3 py-2.5">
        <div className="text-[13px] font-semibold leading-tight text-ink">{c.name}</div>
        <div className="mt-0.5 truncate font-mono text-[10px] text-muted">{c.token}</div>
      </div>
    </button>
  );
}

export function ColorSection() {
  const [selected, setSelected] = useState<ColorToken>(CORE_PALETTE[0]);
  const [bg, setBg] = useState<"#FFFFFF" | "#F7F9F8" | "#123039">("#FFFFFF");
  const [axis, setAxis] = useState<"1" | "2" | "both">("both");
  const [goldSize, setGoldSize] = useState(14);

  const ratio = contrast(selected.hex, bg);
  const v = verdict(ratio);

  const goldRatioLight = contrast("#B98F2D", "#FFFFFF");
  const goldDarkRatio = contrast("#9E7720", "#FFFFFF");
  const goldOnInk = contrast("#B98F2D", "#123039");
  const goldCompliant = goldSize >= 24;

  const statusRows = STATUS_TOKENS.filter((s) =>
    axis === "both" ? true : String(s.axis) === axis,
  );

  return (
    <SectionShell
      id="color"
      num="02"
      title="Color System"
      lead="A disciplined semantic palette where colors convey specific structural and functional meanings — never decoration."
    >
      {/* 2.1 Core palette ------------------------------------------------- */}
      <div id="color-core" className="scroll-mt-28">
        <SubHead
          kicker="2.1"
          title="Core Palette & Semantic Roles"
          note="Select any swatch to inspect its role, usage and live contrast behaviour across canvases."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_minmax(0,380px)]">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
            {CORE_PALETTE.map((c) => (
              <Swatch
                key={c.token}
                c={c}
                selected={selected.token === c.token}
                onSelect={() => setSelected(c)}
              />
            ))}
          </div>

          {/* Inspector */}
          <aside className="sticky top-24 h-fit overflow-hidden rounded-[4px] border border-line bg-white">
            <div
              className="px-5 py-7"
              style={{ background: selected.hex, color: isLight(selected.hex) ? "#123039" : "#fff" }}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.12em] opacity-70">Inspector</div>
              <div className="mt-1 text-[22px] font-bold leading-tight tracking-[-0.02em]">{selected.name}</div>
              <div className="mt-1 font-mono text-[13px] tracking-[0.04em]">{selected.hex}</div>
            </div>
            <div className="space-y-4 p-5">
              <div>
                <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
                  Token
                </div>
                <div className="mt-1.5 flex flex-wrap gap-2">
                  <CopyChip value={`--bwci-${selected.token}`} label={selected.token} />
                  <CopyChip value={selected.hex} />
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
                  Semantic role
                </div>
                <p className="mt-1 text-[14px] font-medium text-ink">{selected.role}</p>
              </div>
              <div>
                <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
                  Intended usage
                </div>
                <p className="mt-1 text-[13.5px] leading-[1.6] text-txt2">{selected.usage}</p>
              </div>

              <div className="rounded-[4px] border border-line bg-subtle p-4">
                <div className="flex items-center justify-between">
                  <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
                    Live contrast
                  </div>
                  <div className="flex gap-1">
                    {(["#FFFFFF", "#F7F9F8", "#123039"] as const).map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBg(b)}
                        aria-label={`Against ${b}`}
                        className={cn(
                          "h-6 w-6 rounded-[3px] border transition-all",
                          bg === b ? "border-ink ring-1 ring-ink" : "border-line",
                        )}
                        style={{ background: b }}
                      />
                    ))}
                  </div>
                </div>
                <div
                  className="mt-3 rounded-[3px] border border-line px-3 py-3"
                  style={{ background: bg, color: selected.hex }}
                >
                  <div className="text-[13px] font-semibold">Sample text at 13px</div>
                  <div className="mt-1 text-[24px] font-bold leading-tight">Sample 24px</div>
                </div>
                <div className="tnum mt-3 flex items-center justify-between font-mono text-[12px] text-ink">
                  <span className="font-bold">{ratioLabel(ratio)}</span>
                  <span className="flex gap-1.5">
                    <span className="flex items-center gap-1">
                      <span className="text-[9.5px] text-muted">NORMAL</span>
                      <PassPill label={v.normal} />
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-[9.5px] text-muted">LARGE</span>
                      <PassPill label={v.large} />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-6">
          <Callout kind="rule" title="Color usage rule">
            Semantic colors are reserved for <strong>meaning-bearing elements</strong> — status, specific
            flow types, interactive highlights. Do not use accent colors as general background fills or
            decorative flourishes; maintain an uncluttered white/slate canvas.
          </Callout>
        </div>
      </div>

      {/* 2.2 Surfaces ------------------------------------------------------ */}
      <div id="color-surface" className="mt-14 scroll-mt-28">
        <SubHead kicker="2.2" title="Surface & Neutral Tokens" />
        <div className="grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2">
          {SURFACE_TOKENS.map((s) => (
            <div key={s.token + s.usage} className="flex items-start gap-4 bg-white p-4">
              <span
                className="mt-0.5 h-11 w-11 shrink-0 rounded-[3px] border"
                style={{
                  background: s.hex,
                  borderColor: s.token.includes("border") ? s.hex : "#D5E0DC",
                  borderWidth: s.token.includes("dashed") ? 1.5 : 1,
                  borderStyle: s.token.includes("dashed") ? "dashed" : "solid",
                }}
                aria-hidden
              />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <code className="font-mono text-[12px] font-semibold text-ink">{s.token}</code>
                  <CopyChip value={s.hex} />
                </div>
                <p className="mt-1.5 text-[13px] leading-[1.55] text-txt2">{s.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2.3 Two-axis status ---------------------------------------------- */}
      <div id="color-status" className="mt-14 scroll-mt-28">
        <SubHead
          kicker="2.3"
          title="Two-Axis Status Architecture"
          note="Status is encoded across two clear axes to avoid category confusion between maturity (readiness) and relationship (ownership)."
        />

        <div className="mb-5 flex flex-wrap items-center gap-3">
          <Tabs
            value={axis}
            onChange={setAxis}
            items={[
              { id: "both", label: "Both axes" },
              { id: "1", label: "Axis 1 · Maturity" },
              { id: "2", label: "Axis 2 · Relation" },
            ]}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {statusRows.map((s) => (
            <div key={s.id} className="anim-in rounded-[4px] border border-line bg-white p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <StatusBadge
                  label={s.label}
                  glyph={s.glyph}
                  dot={s.dot}
                  text={s.text}
                  border={s.border}
                  bg={s.bg}
                  date="AS AT SEP 2026"
                />
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
                  Axis {s.axis} · {s.axisName}
                </span>
              </div>
              <p className="mt-3 text-[13.5px] leading-[1.6] text-txt2">{s.meaning}</p>
              <div className="mt-3.5 grid grid-cols-2 gap-2 border-t border-line-subtle pt-3.5 sm:grid-cols-4">
                {[
                  ["Indicator", s.glyphDesc],
                  ["Text", s.text],
                  ["Border", s.border],
                  ["Tint", s.bg],
                ].map(([k, val]) => (
                  <div key={k}>
                    <div className="font-mono text-[9.5px] uppercase tracking-[0.08em] text-muted">{k}</div>
                    <div className="mt-0.5 flex items-center gap-1.5">
                      {val.startsWith("#") ? (
                        <span
                          className="h-3 w-3 rounded-[2px] border border-black/10"
                          style={{ background: val }}
                          aria-hidden
                        />
                      ) : null}
                      <code className="font-mono text-[11px] text-ink">{val}</code>
                    </div>
                  </div>
                ))}
              </div>
              <code className="mt-3 block font-mono text-[10.5px] text-muted">{s.id}</code>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Callout kind="note" title="Display rule">
            On desktop, Axis 1 and Axis 2 may be presented side-by-side where space allows. On mobile or
            compact cards, render them as <strong>separate distinct tags</strong> to preserve legibility.
          </Callout>
          <div className="rounded-[4px] border border-line bg-subtle p-5">
            <Eyebrow>Combined example — desktop</Eyebrow>
            <div className="mt-3 flex flex-wrap gap-2">
              <StatusBadge {...STATUS_TOKENS[0]} date="AS AT SEP 2026" />
              <StatusBadge {...STATUS_TOKENS[3]} />
            </div>
            <div className="mt-4">
              <Eyebrow>Stacked example — mobile</Eyebrow>
            </div>
            <div className="mt-2 flex flex-col items-start gap-1.5">
              <StatusBadge {...STATUS_TOKENS[1]} size="sm" date="AS AT SEP 2026" />
              <StatusBadge {...STATUS_TOKENS[4]} size="sm" />
            </div>
          </div>
        </div>
      </div>

      {/* 2.4 Accessibility -------------------------------------------------- */}
      <div id="color-a11y" className="mt-14 scroll-mt-28">
        <SubHead
          kicker="2.4"
          title="Accessibility & Contrast Guidelines"
          note="WCAG 2.2 Level AA across all public web interfaces, with an AAA target for primary body copy."
        />

        <div className="grid gap-5 lg:grid-cols-[1fr_minmax(0,420px)]">
          <TableShell caption="Core palette contrast reference">
            <thead>
              <tr>
                <Th>Token</Th>
                <Th>Hex</Th>
                <Th className="text-right">On #FFFFFF</Th>
                <Th className="text-right">On #123039</Th>
                <Th>Verdict</Th>
              </tr>
            </thead>
            <tbody>
              {CORE_PALETTE.map((c) => {
                const onWhite = contrast(c.hex, "#FFFFFF");
                const onInk = contrast(c.hex, "#123039");
                return (
                  <tr key={c.token} className="transition-colors duration-150 hover:bg-cloud">
                    <Td>
                      <span className="flex items-center gap-2">
                        <span
                          className="h-3.5 w-3.5 rounded-[2px] border border-black/10"
                          style={{ background: c.hex }}
                          aria-hidden
                        />
                        <code className="font-mono text-[11.5px] text-ink">{c.token}</code>
                      </span>
                    </Td>
                    <Td>
                      <code className="font-mono text-[11.5px]">{c.hex}</code>
                    </Td>
                    <Td className="tnum text-right font-mono text-[12px] text-ink">{ratioLabel(onWhite)}</Td>
                    <Td className="tnum text-right font-mono text-[12px] text-ink">{ratioLabel(onInk)}</Td>
                    <Td>
                      <PassPill label={c.pass === "LARGE" ? "LARGE ONLY" : c.pass} />
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </TableShell>

          {/* Gold enforcement simulator */}
          <div className="rounded-[4px] border-l-[3px] border-[#B98F2D] border-y border-r border-line bg-[#FDF8EB] p-5">
            <Eyebrow tone="gold">Mandatory constraint</Eyebrow>
            <h4 className="mt-1.5 text-[17px] font-semibold text-ink">Strict Gold Accessibility Rules</h4>
            <p className="mt-2 text-[13.5px] leading-[1.6] text-txt2">
              Drag the size control to see when primary gold becomes non-compliant on a white canvas.
            </p>

            <label className="mt-4 block">
              <span className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.1em] text-[#7D5B0F]">
                <span>Text size</span>
                <span className="tnum font-bold">{goldSize}px</span>
              </span>
              <input
                type="range"
                min={11}
                max={40}
                value={goldSize}
                onChange={(e) => setGoldSize(Number(e.target.value))}
                className="mt-2 w-full accent-[#9E7720]"
                aria-label="Gold text size simulator"
              />
            </label>

            <div className="mt-4 rounded-[4px] border border-line bg-white p-4">
              <div
                style={{
                  color: goldCompliant ? "#B98F2D" : "#9E7720",
                  fontSize: goldSize,
                  lineHeight: 1.25,
                  fontWeight: goldCompliant ? 700 : 600,
                }}
              >
                The Need — financing bottleneck
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-line-subtle pt-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">Enforced</span>
                <code className="font-mono text-[11px] font-bold text-ink">
                  {goldCompliant ? "#B98F2D" : "#9E7720"}
                </code>
                <PassPill label={goldCompliant ? "AA LARGE" : "AA"} />
                <span className="tnum font-mono text-[11px] text-txt2">
                  {ratioLabel(goldCompliant ? goldRatioLight : goldDarkRatio)}
                </span>
              </div>
              <p className="mt-2 text-[12px] leading-[1.5] text-[#7D5B0F]">
                {goldCompliant
                  ? "≥ 24px: primary gold #B98F2D permitted for large display headings and graphical strokes."
                  : "< 24px: BWCI rule forces Dark Gold #9E7720 (4.8:1) for all small UI text and tag labels."}
              </p>
            </div>

            <div className="mt-4 rounded-[4px] border border-line bg-ink p-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/45">
                On dark canvas #123039
              </div>
              <div className="mt-1.5 text-[18px] font-bold text-gold">#B98F2D — fully compliant</div>
              <div className="tnum mt-1 font-mono text-[11px] text-white/60">
                {ratioLabel(goldOnInk)} · primary accent for highlights, need indicators and return loops
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Callout kind="warn" title="Gold status indicators">
            Color is never used alone. The amber/gold dot must always be paired with the explicit uppercase
            label <code className="font-mono text-[12px]">IN DEVELOPMENT</code> and its “as at” date.
          </Callout>
          <Callout kind="rule" title="Multi-channel cueing">
            Never communicate status by color alone. Every status element must pair a glyph or dot with
            explicit text. Small labels under 14px must use{" "}
            <code className="font-mono text-[12px]">#0D6E59</code> rather than{" "}
            <code className="font-mono text-[12px]">#12836B</code>.
          </Callout>
        </div>
      </div>
    </SectionShell>
  );
}
