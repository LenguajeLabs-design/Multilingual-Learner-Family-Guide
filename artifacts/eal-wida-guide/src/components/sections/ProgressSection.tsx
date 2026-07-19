import { Info } from "lucide-react";

export function ProgressSection({ t }: { t: any }) {
  return (
    <div className="bg-card border border-border rounded-[var(--radius-panel)] p-6 sm:p-8 md:p-10 h-full print-break-inside-avoid">
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-primary/[0.06] text-primary rounded-[var(--radius-control)]">
            <Info className="w-6 h-6" aria-hidden="true" />
          </div>
          <h3 className="text-xl md:text-2xl">{t.progressTitle}</h3>
        </div>
        <p className="text-foreground/75 text-base sm:text-lg leading-relaxed text-balance">
          {t.progressBody}
        </p>
      </div>
    </div>
  );
}
