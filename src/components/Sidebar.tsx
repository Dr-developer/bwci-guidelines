import { NAV } from "@/data/guidelines";
import { scrollToId } from "@/hooks/useDocNav";
import { cn } from "@/utils/cn";

const GROUPS: NAV_GROUP[] = ["Foundation", "Systems", "Application", "Governance"];
type NAV_GROUP = "Foundation" | "Systems" | "Application" | "Governance";

export function SidebarNav({
  active,
  onNavigate,
  compact = false,
}: {
  active: string;
  onNavigate?: () => void;
  compact?: boolean;
}) {
  const go = (id: string) => {
    scrollToId(id);
    onNavigate?.();
  };

  return (
    <nav aria-label="Document sections" className="pb-16">
      {GROUPS.map((group) => {
        const items = NAV.filter((n) => n.group === group);
        if (!items.length) return null;
        return (
          <div key={group} className="mb-6">
            <div className="mb-2 px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
              {group}
            </div>
            <ul className="space-y-0.5">
              {items.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => go(item.id)}
                      aria-current={isActive ? "location" : undefined}
                      className={cn(
                        "group flex w-full items-start gap-2.5 rounded-[4px] border-l-2 px-3 py-2 text-left transition-colors duration-150",
                        isActive
                          ? "border-l-emerald2 bg-cloud text-ink"
                          : "border-l-transparent text-txt2 hover:bg-subtle hover:text-ink",
                      )}
                    >
                      <span
                        className={cn(
                          "mt-[2px] font-mono text-[10px] font-bold tabular-nums",
                          isActive ? "text-emerald-dark" : "text-muted group-hover:text-txt2",
                        )}
                      >
                        {item.num}
                      </span>
                      <span className={cn("text-[13.5px] leading-[1.35]", isActive && "font-semibold")}>
                        {compact ? item.title : item.short}
                      </span>
                    </button>

                    {isActive && item.children?.length ? (
                      <ul className="anim-in mb-1 ml-[22px] mt-0.5 space-y-0.5 border-l border-line pl-2">
                        {item.children.map((c) => (
                          <li key={c.id}>
                            <button
                              type="button"
                              onClick={() => go(c.id)}
                              className="w-full rounded-[3px] px-2 py-1 text-left text-[12.5px] leading-[1.4] text-txt2 transition-colors duration-150 hover:bg-subtle hover:text-emerald-dark"
                            >
                              {c.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}
