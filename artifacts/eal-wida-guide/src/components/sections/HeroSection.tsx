import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden" id="overview">
      {/* Abstract Background Image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
          alt="Warm abstract colorful shapes" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
        >
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="text-sm font-bold text-slate-600">A Roadmap for Families</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-slate-900 leading-tight mb-6 text-balance"
        >
          Understanding Your Child's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">English Journey</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed text-balance"
        >
          Your child is learning English as an additional language (EAL). Schools use the WIDA framework to track your child's progress through 6 exciting levels of English development. Let's explore what they mean!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#levels" 
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Explore the 6 Levels
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="#faq" 
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-700 font-bold text-lg border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Read FAQs
          </a>
        </motion.div>
      </div>
    </section>
  );
}
