import { Link } from "wouter";
import { BookOpen, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full glass-card border-b border-white/50 px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
    >
      <Link href="/" className="flex items-center gap-3 group">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-sky-400 flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
          <BookOpen className="w-5 h-5" />
        </div>
        <div>
          <h1 className="font-display font-bold text-lg leading-tight text-slate-800">
            EAL Family Guide
          </h1>
          <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-500" /> WIDA Roadmap
          </p>
        </div>
      </Link>
      
      <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-600">
        <a href="#overview" className="hover:text-primary transition-colors">Overview</a>
        <a href="#levels" className="hover:text-primary transition-colors">The 6 Levels</a>
        <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        <a 
          href="#contact" 
          className="px-5 py-2.5 rounded-full bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
        >
          Ask a Teacher
        </a>
      </nav>
    </motion.header>
  );
}
