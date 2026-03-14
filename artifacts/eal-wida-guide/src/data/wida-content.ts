export type Skill = {
  listening: string;
  speaking: string;
  reading: string;
  writing: string;
};

export type WIDALevel = {
  id: 1 | 2 | 3 | 4 | 5 | 6;
  name: string;
  tagline: string;
  description: string;
  skills: Skill;
  supports: string[];
  homeTips: string[];
  encouragement: string;
  color: string;
  accent: string;
  border: string;
  badge: string;
};

export const WIDA_LEVELS: WIDALevel[] = [
  {
    id: 1,
    name: "Entering",
    tagline: "Just starting out — every new word is a win!",
    description: "Your child is at the very beginning of their English journey. Right now, they rely heavily on pictures, gestures, and their home language to make sense of the world around them. This is completely normal, and it is a critical foundation-building stage.",
    skills: {
      listening: "Understands a few key words and phrases, especially when paired with pictures, gestures, or demonstrations. May not yet follow spoken English without visual support.",
      speaking: "Uses single words or very short phrases. May point, gesture, or use their home language to communicate. Errors are expected and normal.",
      reading: "Recognizes letters and some common sight words. May be able to match pictures to simple printed words.",
      writing: "Copies words or short phrases. May draw pictures to communicate meaning. Writing in English is at the word level."
    },
    supports: [
      "Visual supports — pictures, diagrams, and gestures alongside all instructions",
      "Bilingual glossaries or dictionaries in their home language",
      "Extra time to process and respond in English",
      "Seating near supportive peers or the teacher",
      "Permission to use their home language alongside English"
    ],
    homeTips: [
      "Talk with your child every day in your home language — this builds the thinking skills they need for English too",
      "Read books together, even in your home language — it builds vocabulary concepts that transfer",
      "Point to and name objects around the house in both languages",
      "Watch English children's shows or videos together and talk about what you see",
      "Celebrate every English word they learn — progress at this stage can feel slow but is very real"
    ],
    encouragement: "Every word your child learns in English is built on the strong foundation of their home language. You are their greatest support.",
    color: "bg-sky-100",
    accent: "text-sky-700",
    border: "border-sky-300",
    badge: "bg-sky-600"
  },
  {
    id: 2,
    name: "Beginning",
    tagline: "Building confidence, one sentence at a time.",
    description: "Your child is beginning to use short English phrases and simple sentences. They understand more than they can say, and they are starting to make connections between English words and meaning. They still need a lot of visual and language support, but growth is happening.",
    skills: {
      listening: "Understands short, simple phrases and common classroom instructions, especially with visual support. Beginning to pick up context clues.",
      speaking: "Uses short phrases and simple sentences. May mix home language and English (this is normal and healthy). Errors are part of the process.",
      reading: "Reads simple sentences with familiar vocabulary. Understands more when text includes pictures or diagrams.",
      writing: "Writes simple sentences with support. Spelling and grammar errors are expected. Can communicate basic ideas in writing."
    },
    supports: [
      "Continued visual supports alongside written and spoken language",
      "Pre-teaching vocabulary before new units",
      "Sentence frames and starters to scaffold speaking and writing",
      "Paired learning with supportive English-proficient peers",
      "Home language support when tackling complex content"
    ],
    homeTips: [
      "Keep speaking your home language — it is not confusing, it is helping",
      "Ask your child to tell you about their school day, in any language",
      "Help them practice English by naming what you do together (cooking, shopping, etc.)",
      "Look up words together in a bilingual dictionary or phone app",
      "Share books, songs, or videos in English that connect to things they already love"
    ],
    encouragement: "Your child's English is growing every day, even when it doesn't always feel that way. Trust the process.",
    color: "bg-emerald-100",
    accent: "text-emerald-700",
    border: "border-emerald-300",
    badge: "bg-emerald-600"
  },
  {
    id: 3,
    name: "Developing",
    tagline: "Joining the conversation — in and out of the classroom.",
    description: "Your child can now hold simple conversations in English on familiar topics. They are starting to participate more in class and can understand most everyday classroom talk. Academic language — the kind used in textbooks and tests — is still developing and needs support.",
    skills: {
      listening: "Understands general classroom conversations and everyday topics. May still struggle with abstract concepts or fast speech.",
      speaking: "Can engage in conversations on familiar topics. Uses more complex sentences, though with noticeable errors. Growing vocabulary.",
      reading: "Reads and understands simple texts on familiar topics. May need support with longer passages or texts with technical vocabulary.",
      writing: "Writes short paragraphs with a beginning, middle, and end. Errors are present but ideas are communicated clearly."
    },
    supports: [
      "Graphic organizers for reading and writing tasks",
      "Pre-reading vocabulary preparation before new topics",
      "Extended time on tests and written assignments",
      "Collaborative group work with structured roles",
      "Simplified versions of grade-level texts when needed"
    ],
    homeTips: [
      "Ask open-ended questions about school — 'What was interesting today?' rather than yes/no questions",
      "Read together in English or your home language — both build comprehension",
      "Play word games together (simple card games, matching games, word searches)",
      "Encourage your child to explain things to you in English — teaching builds fluency",
      "Praise effort and risk-taking, not just correctness"
    ],
    encouragement: "Your child is becoming a real communicator. Their confidence is growing, and so is their English.",
    color: "bg-amber-100",
    accent: "text-amber-700",
    border: "border-amber-300",
    badge: "bg-amber-500"
  },
  {
    id: 4,
    name: "Expanding",
    tagline: "English is becoming a tool, not just a challenge.",
    description: "Your child can use English fairly fluently across many situations. They understand most of what happens in the classroom and can express their ideas clearly. The area where they may still need support is complex, abstract academic language — the kind used in essays, textbooks, and standardized tests.",
    skills: {
      listening: "Understands most classroom instruction and discussion. May need support with highly technical or abstract language.",
      speaking: "Communicates clearly on a wide range of topics. Uses more complex sentence structures. Occasional errors, particularly with grammar nuances.",
      reading: "Reads and understands most grade-level texts. May need support with dense academic texts or unfamiliar topics.",
      writing: "Writes organized multi-paragraph pieces. Ideas are clear and coherent. Grammar and style are continuing to develop."
    },
    supports: [
      "Support with content-area academic vocabulary",
      "Feedback on writing that focuses on ideas before grammar",
      "Discussion groups where academic language is modeled",
      "Access to graphic organizers for complex reading tasks",
      "Opportunities to show knowledge in multiple ways (not only writing)"
    ],
    homeTips: [
      "Discuss news, community events, or current topics with your child in any language",
      "Encourage reading for pleasure — any language counts and builds thinking skills",
      "Ask your child to explain what they are learning at school — it reinforces understanding",
      "Watch documentaries or educational programs together and discuss them",
      "Celebrate their independence — they are doing more on their own every day"
    ],
    encouragement: "Your child's English is becoming a real strength. They are doing remarkable things.",
    color: "bg-orange-100",
    accent: "text-orange-700",
    border: "border-orange-300",
    badge: "bg-orange-500"
  },
  {
    id: 5,
    name: "Bridging",
    tagline: "Almost there — English is becoming natural.",
    description: "Your child can communicate effectively in English across nearly all situations. They are close to the level of their English-speaking classmates. The remaining gap is mostly in highly sophisticated academic language — the precise, formal language of advanced essays, research, and specialized content areas.",
    skills: {
      listening: "Understands complex spoken language including abstract ideas, humor, and nuance. Rarely needs additional support.",
      speaking: "Communicates fluently with minimal errors. Can present, debate, and discuss complex topics confidently.",
      reading: "Reads and critically analyzes grade-level texts. Can handle most academic content independently.",
      writing: "Produces well-structured, detailed writing. Vocabulary and style are strong. Minor errors remain in complex structures."
    },
    supports: [
      "Continued access to academic vocabulary support in new subject areas",
      "Opportunities for extended writing and critical thinking",
      "Feedback on sophisticated grammar and style in writing",
      "Advanced discussion opportunities to build academic oral language",
      "Support transitioning off formal ELL services (monitoring, not abandonment)"
    ],
    homeTips: [
      "Your child may need less direct language help now, but your engagement still matters enormously",
      "Talk about big ideas — goals, values, the future — in any language",
      "Encourage writing for fun: journals, stories, letters, texts",
      "Connect them to books, podcasts, or films in English on topics they love",
      "Trust your child's growing independence while staying curious and connected"
    ],
    encouragement: "Your child's English is a genuine strength. You have supported something extraordinary.",
    color: "bg-teal-100",
    accent: "text-teal-700",
    border: "border-teal-300",
    badge: "bg-teal-600"
  },
  {
    id: 6,
    name: "Reaching",
    tagline: "A milestone — and a lifelong skill.",
    description: "Your child has reached a level of English proficiency comparable to their English-speaking peers. At this stage, schools typically exit students from formal ELL services. However, learning never stops — your child continues to grow as a communicator, thinker, and bilingual person.",
    skills: {
      listening: "Fully understands all academic and social English, including complex, abstract, and specialized language.",
      speaking: "Communicates with fluency, accuracy, and sophistication across all settings.",
      reading: "Reads and comprehends advanced texts, including those requiring inference, analysis, and critique.",
      writing: "Writes with clarity, depth, and stylistic awareness. Can adapt writing for different audiences and purposes."
    },
    supports: [
      "Continued affirmation of bilingualism as an academic and personal asset",
      "Access to advanced coursework (do not place ceilings on achievement)",
      "Home language literacy support if desired (it strengthens English too)",
      "Monitoring in the year or two following exit from ELL services"
    ],
    homeTips: [
      "Celebrate this milestone — it is a genuine achievement",
      "Maintain and grow their home language — bilingualism is a lifelong gift",
      "Keep talking, reading, and engaging together — connection is your most powerful tool",
      "Encourage advanced learning opportunities — your child has no ceiling",
      "Remind them that knowing two (or more) languages is something to be proud of"
    ],
    encouragement: "Your child has achieved something remarkable. And their home language — the language of your family — remains a treasure.",
    color: "bg-indigo-100",
    accent: "text-indigo-700",
    border: "border-indigo-300",
    badge: "bg-indigo-600"
  }
];

type Translations = {
  [lang: string]: {
    appTitle: string;
    appSubtitle: string;
    selectLevel: string;
    levelLabel: string;
    listeningLabel: string;
    speakingLabel: string;
    readingLabel: string;
    writingLabel: string;
    supportsTitle: string;
    homeTipsTitle: string;
    progressTitle: string;
    progressBody: string;
    teacherNoteTitle: string;
    teacherNotePlaceholder: string;
    printButton: string;
    disclaimer: string;
    encouragementLabel: string;
  }
};

export const TRANSLATIONS: Translations = {
  en: {
    appTitle: "WIDA Family Guide",
    appSubtitle: "Understand your child's English proficiency level and how you can support their learning journey.",
    selectLevel: "Select your child's level:",
    levelLabel: "Level",
    listeningLabel: "Listening",
    speakingLabel: "Speaking",
    readingLabel: "Reading",
    writingLabel: "Writing",
    supportsTitle: "What helps at school",
    homeTipsTitle: "How you can help at home",
    progressTitle: "What to know about progress over time",
    progressBody: "Every child develops English at their own pace. Research suggests conversational English may develop in 3–5 years, while academic English — the kind used in textbooks and tests — often takes 4–7 years or more. WIDA levels describe where your child is right now, not a fixed timeline.",
    teacherNoteTitle: "A note from your child's teacher",
    teacherNotePlaceholder: "Teachers: Add a personal note for this family before printing.",
    printButton: "Print Summary",
    disclaimer: "This tool provides general guidance and does not replace school-based assessment or teacher judgment.",
    encouragementLabel: "A note of encouragement"
  },
  es: {
    appTitle: "Guía Familiar de WIDA",
    appSubtitle: "Comprenda el nivel de dominio del inglés de su hijo y cómo puede apoyar su aprendizaje.",
    selectLevel: "Seleccione el nivel de su hijo:",
    levelLabel: "Nivel",
    listeningLabel: "Escuchar",
    speakingLabel: "Hablar",
    readingLabel: "Leer",
    writingLabel: "Escribir",
    supportsTitle: "Qué ayuda en la escuela",
    homeTipsTitle: "Cómo puede ayudar en casa",
    progressTitle: "Lo que debe saber sobre el progreso",
    progressBody: "Cada niño desarrolla el inglés a su propio ritmo. Las investigaciones sugieren que el inglés conversacional puede desarrollarse en 3 a 5 años, mientras que el inglés académico, el que se usa en libros de texto y exámenes, a menudo toma de 4 a 7 años o más. Los niveles de WIDA describen dónde está su hijo ahora mismo, no un plazo fijo.",
    teacherNoteTitle: "Una nota del maestro de su hijo",
    teacherNotePlaceholder: "Maestros: Agreguen una nota personal para esta familia antes de imprimir.",
    printButton: "Imprimir resumen",
    disclaimer: "Esta herramienta proporciona orientación general y no reemplaza la evaluación escolar ni el juicio del maestro.",
    encouragementLabel: "Una nota de ánimo"
  },
  zh: {
    appTitle: "WIDA 家庭指南",
    appSubtitle: "了解您孩子的英语熟练水平以及如何支持他们的学习之旅。",
    selectLevel: "选择您孩子的水平：",
    levelLabel: "水平",
    listeningLabel: "听力",
    speakingLabel: "口语",
    readingLabel: "阅读",
    writingLabel: "写作",
    supportsTitle: "在学校的帮助",
    homeTipsTitle: "您在家的帮助",
    progressTitle: "关于随着时间进步的须知",
    progressBody: "每个孩子学习英语的速度都不同。研究表明，日常会话英语可能需要 3-5 年才能掌握，而学术英语（用于教科书和考试中的英语）通常需要 4-7 年或更长时间。WIDA 水平描述的是您孩子目前所处的阶段，而不是固定的时间表。",
    teacherNoteTitle: "来自孩子老师的留言",
    teacherNotePlaceholder: "老师：请在打印前为该家庭添加个人留言。",
    printButton: "打印摘要",
    disclaimer: "此工具提供一般指导，不能替代学校的评估或老师的判断。",
    encouragementLabel: "鼓励的话"
  },
  ko: {
    appTitle: "WIDA 가족 가이드",
    appSubtitle: "자녀의 영어 능숙도 수준을 이해하고 학습 여정을 지원하는 방법을 알아보세요.",
    selectLevel: "자녀의 레벨을 선택하세요:",
    levelLabel: "레벨",
    listeningLabel: "듣기",
    speakingLabel: "말하기",
    readingLabel: "읽기",
    writingLabel: "쓰기",
    supportsTitle: "학교에서 도움이 되는 것",
    homeTipsTitle: "가정에서 도울 수 있는 방법",
    progressTitle: "시간 경과에 따른 발전에 대해 알아야 할 사항",
    progressBody: "모든 어린이는 각자의 속도에 맞춰 영어를 발달시킵니다. 연구에 따르면 일상 회화 영어는 3~5년 안에 발달할 수 있지만, 교과서와 시험에 사용되는 학문적 영어는 종종 4~7년 이상 걸릴 수 있습니다. WIDA 레벨은 자녀의 현재 상태를 설명하는 것이지 정해진 일정을 나타내는 것이 아닙니다.",
    teacherNoteTitle: "선생님의 메시지",
    teacherNotePlaceholder: "교사: 인쇄하기 전에 가족을 위한 개인 메시지를 추가하세요.",
    printButton: "요약 인쇄",
    disclaimer: "이 도구는 일반적인 지침을 제공하며 학교 평가나 교사의 판단을 대체하지 않습니다.",
    encouragementLabel: "격려의 말"
  }
};