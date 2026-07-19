import { WIDALevel } from "@/data/wida-content";
import { cn } from "@/lib/utils";
import { Sprout, Footprints, MessageCircle, TrendingUp, Milestone, Trophy, type LucideIcon } from "lucide-react";

const LEVEL_ICONS: Record<string, LucideIcon> = {
  Sprout,
  Footprints,
  MessageCircle,
  TrendingUp,
  Milestone,
  Trophy,
};

export function LevelSelector({ levels, selectedId, onSelect, labelId }: { levels: WIDALevel[], selectedId: number | null, onSelect: (id: 1|2|3|4|5|6) => void, labelId: string }) {
  return (
    <div role="group" aria-labelledby={labelId} className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3">
      {levels.map((level) => {
        const isSelected = level.id === selectedId;
        const Icon = LEVEL_ICONS[level.icon] ?? Sprout;
        return (
          <button
            type="button"
            key={level.id}
            onClick={() => onSelect(level.id as 1|2|3|4|5|6)}
            aria-pressed={isSelected}
            aria-label={`${level.id}: ${level.name}`}
            className={cn(
              "min-h-28 p-3 sm:p-4 rounded-[var(--radius-card)] border text-center transition-[background-color,border-color,box-shadow,transform] flex flex-col items-center justify-center gap-1.5 sm:gap-2 active:scale-[0.98]",
              isSelected 
                ? `${level.border} ${level.color} ring-2 ring-primary/10 [box-shadow:var(--shadow-control)]`
                : "border-border bg-card hover:border-primary/20 hover:bg-surface-muted [box-shadow:var(--shadow-control)]"
            )}
          >
            <Icon className={cn("w-4 h-4 sm:w-5 sm:h-5", isSelected ? level.accent : "text-muted-foreground/55")} strokeWidth={1.75} aria-hidden="true" />
            <span className={cn(
              "text-xl sm:text-2xl font-bold rounded-full w-8 h-8 flex items-center justify-center",
              isSelected ? `${level.badge} text-white` : "text-muted-foreground bg-secondary"
            )}>
              {level.id}
            </span>
            <span className={cn(
              "text-xs sm:text-sm font-semibold tracking-tight",
              isSelected ? level.accent : "text-muted-foreground"
            )}>
              {level.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
