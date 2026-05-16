import { Link } from "wouter";

export function Footer({ t }: { t: any }) {
  return (
    <footer className="bg-slate-100 py-10 px-4 mt-auto border-t border-slate-200 text-sm text-slate-500 print-only:mt-8 print-only:bg-white print-only:border-t-0">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">

        <p className="max-w-2xl text-center text-balance">
          {t.disclaimer}
        </p>

        <div className="w-full border-t border-slate-200" />

        {/* Creator block */}
        <div className="flex items-center gap-4">
          <img
            src="/logo-icon.svg"
            alt="WIDA Family Guide logo"
            className="w-10 h-10 rounded-xl shadow-sm opacity-80 flex-shrink-0"
          />
          <div className="text-left leading-snug">
            <p className="font-semibold text-slate-700">Created by Freddie Orozco</p>
            <p className="text-xs text-slate-500">EAL Educator | AI &amp; Multilingual Learning Innovation</p>
            <a
              href="mailto:LenguajeLabs@proton.me"
              className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
            >
              LenguajeLabs@proton.me
            </a>
          </div>
        </div>

        {/* WIDA reference block */}
        <div className="max-w-2xl text-center space-y-2">
          <p className="text-xs text-slate-500 leading-relaxed">
            This educator-created tool references and adapts concepts from the WIDA English Language Development Standards Framework.
          </p>
          <p className="text-xs text-slate-400 leading-relaxed">
            WIDA English Language Development Standards Framework, &copy; 2020 Board of Regents of the University of Wisconsin System.{" "}
            <a
              href="https://wida.wisc.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-slate-600 transition-colors"
            >
              wida.wisc.edu
            </a>
          </p>
          <p className="text-xs text-slate-400 italic">
            This tool is not affiliated with, reviewed by, sponsored by, or endorsed by WIDA.
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
