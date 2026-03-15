import { PenLine } from "lucide-react";
import { useState } from "react";

export function TeacherNote({ t }: { t: any }) {
  const [note, setNote] = useState("");

  return (
    <div className={`bg-white border border-slate-200 shadow-sm rounded-3xl p-6 sm:p-8 md:p-10 h-full flex flex-col print-break-inside-avoid ${note.trim() === "" ? "print-only:hidden" : ""}`}>
      <div className="flex items-center gap-4 mb-6 no-print">
        <div className="p-3 rounded-xl shadow-sm border border-slate-100" style={{ background: "#EEF0F7", color: "#142550" }}>
          <PenLine className="w-6 h-6" />
        </div>
        <h3 className="font-semibold text-xl md:text-2xl tracking-wide uppercase">{t.teacherNoteTitle}</h3>
      </div>
      
      {/* Print view header */}
      <div className="hidden print-only mb-4">
        <h3 className="font-semibold text-xl border-b pb-3 tracking-wide uppercase">{t.teacherNoteTitle}</h3>
      </div>

      <div className="flex-1 flex flex-col">
        <textarea 
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder={t.teacherNotePlaceholder}
          className="flex-1 w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 text-slate-700 resize-none outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all min-h-[160px] no-print text-lg leading-relaxed"
        />
        
        <div className="hidden print-only text-slate-800 text-lg leading-relaxed whitespace-pre-wrap mt-2 font-medium">
          {note}
        </div>
      </div>
    </div>
  );
}