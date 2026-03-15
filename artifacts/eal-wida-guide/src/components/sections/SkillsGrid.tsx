import { Skill } from "@/data/wida-content";
import { cn } from "@/lib/utils";
import { Ear, Mic, BookOpenText, PenTool } from "lucide-react";

export function SkillsGrid({ skills, t, accent, badge }: { skills: Skill, t: any, accent: string, badge: string }) {
  const items = [
    { key: 'listening', label: t.listeningLabel, icon: Ear, text: skills.listening },
    { key: 'speaking', label: t.speakingLabel, icon: Mic, text: skills.speaking },
    { key: 'reading', label: t.readingLabel, icon: BookOpenText, text: skills.reading },
    { key: 'writing', label: t.writingLabel, icon: PenTool, text: skills.writing },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 print-break-inside-avoid">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.key} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col group hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className={cn("p-2.5 rounded-xl bg-slate-50 group-hover:bg-opacity-50 transition-colors")}>
                <Icon className={cn("w-5 h-5", accent)} />
              </div>
              <h5 className="font-semibold text-lg tracking-wider uppercase text-sm">{item.label}</h5>
            </div>
            <p className="text-base text-slate-600 leading-relaxed flex-1">
              {item.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}