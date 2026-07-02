import { useState } from "react";
import { ChevronDown, HelpCircle, Users, Scale, BookOpenCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SECTION_ICONS = [HelpCircle, Users, Scale, BookOpenCheck];

export function StartHereAccordion({ t }: { t: any }) {
  const [open, setOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-left transition-all hover:shadow-md"
        aria-expanded={open}
      >
        <span className="font-bold text-sm sm:text-base" style={{ color: "#142550" }}>
          {t.startHereTitle}
        </span>
        <ChevronDown
          className="flex-shrink-0 w-5 h-5 transition-transform duration-300"
          style={{ color: "#142550", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-3 space-y-2">
              {t.startHereSections.map(
                (section: { title: string; text: string }, i: number) => {
                  const SectionIcon = SECTION_ICONS[i % SECTION_ICONS.length];
                  return (
                  <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full flex items-center justify-between gap-3 px-5 py-3.5 text-left"
                      aria-expanded={openIndex === i}
                    >
                      <span className="flex items-center gap-3">
                        <SectionIcon
                          className="flex-shrink-0 w-4 h-4"
                          style={{ color: "#C82C39" }}
                          strokeWidth={1.75}
                        />
                        <span className="font-semibold text-sm" style={{ color: "#142550" }}>
                          {section.title}
                        </span>
                      </span>
                      <ChevronDown
                        className="flex-shrink-0 w-4 h-4 transition-transform duration-200"
                        style={{
                          color: "#C82C39",
                          transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {openIndex === i && (
                        <motion.div
                          key="inner"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.22, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-4">
                            <div
                              className="border-l-4 pl-4 py-1"
                              style={{ borderColor: "#C82C39" }}
                            >
                              <p className="text-slate-600 text-sm leading-relaxed">
                                {section.text}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  );
                }
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
