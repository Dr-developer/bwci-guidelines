import { useMemo, useState } from "react";
import { TOKEN_GROUPS } from "@/data/guidelines";
import { cn } from "@/utils/cn";
import { CopyChip, Eyebrow, SectionShell, Tabs, useCopy } from "@/components/ui";

function buildCss() {
  const lines: string[] = [":root {"];
  TOKEN_GROUPS.forEach((g) => {
    lines.push(
      "  /* ==========================================================================",
    );
    lines.push(`     ${g.group.toUpperCase()}`);
    lines.push(
      "     ========================================================================== */",
    );
    g.vars.forEach(([k, v]) => lines.push(`  ${k}: ${v};`));
    lines.push("");
  });
  lines.push("}");
  return lines.join("\n");
}

function buildJson() {
  const obj: Record<string, Record<string, string>> = {};
  TOKEN_GROUPS.forEach((g) => {
    obj[g.group] = Object.fromEntries(g.vars.map(([k, v]) => [k.replace("--bwci-", ""), v]));
  });
  return JSON.stringify(obj, null, 2);
}

function buildTailwind() {
  const lines = ["@theme {"];
  TOKEN_GROUPS.filter((g) => g.group === "Color Tokens" || g.group === "Status Badge Tokens").forEach(
    (g) => {
      g.vars.forEach(([k, v]) => {
        const name = k.replace("--bwci-color-", "").replace("--bwci-", "");
        lines.push(`  --color-${name}: ${v};`);
      });
    },
  );
  lines.push("  --font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;");
  lines.push("  --font-mono: 'JetBrains Mono', monospace;");
  lines.push("  --font-serif: 'Newsreader', Georgia, serif;");
  lines.push("}");
  return lines.join("\n");
}

export function TokensSection() {
  const [q, setQ] = useState("");
  const [format, setFormat] = useState<"css" | "tailwind" | "json">("css");
  const { copy, copied } = useCopy();

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return TOKEN_GROUPS.map((g) => ({
      ...g,
      vars: term ? g.vars.filter(([k, v]) => `${k} ${v}`.toLowerCase().includes(term)) : g.vars,
    })).filter((g) => g.vars.length > 0);
  }, [q]);

  const total = TOKEN_GROUPS.reduce((n, g) => n + g.vars.length, 0);
  const shown = filtered.reduce((n, g) => n + g.vars.length, 0);

  const payload = format === "css" ? buildCss() : format === "json" ? buildJson() : buildTailwind();

  return (
    <SectionShell
      id="tokens"
      num="16"
      title="Core Design Tokens"
      tone="dark"
      lead="The locked baseline for the designer’s Figma styles and the developer’s Tailwind/CSS implementation. Search, copy individually, or export the full set."
    >
      <div className="flex flex-wrap items-center gap-3">
        <label className="relative min-w-[240px] flex-1">
          <span className="sr-only">Filter tokens</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Filter tokens by name or value…"
            className="min-h-[44px] w-full rounded-[4px] border border-white/20 bg-white/5 px-4 py-3 text-[14px] text-white outline-none transition-colors duration-150 placeholder:text-white/40 focus:border-white/60"
          />
        </label>
        <span className="tnum rounded-[4px] border border-white/15 bg-white/5 px-3 py-2 font-mono text-[11px] text-white/65">
          {shown} / {total} tokens
        </span>
      </div>

      <div className="mt-6 space-y-5">
        {filtered.map((g) => (
          <div key={g.group} className="overflow-hidden rounded-[4px] border border-white/12 bg-white/[0.03]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
              <div>
                <h3 className="text-[15px] font-semibold text-white">{g.group}</h3>
                <p className="text-[12.5px] text-white/50">{g.note}</p>
              </div>
              <button
                type="button"
                onClick={() => copy(g.vars.map(([k, v]) => `${k}: ${v};`).join("\n"))}
                className="min-h-[32px] rounded-[4px] border border-white/25 px-3 py-1.5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.08em] text-white/75 transition-colors duration-150 hover:border-white hover:text-white"
              >
                {copied === g.vars.map(([k, v]) => `${k}: ${v};`).join("\n") ? "Copied ✓" : "Copy group"}
              </button>
            </div>
            <div className="grid gap-px bg-white/10 sm:grid-cols-2 xl:grid-cols-3">
              {g.vars.map(([k, v]) => {
                const isColor = /^#[0-9A-Fa-f]{3,8}$/.test(v);
                return (
                  <div
                    key={k}
                    className="flex items-center gap-3 bg-ink px-3.5 py-2.5 transition-colors duration-150 hover:bg-white/[0.06]"
                  >
                    {isColor ? (
                      <span
                        aria-hidden
                        className="h-6 w-6 shrink-0 rounded-[3px] border border-white/20"
                        style={{ background: v }}
                      />
                    ) : (
                      <span
                        aria-hidden
                        className="grid h-6 w-6 shrink-0 place-items-center rounded-[3px] border border-white/15 font-mono text-[9px] text-white/40"
                      >
                        ƒ
                      </span>
                    )}
                    <div className="min-w-0 flex-1">
                      <code className="block truncate font-mono text-[11.5px] text-white">{k}</code>
                      <code className="block truncate font-mono text-[10.5px] text-white/50">{v}</code>
                    </div>
                    <CopyChip value={`var(${k})`} label="var" tone="dark" />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        {filtered.length === 0 ? (
          <p className="rounded-[4px] border border-white/12 bg-white/[0.03] px-4 py-10 text-center text-[14px] text-white/55">
            No tokens match “{q}”.
          </p>
        ) : null}
      </div>

      {/* Export */}
      <div className="mt-10 overflow-hidden rounded-[4px] border border-white/12 bg-white/[0.03]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
          <Eyebrow tone="light">Export</Eyebrow>
          <div className="flex flex-wrap items-center gap-2">
            <Tabs
              tone="dark"
              size="sm"
              value={format}
              onChange={setFormat}
              items={[
                { id: "css", label: "CSS variables" },
                { id: "tailwind", label: "Tailwind @theme" },
                { id: "json", label: "JSON" },
              ]}
            />
            <button
              type="button"
              onClick={() => copy(payload)}
              className={cn(
                "min-h-[34px] rounded-[4px] px-4 py-1.5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.08em] transition-colors duration-150",
                copied === payload ? "bg-[#12836B] text-white" : "bg-white text-ink hover:bg-[#EFF3F1]",
              )}
            >
              {copied === payload ? "Copied ✓" : "Copy all"}
            </button>
          </div>
        </div>
        <pre className="max-h-[420px] overflow-auto bg-[#0C2229] p-4 font-mono text-[11.5px] leading-[1.7] text-white/75">
          {payload}
        </pre>
      </div>
    </SectionShell>
  );
}
