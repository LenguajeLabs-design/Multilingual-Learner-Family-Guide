import { motion } from "framer-motion";
import { WidaLevel } from "@/data/wida-content";
import { Ear, Mic, BookOpenText, PenTool, Clock, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS = {
  listen: Ear,
  speak: Mic,
  read: BookOpenText,
  write: PenTool
};

export function LevelCard({ level, index }: { level: WidaLevel; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "relative rounded-[2rem] p-6 sm:p-8 lg:p-10 mb-12 border-2 transition-all duration-500 hover:shadow-2xl overflow-hidden",
        level.bgClass,
        level.shadowClass,
        "border-white/50"
      )}
    >
      {/* Decorative large number in background */}
      <div className={cn(
        "absolute -right-6 -top-10 text-[180px] font-display font-black opacity-10 select-none pointer-events-none",
        level.colorClass
      )}>
        {level.id}
      </div>

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 border-b border-black/5 pb-6">
          <div>
            <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 text-sm font-bold mb-4", level.colorClass)}>
              Level {level.id}
            </div>
            <h2 className={cn("text-3xl sm:text-4xl font-display font-extrabold", level.colorClass)}>
              {level.name}
            </h2>
          </div>
          
          <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-2xl shadow-sm">
            <Clock className={cn("w-5 h-5", level.colorClass)} />
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Typical Time</p>
              <p className="text-sm font-bold text-slate-800">{level.duration}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-display font-bold text-xl text-slate-800 mb-3">What this means:</h3>
            <p className="text-slate-600 leading-relaxed text-lg">{level.meaning}</p>
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-slate-800 mb-3">What they can do:</h3>
            <p className="text-slate-600 leading-relaxed text-lg">{level.abilities}</p>
          </div>
        </div>

        <div className="bg-white/40 rounded-3xl p-6 sm:p-8 mb-8">
          <h3 className="font-display font-bold text-xl text-slate-800 mb-6 text-center">Specific Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {level.skills.map((skill, i) => {
              const Icon = ICONS[skill.icon];
              return (
                <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-black/5 flex gap-4 items-start hover:-translate-y-1 transition-transform duration-200">
                  <div className={cn("p-3 rounded-xl flex-shrink-0", level.bgClass, level.colorClass)}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">{skill.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={cn(
          "flex items-start sm:items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-white/80 to-transparent",
          level.colorClass
        )}>
          <Award className="w-8 h-8 flex-shrink-0" />
          <p className="font-display font-bold text-lg">{level.encouragement}</p>
        </div>
      </div>
    </motion.div>
  );
}
