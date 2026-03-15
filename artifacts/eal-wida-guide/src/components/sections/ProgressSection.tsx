import { Info } from "lucide-react";

export function ProgressSection({ t }: { t: any }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 md:p-10 h-full print-break-inside-avoid shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-white text-primary rounded-xl shadow-sm border border-slate-100">
            <Info className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-xl md:text-2xl tracking-wide uppercase">{t.progressTitle}</h3>
        </div>
        <p className="text-slate-700 text-lg leading-relaxed text-balance">
          {t.progressBody}
        </p>
      </div>
    </div>
  );
}