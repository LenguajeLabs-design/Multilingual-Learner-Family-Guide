import { useId, useState } from "react";
import { ChevronDown, HelpCircle, Users, Scale, BookOpenCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SECTION_ICONS = [HelpCircle, Users, Scale, BookOpenCheck];

export function StartHereAccordion({ t }: { t: any }) {
  const [open, setOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const accordionId = useId();
  const triggerId = `${accordionId}-trigger`;
  const panelId = `${accordionId}-panel`;

  return (
    <div className="w-full">
      <button
        type="button"
        id={triggerId}
        onClick={() => setOpen((v) => !v)}
        className="min-h-11 w-full flex items-center justify-between gap-3 px-5 py-4 rounded-[var(--radius-card)] bg-card border border-border [box-shadow:var(--shadow-control)] text-left transition-colors hover:bg-surface-muted"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="font-semibold text-sm sm:text-base text-foreground">
          {t.startHereTitle}
        </span>
        <ChevronDown
          className="flex-shrink-0 w-5 h-5 text-muted-foreground transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
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
                  const sectionTriggerId = `${accordionId}-section-${i}-trigger`;
                  const sectionPanelId = `${accordionId}-section-${i}-panel`;
                  return (
                  <div key={i} className="bg-card border border-border rounded-[var(--radius-card)] overflow-hidden">
                    <button
                      type="button"
                      id={sectionTriggerId}
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="min-h-11 w-full flex items-center justify-between gap-3 px-5 py-3.5 text-left transition-colors hover:bg-surface-muted"
                      aria-expanded={openIndex === i}
                      aria-controls={sectionPanelId}
                    >
                      <span className="flex items-center gap-3">
                        <SectionIcon
                          className="flex-shrink-0 w-4 h-4 text-accent"
                          strokeWidth={1.75}
                        />
                        <span className="font-semibold text-sm text-foreground">
                          {section.title}
                        </span>
                      </span>
                      <ChevronDown
                        className="flex-shrink-0 w-4 h-4 text-muted-foreground transition-transform duration-200"
                        style={{
                          transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {openIndex === i && (
                        <motion.div
                          key="inner"
                          id={sectionPanelId}
                          role="region"
                          aria-labelledby={sectionTriggerId}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.22, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-4">
                            <div
                              className="border-l-2 border-accent/60 pl-4 py-1"
                            >
                              <p className="text-muted-foreground text-sm leading-relaxed">
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
