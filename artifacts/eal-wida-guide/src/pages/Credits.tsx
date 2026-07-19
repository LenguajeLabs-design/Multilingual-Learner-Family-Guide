import { Link } from "wouter";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function Credits() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-sm" style={{ background: "#142550" }}>
            <BookOpen className="w-5 h-5" />
          </div>
          <p className="font-semibold text-base hidden sm:block normal-case tracking-wide" style={{ color: "#142550" }}>
            Multilingual Learner Family Guide
          </p>
        </div>
        <Link
          href="/"
          className="min-h-11 flex items-center gap-2 text-sm font-semibold py-2 px-4 rounded-lg transition-colors shadow-sm text-white"
          style={{ background: "#142550" }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Guide</span>
        </Link>
      </header>

      <main id="main-content" tabIndex={-1} className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-10">
        <div className="text-center space-y-4">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-md mx-auto"
            style={{ background: "#142550" }}
          >
            <BookOpen className="w-8 h-8" />
          </div>
          <h1
            className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest"
            style={{ color: "#142550" }}
          >
            About &amp; Credits
          </h1>
          <p className="text-slate-500 text-sm uppercase tracking-widest font-semibold">
            Multilingual Learner Family Guide
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-10 space-y-6">
          <div className="border-l-4 pl-6 py-1" style={{ borderColor: "#C82C39" }}>
            <p className="text-lg sm:text-xl leading-relaxed text-slate-700">
              This tool was designed and created by{" "}
              <span className="font-bold" style={{ color: "#142550" }}>Federico Orozco</span>{" "}
              to support multilingual learners, families, and educators.
            </p>
          </div>

          <p className="text-slate-600 leading-relaxed">
            Please credit the creator when sharing, presenting, adapting, or distributing this tool.
          </p>

          <div className="rounded-2xl p-6 border border-slate-100" style={{ background: "#F4F6FB" }}>
            <h2
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#142550" }}
            >
              Creator
            </h2>
            <p className="font-bold text-lg" style={{ color: "#142550" }}>Federico Orozco</p>
            <p className="text-slate-500 text-sm mt-1">&copy; 2026 Federico Orozco. All rights reserved.</p>
          </div>

          <div className="rounded-2xl p-6 border border-slate-100 bg-slate-50">
            <h2
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#142550" }}
            >
              Usage &amp; Permissions
            </h2>
            <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 font-bold" style={{ color: "#C82C39" }}>•</span>
                <span>Educational use of this live app is welcome, provided proper credit is given to Federico Orozco.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 font-bold" style={{ color: "#C82C39" }}>•</span>
                <span>Copying, modifying, redistributing, selling, or rebranding this project requires written permission from the creator.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 font-bold" style={{ color: "#C82C39" }}>•</span>
                <span>This tool provides general guidance and does not replace school-based assessment or teacher judgment.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="bg-slate-100 py-6 px-4 border-t border-slate-200 text-center text-sm text-slate-500">
        <p className="font-semibold text-slate-700">
          Created by Federico Orozco &nbsp;|&nbsp; &copy; 2026 Federico Orozco. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
