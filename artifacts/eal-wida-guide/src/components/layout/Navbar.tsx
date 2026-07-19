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
    <header className="w-full bg-card/90 backdrop-blur-xl border-b border-border/80 px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between no-print sticky top-0 z-50 transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-[var(--radius-control)] flex items-center justify-center bg-primary text-primary-foreground [box-shadow:var(--shadow-control)]" aria-hidden="true">
          <BookOpen className="w-5 h-5" />
        </div>
        <p className="font-semibold text-base hidden sm:block tracking-tight text-foreground">
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
          className="min-h-11 text-sm border border-border rounded-[var(--radius-control)] bg-surface-muted py-2 px-3 text-foreground transition-colors font-semibold hover:bg-secondary"
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
            className="min-h-11 min-w-11 flex items-center justify-center gap-2 rounded-[var(--radius-control)] border border-border bg-card px-3 sm:px-4 py-2 text-sm font-semibold text-foreground [box-shadow:var(--shadow-control)] transition-colors hover:bg-secondary"
          >
            <Printer className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">{t.printButton}</span>
          </button>
        )}
      </div>
    </header>
  );
}
