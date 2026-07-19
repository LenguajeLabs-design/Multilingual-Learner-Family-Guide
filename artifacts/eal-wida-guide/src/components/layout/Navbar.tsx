import { BookOpen, Printer } from "lucide-react";
import { TRANSLATIONS } from "@/data/wida-content";

type NavbarProps = {
  lang?: string;
  setLang?: (l: string) => void;
  onPrint?: () => void;
  showPrint?: boolean;
  t?: typeof TRANSLATIONS.en;
};

export function Navbar({
  lang = "en",
  setLang = () => {},
  onPrint = () => {},
  showPrint = false,
  t = TRANSLATIONS.en,
}: NavbarProps) {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between no-print sticky top-0 z-50 shadow-sm transition-all">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-sm" style={{ background: "#142550" }} aria-hidden="true">
          <BookOpen className="w-5 h-5" />
        </div>
        <p className="font-semibold text-base hidden sm:block normal-case tracking-wide" style={{ color: "#142550" }}>
          {t.appTitle}
        </p>
      </div>
      
      <div className="flex items-center gap-3 sm:gap-4">
        <label htmlFor="language-selector" className="sr-only">
          Choose language
        </label>
        <select 
          id="language-selector"
          aria-label="Choose language"
          value={lang} 
          onChange={(e) => setLang(e.target.value)}
          className="min-h-11 text-sm border border-slate-200 rounded-lg bg-slate-50 py-2 px-3 transition-all font-semibold"
          style={{ color: "#142550" }}
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="zh">中文</option>
          <option value="ja">日本語</option>
          <option value="ko">한국어</option>
        </select>

        {showPrint && (
          <button
            type="button"
            onClick={onPrint}
            aria-label={t.printButton}
            className="min-h-11 min-w-11 flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 sm:px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
          >
            <Printer className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">{t.printButton}</span>
          </button>
        )}
      </div>
    </header>
  );
}
