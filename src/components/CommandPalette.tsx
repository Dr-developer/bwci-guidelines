import { useEffect, useMemo, useRef, useState } from "react";
import { searchDoc, type SearchEntry } from "@/data/searchIndex";
import { scrollToId } from "@/hooks/useDocNav";
import { cn } from "@/utils/cn";
import { Kbd } from "./ui";

const KIND_COLOR: Record<SearchEntry["kind"], string> = {
  Section: "#123039",
  Subsection: "#42585E",
  Color: "#12836B",
  Type: "#3D5A80",
  Token: "#1D4A54",
  Status: "#9E7720",
  Spacing: "#6C8085",
  Motion: "#3D5A80",
  Rule: "#B98F2D",
};

const SUGGESTIONS = [
  "gold contrast",
  "status badge",
  "spacing",
  "engine loops",
  "typography scale",
  "anti-persona",
  "tokens",
];

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const results = useMemo(() => searchDoc(query, 28), [query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setCursor(0);
      const t = window.setTimeout(() => inputRef.current?.focus(), 30);
      document.body.style.overflow = "hidden";
      return () => {
        window.clearTimeout(t);
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  useEffect(() => setCursor(0), [query]);

  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>(`[data-idx="${cursor}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [cursor]);

  if (!open) return null;

  const choose = (entry: SearchEntry) => {
    onClose();
    window.setTimeout(() => scrollToId(entry.id), 60);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[8vh] sm:pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Search the guidelines"
    >
      <button
        type="button"
        aria-label="Close search"
        className="absolute inset-0 bg-ink/45 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div
        className="anim-in relative w-full max-w-[640px] overflow-hidden rounded-[6px] border border-line bg-white shadow-[0_24px_60px_rgba(18,48,57,0.22)]"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            e.preventDefault();
            onClose();
          } else if (e.key === "ArrowDown") {
            e.preventDefault();
            setCursor((c) => Math.min(results.length - 1, c + 1));
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setCursor((c) => Math.max(0, c - 1));
          } else if (e.key === "Enter" && results[cursor]) {
            e.preventDefault();
            choose(results[cursor]);
          }
        }}
      >
        <div className="flex items-center gap-3 border-b border-line px-4 py-3">
          <span aria-hidden className="text-[14px] text-muted">
            ⌕
          </span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sections, tokens, colors, rules…"
            className="min-h-[32px] w-full border-0 bg-transparent text-[15px] text-ink outline-none placeholder:text-muted"
            aria-label="Search query"
          />
          <Kbd>ESC</Kbd>
        </div>

        {query.trim() === "" ? (
          <div className="px-4 py-5">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
              Try searching
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setQuery(s)}
                  className="min-h-[30px] rounded-[4px] border border-line bg-subtle px-2.5 py-1 text-[12px] text-txt2 transition-colors duration-150 hover:border-emerald2 hover:text-emerald-dark"
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line-subtle pt-4 text-[11.5px] text-muted">
              <span className="flex items-center gap-1.5">
                <Kbd>↑</Kbd>
                <Kbd>↓</Kbd> navigate
              </span>
              <span className="flex items-center gap-1.5">
                <Kbd>↵</Kbd> jump to section
              </span>
              <span className="flex items-center gap-1.5">
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd> toggle
              </span>
            </div>
          </div>
        ) : results.length === 0 ? (
          <div className="px-4 py-10 text-center text-[14px] text-muted">
            No matches for “{query}”.
          </div>
        ) : (
          <ul ref={listRef} className="max-h-[52vh] overflow-y-auto py-1.5">
            {results.map((r, i) => (
              <li key={`${r.id}-${r.title}-${i}`}>
                <button
                  type="button"
                  data-idx={i}
                  onMouseEnter={() => setCursor(i)}
                  onClick={() => choose(r)}
                  className={cn(
                    "flex w-full items-start gap-3 px-4 py-2.5 text-left transition-colors duration-100",
                    i === cursor ? "bg-cloud" : "hover:bg-subtle",
                  )}
                >
                  <span
                    className="mt-[3px] shrink-0 rounded-[3px] px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.08em] text-white"
                    style={{ background: KIND_COLOR[r.kind] }}
                  >
                    {r.kind}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[13.5px] font-semibold text-ink">{r.title}</span>
                    <span className="block truncate text-[12px] text-txt2">{r.detail}</span>
                  </span>
                  <span className="mt-[3px] hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.08em] text-muted sm:block">
                    {r.section}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
