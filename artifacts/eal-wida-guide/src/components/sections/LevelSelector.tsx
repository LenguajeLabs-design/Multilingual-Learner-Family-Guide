import { WIDALevel } from "@/data/wida-content";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Sprout, Footprints, MessageCircle, TrendingUp, Milestone, Trophy, type LucideIcon } from "lucide-react";

const LEVEL_ICONS: Record<string, LucideIcon> = {
  Sprout,
  Footprints,
  MessageCircle,
  TrendingUp,
  Milestone,
  Trophy,
};

export function LevelSelector({ levels, selectedId, onSelect, labelId }: { levels: WIDALevel[], selectedId: number, onSelect: (id: 1|2|3|4|5|6) => void, labelId: string }) {
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
              "min-h-11 p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 text-center transition-all flex flex-col items-center justify-center gap-1 sm:gap-2",
              isSelected 
                ? `${level.border} ${level.color} shadow-sm ring-4 ring-white` 
                : "border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50/80 shadow-sm"
            )}
            style={{
              transform: isSelected ? 'translateY(-2px)' : 'translateY(0)'
            }}
          >
            <Icon className={cn("w-4 h-4 sm:w-5 sm:h-5", isSelected ? level.accent : "text-slate-300")} strokeWidth={1.75} />
            <span className={cn(
              "text-xl sm:text-2xl font-bold rounded-full w-8 h-8 flex items-center justify-center",
              isSelected ? `${level.badge} text-white` : "text-slate-400 bg-slate-100"
            )}>
              {level.id}
            </span>
            <span className={cn(
              "text-xs sm:text-sm font-semibold tracking-tight",
              isSelected ? level.accent : "text-slate-600"
            )}>
              {level.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
