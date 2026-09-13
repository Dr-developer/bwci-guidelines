import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";

/* ------------------------------------------------------------------ copy */

export function useCopy() {
  const [copied, setCopied] = useState<string | null>(null);
  const t = useRef<number | null>(null);
  const copy = useCallback((value: string) => {
    const done = () => {
      setCopied(value);
      if (t.current) window.clearTimeout(t.current);
      t.current = window.setTimeout(() => setCopied(null), 1400);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(value).then(done).catch(done);
    } else {
      const ta = document.createElement("textarea");
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* noop */
      }
      document.body.removeChild(ta);
      done();
    }
  }, []);
  useEffect(() => () => void (t.current && window.clearTimeout(t.current)), []);
  return { copy, copied };
}

export function CopyChip({
  value,
  label,
  className,
  tone = "default",
}: {
  value: string;
  label?: string;
  className?: string;
  tone?: "default" | "dark";
}) {
  const { copy, copied } = useCopy();
  const isCopied = copied === value;
  return (
    <button
      type="button"
      onClick={() => copy(value)}
      title={`Copy ${value}`}
      className={cn(
        "group inline-flex min-h-[28px] items-center gap-1.5 rounded-[4px] border px-2 py-1 font-mono text-[11px] font-semibold tracking-[0.04em] transition-colors duration-150",
        tone === "dark"
          ? "border-white/20 bg-white/5 text-white/80 hover:border-white/40 hover:bg-white/10"
          : "border-line bg-white text-txt2 hover:border-emerald2 hover:text-emerald-dark",
        className,
      )}
    >
      <span>{isCopied ? "COPIED" : label ?? value}</span>
      <span aria-hidden className={cn("text-[10px]", isCopied ? "text-emerald2" : "opacity-40")}>
        {isCopied ? "✓" : "⧉"}
      </span>
    </button>
  );
}

/* --------------------------------------------------------------- headings */

export function Eyebrow({ children, tone = "muted" }: { children: ReactNode; tone?: "muted" | "gold" | "emerald" | "light" }) {
  const tones = {
    muted: "text-muted",
    gold: "text-gold-dark",
    emerald: "text-emerald-dark",
    light: "text-white/55",
  };
  return (
    <div className={cn("font-mono text-[11px] font-semibold uppercase tracking-[0.14em]", tones[tone])}>
      {children}
    </div>
  );
}

export function SectionShell({
  id,
  num,
  title,
  lead,
  children,
  tone = "light",
}: {
  id: string;
  num: string;
  title: string;
  lead?: ReactNode;
  children: ReactNode;
  tone?: "light" | "subtle" | "dark";
}) {
  const bg =
    tone === "dark" ? "bg-ink text-white" : tone === "subtle" ? "bg-subtle" : "bg-white";
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 border-b border-line-subtle", bg)}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <header className="mb-9 border-b border-current/10 pb-7">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span
              className={cn(
                "font-mono text-[13px] font-bold tracking-[0.12em]",
                tone === "dark" ? "text-gold" : "text-gold-dark",
              )}
            >
              {num}
            </span>
            <h2
              id={`${id}-heading`}
              className={cn(
                "text-[28px] font-bold leading-[1.15] tracking-[-0.025em] sm:text-[38px]",
                tone === "dark" ? "text-white" : "text-ink",
              )}
            >
              {title}
            </h2>
          </div>
          {lead ? (
            <p
              className={cn(
                "mt-4 max-w-[68ch] text-[16px] leading-[1.6] sm:text-[18px]",
                tone === "dark" ? "text-white/70" : "text-txt2",
              )}
            >
              {lead}
            </p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}

export function SubHead({
  id,
  kicker,
  title,
  note,
  tone = "light",
}: {
  id?: string;
  kicker?: string;
  title: string;
  note?: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <div id={id} className="mb-6 scroll-mt-28">
      {kicker ? <Eyebrow tone={tone === "dark" ? "light" : "muted"}>{kicker}</Eyebrow> : null}
      <h3
        className={cn(
          "mt-1.5 text-[20px] font-semibold leading-[1.3] tracking-[-0.015em] sm:text-[22px]",
          tone === "dark" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h3>
      {note ? (
        <p className={cn("mt-2 max-w-[68ch] text-[15px]", tone === "dark" ? "text-white/65" : "text-txt2")}>
          {note}
        </p>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ cards */

export function Card({
  children,
  className,
  hover = false,
  tint = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  tint?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[4px] border border-line",
        tint ? "bg-subtle" : "bg-white",
        hover && "transition-colors duration-200 hover:border-teal",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Callout({
  kind = "rule",
  title,
  children,
}: {
  kind?: "rule" | "warn" | "note" | "locked";
  title: string;
  children: ReactNode;
}) {
  const map = {
    rule: { bar: "#12836B", bg: "#E8F5F1", glyph: "§", label: "RULE" },
    warn: { bar: "#B98F2D", bg: "#FDF8EB", glyph: "!", label: "CONSTRAINT" },
    note: { bar: "#3D5A80", bg: "#EFF4FA", glyph: "i", label: "NOTE" },
    locked: { bar: "#123039", bg: "#EFF3F1", glyph: "⬒", label: "LOCKED" },
  }[kind];
  return (
    <div
      className="rounded-[4px] border border-line-subtle"
      style={{ background: map.bg, borderLeft: `3px solid ${map.bar}` }}
    >
      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <span
            className="grid h-[18px] w-[18px] place-items-center rounded-[3px] font-mono text-[10px] font-bold text-white"
            style={{ background: map.bar }}
            aria-hidden
          >
            {map.glyph}
          </span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em]" style={{ color: map.bar }}>
            {map.label}
          </span>
          <span className="text-[13px] font-semibold text-ink">{title}</span>
        </div>
        <div className="mt-2 max-w-[72ch] text-[14px] leading-[1.62] text-txt2">{children}</div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- status */

export function StatusBadge({
  label,
  glyph,
  dot,
  text,
  border,
  bg,
  date,
  size = "md",
}: {
  label: string;
  glyph: string;
  dot: string;
  text: string;
  border: string;
  bg: string;
  date?: string;
  size?: "sm" | "md";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[4px] border font-mono font-bold uppercase tracking-[0.06em]",
        size === "sm" ? "px-1.5 py-0.5 text-[10px]" : "px-2.5 py-1 text-[11px]",
      )}
      style={{ color: text, borderColor: border, background: bg }}
    >
      <span aria-hidden style={{ color: dot }} className="text-[11px] leading-none">
        {glyph}
      </span>
      {label}
      {date ? <span className="opacity-70">· {date}</span> : null}
    </span>
  );
}

/* ------------------------------------------------------------------ table */

export function TableShell({ children, caption }: { children: ReactNode; caption?: string }) {
  return (
    <div className="overflow-x-auto rounded-[4px] border border-line">
      <table className="w-full min-w-[640px] border-collapse text-left">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        {children}
      </table>
    </div>
  );
}

export function Th({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <th
      scope="col"
      className={cn(
        "border-b-[1.5px] border-line bg-subtle px-5 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-ink",
        className,
      )}
    >
      {children}
    </th>
  );
}

export function Td({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <td className={cn("border-b border-line-subtle px-5 py-3.5 align-top text-[13.5px] text-txt2", className)}>
      {children}
    </td>
  );
}

/* ------------------------------------------------------------------- tabs */

export function Tabs<T extends string>({
  items,
  value,
  onChange,
  tone = "light",
  size = "md",
}: {
  items: { id: T; label: string; hint?: string }[];
  value: T;
  onChange: (v: T) => void;
  tone?: "light" | "dark";
  size?: "sm" | "md";
}) {
  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex flex-wrap gap-1 rounded-[4px] border p-1",
        tone === "dark" ? "border-white/15 bg-white/5" : "border-line bg-cloud",
      )}
    >
      {items.map((it) => {
        const active = it.id === value;
        return (
          <button
            key={it.id}
            role="tab"
            aria-selected={active}
            type="button"
            onClick={() => onChange(it.id)}
            className={cn(
              "rounded-[3px] font-medium transition-all duration-200",
              size === "sm" ? "px-3 py-1.5 text-[12px]" : "min-h-[36px] px-4 py-2 text-[13px]",
              active
                ? tone === "dark"
                  ? "bg-white text-ink"
                  : "bg-ink text-white"
                : tone === "dark"
                  ? "text-white/65 hover:bg-white/10 hover:text-white"
                  : "text-txt2 hover:bg-white hover:text-ink",
            )}
          >
            {it.label}
          </button>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------- accordion */

export function Accordion({
  title,
  meta,
  children,
  defaultOpen = false,
}: {
  title: ReactNode;
  meta?: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={cn("rounded-[4px] border transition-colors duration-200", open ? "border-teal bg-white" : "border-line bg-white hover:border-line-strong")}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex min-h-[56px] w-full items-center justify-between gap-4 px-4 py-3 text-left sm:px-5"
      >
        <span className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className="text-[15px] font-semibold text-ink">{title}</span>
          {meta}
        </span>
        <span
          aria-hidden
          className={cn(
            "grid h-6 w-6 shrink-0 place-items-center rounded-[3px] border border-line text-[11px] text-txt2 transition-transform duration-250",
            open && "rotate-45 border-teal text-teal",
          )}
        >
          +
        </span>
      </button>
      {open ? (
        <div className="anim-in border-t border-line-subtle px-4 py-4 text-[14px] leading-[1.62] text-txt2 sm:px-5">
          {children}
        </div>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ misc */

export function Kbd({ children }: { children: ReactNode }) {
  return (
    <kbd className="rounded-[3px] border border-line bg-white px-1.5 py-0.5 font-mono text-[10px] font-semibold text-txt2 shadow-[0_1px_0_#D5E0DC]">
      {children}
    </kbd>
  );
}

export function Divider({ label }: { label?: string }) {
  if (!label) return <hr className="my-10 border-0 border-t border-line-subtle" />;
  return (
    <div className="my-10 flex items-center gap-3">
      <hr className="flex-1 border-0 border-t border-line-subtle" />
      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{label}</span>
      <hr className="flex-1 border-0 border-t border-line-subtle" />
    </div>
  );
}
