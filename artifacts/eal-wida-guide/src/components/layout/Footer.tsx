import { Link } from "wouter";

export function Footer({ t }: { t: any }) {
  return (
    <footer className="bg-slate-100 py-10 px-4 mt-auto border-t border-slate-200 text-center text-sm text-slate-500 print-only:mt-8 print-only:bg-white print-only:border-t-0">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <p className="max-w-2xl text-balance">
          {t.disclaimer}
        </p>

        <div className="flex items-center gap-4 pt-1">
          <img
            src="/logo-icon.svg"
            alt="WIDA Family Guide logo"
            className="w-10 h-10 rounded-xl shadow-sm opacity-80"
          />
          <p className="font-semibold text-slate-700 text-left leading-snug">
            Created by Federico Orozco&nbsp;|&nbsp;Lenguaje Labs
            <span className="block text-xs font-normal text-slate-500">Based on the WIDA ELD Standards Framework</span>
            <span className="block text-xs font-normal text-slate-400">&copy; 2026 Freddie Orozco. All rights reserved.</span>
          </p>
        </div>

        <Link
          href="/credits"
          className="text-xs underline underline-offset-2 text-slate-400 hover:text-slate-600 transition-colors no-print"
        >
          About &amp; Credits
        </Link>
      </div>
    </footer>
  );
}
