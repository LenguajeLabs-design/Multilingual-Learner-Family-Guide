import { Skill } from "@/data/wida-content";
import { cn } from "@/lib/utils";
import { Ear, Mic, BookOpenText, PenTool } from "lucide-react";

export function SkillsGrid({ skills, t, accent }: { skills: Skill, t: any, accent: string }) {
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
          <div key={item.key} className="bg-surface-muted rounded-[var(--radius-card)] p-6 border border-border/70 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-[var(--radius-control)] bg-card border border-border/70">
                <Icon className={cn("w-5 h-5", accent)} aria-hidden="true" />
              </div>
              <h4 className="text-base">{item.label}</h4>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed flex-1">
              {item.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}
