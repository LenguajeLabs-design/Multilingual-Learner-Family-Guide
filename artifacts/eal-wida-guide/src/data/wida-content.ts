export type Skill = {
  listening: string;
  speaking: string;
  reading: string;
  writing: string;
};

export type WIDALevelContent = {
  name: string;
  tagline: string;
  description: string;
  skills: Skill;
  supports: string[];
  homeTips: string[];
  encouragement: string;
};

export type WIDALevelStyle = {
  id: 1 | 2 | 3 | 4 | 5 | 6;
  color: string;
  accent: string;
  border: string;
  badge: string;
};

export type WIDALevel = WIDALevelStyle & WIDALevelContent;

const WIDA_STYLES: WIDALevelStyle[] = [
  { id: 1, color: "bg-sky-100",     accent: "text-sky-700",     border: "border-sky-300",     badge: "bg-sky-600"    },
  { id: 2, color: "bg-emerald-100", accent: "text-emerald-700", border: "border-emerald-300", badge: "bg-emerald-600"},
  { id: 3, color: "bg-amber-100",   accent: "text-amber-700",   border: "border-amber-300",   badge: "bg-amber-500"  },
  { id: 4, color: "bg-orange-100",  accent: "text-orange-700",  border: "border-orange-300",  badge: "bg-orange-500" },
  { id: 5, color: "bg-teal-100",    accent: "text-teal-700",    border: "border-teal-300",    badge: "bg-teal-600"   },
  { id: 6, color: "bg-indigo-100",  accent: "text-indigo-700",  border: "border-indigo-300",  badge: "bg-indigo-600" },
];

const LEVEL_CONTENT_BY_LANG: Record<string, WIDALevelContent[]> = {
  en: [
    {
      name: "Entering",
      tagline: "Just starting out — every new word is a win!",
      description: "Your child is at the very beginning of their English journey. Right now, they rely heavily on pictures, gestures, and their home language to make sense of the world around them. This is completely normal, and it is a critical foundation-building stage.",
      skills: {
        listening: "Understands a few key words and phrases, especially when paired with pictures, gestures, or demonstrations. May not yet follow spoken English without visual support.",
        speaking: "Uses single words or very short phrases. May point, gesture, or use their home language to communicate. Errors are expected and normal.",
        reading: "Recognizes letters and some common sight words. May be able to match pictures to simple printed words.",
        writing: "Copies words or short phrases. May draw pictures to communicate meaning. Writing in English is at the word level.",
      },
      supports: [
        "Visual supports — pictures, diagrams, and gestures alongside all instructions",
        "Bilingual glossaries or dictionaries in their home language",
        "Extra time to process and respond in English",
        "Seating near supportive peers or the teacher",
        "Permission to use their home language alongside English",
      ],
      homeTips: [
        "Talk with your child every day in your home language — this builds the thinking skills they need for English too",
        "Read books together, even in your home language — it builds vocabulary concepts that transfer",
        "Point to and name objects around the house in both languages",
        "Watch English children's shows or videos together and talk about what you see",
        "Celebrate every English word they learn — progress at this stage can feel slow but is very real",
      ],
      encouragement: "Every word your child learns in English is built on the strong foundation of their home language. You are their greatest support.",
    },
    {
      name: "Beginning",
      tagline: "Building confidence, one sentence at a time.",
      description: "Your child is beginning to use short English phrases and simple sentences. They understand more than they can say, and they are starting to make connections between English words and meaning. They still need a lot of visual and language support, but growth is happening.",
      skills: {
        listening: "Understands short, simple phrases and common classroom instructions, especially with visual support. Beginning to pick up context clues.",
        speaking: "Uses short phrases and simple sentences. May mix home language and English (this is normal and healthy). Errors are part of the process.",
        reading: "Reads simple sentences with familiar vocabulary. Understands more when text includes pictures or diagrams.",
        writing: "Writes simple sentences with support. Spelling and grammar errors are expected. Can communicate basic ideas in writing.",
      },
      supports: [
        "Continued visual supports alongside written and spoken language",
        "Pre-teaching vocabulary before new units",
        "Sentence frames and starters to scaffold speaking and writing",
        "Paired learning with supportive English-proficient peers",
        "Home language support when tackling complex content",
      ],
      homeTips: [
        "Keep speaking your home language — it is not confusing, it is helping",
        "Ask your child to tell you about their school day, in any language",
        "Help them practice English by naming what you do together (cooking, shopping, etc.)",
        "Look up words together in a bilingual dictionary or phone app",
        "Share books, songs, or videos in English that connect to things they already love",
      ],
      encouragement: "Your child's English is growing every day, even when it doesn't always feel that way. Trust the process.",
    },
    {
      name: "Developing",
      tagline: "Joining the conversation — in and out of the classroom.",
      description: "Your child can now hold simple conversations in English on familiar topics. They are starting to participate more in class and can understand most everyday classroom talk. Academic language — the kind used in textbooks and tests — is still developing and needs support.",
      skills: {
        listening: "Understands general classroom conversations and everyday topics. May still struggle with abstract concepts or fast speech.",
        speaking: "Can engage in conversations on familiar topics. Uses more complex sentences, though with noticeable errors. Growing vocabulary.",
        reading: "Reads and understands simple texts on familiar topics. May need support with longer passages or texts with technical vocabulary.",
        writing: "Writes short paragraphs with a beginning, middle, and end. Errors are present but ideas are communicated clearly.",
      },
      supports: [
        "Graphic organizers for reading and writing tasks",
        "Pre-reading vocabulary preparation before new topics",
        "Extended time on tests and written assignments",
        "Collaborative group work with structured roles",
        "Simplified versions of grade-level texts when needed",
      ],
      homeTips: [
        "Ask open-ended questions about school — 'What was interesting today?' rather than yes/no questions",
        "Read together in English or your home language — both build comprehension",
        "Play word games together (simple card games, matching games, word searches)",
        "Encourage your child to explain things to you in English — teaching builds fluency",
        "Praise effort and risk-taking, not just correctness",
      ],
      encouragement: "Your child is becoming a real communicator. Their confidence is growing, and so is their English.",
    },
    {
      name: "Expanding",
      tagline: "English is becoming a tool, not just a challenge.",
      description: "Your child can use English fairly fluently across many situations. They understand most of what happens in the classroom and can express their ideas clearly. The area where they may still need support is complex, abstract academic language — the kind used in essays, textbooks, and standardized tests.",
      skills: {
        listening: "Understands most classroom instruction and discussion. May need support with highly technical or abstract language.",
        speaking: "Communicates clearly on a wide range of topics. Uses more complex sentence structures. Occasional errors, particularly with grammar nuances.",
        reading: "Reads and understands most grade-level texts. May need support with dense academic texts or unfamiliar topics.",
        writing: "Writes organized multi-paragraph pieces. Ideas are clear and coherent. Grammar and style are continuing to develop.",
      },
      supports: [
        "Support with content-area academic vocabulary",
        "Feedback on writing that focuses on ideas before grammar",
        "Discussion groups where academic language is modeled",
        "Access to graphic organizers for complex reading tasks",
        "Opportunities to show knowledge in multiple ways (not only writing)",
      ],
      homeTips: [
        "Discuss news, community events, or current topics with your child in any language",
        "Encourage reading for pleasure — any language counts and builds thinking skills",
        "Ask your child to explain what they are learning at school — it reinforces understanding",
        "Watch documentaries or educational programs together and discuss them",
        "Celebrate their independence — they are doing more on their own every day",
      ],
      encouragement: "Your child's English is becoming a real strength. They are doing remarkable things.",
    },
    {
      name: "Bridging",
      tagline: "Almost there — English is becoming natural.",
      description: "Your child can communicate effectively in English across nearly all situations. They are close to the level of their English-speaking classmates. The remaining gap is mostly in highly sophisticated academic language — the precise, formal language of advanced essays, research, and specialized content areas.",
      skills: {
        listening: "Understands complex spoken language including abstract ideas, humor, and nuance. Rarely needs additional support.",
        speaking: "Communicates fluently with minimal errors. Can present, debate, and discuss complex topics confidently.",
        reading: "Reads and critically analyzes grade-level texts. Can handle most academic content independently.",
        writing: "Produces well-structured, detailed writing. Vocabulary and style are strong. Minor errors remain in complex structures.",
      },
      supports: [
        "Continued access to academic vocabulary support in new subject areas",
        "Opportunities for extended writing and critical thinking",
        "Feedback on sophisticated grammar and style in writing",
        "Advanced discussion opportunities to build academic oral language",
        "Support transitioning off formal ELL services (monitoring, not abandonment)",
      ],
      homeTips: [
        "Your child may need less direct language help now, but your engagement still matters enormously",
        "Talk about big ideas — goals, values, the future — in any language",
        "Encourage writing for fun: journals, stories, letters, texts",
        "Connect them to books, podcasts, or films in English on topics they love",
        "Trust your child's growing independence while staying curious and connected",
      ],
      encouragement: "Your child's English is a genuine strength. You have supported something extraordinary.",
    },
    {
      name: "Reaching",
      tagline: "A milestone — and a lifelong skill.",
      description: "Your child has reached a level of English proficiency comparable to their English-speaking peers. At this stage, schools typically exit students from formal ELL services. However, learning never stops — your child continues to grow as a communicator, thinker, and bilingual person.",
      skills: {
        listening: "Fully understands all academic and social English, including complex, abstract, and specialized language.",
        speaking: "Communicates with fluency, accuracy, and sophistication across all settings.",
        reading: "Reads and comprehends advanced texts, including those requiring inference, analysis, and critique.",
        writing: "Writes with clarity, depth, and stylistic awareness. Can adapt writing for different audiences and purposes.",
      },
      supports: [
        "Continued affirmation of bilingualism as an academic and personal asset",
        "Access to advanced coursework (do not place ceilings on achievement)",
        "Home language literacy support if desired (it strengthens English too)",
        "Monitoring in the year or two following exit from ELL services",
      ],
      homeTips: [
        "Celebrate this milestone — it is a genuine achievement",
        "Maintain and grow their home language — bilingualism is a lifelong gift",
        "Keep talking, reading, and engaging together — connection is your most powerful tool",
        "Encourage advanced learning opportunities — your child has no ceiling",
        "Remind them that knowing two (or more) languages is something to be proud of",
      ],
      encouragement: "Your child has achieved something remarkable. And their home language — the language of your family — remains a treasure.",
    },
  ],

  ko: [
    {
      name: "입문",
      tagline: "이제 막 시작했어요 — 새로운 단어 하나하나가 큰 성과입니다!",
      description: "자녀가 영어를 배우는 여정을 막 시작한 단계입니다. 지금은 그림, 몸짓, 그리고 모국어에 크게 의존하며 주변을 이해하고 있습니다. 이것은 완전히 정상적인 모습이며, 영어 발달에 있어 매우 중요한 기초 단계입니다.",
      skills: {
        listening: "그림, 몸짓, 또는 시범과 함께 제시될 때 몇 가지 핵심 단어와 표현을 이해합니다. 시각적 지원 없이는 구어 영어를 아직 이해하지 못할 수 있습니다.",
        speaking: "단어 하나 또는 매우 짧은 표현을 사용합니다. 손가락으로 가리키거나, 몸짓을 사용하거나, 모국어로 의사소통할 수 있습니다. 오류는 자연스러운 부분입니다.",
        reading: "알파벳 글자와 일부 기본 단어를 인식합니다. 그림과 간단한 인쇄된 단어를 연결할 수 있습니다.",
        writing: "단어나 짧은 문구를 따라 씁니다. 그림을 그려 의미를 전달할 수 있습니다. 영어 쓰기는 단어 수준에 있습니다.",
      },
      supports: [
        "모든 지시사항에 그림, 도표, 몸짓을 함께 제공하는 시각적 지원",
        "모국어로 된 이중 언어 용어집 또는 사전",
        "영어로 처리하고 응답하는 데 충분한 시간 제공",
        "지지적인 친구나 교사 곁에 앉을 수 있는 자리 배치",
        "영어와 함께 모국어 사용을 허용",
      ],
      homeTips: [
        "매일 모국어로 자녀와 이야기하세요 — 이것은 영어 학습에도 필요한 사고력을 키웁니다",
        "모국어로라도 함께 책을 읽으세요 — 영어로 전이되는 어휘 개념을 쌓아줍니다",
        "집 안의 물건들을 두 언어로 함께 가리키고 이름을 불러보세요",
        "영어 어린이 프로그램이나 영상을 함께 보고 보이는 것에 대해 이야기하세요",
        "자녀가 배우는 영어 단어 하나하나를 축하해 주세요 — 이 단계의 발전은 느릿해 보여도 매우 실질적입니다",
      ],
      encouragement: "자녀가 영어로 배우는 모든 단어는 모국어라는 튼튼한 기반 위에 세워집니다. 부모님이 바로 자녀의 가장 큰 지지자입니다.",
    },
    {
      name: "초급",
      tagline: "한 문장씩, 자신감을 키워나가고 있어요.",
      description: "자녀가 짧은 영어 문구와 간단한 문장을 사용하기 시작했습니다. 말할 수 있는 것보다 더 많은 것을 이해하며, 영어 단어와 의미 사이의 연결고리를 만들어 가고 있습니다. 아직은 많은 시각적, 언어적 지원이 필요하지만 성장이 일어나고 있습니다.",
      skills: {
        listening: "특히 시각적 지원이 있을 때 짧고 간단한 문구와 일반적인 수업 지시를 이해합니다. 맥락 단서를 파악하기 시작합니다.",
        speaking: "짧은 문구와 간단한 문장을 사용합니다. 모국어와 영어를 섞어 사용할 수 있습니다 — 이것은 정상적이고 건강한 발달입니다. 오류는 과정의 일부입니다.",
        reading: "친숙한 어휘가 있는 간단한 문장을 읽습니다. 텍스트에 그림이나 도표가 있을 때 더 잘 이해합니다.",
        writing: "지원을 받아 간단한 문장을 씁니다. 철자와 문법 오류가 예상됩니다. 기본적인 생각을 글로 전달할 수 있습니다.",
      },
      supports: [
        "서면 및 구어 언어와 함께 지속적인 시각적 지원",
        "새 단원 전에 어휘 사전 교육",
        "말하기와 쓰기를 위한 문장 틀과 문장 시작 표현",
        "영어 능숙한 친구와의 짝 학습",
        "복잡한 내용을 다룰 때 모국어 지원",
      ],
      homeTips: [
        "계속 모국어로 말씀하세요 — 혼란스러운 게 아니라 도움이 됩니다",
        "어떤 언어로든 자녀에게 학교에서 있었던 일을 이야기해 달라고 하세요",
        "함께 하는 일(요리, 장보기 등)을 영어로 이름 붙이며 연습하도록 도와주세요",
        "이중 언어 사전이나 스마트폰 앱을 함께 찾아보세요",
        "자녀가 이미 좋아하는 것과 연결된 영어 책, 노래, 영상을 나누어 보세요",
      ],
      encouragement: "자녀의 영어는 매일 자라고 있습니다, 항상 그렇게 느껴지지 않더라도요. 과정을 믿어주세요.",
    },
    {
      name: "발전",
      tagline: "교실 안팎에서 대화에 참여하기 시작했어요.",
      description: "자녀가 이제 친숙한 주제에 대해 영어로 간단한 대화를 나눌 수 있습니다. 수업 참여가 늘어나고 대부분의 일상적인 수업 내용을 이해할 수 있습니다. 교과서와 시험에 쓰이는 학문적 언어는 아직 발달 중이며 지원이 필요합니다.",
      skills: {
        listening: "일반적인 수업 대화와 일상 주제를 이해합니다. 추상적인 개념이나 빠른 말에는 아직 어려움을 겪을 수 있습니다.",
        speaking: "친숙한 주제에 대한 대화에 참여할 수 있습니다. 더 복잡한 문장을 사용하지만 눈에 띄는 오류가 있습니다. 어휘가 늘어나고 있습니다.",
        reading: "친숙한 주제의 간단한 글을 읽고 이해합니다. 긴 지문이나 전문 어휘가 있는 글은 지원이 필요할 수 있습니다.",
        writing: "시작, 중간, 끝이 있는 짧은 단락을 씁니다. 오류가 있지만 생각은 명확하게 전달됩니다.",
      },
      supports: [
        "읽기와 쓰기 작업을 위한 그래픽 조직자",
        "새 주제 전에 읽기 전 어휘 준비",
        "시험과 서면 과제에 연장된 시간",
        "구조화된 역할이 있는 협력 그룹 활동",
        "필요한 경우 학년 수준 텍스트의 단순화된 버전",
      ],
      homeTips: [
        "'오늘 뭐가 흥미로웠어?'처럼 예/아니오가 아닌 개방형 질문을 하세요",
        "영어나 모국어로 함께 읽으세요 — 둘 다 이해력을 키웁니다",
        "함께 단어 게임을 하세요 (카드 게임, 매칭 게임, 낱말 찾기 등)",
        "자녀에게 영어로 설명해 달라고 격려하세요 — 가르치는 것이 유창성을 키웁니다",
        "정확성이 아닌 노력과 도전 자체를 칭찬하세요",
      ],
      encouragement: "자녀가 진정한 소통자로 성장하고 있습니다. 자신감도, 영어도 함께 자라고 있습니다.",
    },
    {
      name: "확장",
      tagline: "영어가 도전이 아닌 도구가 되어가고 있어요.",
      description: "자녀가 다양한 상황에서 영어를 꽤 유창하게 사용할 수 있습니다. 수업에서 대부분의 내용을 이해하고 생각을 명확히 표현할 수 있습니다. 아직 지원이 필요한 부분은 에세이, 교과서, 표준화된 시험에 사용되는 복잡하고 추상적인 학문적 언어입니다.",
      skills: {
        listening: "대부분의 수업 지시와 토론을 이해합니다. 매우 전문적이거나 추상적인 언어에는 지원이 필요할 수 있습니다.",
        speaking: "다양한 주제에 대해 명확하게 소통합니다. 더 복잡한 문장 구조를 사용합니다. 주로 문법적 미묘함에서 가끔 오류가 생깁니다.",
        reading: "대부분의 학년 수준 텍스트를 읽고 이해합니다. 밀도 높은 학문적 텍스트나 낯선 주제에는 지원이 필요할 수 있습니다.",
        writing: "체계적인 여러 단락의 글을 씁니다. 생각이 명확하고 일관됩니다. 문법과 문체가 계속 발전 중입니다.",
      },
      supports: [
        "교과 영역의 학문적 어휘 지원",
        "문법보다 생각에 집중하는 쓰기 피드백",
        "학문적 언어가 모델링되는 토론 그룹",
        "복잡한 읽기 작업을 위한 그래픽 조직자 활용",
        "쓰기만이 아닌 다양한 방식으로 지식을 표현할 기회",
      ],
      homeTips: [
        "어떤 언어로든 자녀와 뉴스, 지역 행사, 시사 문제에 대해 이야기하세요",
        "즐거움을 위한 독서를 격려하세요 — 어떤 언어든 사고력을 키웁니다",
        "자녀에게 학교에서 배우는 것을 설명해 달라고 하세요 — 이해를 강화합니다",
        "함께 다큐멘터리나 교육 프로그램을 보고 이야기하세요",
        "자녀의 독립심을 축하하세요 — 매일 스스로 더 많은 것을 해내고 있습니다",
      ],
      encouragement: "자녀의 영어가 진정한 강점이 되고 있습니다. 정말 놀라운 일들을 해내고 있습니다.",
    },
    {
      name: "연결",
      tagline: "거의 다 왔어요 — 영어가 자연스러워지고 있어요.",
      description: "자녀가 거의 모든 상황에서 영어로 효과적으로 소통할 수 있습니다. 영어가 모국어인 같은 반 학생들의 수준에 가까워졌습니다. 남은 차이는 주로 고급 에세이, 연구, 전문 교과 영역의 정교한 학문적 언어에 있습니다.",
      skills: {
        listening: "추상적인 생각, 유머, 미묘한 뉘앙스를 포함한 복잡한 구어를 이해합니다. 추가 지원이 거의 필요하지 않습니다.",
        speaking: "오류가 거의 없이 유창하게 소통합니다. 복잡한 주제를 자신 있게 발표하고, 토론하고, 논의할 수 있습니다.",
        reading: "학년 수준의 텍스트를 비판적으로 읽고 분석합니다. 대부분의 학문적 내용을 독립적으로 다룰 수 있습니다.",
        writing: "체계적이고 상세한 글을 씁니다. 어휘와 문체가 강합니다. 복잡한 구조에서 약간의 오류가 남아 있습니다.",
      },
      supports: [
        "새 교과 영역의 학문적 어휘에 대한 지속적인 지원",
        "심화 글쓰기와 비판적 사고 기회",
        "글쓰기에서 정교한 문법과 문체에 대한 피드백",
        "학문적 구어 언어를 키우는 고급 토론 기회",
        "공식적인 ELL 서비스 종료 전환 지원 (지속적인 모니터링)",
      ],
      homeTips: [
        "자녀가 이제 직접적인 언어 도움이 덜 필요할 수 있지만, 부모님의 참여는 여전히 매우 중요합니다",
        "어떤 언어로든 목표, 가치관, 미래에 대해 이야기하세요",
        "일기, 이야기, 편지, 문자 등 즐거운 글쓰기를 격려하세요",
        "자녀가 좋아하는 주제의 영어 책, 팟캐스트, 영화를 연결해 주세요",
        "자녀의 성장하는 독립심을 믿으면서도 계속 호기심 있게 소통하세요",
      ],
      encouragement: "자녀의 영어는 진정한 강점입니다. 부모님은 정말 특별한 것을 지원해 오셨습니다.",
    },
    {
      name: "달성",
      tagline: "하나의 이정표 — 그리고 평생의 능력.",
      description: "자녀가 영어를 모국어로 하는 또래 학생들과 비교할 수 있는 수준의 영어 능숙도에 도달했습니다. 이 단계에서 학교는 보통 학생을 공식 ELL 서비스에서 졸업시킵니다. 하지만 배움은 멈추지 않습니다 — 자녀는 소통자, 사상가, 이중 언어 사용자로서 계속 성장합니다.",
      skills: {
        listening: "복잡하고 추상적이며 전문화된 언어를 포함한 모든 학문적, 사회적 영어를 완전히 이해합니다.",
        speaking: "모든 상황에서 유창하고 정확하며 세련되게 소통합니다.",
        reading: "추론, 분석, 비판을 요구하는 것을 포함한 고급 텍스트를 읽고 이해합니다.",
        writing: "명확성, 깊이, 문체적 인식을 갖추어 씁니다. 다양한 독자와 목적에 맞게 글을 조정할 수 있습니다.",
      },
      supports: [
        "이중 언어 능력을 학문적, 개인적 자산으로 지속적으로 인정",
        "고급 교과 과정 접근 (성취에 상한선을 두지 않기)",
        "원하는 경우 모국어 문해력 지원 (영어도 강화됨)",
        "ELL 서비스 종료 후 1~2년간의 모니터링",
      ],
      homeTips: [
        "이 이정표를 축하하세요 — 진정한 성취입니다",
        "모국어를 유지하고 발전시키세요 — 이중 언어 능력은 평생의 선물입니다",
        "계속 함께 이야기하고, 읽고, 교류하세요 — 연결이 가장 강력한 도구입니다",
        "고급 학습 기회를 격려하세요 — 자녀에게는 상한선이 없습니다",
        "두 개 (또는 그 이상의) 언어를 안다는 것이 자랑스러운 일임을 상기시켜 주세요",
      ],
      encouragement: "자녀가 정말 놀라운 것을 이루었습니다. 그리고 가족의 언어인 모국어는 언제나 소중한 보물로 남을 것입니다.",
    },
  ],

  zh: [
    {
      name: "入门",
      tagline: "刚刚起步——每学会一个新单词都是胜利！",
      description: "您的孩子正处于英语学习旅程的起点。此刻，他们主要依靠图片、手势和母语来理解周围的世界。这是完全正常的，也是语言发展的关键基础阶段。",
      skills: {
        listening: "在图片、手势或示范的帮助下，能理解几个关键词和短语。没有视觉支持时，可能还无法听懂英语口语。",
        speaking: "使用单个词语或非常简短的短语。可能会用手指指示、做手势或用母语交流。出现错误是正常的。",
        reading: "能辨认字母和一些常见的视觉词汇。能够将图片与简单的印刷词汇配对。",
        writing: "抄写单词或短语。可能通过画画来传达意思。英语写作处于单词水平。",
      },
      supports: [
        "所有指示都配有图片、图表和手势的视觉支持",
        "母语双语词汇表或词典",
        "给予充分的时间来理解和用英语回应",
        "安排坐在支持性的同学或老师旁边",
        "允许在英语旁边使用母语",
      ],
      homeTips: [
        "每天用母语与孩子交谈——这也能培养他们学习英语所需的思维能力",
        "即使用母语，也要一起读书——能建立可以迁移的词汇概念",
        "用两种语言一起指认家里的物品",
        "一起看英语儿童节目或视频，并讨论所看到的内容",
        "庆祝孩子学到的每一个英语单词——这个阶段的进步可能感觉缓慢，但确实存在",
      ],
      encouragement: "孩子在英语中学到的每一个词，都建立在母语这个坚实的基础上。您是他们最大的支持者。",
    },
    {
      name: "初级",
      tagline: "一句一句地建立自信。",
      description: "您的孩子开始使用简短的英语短语和简单的句子。他们理解的比能说的要多，并且开始在英语单词和含义之间建立联系。他们仍然需要大量的视觉和语言支持，但成长正在发生。",
      skills: {
        listening: "特别是在有视觉支持时，能理解简短的短语和常见的课堂指令。开始捕捉语境线索。",
        speaking: "使用简短的短语和简单的句子。可能将母语和英语混合使用——这是正常且健康的。错误是过程的一部分。",
        reading: "阅读有熟悉词汇的简单句子。当文本包含图片或图表时，理解效果更好。",
        writing: "在帮助下写简单的句子。拼写和语法错误是预期的。能够用文字传达基本想法。",
      },
      supports: [
        "与书面和口语并行的持续视觉支持",
        "新单元开始前的词汇预教",
        "口语和写作的句子框架和起始句",
        "与英语能力强的同学配对学习",
        "处理复杂内容时的母语支持",
      ],
      homeTips: [
        "继续说母语——这不会造成混淆，而是在帮助孩子",
        "请孩子用任何语言告诉您学校里发生的事",
        "通过为共同做的事命名（烹饪、购物等）来帮助练习英语",
        "一起使用双语词典或手机应用查阅单词",
        "分享与孩子喜爱的事物相关的英语书籍、歌曲或视频",
      ],
      encouragement: "孩子的英语每天都在进步，即使并不总是感觉得到。请相信这个过程。",
    },
    {
      name: "发展",
      tagline: "开始在课堂内外加入对话。",
      description: "您的孩子现在可以就熟悉的话题进行简单的英语对话。他们开始更多参与课堂，能理解大多数日常课堂内容。学术语言——教科书和考试中使用的那种——仍在发展中，需要支持。",
      skills: {
        listening: "理解一般课堂对话和日常话题。可能仍难以理解抽象概念或快速语言。",
        speaking: "能就熟悉的话题参与对话。使用更复杂的句子，但有明显的错误。词汇量在增长。",
        reading: "阅读并理解熟悉话题的简单文本。较长的段落或含有技术词汇的文本可能需要支持。",
        writing: "写有开头、中间和结尾的短段落。存在错误，但想法表达清晰。",
      },
      supports: [
        "阅读和写作任务的图形组织工具",
        "新话题前的阅读词汇准备",
        "测试和书面作业的延长时间",
        "有结构化角色的小组合作",
        "必要时提供简化版的年级水平文本",
      ],
      homeTips: [
        "问开放性问题——'今天什么最有趣？'而不是是/否问题",
        "用英语或母语一起阅读——两者都能培养理解力",
        "一起玩文字游戏（简单的卡片游戏、匹配游戏、填字游戏）",
        "鼓励孩子用英语向您解释事情——教别人能提高流利度",
        "表扬努力和尝试，而不仅仅是正确性",
      ],
      encouragement: "孩子正在成为真正的沟通者。自信心和英语水平都在共同成长。",
    },
    {
      name: "拓展",
      tagline: "英语正在成为工具，而不仅仅是挑战。",
      description: "您的孩子能够在许多情况下相当流利地使用英语。他们理解课堂中大多数发生的事情，并能清晰地表达自己的想法。还需要支持的领域是复杂的、抽象的学术语言——文章、教科书和标准化测试中使用的那种。",
      skills: {
        listening: "理解大多数课堂指令和讨论。高度技术性或抽象的语言可能需要支持。",
        speaking: "能就广泛话题清晰沟通。使用更复杂的句子结构。偶有错误，尤其在语法细微差别上。",
        reading: "阅读并理解大多数年级水平文本。密集的学术文本或陌生话题可能需要支持。",
        writing: "写有条理的多段落文章。想法清晰连贯。语法和风格仍在发展中。",
      },
      supports: [
        "各科学术词汇支持",
        "先关注想法再关注语法的写作反馈",
        "以学术语言为榜样的讨论小组",
        "复杂阅读任务的图形组织工具",
        "通过多种方式（不仅是写作）展示知识的机会",
      ],
      homeTips: [
        "用任何语言与孩子讨论新闻、社区活动或时事",
        "鼓励为乐趣而读书——任何语言都有助于培养思维能力",
        "请孩子解释他们在学校学到的内容——这能巩固理解",
        "一起看纪录片或教育节目并讨论",
        "庆祝孩子的独立性——他们每天都在自己做更多事情",
      ],
      encouragement: "孩子的英语正在成为真正的优势。他们正在做令人惊叹的事情。",
    },
    {
      name: "衔接",
      tagline: "快到了——英语正变得自然。",
      description: "您的孩子能够在几乎所有情况下用英语有效沟通。他们接近以英语为母语的同班同学的水平。剩余的差距主要在于高度复杂的学术语言——高级文章、研究和专业学科领域的精准、正式语言。",
      skills: {
        listening: "理解复杂的口语，包括抽象想法、幽默和细微差别。几乎不需要额外支持。",
        speaking: "流利地沟通，错误极少。能自信地就复杂话题进行演讲、辩论和讨论。",
        reading: "批判性地阅读和分析年级水平文本。能独立处理大多数学术内容。",
        writing: "写出结构完善、内容详尽的文章。词汇和风格很强。复杂结构中仍有少量错误。",
      },
      supports: [
        "新学科领域学术词汇的持续支持",
        "延伸写作和批判性思维的机会",
        "写作中精密语法和风格的反馈",
        "建立学术口语的高级讨论机会",
        "正式退出ELL服务的过渡支持（监测，而非放弃）",
      ],
      homeTips: [
        "孩子现在可能需要较少的直接语言帮助，但您的参与仍然非常重要",
        "用任何语言谈论重大问题——目标、价值观、未来",
        "鼓励为乐趣而写作：日记、故事、信件、短信",
        "为孩子连接他们喜爱话题的英语书籍、播客或电影",
        "在信任孩子日益增长的独立性的同时，保持好奇心和联系",
      ],
      encouragement: "孩子的英语是真正的优势。您支持了一件非凡的事情。",
    },
    {
      name: "达到",
      tagline: "一个里程碑——也是终生的技能。",
      description: "您的孩子已达到与以英语为母语的同龄人相当的英语水平。在这个阶段，学校通常会让学生退出正式ELL服务。但是，学习永不止步——您的孩子将继续成长为沟通者、思想者和双语人士。",
      skills: {
        listening: "完全理解所有学术和社交英语，包括复杂、抽象和专业语言。",
        speaking: "在所有场合以流利、准确和精练的方式沟通。",
        reading: "阅读并理解高级文本，包括需要推断、分析和评论的文本。",
        writing: "以清晰度、深度和文体意识写作。能够为不同的读者和目的调整写作风格。",
      },
      supports: [
        "持续肯定双语能力作为学术和个人资产",
        "获得高级课程（不要对成就设置上限）",
        "如需要，提供母语读写能力支持（这也能强化英语）",
        "退出ELL服务后一两年内的持续监测",
      ],
      homeTips: [
        "庆祝这个里程碑——这是真正的成就",
        "维护和发展母语——双语能力是终生的礼物",
        "继续一起交谈、阅读和互动——联系是您最强大的工具",
        "鼓励高级学习机会——您的孩子没有上限",
        "提醒孩子，掌握两种（或更多）语言是值得骄傲的事",
      ],
      encouragement: "您的孩子取得了非凡的成就。家庭的语言——母语——将永远是珍贵的宝藏。",
    },
  ],

  es: [
    {
      name: "Entrante",
      tagline: "¡Acaba de empezar — cada nueva palabra es un logro!",
      description: "Su hijo está en el comienzo absoluto de su viaje en inglés. Ahora mismo, depende mucho de las imágenes, los gestos y su idioma del hogar para dar sentido al mundo que lo rodea. Esto es completamente normal y es una etapa fundamental en el desarrollo del lenguaje.",
      skills: {
        listening: "Entiende unas pocas palabras y frases clave, especialmente cuando se acompañan de imágenes, gestos o demostraciones. Es posible que todavía no pueda seguir el inglés hablado sin apoyo visual.",
        speaking: "Usa palabras sueltas o frases muy cortas. Puede señalar, usar gestos o comunicarse en su idioma del hogar. Los errores son esperados y normales.",
        reading: "Reconoce letras y algunas palabras comunes. Puede emparejar imágenes con palabras impresas simples.",
        writing: "Copia palabras o frases cortas. Puede dibujar para comunicar significado. La escritura en inglés está al nivel de palabras.",
      },
      supports: [
        "Apoyos visuales — imágenes, diagramas y gestos junto con todas las instrucciones",
        "Glosarios o diccionarios bilingües en su idioma del hogar",
        "Tiempo adicional para procesar y responder en inglés",
        "Ubicación cerca de compañeros o del maestro que puedan apoyarlo",
        "Permiso para usar su idioma del hogar junto al inglés",
      ],
      homeTips: [
        "Hable con su hijo todos los días en su idioma del hogar — esto desarrolla las habilidades de pensamiento que también necesita para el inglés",
        "Lean libros juntos, aunque sea en su idioma del hogar — esto construye conceptos de vocabulario que se transfieren",
        "Señalen y nombren objetos alrededor de la casa en ambos idiomas",
        "Vean programas o videos en inglés juntos y hablen sobre lo que ven",
        "Celebren cada palabra en inglés que aprenda — el progreso en esta etapa puede sentirse lento, pero es muy real",
      ],
      encouragement: "Cada palabra que su hijo aprende en inglés se construye sobre la sólida base de su idioma del hogar. Usted es su mayor apoyo.",
    },
    {
      name: "Principiante",
      tagline: "Construyendo confianza, oración por oración.",
      description: "Su hijo está comenzando a usar frases cortas en inglés y oraciones simples. Entiende más de lo que puede decir y está comenzando a hacer conexiones entre palabras en inglés y su significado. Todavía necesita mucho apoyo visual y de lenguaje, pero el crecimiento está ocurriendo.",
      skills: {
        listening: "Entiende frases cortas y simples e instrucciones comunes del aula, especialmente con apoyo visual. Comienza a captar pistas de contexto.",
        speaking: "Usa frases cortas y oraciones simples. Puede mezclar el idioma del hogar y el inglés — esto es normal y saludable. Los errores son parte del proceso.",
        reading: "Lee oraciones simples con vocabulario familiar. Entiende mejor cuando el texto incluye imágenes o diagramas.",
        writing: "Escribe oraciones simples con apoyo. Se esperan errores de ortografía y gramática. Puede comunicar ideas básicas por escrito.",
      },
      supports: [
        "Apoyos visuales continuos junto con el lenguaje escrito y oral",
        "Preinstrucción de vocabulario antes de nuevas unidades",
        "Marcos de oraciones y frases de inicio para apoyar el habla y la escritura",
        "Aprendizaje en parejas con compañeros con buen dominio del inglés",
        "Apoyo en el idioma del hogar cuando se aborda contenido complejo",
      ],
      homeTips: [
        "Siga hablando su idioma del hogar — no es confuso, es una ayuda",
        "Pida a su hijo que le cuente sobre su día escolar, en cualquier idioma",
        "Ayúdele a practicar el inglés nombrando lo que hacen juntos (cocinar, comprar, etc.)",
        "Busquen palabras juntos en un diccionario bilingüe o aplicación del teléfono",
        "Compartan libros, canciones o videos en inglés relacionados con cosas que ya aman",
      ],
      encouragement: "El inglés de su hijo crece cada día, aunque no siempre se sienta así. Confíe en el proceso.",
    },
    {
      name: "Desarrollando",
      tagline: "Uniéndose a la conversación — dentro y fuera del salón.",
      description: "Su hijo ahora puede mantener conversaciones simples en inglés sobre temas familiares. Está comenzando a participar más en clase y puede entender la mayor parte del habla cotidiana del aula. El lenguaje académico — el que se usa en los libros de texto y las pruebas — todavía está en desarrollo y necesita apoyo.",
      skills: {
        listening: "Entiende conversaciones generales del aula y temas cotidianos. Puede aún tener dificultad con conceptos abstractos o habla rápida.",
        speaking: "Puede participar en conversaciones sobre temas familiares. Usa oraciones más complejas, aunque con errores notables. Vocabulario en crecimiento.",
        reading: "Lee y entiende textos simples sobre temas familiares. Puede necesitar apoyo con pasajes más largos o textos con vocabulario técnico.",
        writing: "Escribe párrafos cortos con principio, medio y fin. Los errores están presentes pero las ideas se comunican claramente.",
      },
      supports: [
        "Organizadores gráficos para tareas de lectura y escritura",
        "Preparación de vocabulario de prelectura antes de nuevos temas",
        "Tiempo extendido en pruebas y tareas escritas",
        "Trabajo en grupos colaborativos con roles estructurados",
        "Versiones simplificadas de textos del nivel de grado cuando sea necesario",
      ],
      homeTips: [
        "Haga preguntas abiertas sobre la escuela — '¿Qué fue interesante hoy?' en lugar de preguntas de sí/no",
        "Lean juntos en inglés o su idioma del hogar — ambos desarrollan la comprensión",
        "Jueguen juegos de palabras juntos (juegos de cartas, juegos de emparejar, sopas de letras)",
        "Anime a su hijo a explicarle cosas en inglés — enseñar desarrolla la fluidez",
        "Elogie el esfuerzo y el riesgo tomado, no solo la corrección",
      ],
      encouragement: "Su hijo se está convirtiendo en un verdadero comunicador. Su confianza y su inglés están creciendo juntos.",
    },
    {
      name: "Expandiendo",
      tagline: "El inglés se está convirtiendo en una herramienta, no solo un desafío.",
      description: "Su hijo puede usar el inglés con bastante fluidez en muchas situaciones. Entiende la mayor parte de lo que sucede en el aula y puede expresar sus ideas claramente. El área donde aún puede necesitar apoyo es el lenguaje académico complejo y abstracto — el que se usa en ensayos, libros de texto y pruebas estandarizadas.",
      skills: {
        listening: "Entiende la mayor parte de las instrucciones y discusiones del aula. Puede necesitar apoyo con lenguaje muy técnico o abstracto.",
        speaking: "Se comunica claramente sobre una amplia variedad de temas. Usa estructuras de oraciones más complejas. Errores ocasionales, especialmente con matices gramaticales.",
        reading: "Lee y entiende la mayoría de los textos del nivel de grado. Puede necesitar apoyo con textos académicos densos o temas desconocidos.",
        writing: "Escribe piezas organizadas de varios párrafos. Las ideas son claras y coherentes. La gramática y el estilo siguen desarrollándose.",
      },
      supports: [
        "Apoyo con vocabulario académico de las áreas de contenido",
        "Retroalimentación en escritura que se centra en las ideas antes que en la gramática",
        "Grupos de discusión donde se modela el lenguaje académico",
        "Acceso a organizadores gráficos para tareas de lectura complejas",
        "Oportunidades para mostrar el conocimiento de múltiples maneras (no solo por escrito)",
      ],
      homeTips: [
        "Discuta noticias, eventos comunitarios o temas actuales con su hijo en cualquier idioma",
        "Fomente la lectura por placer — cualquier idioma cuenta y desarrolla habilidades de pensamiento",
        "Pida a su hijo que explique lo que está aprendiendo en la escuela — refuerza la comprensión",
        "Vean documentales o programas educativos juntos y discútalos",
        "Celebre su independencia — están haciendo más por sí mismos cada día",
      ],
      encouragement: "El inglés de su hijo se está convirtiendo en una verdadera fortaleza. Están haciendo cosas notables.",
    },
    {
      name: "Conectando",
      tagline: "Ya casi — el inglés se está volviendo natural.",
      description: "Su hijo puede comunicarse efectivamente en inglés en casi todas las situaciones. Están cerca del nivel de sus compañeros de clase que hablan inglés como lengua materna. La brecha restante está principalmente en el lenguaje académico muy sofisticado — el lenguaje preciso y formal de ensayos avanzados, investigación y áreas de contenido especializadas.",
      skills: {
        listening: "Entiende el lenguaje oral complejo incluyendo ideas abstractas, humor y matices. Rara vez necesita apoyo adicional.",
        speaking: "Se comunica fluidamente con errores mínimos. Puede presentar, debatir y discutir temas complejos con confianza.",
        reading: "Lee y analiza críticamente textos del nivel de grado. Puede manejar la mayor parte del contenido académico de forma independiente.",
        writing: "Produce escritura bien estructurada y detallada. El vocabulario y el estilo son fuertes. Quedan errores menores en estructuras complejas.",
      },
      supports: [
        "Acceso continuo a apoyo de vocabulario académico en nuevas áreas temáticas",
        "Oportunidades de escritura extendida y pensamiento crítico",
        "Retroalimentación sobre gramática y estilo sofisticados en escritura",
        "Oportunidades de discusión avanzada para desarrollar el lenguaje oral académico",
        "Apoyo en la transición fuera de los servicios formales de ELL (seguimiento, no abandono)",
      ],
      homeTips: [
        "Su hijo puede necesitar menos ayuda directa con el idioma ahora, pero su participación sigue siendo enormemente importante",
        "Hablen sobre grandes ideas — metas, valores, el futuro — en cualquier idioma",
        "Fomente la escritura por diversión: diarios, historias, cartas, mensajes",
        "Conéctelos con libros, podcasts o películas en inglés sobre temas que amen",
        "Confíe en la creciente independencia de su hijo mientras sigue siendo curioso y conectado",
      ],
      encouragement: "El inglés de su hijo es una verdadera fortaleza. Ha apoyado algo extraordinario.",
    },
    {
      name: "Alcanzando",
      tagline: "Un hito — y una habilidad para toda la vida.",
      description: "Su hijo ha alcanzado un nivel de dominio del inglés comparable al de sus compañeros de habla inglesa. En esta etapa, las escuelas generalmente dan de baja a los estudiantes de los servicios formales de ELL. Sin embargo, el aprendizaje nunca se detiene — su hijo continúa creciendo como comunicador, pensador y persona bilingüe.",
      skills: {
        listening: "Comprende completamente todo el inglés académico y social, incluyendo lenguaje complejo, abstracto y especializado.",
        speaking: "Se comunica con fluidez, precisión y sofisticación en todos los entornos.",
        reading: "Lee y comprende textos avanzados, incluyendo aquellos que requieren inferencia, análisis y crítica.",
        writing: "Escribe con claridad, profundidad y conciencia estilística. Puede adaptar la escritura para diferentes audiencias y propósitos.",
      },
      supports: [
        "Afirmación continua del bilingüismo como un activo académico y personal",
        "Acceso a cursos avanzados (no poner límites al logro)",
        "Apoyo en la alfabetización del idioma del hogar si se desea (también fortalece el inglés)",
        "Seguimiento en el año o dos siguientes a la salida de los servicios de ELL",
      ],
      homeTips: [
        "Celebre este hito — es un logro genuino",
        "Mantenga y desarrolle su idioma del hogar — el bilingüismo es un regalo de por vida",
        "Sigan hablando, leyendo e interactuando juntos — la conexión es su herramienta más poderosa",
        "Fomente oportunidades de aprendizaje avanzado — su hijo no tiene techo",
        "Recuérdeles que saber dos (o más) idiomas es algo de lo que estar orgulloso",
      ],
      encouragement: "Su hijo ha logrado algo notable. Y su idioma del hogar — el idioma de su familia — sigue siendo un tesoro.",
    },
  ],
};

export function getLevels(lang: string): WIDALevel[] {
  const content = LEVEL_CONTENT_BY_LANG[lang] ?? LEVEL_CONTENT_BY_LANG.en;
  return WIDA_STYLES.map((style, i) => ({ ...style, ...content[i] }));
}

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
  };
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
    encouragementLabel: "A note of encouragement",
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
    encouragementLabel: "격려의 말",
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
    progressBody: "每个孩子学习英语的速度都不同。研究表明，日常会话英语可能需要3-5年才能掌握，而学术英语（用于教科书和考试中的英语）通常需要4-7年或更长时间。WIDA水平描述的是您孩子目前所处的阶段，而不是固定的时间表。",
    teacherNoteTitle: "来自孩子老师的留言",
    teacherNotePlaceholder: "老师：请在打印前为该家庭添加个人留言。",
    printButton: "打印摘要",
    disclaimer: "此工具提供一般指导，不能替代学校的评估或老师的判断。",
    encouragementLabel: "鼓励的话",
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
    encouragementLabel: "Una nota de ánimo",
  },
};
