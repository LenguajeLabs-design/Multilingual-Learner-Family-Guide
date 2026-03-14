import { WIDALevel } from "@/data/wida-content";
import { cn } from "@/lib/utils";
import { SkillsGrid } from "./SkillsGrid";
import { CheckCircle2, HeartHandshake, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function LevelDetail({ level, t }: { level: WIDALevel, t: any }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={level.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={cn(
          "rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border transition-all duration-300 shadow-sm",
          level.color,
          level.border
        )}
      >
        <div className="mb-10 text-center sm:text-left">
          <div className="print-only mb-6 hidden">
            <h1 className="text-3xl font-extrabold text-slate-900 border-b pb-4">
              {t.appTitle} — {t.levelLabel} {level.id}: {level.name}
            </h1>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <span className={cn("inline-flex self-center sm:self-auto px-4 py-1.5 rounded-full text-white text-sm font-bold shadow-sm", level.badge)}>
              {t.levelLabel} {level.id}
            </span>
            <span className={cn("font-bold text-2xl tracking-tight", level.accent)}>
              {level.name}
            </span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight max-w-3xl text-balance">
            {level.tagline}
          </h3>
          
          <p className="text-slate-700 text-lg sm:text-xl leading-relaxed max-w-4xl text-balance">
            {level.description}
          </p>
        </div>

        <SkillsGrid skills={level.skills} t={t} accent={level.accent} badge={level.badge} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 print-break-inside-avoid">
          {/* Supports Section */}
          <div className="bg-white/80 rounded-2xl p-6 sm:p-8 shadow-sm border border-white">
            <div className="flex items-center gap-3 mb-6">
              <div className={cn("p-2 rounded-lg", level.color)}>
                <CheckCircle2 className={cn("w-5 h-5", level.accent)} />
              </div>
              <h4 className="text-xl font-bold text-slate-900">{t.supportsTitle}</h4>
            </div>
            <ul className="space-y-4">
              {level.supports.map((support, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 text-base">
                  <span className={cn("mt-1", level.accent)}>•</span>
                  <span className="leading-relaxed">{support}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Home Tips Section */}
          <div className="bg-white/80 rounded-2xl p-6 sm:p-8 shadow-sm border border-white">
            <div className="flex items-center gap-3 mb-6">
              <div className={cn("p-2 rounded-lg", level.color)}>
                <HeartHandshake className={cn("w-5 h-5", level.accent)} />
              </div>
              <h4 className="text-xl font-bold text-slate-900">{t.homeTipsTitle}</h4>
            </div>
            <ul className="space-y-4">
              {level.homeTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-4 text-slate-700 text-base">
                  <span className={cn("flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5 shadow-sm", level.badge)}>
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Encouragement Callout */}
        <div className="mt-8 bg-white/90 backdrop-blur rounded-2xl p-6 sm:p-8 shadow-sm border border-white flex flex-col sm:flex-row gap-5 items-start sm:items-center print-break-inside-avoid">
          <div className={cn("p-4 rounded-2xl flex-shrink-0", level.color)}>
            <Sparkles className={cn("w-8 h-8", level.accent)} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{t.encouragementLabel}</h4>
            <p className="text-slate-800 font-semibold text-lg sm:text-xl leading-snug">
              {level.encouragement}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}