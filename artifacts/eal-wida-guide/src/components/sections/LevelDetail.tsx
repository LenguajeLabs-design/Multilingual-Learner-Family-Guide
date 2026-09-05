import { WIDALevel } from "@/data/wida-content";
import { cn } from "@/lib/utils";
import { SkillsGrid } from "./SkillsGrid";
import { CheckCircle2, HeartHandshake, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LOCALIZED_SUPPORT_EXAMPLES } from "@/data/support-examples";

const LEVEL_EXAMPLES: Record<number, { school: string[]; home: string[] }> = {
  1: {
  school: [
    "During a math lesson, show the steps with picture cards, point as you speak, and demonstrate the first problem before asking the student to begin.",
    "Before a unit on plants, provide a small picture-and-word list for root, stem, leaf, and water. Let the student use it while listening, speaking, reading, or drawing.",
    "Ask one short question, pause, and offer a choice or a picture. For “What does a plant need?” the student can point, draw, use a home-language word, or say “water.”",
    "Choose a patient peer who can model routines without doing the work for the student. Give the pair one clear task: “Find the picture that matches this word.”",
    "Let the student first discuss an idea, label a diagram, or plan with a bilingual glossary in their home language; then help them share one key English word or phrase.",
  ],
  home: [
    "At dinner or on a walk, invite your child to tell you about their day in the language that feels easiest. Rich conversation in the home language supports English learning too.",
    "Choose a favorite book in any language. Pause at the pictures and ask your child to point, predict, or retell what happened—there is no need to translate every word.",
    "Pick three familiar objects, such as door, cup, and shoes. Point to each one and say its name in your home language and in English; repeat them naturally over several days.",
    "Watch a short, age-appropriate English clip together. Pause once or twice to point and talk about what you see; your child can answer in either language.",
    "Notice the effort specifically: “You used the word water,” or “You showed me your idea.” Confidence grows when communication—not perfect English—is celebrated.",
  ],
  },
  2: {
    school: [
      "Before a new unit, show the key pictures and say each word. Ask the student to point, repeat, or match the word before the lesson begins.",
      "Keep a small visual word bank on the desk. During a social-studies lesson, the student can point to map, country, and ocean while hearing the words in context.",
      "Display a frame such as “I see ___” or “I think ___.” Model one answer, let the student rehearse with a partner, then invite a short response.",
      "Give partners roles: one reads the picture or prompt, one points or finds the answer, and both practice the sentence frame together.",
      "Let the student preview a difficult idea in the home language, then connect it to a few essential English words before expecting an English response.",
    ],
    home: [
      "Ask about the school day in any language. If your child shares one new English word, use it naturally together once or twice.",
      "While cooking or shopping, name an action in both languages: cut, mix, pay, choose. Let your child repeat only if they want to.",
      "Use a bilingual dictionary together for one useful school word, then make a simple drawing or sentence with it.",
      "Choose songs, books, or videos connected to an interest your child already has; familiar topics make new English feel safer.",
      "Celebrate a complete thought, even if it mixes languages. The goal is communication and confidence, not perfect grammar.",
    ],
  },
  3: {
    school: [
      "Before reading, give a cause-and-effect organizer and model one completed box with the class.",
      "Teach a small set of unit words with student-friendly definitions, pictures, and an example sentence before students meet them in a longer text.",
      "For an assessment, separate directions into steps and offer time to reread the question or discuss the task with a partner before writing.",
      "Assign useful group roles such as reader, recorder, illustrator, and reporter so participation has a clear language purpose.",
      "Offer the grade-level text with key sections highlighted, short glossary notes, or an audio version—not a less interesting task.",
    ],
    home: [
      "Ask “What was interesting today?” or “What surprised you?” and let your child answer in either language before trying a key idea in English.",
      "Read a short article, comic, or book together and pause to ask what happened and why.",
      "Play a word or category game—name foods, animals, or objects that begin with a chosen sound or fit a topic.",
      "Invite your child to teach you a new idea from school. Ask follow-up questions rather than correcting every English mistake.",
      "Praise risks such as joining a discussion, trying a longer sentence, or asking for clarification.",
    ],
  },
  4: {
    school: [
      "Before a new chapter, identify the academic words students need to explain the topic, then revisit them in discussion and writing.",
      "Respond first to the strength of the student’s idea. Choose one language feature to teach next rather than marking every grammar error.",
      "Give students a discussion prompt, a few academic phrases, and a brief rehearsal with a partner before whole-group sharing.",
      "Offer a timeline, claim-evidence organizer, or annotated text when a reading task has many ideas to hold at once.",
      "Let students demonstrate learning through a presentation, diagram with explanation, or recorded response when that better shows the content knowledge.",
    ],
    home: [
      "Discuss a community event, news story, or family decision in the language that allows the richest conversation.",
      "Make time for reading that your child enjoys—novels, comics, magazines, or articles all build knowledge and language.",
      "Ask your child to explain a current class topic to you, then ask one curious follow-up question.",
      "Watch a documentary or educational video and talk about one new idea, not every unfamiliar word.",
      "Notice growing independence while staying available for a conversation, a question, or encouragement.",
    ],
  },
  5: {
    school: [
      "Teach the precise phrases used in the subject, such as “The evidence suggests…” or “In contrast…,” then let students choose one in a discussion.",
      "Plan an extended writing task in stages: claim, evidence, draft, feedback, revision. Make the language goal for each stage visible.",
      "Give feedback on one sophisticated feature, such as transitions or sentence variety, after first affirming the strength of the reasoning.",
      "Use a seminar or debate with preparation time, evidence notes, and clear turn-taking expectations so every student can contribute thoughtfully.",
      "After formal EAL services end, check in on new academic demands and connect the student with support before a difficulty becomes a barrier.",
    ],
    home: [
      "Talk about goals, values, or current issues in any language and ask your child to explain their reasons.",
      "Encourage a journal, story, review, or message written for a real audience—writing for a purpose builds confidence.",
      "Help your child find English books, podcasts, or films about an interest they already care about.",
      "Ask what support would make a challenging class easier; independence includes knowing when to ask for help.",
      "Keep being curious about your child’s ideas, even when they no longer need everyday language practice.",
    ],
  },
  6: {
    school: [
      "Name bilingualism as an asset in classroom conversations, projects, and advanced learning opportunities.",
      "Review placement decisions with an eye toward access: strong English should open doors to advanced coursework, not create a ceiling.",
      "Offer opportunities to research, present, and create for authentic audiences using the full range of the student’s language strengths.",
      "Continue brief check-ins after EAL exit, especially during transitions to a new grade, subject, or school.",
    ],
    home: [
      "Celebrate this milestone and invite your child to reflect on the languages they use and value.",
      "Keep the home language alive through stories, reading, calls with relatives, media, and meaningful family conversations.",
      "Stay connected through shared interests and big questions; family conversation remains valuable at every language level.",
      "Encourage challenging courses, creative projects, and leadership opportunities that match your child’s interests.",
      "Remind your child that being multilingual is a lasting strength they bring to every future community.",
    ],
  },
};

export function LevelDetail({ level, t, lang }: { level: WIDALevel, t: any, lang: string }) {
  const localizedExamples = lang === "en"
    ? LEVEL_EXAMPLES[level.id]
    : LOCALIZED_SUPPORT_EXAMPLES[lang]?.[level.id];
  const schoolExamples = localizedExamples?.school ?? [];
  const homeExamples = localizedExamples?.home ?? [];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={level.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="rounded-[var(--radius-panel)] bg-card p-6 sm:p-8 md:p-10 lg:p-12 border border-border transition-all duration-300 [box-shadow:var(--shadow-soft)]"
      >
        <div className="mb-10 text-center sm:text-left">
          <div className="print-only mb-6 hidden">
            <h1 className="text-3xl border-b pb-4">
              {t.appTitle} — {t.levelLabel} {level.id}: {level.name}
            </h1>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
            <span className={cn("inline-flex self-center sm:self-auto px-3.5 py-1.5 rounded-full text-white text-sm font-semibold [box-shadow:var(--shadow-control)]", level.badge)}>
              {t.levelLabel} {level.id}
            </span>
            <span className={cn("font-semibold text-xl sm:text-2xl tracking-tight", level.accent)}>
              {level.name}
            </span>
          </div>
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl mb-5 leading-tight max-w-3xl text-balance">
            {level.tagline}
          </h3>
          
          <p className="text-foreground/75 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl text-balance">
            {level.description}
          </p>
        </div>

        <SkillsGrid skills={level.skills} t={t} accent={level.accent} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 print-break-inside-avoid">
          {/* Supports Section */}
          <div className="bg-surface-muted rounded-[var(--radius-card)] p-6 sm:p-8 border border-border/70">
            <div className="flex items-center gap-3 mb-6">
              <div className={cn("p-2 rounded-[var(--radius-control)]", level.color)}>
                <CheckCircle2 className={cn("w-5 h-5", level.accent)} aria-hidden="true" />
              </div>
              <h4 className="text-base sm:text-lg">{t.supportsTitle}</h4>
            </div>
            <Accordion type="multiple" className="border-t border-border/70 no-print">
              {level.supports.map((support, idx) => (
                <AccordionItem key={idx} value={`school-${idx}`} className="border-border/70">
                  <AccordionTrigger className="gap-3 py-4 text-base font-semibold no-print:cursor-pointer hover:no-underline">
                    <span className={cn("mt-0.5", level.accent)}>•</span>
                    <span className="leading-snug">{support}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-6 text-foreground/75 leading-relaxed">
                    {t.schoolExampleLabel}: {schoolExamples[idx] ?? t.schoolExampleBody}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <ul className="print-only space-y-4">
              {level.supports.map((support, idx) => (
                <li key={idx} className="text-foreground/75">
                  <strong className="block text-foreground">{support}</strong>
                  <span>{t.schoolExampleLabel}: {schoolExamples[idx] ?? t.schoolExampleBody}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Home Tips Section */}
          <div className="bg-surface-muted rounded-[var(--radius-card)] p-6 sm:p-8 border border-border/70">
            <div className="flex items-center gap-3 mb-6">
              <div className={cn("p-2 rounded-[var(--radius-control)]", level.color)}>
                <HeartHandshake className={cn("w-5 h-5", level.accent)} aria-hidden="true" />
              </div>
              <h4 className="text-base sm:text-lg">{t.homeTipsTitle}</h4>
            </div>
            <Accordion type="multiple" className="border-t border-border/70 no-print">
              {level.homeTips.map((tip, idx) => (
                <AccordionItem key={idx} value={`home-${idx}`} className="border-border/70">
                  <AccordionTrigger className="gap-3 py-4 text-base font-semibold no-print:cursor-pointer hover:no-underline">
                    <span className={cn("flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white", level.badge)}>{idx + 1}</span>
                    <span className="leading-snug">{tip}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-9 text-foreground/75 leading-relaxed">
                    {t.homeExampleLabel}: {homeExamples[idx] ?? t.homeExampleBody}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <ol className="print-only space-y-4 list-decimal pl-5">
              {level.homeTips.map((tip, idx) => (
                <li key={idx} className="text-foreground/75">
                  <strong className="block text-foreground">{tip}</strong>
                  <span>{t.homeExampleLabel}: {homeExamples[idx] ?? t.homeExampleBody}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Encouragement Callout */}
        <div className="mt-8 bg-primary/[0.045] rounded-[var(--radius-card)] p-6 sm:p-8 border border-primary/10 flex flex-col sm:flex-row gap-5 items-start sm:items-center print-break-inside-avoid">
          <div className={cn("p-3 rounded-[var(--radius-control)] flex-shrink-0", level.color)}>
            <Sparkles className={cn("w-7 h-7", level.accent)} aria-hidden="true" />
          </div>
          <div>
            <h4 className="text-sm text-muted-foreground mb-2">{t.encouragementLabel}</h4>
            <p className="text-foreground font-semibold text-lg sm:text-xl leading-snug">
              {level.encouragement}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
