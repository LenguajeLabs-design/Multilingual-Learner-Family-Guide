import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LevelSelector } from "@/components/sections/LevelSelector";
import { LevelDetail } from "@/components/sections/LevelDetail";
import { ProgressSection } from "@/components/sections/ProgressSection";

import { getLevels, TRANSLATIONS } from "@/data/wida-content";
import { StartHereAccordion } from "@/components/sections/StartHereAccordion";
import { motion } from "framer-motion";
import { MousePointerClick } from "lucide-react";

export default function Home() {
  const [lang, setLang] = useState("en");
  const [selectedLevelId, setSelectedLevelId] = useState<1|2|3|4|5|6|null>(null);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const levels = getLevels(lang);
  const selectedLevel = selectedLevelId
    ? levels.find((level) => level.id === selectedLevelId)
    : undefined;

  useEffect(() => {
    const documentLanguages: Record<string, string> = {
      en: "en",
      es: "es",
      fr: "fr",
      zh: "zh-Hans",
      ja: "ja",
      ko: "ko",
    };

    document.documentElement.lang = documentLanguages[lang] ?? "en";
    document.title = t.appTitle;
  }, [lang, t.appTitle]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <a href="#main-content" className="skip-link no-print">
        Skip to main content
      </a>
      <Navbar lang={lang} setLang={setLang} onPrint={handlePrint} showPrint={selectedLevel !== undefined} t={t} />
      
      <main id="main-content" tabIndex={-1} className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 flex flex-col gap-10 md:gap-14">
        {/* Hero Section */}
        <section className="text-center space-y-4 no-print">
          <motion.h1 
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl text-balance max-w-4xl mx-auto"
          >
            {t.appTitle}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance"
          >
            {t.appSubtitle}
          </motion.p>
        </section>

        {/* Level Selector */}
        <section className="no-print w-full max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 id="level-selector-label" className="text-lg sm:text-xl">{t.selectLevel}</h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground text-balance">{t.selectLevelHelp}</p>
          </div>
          <LevelSelector 
            levels={levels} 
            selectedId={selectedLevelId} 
            onSelect={setSelectedLevelId} 
            labelId="level-selector-label"
          />
        </section>

        {selectedLevel ? (
          <>
            <p className="sr-only" aria-live="polite">
              {t.levelLabel} {selectedLevel.id}: {selectedLevel.name}
            </p>
            <section className="w-full">
              <LevelDetail
                level={selectedLevel}
                t={t}
              />
            </section>

            <div className="w-full">
              <ProgressSection t={t} />
            </div>
          </>
        ) : (
          <div className="no-print max-w-2xl w-full mx-auto rounded-[var(--radius-card)] border border-dashed border-border bg-card/70 px-5 py-6 text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/[0.07] text-primary">
              <MousePointerClick className="h-5 w-5" aria-hidden="true" />
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">{t.selectLevelEmpty}</p>
          </div>
        )}

        {/* Secondary help */}
        <section className="no-print w-full max-w-2xl mx-auto">
          <StartHereAccordion t={t} />
        </section>
      </main>

      <Footer t={t} />
    </div>
  );
}
