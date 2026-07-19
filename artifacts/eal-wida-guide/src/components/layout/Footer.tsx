import { Link } from "wouter";

export function Footer({ t }: { t: any }) {
  const logoSrc = `${import.meta.env.BASE_URL}logo-icon.svg`;

  return (
    <footer className="bg-surface-muted py-10 px-4 mt-auto border-t border-border text-sm text-muted-foreground print-only:mt-8 print-only:bg-white print-only:border-t-0">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">

        <p className="max-w-2xl text-center text-balance">
          {t.disclaimer}
        </p>

        <div className="w-full border-t border-border" />

        {/* Creator block */}
        <div className="flex items-center gap-4">
          <img
            src={logoSrc}
            alt="Multilingual Learner Family Guide logo"
            className="w-10 h-10 rounded-[var(--radius-control)] [box-shadow:var(--shadow-control)] opacity-85 flex-shrink-0"
          />
          <div className="text-left leading-snug">
            <p className="font-semibold text-foreground/85">Created by Federico Orozco</p>
            <p className="text-xs text-muted-foreground">EAL Educator | AI &amp; Multilingual Learning Innovation</p>
            <a
              href="mailto:forozc1@gmail.com"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              forozc1@gmail.com
            </a>
          </div>
        </div>

        {/* WIDA reference block */}
        <div className="max-w-2xl text-center space-y-2">
          <p className="text-xs text-muted-foreground leading-relaxed">
            This educator-created tool references and adapts concepts from the WIDA English Language Development Standards Framework.
          </p>
          <p className="text-xs text-muted-foreground/85 leading-relaxed">
            WIDA English Language Development Standards Framework, &copy; 2020 Board of Regents of the University of Wisconsin System.{" "}
            <a
              href="https://wida.wisc.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              wida.wisc.edu
            </a>
          </p>
          <p className="text-xs text-muted-foreground/85 italic">
            {t.independentDisclaimer}
          </p>
        </div>

        <div className="flex items-center gap-4 no-print">
          <Link
            href="/credits"
            className="text-xs underline underline-offset-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            About &amp; Credits
          </Link>
          <span className="text-border">·</span>
          <Link
            href="/references"
            className="text-xs underline underline-offset-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            References
          </Link>
        </div>

      </div>
    </footer>
  );
}
