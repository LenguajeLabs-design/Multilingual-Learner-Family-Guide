export type SkillInfo = {
  title: string;
  description: string;
  icon: 'listen' | 'speak' | 'read' | 'write';
};

export type WidaLevel = {
  id: number;
  name: string;
  colorClass: string;
  bgClass: string;
  shadowClass: string;
  meaning: string;
  abilities: string;
  duration: string;
  encouragement: string;
  skills: SkillInfo[];
};

export const WIDA_LEVELS: WidaLevel[] = [
  {
    id: 1,
    name: "Entering",
    colorClass: "text-sky-600",
    bgClass: "bg-sky-50",
    shadowClass: "shadow-sky-500/20",
    meaning: "Students are just beginning to learn English. They understand very little and communicate mainly through pictures, gestures, and simple words.",
    abilities: "Point to pictures, copy words, follow simple one-step directions with visuals, say a few words or phrases.",
    duration: "6 months to 1 year",
    encouragement: "This is the beginning of an exciting journey! Your child is building the foundation of English.",
    skills: [
      { title: "Listening", icon: "listen", description: "Understands key words with visual support." },
      { title: "Speaking", icon: "speak", description: "Uses single words or short phrases." },
      { title: "Reading", icon: "read", description: "Recognizes letters and simple words." },
      { title: "Writing", icon: "write", description: "Copies words, draws pictures to communicate." }
    ]
  },
  {
    id: 2,
    name: "Beginning",
    colorClass: "text-emerald-600",
    bgClass: "bg-emerald-50",
    shadowClass: "shadow-emerald-500/20",
    meaning: "Students are starting to use simple English phrases and sentences. They need a lot of support and visuals.",
    abilities: "Use simple sentences, understand more words in context, follow two-step directions.",
    duration: "6 months to 1 year",
    encouragement: "Your child is growing fast! They're starting to communicate in English.",
    skills: [
      { title: "Listening", icon: "listen", description: "Understands simple phrases with support." },
      { title: "Speaking", icon: "speak", description: "Uses simple sentences with errors." },
      { title: "Reading", icon: "read", description: "Reads simple sentences with familiar words." },
      { title: "Writing", icon: "write", description: "Writes simple sentences with support." }
    ]
  },
  {
    id: 3,
    name: "Developing",
    colorClass: "text-amber-500",
    bgClass: "bg-amber-50",
    shadowClass: "shadow-amber-500/20",
    meaning: "Students can hold simple conversations and understand general classroom content with some support.",
    abilities: "Participate in conversations on familiar topics, understand grade-level content with support, express ideas in simple English.",
    duration: "1–2 years",
    encouragement: "Your child is really developing! They're now able to express themselves and participate more in class.",
    skills: [
      { title: "Listening", icon: "listen", description: "Understands general classroom talk." },
      { title: "Speaking", icon: "speak", description: "Engages in conversations on familiar topics." },
      { title: "Reading", icon: "read", description: "Reads and understands simple texts." },
      { title: "Writing", icon: "write", description: "Writes short paragraphs with some errors." }
    ]
  },
  {
    id: 4,
    name: "Expanding",
    colorClass: "text-orange-500",
    bgClass: "bg-orange-50",
    shadowClass: "shadow-orange-500/20",
    meaning: "Students can use English more fluently and understand most classroom content, though they may still struggle with complex language.",
    abilities: "Discuss a variety of topics, understand most of what they hear, read grade-level texts with some support.",
    duration: "1–2 years",
    encouragement: "Your child's English is expanding rapidly. They're becoming more confident every day!",
    skills: [
      { title: "Listening", icon: "listen", description: "Understands most classroom content." },
      { title: "Speaking", icon: "speak", description: "Uses complex sentences with occasional errors." },
      { title: "Reading", icon: "read", description: "Reads and understands most grade-level texts." },
      { title: "Writing", icon: "write", description: "Writes multi-paragraph pieces with structure." }
    ]
  },
  {
    id: 5,
    name: "Bridging",
    colorClass: "text-teal-600",
    bgClass: "bg-teal-50",
    shadowClass: "shadow-teal-500/20",
    meaning: "Students can communicate effectively across almost all contexts and are close to the level of native English-speaking peers.",
    abilities: "Discuss complex topics, understand specialized vocabulary, produce well-organized writing.",
    duration: "1–2 years",
    encouragement: "Your child is nearly there! They are communicating at a high level in English.",
    skills: [
      { title: "Listening", icon: "listen", description: "Understands complex and abstract language." },
      { title: "Speaking", icon: "speak", description: "Communicates fluently with minimal errors." },
      { title: "Reading", icon: "read", description: "Reads and critically analyzes grade-level texts." },
      { title: "Writing", icon: "write", description: "Produces detailed, well-organized writing." }
    ]
  },
  {
    id: 6,
    name: "Reaching",
    colorClass: "text-indigo-600",
    bgClass: "bg-indigo-50",
    shadowClass: "shadow-indigo-500/20",
    meaning: "Students have reached a level of English proficiency comparable to their native English-speaking peers. They no longer need EAL support services.",
    abilities: "Participate fully in all academic settings, use English fluently and accurately, excel in all language domains.",
    duration: "Goal Reached!",
    encouragement: "Congratulations — your child has reached full English proficiency! This is a huge achievement.",
    skills: [
      { title: "Listening", icon: "listen", description: "Fully understands all academic and social content." },
      { title: "Speaking", icon: "speak", description: "Communicates like a native speaker." },
      { title: "Reading", icon: "read", description: "Reads and comprehends advanced texts." },
      { title: "Writing", icon: "write", description: "Writes with sophistication and clarity." }
    ]
  }
];

export const FAQS = [
  {
    question: "How long will my child be in EAL support?",
    answer: "Every child is unique! On average, it takes 5 to 7 years to reach full academic English proficiency (Level 6). However, the journey depends on their age, previous education, and exposure to English."
  },
  {
    question: "How is my child's level decided?",
    answer: "Schools use the WIDA ACCESS test, which is given annually. It measures your child's skills in listening, speaking, reading, and writing in English to determine their current level and what support they need."
  },
  {
    question: "What can I do at home to help?",
    answer: "The best thing you can do is continue reading, talking, and playing with your child in your home language! A strong foundation in their first language actually helps them learn English faster. You don't need to speak English at home unless you want to."
  },
  {
    question: "Will my child always be behind in school?",
    answer: "Not at all! Learning a new language is a superpower. While they might need extra time to understand assignments at first, EAL students often catch up and frequently outperform their peers academically once they become fluent."
  }
];
