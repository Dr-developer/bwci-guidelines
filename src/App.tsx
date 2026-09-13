import { useEffect, useMemo, useState } from "react";
import { CommandPalette } from "@/components/CommandPalette";
import { SidebarNav } from "@/components/Sidebar";
import { Kbd } from "@/components/ui";
import { NAV } from "@/data/guidelines";
import { scrollToId, useHashOnLoad, useReadingProgress, useScrollSpy } from "@/hooks/useDocNav";
import { BenchmarksSection } from "@/sections/Benchmarks";
import { ColorSection } from "@/sections/Color";
import { ComponentsSection } from "@/sections/Components";
import { CraftSections } from "@/sections/Craft";
import { EcosystemSection } from "@/sections/Ecosystem";
import { EngineSection } from "@/sections/Engine";
import { GovernanceSections } from "@/sections/Governance";
import { GraphicLanguageSection } from "@/sections/GraphicLanguage";
import { LayoutSection } from "@/sections/Layout";
import { Hero, OverviewSection } from "@/sections/Overview";
import { TokensSection } from "@/sections/Tokens";
import { TypographySection } from "@/sections/Typography";
import { VisualDirectionSection } from "@/sections/VisualDirection";
import { cn } from "@/utils/cn";

export default function App() {
  const ids = useMemo(() => NAV.map((n) => n.id), []);
  const active = useScrollSpy(ids);
  const progress = useReadingProgress();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  useHashOnLoad();

  const activeItem = NAV.find((n) => n.id === active) ?? NAV[0];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
      if (e.key === "/" && !/input|textarea/i.test((e.target as HTMLElement)?.tagName ?? "")) {
        e.preventDefault();
        setPaletteOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <div className="min-h-screen bg-white">
      {/* Skip link */}
      <a
        href="#overview"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-[4px] focus:bg-ink focus:px-4 focus:py-2.5 focus:text-[13px] focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      {/* ------------------------------------------------------------ HEADER */}
      <div className="no-print sticky top-0 z-50 border-b border-line bg-white/92 backdrop-blur-md">
        <div className="mx-auto flex h-[60px] w-full max-w-[1600px] items-center gap-3 px-4 sm:px-6">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open section navigation"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-[4px] border border-line text-ink transition-colors duration-150 hover:bg-subtle xl:hidden"
          >
            <span aria-hidden className="text-[15px]">
              ☰
            </span>
          </button>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex shrink-0 items-center gap-2.5"
          >
            <span className="grid h-8 w-8 place-items-center rounded-[3px] bg-ink font-mono text-[11px] font-bold tracking-[0.02em] text-white">
              BW
            </span>
            <span className="hidden text-left sm:block">
              <span className="block text-[13.5px] font-bold leading-tight tracking-[-0.01em] text-ink">
                BWCI Visual Guidelines
              </span>
              <span className="block font-mono text-[9.5px] uppercase tracking-[0.1em] text-muted">
                v1.2.1 · locked baseline
              </span>
            </span>
          </button>

          {/* Breadcrumb of active section */}
          <div className="ml-2 hidden min-w-0 items-center gap-2 border-l border-line pl-4 lg:flex">
            <span className="font-mono text-[11px] font-bold text-gold-dark">{activeItem.num}</span>
            <span className="truncate text-[13px] font-medium text-txt2">{activeItem.title}</span>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              className="flex h-10 items-center gap-2.5 rounded-[4px] border border-line bg-subtle px-3 text-[13px] text-muted transition-colors duration-150 hover:border-line-strong hover:text-ink"
            >
              <span aria-hidden>⌕</span>
              <span className="hidden sm:inline">Search…</span>
              <span className="hidden items-center gap-1 md:flex">
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
              </span>
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="hidden h-10 items-center rounded-[4px] border border-line px-3 text-[13px] text-txt2 transition-colors duration-150 hover:border-line-strong hover:text-ink md:flex"
            >
              Print
            </button>
          </div>
        </div>
        <div className="h-[2px] w-full bg-line-subtle">
          <div
            className="h-full bg-emerald2 transition-[width] duration-150"
            style={{ width: `${progress * 100}%` }}
            role="progressbar"
            aria-label="Reading progress"
            aria-valuenow={Math.round(progress * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>

      {/* -------------------------------------------------------------- BODY */}
      <div className="mx-auto flex w-full max-w-[1600px]">
        <aside className="no-print sticky top-[62px] hidden h-[calc(100vh-62px)] w-[286px] shrink-0 overflow-y-auto border-r border-line px-3 py-6 xl:block">
          <SidebarNav active={active} compact />
        </aside>

        <main className="print-full min-w-0 flex-1">
          <Hero onSearch={() => setPaletteOpen(true)} />
          <OverviewSection />
          <VisualDirectionSection />
          <ColorSection />
          <TypographySection />
          <LayoutSection />
          <ComponentsSection />
          <GraphicLanguageSection />
          <EngineSection />
          <EcosystemSection />
          <CraftSections />
          <GovernanceSections />
          <TokensSection />
          <BenchmarksSection />

          {/* ----------------------------------------------------------- FOOTER */}
          <footer className="bg-ink px-5 py-14 text-white sm:px-8 lg:px-12">
            <div className="mx-auto w-full max-w-[1180px]">
              <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-9 w-9 place-items-center rounded-[3px] bg-white font-mono text-[12px] font-bold text-ink">
                      BW
                    </span>
                    <div>
                      <div className="text-[15px] font-bold tracking-[-0.01em]">
                        Better World Capital Investments PLC
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/45">
                        UI Direction &amp; Visual Guidelines
                      </div>
                    </div>
                  </div>
                  <p className="mt-5 max-w-[46ch] text-[13.5px] leading-[1.65] text-white/60">
                    Regulated services are conducted exclusively by appropriately authorised and licensed
                    subsidiary entities, never directly by BWCI PLC. Entity names, statistics and case-study
                    phrasing in this document are illustrative placeholders subject to verification.
                  </p>
                </div>

                <div>
                  <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
                    Document
                  </div>
                  <dl className="mt-3 space-y-2 text-[13px]">
                    {[
                      ["Version", "1.2.1"],
                      ["Date", "September 2026"],
                      ["Status", "Final locked baseline"],
                      ["Standard", "WCAG 2.2 AA"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-3 border-b border-white/10 pb-1.5">
                        <dt className="text-white/50">{k}</dt>
                        <dd className="tnum font-mono text-[11.5px] text-white">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div>
                  <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
                    Quick jump
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {["color", "typography", "engine", "tokens"].map((id) => {
                      const n = NAV.find((x) => x.id === id)!;
                      return (
                        <li key={id}>
                          <button
                            type="button"
                            onClick={() => scrollToId(id)}
                            className="text-[13px] text-white/65 underline decoration-white/20 underline-offset-4 transition-colors duration-150 hover:text-[#7FD7BE]"
                          >
                            {n.num} · {n.title}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/12 pt-6">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-white/40">
                  End of document · BWCI Website Programme Specification v1.2.1 · September 2026
                </p>
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="min-h-[36px] rounded-[4px] border border-white/25 px-4 py-2 font-mono text-[10.5px] font-semibold uppercase tracking-[0.08em] text-white/75 transition-colors duration-150 hover:border-white hover:text-white"
                >
                  ↑ Back to top
                </button>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* ------------------------------------------------------- MOBILE DRAWER */}
      {drawerOpen ? (
        <div className="no-print fixed inset-0 z-[90] xl:hidden" role="dialog" aria-modal="true" aria-label="Section navigation">
          <button
            type="button"
            aria-label="Close navigation"
            className="absolute inset-0 bg-ink/45 backdrop-blur-[2px]"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="anim-in absolute inset-y-0 left-0 flex w-[300px] max-w-[86vw] flex-col border-r border-line bg-white">
            <div className="flex h-[60px] shrink-0 items-center justify-between border-b border-line px-4">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                Contents
              </span>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close navigation"
                className="grid h-9 w-9 place-items-center rounded-[4px] border border-line text-ink hover:bg-subtle"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-2 py-4">
              <SidebarNav active={active} compact onNavigate={() => setDrawerOpen(false)} />
            </div>
          </div>
        </div>
      ) : null}

      {/* -------------------------------------------------------------- FAB */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "no-print fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink shadow-[0_2px_8px_rgba(18,48,57,0.12)] transition-all duration-250 hover:border-emerald2 hover:text-emerald-dark",
          progress > 0.06 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <span aria-hidden>↑</span>
      </button>

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  );
}
