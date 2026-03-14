import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { LevelCard } from "@/components/sections/LevelCard";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactTeacher } from "@/components/sections/ContactTeacher";
import { WIDA_LEVELS } from "@/data/wida-content";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto" id="levels">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 mb-6">
              The 6 Levels of English
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto text-balance">
              Scroll through the levels below to understand what your child is learning at each stage, and how you can celebrate their progress!
            </p>
          </div>

          <div className="space-y-12 relative">
            {/* Visual connecting line for timeline effect */}
            <div className="absolute left-8 sm:left-12 top-10 bottom-10 w-1 bg-gradient-to-b from-sky-200 via-amber-200 to-indigo-200 hidden lg:block -z-10 rounded-full" />
            
            {WIDA_LEVELS.map((level, index) => (
              <LevelCard key={level.id} level={level} index={index} />
            ))}
          </div>
        </section>

        <FaqSection />
        <ContactTeacher />
      </main>

      <Footer />
    </div>
  );
}
