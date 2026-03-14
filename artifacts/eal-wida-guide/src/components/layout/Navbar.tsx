import { BookOpen, Printer } from "lucide-react";

export function Navbar({ lang, setLang, onPrint, t }: { lang: string, setLang: (l: string) => void, onPrint: () => void, t: any }) {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between no-print sticky top-0 z-50 shadow-sm transition-all">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-white shadow-sm shadow-primary/20">
          <BookOpen className="w-5 h-5" />
        </div>
        <h1 className="font-bold text-lg text-slate-800 hidden sm:block tracking-tight">
          {t.appTitle}
        </h1>
      </div>
      
      <div className="flex items-center gap-3 sm:gap-4">
        <select 
          value={lang} 
          onChange={(e) => setLang(e.target.value)}
          className="text-sm border border-slate-200 rounded-lg bg-slate-50 py-2 px-3 text-slate-700 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="zh">中文</option>
          <option value="ko">한국어</option>
        </select>

        <button 
          onClick={onPrint}
          className="flex items-center gap-2 text-sm bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-2 px-4 rounded-lg transition-colors shadow-sm"
        >
          <Printer className="w-4 h-4" />
          <span className="hidden sm:inline">{t.printButton}</span>
        </button>
      </div>
    </header>
  );
}