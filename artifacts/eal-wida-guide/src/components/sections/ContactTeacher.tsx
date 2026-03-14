import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function ContactTeacher() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 mt-12 overflow-hidden" id="contact">
      <div className="absolute inset-0 -z-10">
        <img 
          src={`${import.meta.env.BASE_URL}images/contact-bg.png`} 
          alt="Soothing watercolor background" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-2xl mx-auto glass-card rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-slate-600 text-lg">
            Send a message directly to your school's EAL support team.
          </p>
        </div>

        {isSuccess ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6 text-emerald-500">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
            <p className="text-slate-600">The EAL teacher will get back to you soon.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">Your Name</label>
                <input 
                  id="name"
                  type="text" 
                  required
                  placeholder="Parent/Guardian Name"
                  className="w-full px-5 py-4 rounded-2xl bg-white/80 border-2 border-white focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400 text-slate-800 shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="childName" className="text-sm font-bold text-slate-700 ml-1">Child's Name</label>
                <input 
                  id="childName"
                  type="text" 
                  required
                  placeholder="Student's Name"
                  className="w-full px-5 py-4 rounded-2xl bg-white/80 border-2 border-white focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400 text-slate-800 shadow-sm"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">Message</label>
              <textarea 
                id="message"
                required
                rows={4}
                placeholder="What would you like to ask about your child's English progress?"
                className="w-full px-5 py-4 rounded-2xl bg-white/80 border-2 border-white focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400 text-slate-800 shadow-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-teal-500 text-white font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
