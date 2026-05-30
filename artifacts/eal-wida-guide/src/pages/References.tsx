import { Link } from "wouter";
import { BookOpen, FileText } from "lucide-react";

const references = [
  {
    category: "WIDA Framework",
    items: [
      {
        citation:
          "WIDA Consortium. (2020). WIDA English Language Development Standards Framework, 2020 Edition. Board of Regents of the University of Wisconsin System.",
        url: "https://wida.wisc.edu/teach/standards/eld",
        urlLabel: "wida.wisc.edu",
        note: "Primary framework for the six English language proficiency levels (Entering through Reaching) described throughout this guide.",
      },
      {
        citation:
          "WIDA Consortium. (2020). WIDA Can Do Descriptors, Key Uses Edition, Grades K–12. Board of Regents of the University of Wisconsin System.",
        url: "https://wida.wisc.edu/teach/can-do/descriptors",
        urlLabel: "wida.wisc.edu",
        note: "Descriptors for listening, speaking, reading, and writing performance at each proficiency level — the basis for the skills summaries in this guide.",
      },
      {
        citation:
          "WIDA Consortium. (2020). WIDA ACCESS for ELLs Performance Definitions. Board of Regents of the University of Wisconsin System.",
        url: "https://wida.wisc.edu/assess/access",
        urlLabel: "wida.wisc.edu",
        note: "Defines how student performance on the ACCESS assessment corresponds to each WIDA proficiency level.",
      },
    ],
  },
  {
    category: "Language Acquisition Research",
    items: [
      {
        citation:
          "Cummins, J. (1979). Cognitive/academic language proficiency, linguistic interdependence, the optimum age question and some other matters. Working Papers on Bilingualism, 19, 121–129.",
        note: "Foundational research establishing the BICS/CALP distinction — the basis for the 3–5 year conversational / 4–7 year academic English timeline referenced in this guide.",
      },
      {
        citation:
          "Cummins, J. (2008). BICS and CALP: Empirical and theoretical status of the distinction. In B. Street & N. H. Hornberger (Eds.), Encyclopedia of Language and Education (2nd ed., Vol. 2, pp. 71–83). Springer.",
        note: "Updated synthesis of the distinction between Basic Interpersonal Communicative Skills (BICS) and Cognitive Academic Language Proficiency (CALP).",
      },
      {
        citation:
          "Thomas, W. P., & Collier, V. P. (2002). A national study of school effectiveness for language minority students' long-term academic achievement. Center for Research on Education, Diversity and Excellence (CREDE), University of California, Santa Cruz.",
        url: "https://crede.berkeley.edu",
        urlLabel: "crede.berkeley.edu",
        note: "Large-scale longitudinal study documenting the time required for English learners to reach academic parity with native English-speaking peers, and the long-term advantages of bilingual education.",
      },
    ],
  },
];

export default function References() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-sm"
            style={{ background: "#142550" }}
          >
            <BookOpen className="w-5 h-5" />
          </div>
          <h1
            className="font-semibold text-base hidden sm:block normal-case tracking-wide"
            style={{ color: "#142550" }}
          >
            Multilingual Learner Family Guide
          </h1>
        </div>
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold py-2 px-4 rounded-lg transition-colors shadow-sm text-white"
          style={{ background: "#142550" }}
        >
          <span>← Back to Guide</span>
        </Link>
      </header>

      <main className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-10">
        <div className="text-center space-y-4">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-md mx-auto"
            style={{ background: "#142550" }}
          >
            <FileText className="w-8 h-8" />
          </div>
          <h1
            className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest"
            style={{ color: "#142550" }}
          >
            References
          </h1>
          <p className="text-slate-500 text-sm uppercase tracking-widest font-semibold">
            Sources &amp; Research That Informed This Guide
          </p>
        </div>

        <div className="space-y-8">
          {references.map((section) => (
            <div
              key={section.category}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-10 space-y-6"
            >
              <div className="border-l-4 pl-5 py-1" style={{ borderColor: "#C82C39" }}>
                <h2
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#142550" }}
                >
                  {section.category}
                </h2>
              </div>

              <ol className="space-y-6 list-none">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span
                      className="mt-0.5 font-bold text-sm flex-shrink-0 w-5 text-right"
                      style={{ color: "#C82C39" }}
                    >
                      {i + 1}.
                    </span>
                    <div className="space-y-1.5">
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {item.citation}
                      </p>
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs underline underline-offset-2 transition-colors"
                          style={{ color: "#142550" }}
                        >
                          {item.urlLabel}
                        </a>
                      )}
                      <p className="text-xs text-slate-500 leading-relaxed italic">
                        {item.note}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <div className="rounded-2xl p-6 border border-slate-200 bg-slate-50 text-sm text-slate-600 leading-relaxed space-y-2">
          <p className="font-semibold text-xs uppercase tracking-widest" style={{ color: "#142550" }}>
            Disclaimer
          </p>
          <p>
            This guide was created by an educator to help families understand the WIDA proficiency levels their children are assessed on. It is not affiliated with, reviewed by, sponsored by, or endorsed by WIDA or the Board of Regents of the University of Wisconsin System.
          </p>
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
