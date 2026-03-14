import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LevelSelector } from "@/components/sections/LevelSelector";
import { LevelDetail } from "@/components/sections/LevelDetail";
import { ProgressSection } from "@/components/sections/ProgressSection";
import { TeacherNote } from "@/components/sections/TeacherNote";
import { getLevels, TRANSLATIONS } from "@/data/wida-content";
import { motion } from "framer-motion";

export default function Home() {
  const [lang, setLang] = useState("en");
  const [selectedLevelId, setSelectedLevelId] = useState<1|2|3|4|5|6>(1);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const levels = getLevels(lang);
  const selectedLevel = levels.find(l => l.id === selectedLevelId)!;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar lang={lang} setLang={setLang} onPrint={handlePrint} t={t} />
      
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 flex flex-col gap-14">
        {/* Hero Section */}
        <section className="text-center space-y-6 no-print">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mx-auto"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-semibold text-slate-600 uppercase tracking-widest">EAL Guide</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 text-balance"
          >
            {t.appTitle}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed text-balance"
          >
            {t.appSubtitle}
          </motion.p>
        </section>

        {/* Level Selector */}
        <section className="no-print w-full max-w-4xl mx-auto">
          <h2 className="text-lg font-bold mb-6 text-center text-slate-700 uppercase tracking-wider">{t.selectLevel}</h2>
          <LevelSelector 
            levels={levels} 
            selectedId={selectedLevelId} 
            onSelect={setSelectedLevelId} 
          />
        </section>

        {/* Level Detail */}
        <div className="w-full">
          <LevelDetail 
            level={selectedLevel} 
            t={t} 
          />
        </div>

        {/* Progress & Teacher Note */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <ProgressSection t={t} />
          <TeacherNote t={t} />
        </div>
      </main>

      <Footer t={t} />
    </div>
  );
}