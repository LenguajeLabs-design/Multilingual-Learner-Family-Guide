import * as Accordion from "@radix-ui/react-accordion";
import { FAQS } from "@/data/wida-content";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function FaqSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 rounded-[3rem] mx-4 sm:mx-8 my-12" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 text-primary mb-6">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 mb-6">
            Common Questions
          </h2>
          <p className="text-lg text-slate-600">
            It's normal to have questions about your child's language learning. We're here to help!
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {FAQS.map((faq, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i}
            >
              <Accordion.Item 
                value={`item-${i}`}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left group hover:bg-slate-50 transition-colors">
                    <span className="font-display font-bold text-xl text-slate-800 pr-8">
                      {faq.question}
                    </span>
                    <ChevronDown className="w-6 h-6 text-slate-400 transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down">
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed text-lg">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
