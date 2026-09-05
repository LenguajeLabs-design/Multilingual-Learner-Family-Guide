export type LevelSupportExamples = {
  school: string[];
  home: string[];
};

export type SupportExamplesByLevel = Record<number, LevelSupportExamples>;

export const LOCALIZED_SUPPORT_EXAMPLES: Record<string, SupportExamplesByLevel> = {
  ko: {
    1: {
      school: [
        "수학 시간에 그림 카드로 풀이 단계를 보여주고, 말하면서 각 부분을 가리킨 뒤 학생이 시작하기 전에 첫 번째 문제를 직접 시범 보입니다.",
        "식물 단원을 시작하기 전에 뿌리, 줄기, 잎, 물을 그림과 단어로 정리한 작은 목록을 제공합니다. 학생이 듣기, 말하기, 읽기, 그리기를 할 때 이 목록을 사용할 수 있게 합니다.",
        "짧은 질문 하나를 하고 기다린 뒤 선택지나 그림을 제시합니다. “식물에는 무엇이 필요할까요?”라는 질문에 학생이 가리키기, 그리기, 모국어 단어 또는 영어로 “water”라고 답할 수 있게 합니다.",
        "학생 대신 과제를 해 주지 않으면서 교실 일과를 보여줄 수 있는 배려 깊은 친구를 짝으로 정합니다. “이 단어와 맞는 그림을 찾아보세요”처럼 한 가지 분명한 과제를 줍니다.",
        "학생이 먼저 모국어로 생각을 나누거나 그림에 이름을 붙이거나 이중 언어 용어집을 사용해 계획하게 한 뒤, 핵심 영어 단어나 짧은 표현 하나를 말하도록 돕습니다.",
      ],
      home: [
        "저녁 식사 시간이나 산책할 때 자녀가 가장 편한 언어로 하루 이야기를 하도록 초대하세요. 모국어로 나누는 풍부한 대화도 영어 학습을 돕습니다.",
        "어떤 언어든 좋아하는 책을 고르세요. 그림에서 멈춰 가리키기, 다음 내용 예상하기, 있었던 일 다시 말하기를 해 보세요. 모든 단어를 번역할 필요는 없습니다.",
        "문, 컵, 신발처럼 익숙한 물건 세 개를 고르세요. 각 물건을 가리키며 모국어와 영어 이름을 말하고 며칠 동안 자연스럽게 반복하세요.",
        "연령에 맞는 짧은 영어 영상을 함께 보세요. 한두 번 멈춰 보이는 것을 가리키고 이야기하세요. 자녀는 어느 언어로든 대답할 수 있습니다.",
        "“water라는 단어를 사용했구나” 또는 “생각을 잘 보여주었어”처럼 구체적으로 노력을 알아봐 주세요. 완벽한 영어보다 의사소통을 칭찬하면 자신감이 자랍니다.",
      ],
    },
    2: {
      school: [
        "새 단원을 시작하기 전에 핵심 그림을 보여주며 단어를 말합니다. 수업 전에 학생이 단어를 가리키거나 따라 말하거나 그림과 연결해 보게 합니다.",
        "책상에 작은 그림 단어 목록을 둡니다. 사회 시간에 학생이 지도, 나라, 바다를 가리키며 문맥 속에서 단어를 들을 수 있게 합니다.",
        "“나는 ___을/를 봐요” 또는 “내 생각에는 ___” 같은 문장 틀을 제시합니다. 답 하나를 시범 보이고 짝과 연습한 뒤 짧게 대답하도록 초대합니다.",
        "짝 활동에서 한 명은 그림이나 문제를 읽고, 다른 한 명은 답을 가리키거나 찾으며, 둘이 함께 문장 틀을 연습하도록 역할을 나눕니다.",
        "어려운 개념을 먼저 모국어로 살펴보게 한 뒤, 영어 답변을 요구하기 전에 몇 가지 핵심 영어 단어와 연결합니다.",
      ],
      home: [
        "어떤 언어로든 학교에서 있었던 일을 물어보세요. 자녀가 새 영어 단어 하나를 말하면 함께 자연스럽게 한두 번 사용해 보세요.",
        "요리하거나 장을 볼 때 자르다, 섞다, 계산하다, 고르다 같은 행동을 두 언어로 말해 보세요. 자녀가 원할 때만 따라 하게 하세요.",
        "학교에서 쓰는 유용한 단어 하나를 이중 언어 사전에서 함께 찾고, 그 단어로 간단한 그림이나 문장을 만들어 보세요.",
        "자녀가 이미 좋아하는 관심사와 연결된 노래, 책, 영상을 고르세요. 익숙한 주제는 새로운 영어를 더 편안하게 느끼게 합니다.",
        "두 언어가 섞여 있어도 완전한 생각을 표현한 것을 칭찬하세요. 목표는 완벽한 문법이 아니라 의사소통과 자신감입니다.",
      ],
    },
    3: {
      school: [
        "읽기 전에 원인과 결과를 정리하는 표를 제공하고, 학급과 함께 한 칸을 완성해 시범을 보입니다.",
        "긴 글에서 새 단어를 만나기 전에 학생 눈높이의 뜻, 그림, 예문을 사용해 단원 핵심 어휘를 가르칩니다.",
        "평가 지시문을 단계별로 나누고, 학생이 쓰기 전에 질문을 다시 읽거나 짝과 과제를 확인할 시간을 줍니다.",
        "읽는 사람, 기록하는 사람, 그림으로 나타내는 사람, 발표하는 사람처럼 분명한 모둠 역할을 주어 참여에 언어 목적이 생기게 합니다.",
        "학년 수준의 글을 그대로 사용하되 핵심 부분 표시, 짧은 용어 설명 또는 음성 자료를 제공합니다.",
      ],
      home: [
        "“오늘 무엇이 흥미로웠어?” 또는 “무엇이 놀라웠어?”라고 묻고, 영어로 핵심 생각을 말해 보기 전에 어느 언어로든 답하게 하세요.",
        "짧은 기사, 만화 또는 책을 함께 읽고 무슨 일이 있었는지, 왜 그랬는지 물어보세요.",
        "음식, 동물, 특정 소리로 시작하는 물건처럼 주제를 정해 단어나 범주 게임을 해 보세요.",
        "자녀가 학교에서 배운 새 개념을 가르쳐 달라고 해 보세요. 모든 영어 오류를 고치기보다 궁금한 점을 이어서 물어보세요.",
        "토론에 참여하기, 더 긴 문장 시도하기, 다시 설명해 달라고 요청하기 같은 도전을 칭찬하세요.",
      ],
    },
    4: {
      school: [
        "새 단원을 시작하기 전에 주제를 설명하는 데 필요한 학문적 어휘를 정하고, 토론과 쓰기에서 반복해 사용합니다.",
        "먼저 학생 생각의 장점을 짚어 줍니다. 모든 문법 오류를 표시하기보다 다음에 배울 언어 요소 하나를 선택합니다.",
        "전체 학급에서 말하기 전에 토론 질문, 몇 가지 학문적 표현, 짝과 짧게 연습할 시간을 제공합니다.",
        "읽기 과제에 기억해야 할 생각이 많을 때 시간표, 주장-근거 정리표 또는 주석이 있는 글을 제공합니다.",
        "발표, 설명이 포함된 도표 또는 녹음 답변이 지식 이해를 더 잘 보여줄 때 다양한 방식으로 학습을 표현하게 합니다.",
      ],
      home: [
        "지역사회 행사, 뉴스 또는 가족의 결정을 가장 깊이 있게 이야기할 수 있는 언어로 함께 토론하세요.",
        "소설, 만화, 잡지, 기사 등 자녀가 즐기는 읽을거리를 위한 시간을 마련하세요. 모두 지식과 언어를 키웁니다.",
        "현재 학교에서 배우는 주제를 설명해 달라고 하고, 진심 어린 후속 질문 하나를 해 보세요.",
        "다큐멘터리나 교육 영상을 함께 보고 모르는 단어 전부가 아니라 새로운 생각 하나를 이야기하세요.",
        "자녀의 독립성이 자라는 것을 인정하면서도 대화, 질문, 격려가 필요할 때 곁에 있어 주세요.",
      ],
    },
    5: {
      school: [
        "“근거는 ___을 보여 줍니다” 또는 “반면에 ___”처럼 교과에서 쓰는 정확한 표현을 가르친 뒤 토론에서 하나를 선택해 사용하게 합니다.",
        "긴 글쓰기 과제를 주장, 근거, 초안, 피드백, 수정 단계로 나누고 각 단계의 언어 목표를 눈에 보이게 제시합니다.",
        "학생의 사고력을 먼저 인정한 뒤 연결어 또는 문장 다양성처럼 정교한 언어 요소 하나에 초점을 맞춰 피드백합니다.",
        "준비 시간, 근거 메모, 분명한 발언 순서를 갖춘 세미나나 토론을 운영해 모든 학생이 사려 깊게 참여하게 합니다.",
        "공식 EAL 지원이 끝난 뒤에도 새로운 학업 요구를 확인하고 어려움이 장벽이 되기 전에 필요한 지원과 연결합니다.",
      ],
      home: [
        "목표, 가치관 또는 시사 문제를 어떤 언어로든 이야기하고 자녀가 이유를 설명하도록 물어보세요.",
        "실제 독자를 위한 일기, 이야기, 후기 또는 메시지 쓰기를 권하세요. 목적 있는 글쓰기는 자신감을 키웁니다.",
        "자녀가 이미 관심 있는 주제의 영어 책, 팟캐스트 또는 영화를 함께 찾아보세요.",
        "어려운 수업을 더 수월하게 만들려면 어떤 도움이 필요한지 물어보세요. 독립성에는 도움을 요청할 때를 아는 것도 포함됩니다.",
        "매일의 언어 연습이 더는 필요하지 않더라도 자녀의 생각에 계속 관심을 보여 주세요.",
      ],
    },
    6: {
      school: [
        "교실 대화, 프로젝트, 심화 학습 기회에서 이중 언어 능력을 강점으로 분명히 인정합니다.",
        "수업 배치를 검토할 때 접근 기회를 중심에 둡니다. 높은 영어 능력은 심화 과정을 여는 열쇠가 되어야 합니다.",
        "학생이 가진 모든 언어 자원을 활용해 실제 독자를 대상으로 조사하고 발표하고 창작할 기회를 제공합니다.",
        "EAL 지원 종료 후에도 특히 새 학년, 교과 또는 학교로 전환할 때 짧게 점검합니다.",
      ],
      home: [
        "이 중요한 성취를 축하하고 자녀가 사용하는 언어와 소중하게 여기는 언어를 돌아보게 하세요.",
        "이야기, 독서, 친척과의 통화, 미디어, 의미 있는 가족 대화를 통해 모국어를 계속 키우세요.",
        "공통 관심사와 큰 질문을 통해 연결을 유지하세요. 가족 대화는 모든 언어 수준에서 중요합니다.",
        "자녀의 관심사에 맞는 도전적인 수업, 창의적 프로젝트, 리더십 기회를 격려하세요.",
        "다국어 능력은 앞으로 만날 모든 공동체에 기여하는 평생의 강점임을 알려 주세요.",
      ],
    },
  },
  zh: {
    1: {
      school: [
        "数学课上，用图片卡展示解题步骤，边说边指，并在学生开始前示范第一道题。",
        "开始植物单元前，提供包含“根、茎、叶、水”的图片词汇表。让学生在听、说、读或画图时使用它。",
        "一次只问一个简短问题，稍作等待，再提供选项或图片。对于“植物需要什么？”，学生可以指图、画图、使用母语词汇或说出英文 water。",
        "安排一位有耐心的同伴示范课堂常规，但不代替学生完成任务。给两人一个明确任务，如“找出与这个词相配的图片”。",
        "先让学生用母语讨论想法、给图表加标签或借助双语词汇表计划，再帮助他们分享一个关键英语词或短语。",
      ],
      home: [
        "晚餐时或散步时，请孩子用最自在的语言讲讲一天的经历。丰富的母语交流同样支持英语学习。",
        "选择一本孩子喜欢的书，语言不限。看到图片时停下来，请孩子指出、预测或复述发生的事情；不必翻译每个词。",
        "选择门、杯子、鞋子等三个熟悉物品，指着它们分别说出母语和英语名称，并在几天内自然重复。",
        "一起观看一段适龄的英语短片。暂停一两次，指着画面聊聊看到的内容；孩子可以用任何一种语言回答。",
        "具体肯定孩子的努力：“你用了 water 这个词”或“你把想法表达出来了”。赞赏交流而非完美英语能建立信心。",
      ],
    },
    2: {
      school: [
        "新单元开始前，展示关键图片并说出每个词。正式上课前，请学生指认、跟读或把词语与图片配对。",
        "在桌上放一张小型图片词汇表。社会课上，学生可以指向地图、国家和海洋，并在语境中听到这些词。",
        "展示“我看到___”或“我认为___”等句型。先示范一个答案，让学生与同伴练习，再邀请他们简短回答。",
        "给同伴分配角色：一人读图片或提示，另一人指出或找到答案，两人一起练习句型。",
        "先让学生用母语预习复杂概念，再把它与几个关键英语词联系起来，然后才要求英语回答。",
      ],
      home: [
        "用任何语言询问孩子在学校的一天。如果孩子分享了一个新英语词，就一起自然地用一两次。",
        "做饭或购物时，用两种语言说出“切、搅拌、付款、选择”等动作。只有孩子愿意时才请他们跟读。",
        "一起用双语词典查一个实用的学校词汇，再用它画一幅简单的图或写一句话。",
        "选择与孩子已有兴趣相关的歌曲、书籍或视频；熟悉的话题会让新英语更安心。",
        "即使孩子混合两种语言，也要肯定他们表达了完整想法。目标是交流和自信，而非完美语法。",
      ],
    },
    3: {
      school: [
        "阅读前，提供因果关系图，并与全班一起示范填写其中一格。",
        "学生在长篇课文中遇到新词前，用易懂的定义、图片和例句教授少量单元词汇。",
        "把测评说明拆成几个步骤，并在写作前给学生时间重读问题或与同伴确认任务。",
        "设置朗读者、记录者、绘图者和汇报者等明确小组角色，让参与活动具有清晰的语言目的。",
        "保留年级水平的课文，同时标出重点、提供简短词注或音频版本，而不是降低任务难度。",
      ],
      home: [
        "问“今天什么最有意思？”或“什么让你吃惊？”，先让孩子用任一语言回答，再尝试用英语表达一个重点。",
        "一起读短文、漫画或书籍，停下来问发生了什么以及为什么。",
        "玩词语或分类游戏，例如说出食物、动物或以某个音开头的物品。",
        "请孩子教你一个学校新学的概念。多问好奇的追问，不要纠正每个英语错误。",
        "赞赏孩子参与讨论、尝试更长句子或主动请求解释等勇敢行为。",
      ],
    },
    4: {
      school: [
        "新章节开始前，找出学生解释主题所需的学术词汇，并在讨论和写作中反复使用。",
        "先回应学生想法的优点。选择一个接下来要教授的语言特点，而不是标出所有语法错误。",
        "全班分享前，提供讨论问题、几个学术表达，并安排短暂的同伴演练。",
        "阅读任务包含许多信息时，提供时间线、主张—证据图或带注释的课文。",
        "如果演示、配有说明的图表或录音回答更能体现内容理解，就允许学生用这些方式展示学习。",
      ],
      home: [
        "用最能深入交流的语言讨论社区事件、新闻或家庭决定。",
        "留出时间阅读孩子喜欢的小说、漫画、杂志或文章；任何阅读都能增长知识和语言。",
        "请孩子解释学校正在学习的主题，再提出一个真诚的追问。",
        "一起看纪录片或教育节目，只讨论一个新想法，不必解释每个生词。",
        "看到孩子越来越独立，同时在他们需要交谈、提问或鼓励时保持陪伴。",
      ],
    },
    5: {
      school: [
        "教授学科中的精确表达，如“证据表明……”或“相比之下……”，再请学生在讨论中选择一个使用。",
        "把长篇写作分为主张、证据、草稿、反馈和修改几个阶段，并明确展示每一阶段的语言目标。",
        "先肯定推理的优点，再针对衔接词或句式变化等一个高级语言特点提供反馈。",
        "开展有准备时间、证据笔记和明确发言规则的研讨或辩论，让每位学生都能深入参与。",
        "正式 EAL 服务结束后，继续关注新的学业要求，在困难成为障碍前连接适当支持。",
      ],
      home: [
        "用任何语言谈论目标、价值观或时事，并请孩子解释自己的理由。",
        "鼓励孩子为真实读者写日记、故事、评论或信息；有目的的写作能建立信心。",
        "帮助孩子寻找与其兴趣相关的英语书籍、播客或电影。",
        "询问什么支持能让有挑战的课程更容易；独立也包括知道何时寻求帮助。",
        "即使孩子不再需要日常语言练习，也继续真诚关注他们的想法。",
      ],
    },
    6: {
      school: [
        "在课堂对话、项目和高级学习机会中明确肯定双语能力是一项优势。",
        "审视课程安排是否提供公平机会；熟练英语应当打开高级课程的大门，而不是限制发展。",
        "让学生运用全部语言优势，为真实受众开展研究、展示和创作。",
        "退出 EAL 后继续进行简短跟进，尤其是在升入新年级、更换学科或转学时。",
      ],
      home: [
        "庆祝这一里程碑，并邀请孩子思考自己使用和珍视的各种语言。",
        "通过故事、阅读、与亲属通话、媒体和有意义的家庭对话继续发展母语。",
        "通过共同兴趣和重要问题保持联系；无论语言水平如何，家庭交流始终有价值。",
        "鼓励孩子参加符合兴趣的高难度课程、创意项目和领导机会。",
        "提醒孩子，多语言能力是他们带给未来每个群体的终身优势。",
      ],
    },
  },
  es: {
    1: {
      school: [
        "Durante una lección de matemáticas, muestre los pasos con tarjetas ilustradas, señale mientras habla y modele el primer problema antes de que el estudiante comience.",
        "Antes de una unidad sobre plantas, entregue una lista breve con imágenes y las palabras raíz, tallo, hoja y agua. Permita que el estudiante la use al escuchar, hablar, leer o dibujar.",
        "Haga una pregunta breve, espere y ofrezca opciones o una imagen. Para “¿Qué necesita una planta?”, el estudiante puede señalar, dibujar, usar una palabra de su lengua familiar o decir water.",
        "Elija un compañero paciente que modele las rutinas sin hacer el trabajo por el estudiante. Dé a la pareja una tarea clara: “Encuentren la imagen que corresponde a esta palabra”.",
        "Permita que el estudiante primero converse, rotule un diagrama o planifique en su lengua familiar; después ayúdele a compartir una palabra o frase clave en inglés.",
      ],
      home: [
        "Durante la cena o un paseo, invite a su hijo a contarle sobre su día en el idioma que le resulte más cómodo. Conversar ampliamente en la lengua familiar también apoya el inglés.",
        "Elijan un libro favorito en cualquier idioma. Deténganse en las imágenes para señalar, predecir o volver a contar lo ocurrido; no es necesario traducir cada palabra.",
        "Elijan tres objetos conocidos, como puerta, taza y zapatos. Señalen cada uno y digan su nombre en la lengua familiar y en inglés durante varios días.",
        "Vean juntos un video breve en inglés apropiado para su edad. Pausen una o dos veces para señalar y comentar lo que ven; su hijo puede responder en cualquier idioma.",
        "Reconozca el esfuerzo de forma específica: “Usaste la palabra water” o “Encontraste una manera de mostrar tu idea”. Celebre la comunicación, no la perfección.",
      ],
    },
    2: {
      school: [
        "Antes de una unidad nueva, muestre las imágenes clave y diga cada palabra. Invite al estudiante a señalar, repetir o emparejar la palabra con su imagen.",
        "Mantenga un pequeño banco visual de palabras en el escritorio. En estudios sociales, el estudiante puede señalar mapa, país y océano mientras escucha las palabras en contexto.",
        "Muestre un marco como “Yo veo ___” o “Yo pienso ___”. Modele una respuesta, deje que practique con un compañero y luego invite una respuesta breve.",
        "Asigne funciones: una persona lee la imagen o consigna, otra señala o busca la respuesta y ambas practican juntas el marco de oración.",
        "Deje que el estudiante explore una idea difícil en su lengua familiar y después conéctela con unas pocas palabras esenciales en inglés.",
      ],
      home: [
        "Pregunte por el día escolar en cualquier idioma. Si su hijo comparte una palabra nueva en inglés, úsenla juntos una o dos veces de manera natural.",
        "Al cocinar o comprar, nombren acciones en ambos idiomas: cortar, mezclar, pagar, elegir. Invite a repetirlas solo si su hijo quiere.",
        "Busquen juntos una palabra útil de la escuela en un diccionario bilingüe y hagan un dibujo o una oración sencilla con ella.",
        "Elijan canciones, libros o videos relacionados con algo que ya le guste a su hijo; un tema conocido hace que el inglés nuevo se sienta más seguro.",
        "Celebre una idea completa aunque mezcle idiomas. La meta es la comunicación y la confianza, no la gramática perfecta.",
      ],
    },
    3: {
      school: [
        "Antes de leer, entregue un organizador de causa y efecto y complete una casilla como modelo con toda la clase.",
        "Antes de encontrar palabras nuevas en un texto largo, enseñe unas pocas con definiciones claras, imágenes y una oración de ejemplo.",
        "Divida las instrucciones de una evaluación en pasos y permita releer la pregunta o comentar la tarea con un compañero antes de escribir.",
        "Asigne funciones como lector, secretario, ilustrador y portavoz para que cada participación tenga un propósito lingüístico claro.",
        "Mantenga el texto del grado y añada secciones resaltadas, notas breves de vocabulario o una versión en audio, en vez de reducir el reto intelectual.",
      ],
      home: [
        "Pregunte “¿Qué fue interesante hoy?” o “¿Qué te sorprendió?”. Su hijo puede responder en cualquier idioma antes de probar una idea clave en inglés.",
        "Lean juntos un artículo breve, una historieta o un libro y deténganse para preguntar qué ocurrió y por qué.",
        "Jueguen a clasificar o nombrar palabras: alimentos, animales u objetos que comiencen con un sonido elegido.",
        "Invite a su hijo a enseñarle una idea nueva de la escuela. Haga preguntas de seguimiento en vez de corregir cada error en inglés.",
        "Celebre riesgos como participar en una conversación, probar una oración más larga o pedir una aclaración.",
      ],
    },
    4: {
      school: [
        "Antes de un capítulo nuevo, identifique las palabras académicas necesarias para explicar el tema y vuelva a usarlas al conversar y escribir.",
        "Responda primero a la fortaleza de la idea. Elija una característica del lenguaje para enseñar después, en vez de marcar cada error gramatical.",
        "Antes de compartir con toda la clase, ofrezca una pregunta, algunas expresiones académicas y un ensayo breve con un compañero.",
        "Use una línea de tiempo, un organizador de afirmación y evidencia o un texto anotado cuando la lectura contiene muchas ideas.",
        "Permita una presentación, un diagrama explicado o una respuesta grabada cuando muestre mejor el conocimiento del contenido.",
      ],
      home: [
        "Conversen sobre una noticia, un evento comunitario o una decisión familiar en el idioma que permita el diálogo más profundo.",
        "Reserve tiempo para leer por placer: novelas, historietas, revistas o artículos también desarrollan conocimiento y lenguaje.",
        "Pida a su hijo que explique un tema actual de la escuela y haga una pregunta de seguimiento con verdadera curiosidad.",
        "Vean un documental o programa educativo y conversen sobre una idea nueva, no sobre cada palabra desconocida.",
        "Reconozca su creciente independencia y siga disponible para conversar, responder preguntas o animarle.",
      ],
    },
    5: {
      school: [
        "Enseñe expresiones precisas de la materia, como “La evidencia sugiere…” o “En contraste…”, y deje que el estudiante elija una para usar en una conversación.",
        "Organice una escritura extensa por etapas: afirmación, evidencia, borrador, comentarios y revisión. Haga visible la meta lingüística de cada etapa.",
        "Después de reconocer la calidad del razonamiento, centre los comentarios en una característica avanzada, como las transiciones o la variedad de oraciones.",
        "Organice un seminario o debate con tiempo de preparación, notas de evidencia y turnos claros para que todos contribuyan con profundidad.",
        "Después de terminar los servicios formales de EAL, revise las nuevas exigencias académicas y conecte apoyos antes de que una dificultad se convierta en barrera.",
      ],
      home: [
        "Conversen sobre metas, valores o temas actuales en cualquier idioma y pida a su hijo que explique sus razones.",
        "Anime a escribir un diario, cuento, reseña o mensaje para un público real; escribir con propósito fortalece la confianza.",
        "Ayúdele a encontrar libros, pódcast o películas en inglés sobre temas que ya le interesen.",
        "Pregunte qué apoyo facilitaría una clase exigente; ser independiente también significa saber cuándo pedir ayuda.",
        "Siga mostrando curiosidad por sus ideas aunque ya no necesite práctica diaria del idioma.",
      ],
    },
    6: {
      school: [
        "Nombre el bilingüismo como una fortaleza en las conversaciones, los proyectos y las oportunidades de aprendizaje avanzado.",
        "Revise la colocación en cursos pensando en el acceso: un inglés sólido debe abrir puertas a cursos avanzados, no imponer límites.",
        "Ofrezca oportunidades de investigar, presentar y crear para públicos reales usando todos los recursos lingüísticos del estudiante.",
        "Mantenga revisiones breves después de salir de EAL, especialmente al cambiar de grado, materia o escuela.",
      ],
      home: [
        "Celebren este logro e invite a su hijo a reflexionar sobre los idiomas que usa y valora.",
        "Mantengan la lengua familiar mediante historias, lectura, llamadas con familiares, medios y conversaciones significativas.",
        "Sigan conectados mediante intereses compartidos y preguntas importantes; la conversación familiar conserva su valor en todo nivel.",
        "Anime cursos exigentes, proyectos creativos y oportunidades de liderazgo relacionados con sus intereses.",
        "Recuérdele que ser multilingüe es una fortaleza permanente que aporta a cada comunidad futura.",
      ],
    },
  },
  fr: {
    1: {
      school: [
        "Pendant un cours de mathématiques, montrez les étapes avec des cartes illustrées, pointez en parlant et faites le premier problème avant que l'élève commence.",
        "Avant une séquence sur les plantes, donnez une petite liste illustrée avec racine, tige, feuille et eau. L'élève peut l'utiliser pour écouter, parler, lire ou dessiner.",
        "Posez une seule question courte, attendez, puis proposez un choix ou une image. À « De quoi une plante a-t-elle besoin ? », l'élève peut pointer, dessiner, utiliser sa langue familiale ou dire water.",
        "Choisissez un camarade patient qui montre les routines sans faire le travail à la place de l'élève. Donnez une tâche claire : « Trouvez l'image qui correspond à ce mot. »",
        "Laissez d'abord l'élève discuter, légender un schéma ou planifier dans sa langue familiale, puis aidez-le à partager un mot ou une courte expression en anglais.",
      ],
      home: [
        "Au dîner ou pendant une promenade, invitez votre enfant à raconter sa journée dans la langue la plus confortable. Une conversation riche dans la langue familiale soutient aussi l'anglais.",
        "Choisissez un livre préféré dans n'importe quelle langue. Arrêtez-vous sur les images pour pointer, prévoir ou raconter; inutile de traduire chaque mot.",
        "Choisissez trois objets familiers, comme une porte, une tasse et des chaussures. Dites leur nom dans la langue familiale et en anglais pendant plusieurs jours.",
        "Regardez ensemble une courte vidéo en anglais adaptée à l'âge. Faites une ou deux pauses pour montrer et commenter; votre enfant peut répondre dans la langue de son choix.",
        "Soulignez précisément l'effort : « Tu as utilisé le mot water » ou « Tu as trouvé comment montrer ton idée ». Célébrez la communication plutôt que la perfection.",
      ],
    },
    2: {
      school: [
        "Avant une nouvelle séquence, montrez les images clés et dites chaque mot. Invitez l'élève à pointer, répéter ou associer le mot et l'image.",
        "Gardez une petite banque de mots illustrée sur le bureau. En sciences humaines, l'élève peut pointer carte, pays et océan en entendant les mots en contexte.",
        "Affichez une structure comme « Je vois ___ » ou « Je pense que ___ ». Donnez un exemple, laissez l'élève répéter avec un camarade, puis invitez une réponse courte.",
        "Attribuez des rôles : l'un lit l'image ou la consigne, l'autre pointe ou trouve la réponse, puis les deux pratiquent la structure de phrase.",
        "Laissez l'élève découvrir une idée complexe dans sa langue familiale, puis reliez-la à quelques mots anglais essentiels avant de demander une réponse en anglais.",
      ],
      home: [
        "Demandez comment s'est passée l'école dans n'importe quelle langue. Si votre enfant partage un nouveau mot anglais, utilisez-le naturellement une ou deux fois ensemble.",
        "En cuisinant ou en faisant les courses, nommez des actions dans les deux langues : couper, mélanger, payer, choisir. Ne demandez de répéter que si l'enfant le souhaite.",
        "Cherchez ensemble un mot scolaire utile dans un dictionnaire bilingue, puis faites un dessin ou une phrase simple avec ce mot.",
        "Choisissez des chansons, livres ou vidéos liés à un intérêt déjà apprécié; un sujet familier rend le nouvel anglais plus rassurant.",
        "Célébrez une idée complète même si elle mélange les langues. L'objectif est de communiquer avec confiance, pas d'avoir une grammaire parfaite.",
      ],
    },
    3: {
      school: [
        "Avant la lecture, donnez un organisateur de causes et conséquences et complétez une case en exemple avec la classe.",
        "Avant un long texte, enseignez quelques mots avec des définitions accessibles, des images et une phrase d'exemple.",
        "Découpez les consignes d'une évaluation en étapes et laissez le temps de relire la question ou de vérifier la tâche avec un camarade avant d'écrire.",
        "Attribuez des rôles utiles—lecteur, secrétaire, illustrateur, rapporteur—pour que chacun participe avec un objectif langagier clair.",
        "Gardez le texte du niveau scolaire et ajoutez des passages surlignés, de courtes notes lexicales ou une version audio plutôt que de réduire le défi.",
      ],
      home: [
        "Demandez « Qu'est-ce qui était intéressant aujourd'hui ? » ou « Qu'est-ce qui t'a surpris ? ». Votre enfant peut répondre dans l'une ou l'autre langue avant d'essayer une idée en anglais.",
        "Lisez ensemble un court article, une BD ou un livre et demandez ce qui s'est passé et pourquoi.",
        "Jouez avec les mots ou les catégories : aliments, animaux ou objets commençant par un son choisi.",
        "Invitez votre enfant à vous apprendre une nouvelle idée de l'école. Posez des questions plutôt que de corriger chaque erreur d'anglais.",
        "Félicitez les prises de risque : participer à une discussion, essayer une phrase plus longue ou demander une explication.",
      ],
    },
    4: {
      school: [
        "Avant un nouveau chapitre, repérez les mots académiques nécessaires pour expliquer le sujet, puis réutilisez-les à l'oral et à l'écrit.",
        "Réagissez d'abord à la force de l'idée. Choisissez un seul élément de langue à enseigner ensuite au lieu de signaler toutes les erreurs.",
        "Avant le partage collectif, donnez une question, quelques expressions académiques et un court temps de répétition avec un camarade.",
        "Proposez une frise, un organisateur affirmation-preuve ou un texte annoté lorsque la lecture contient de nombreuses idées.",
        "Autorisez une présentation, un schéma expliqué ou une réponse enregistrée si cela montre mieux la compréhension du contenu.",
      ],
      home: [
        "Discutez d'un événement local, d'une actualité ou d'une décision familiale dans la langue qui permet la conversation la plus riche.",
        "Réservez du temps à la lecture-plaisir : romans, BD, magazines et articles développent tous les connaissances et le langage.",
        "Demandez à votre enfant d'expliquer un sujet étudié à l'école, puis posez une vraie question par curiosité.",
        "Regardez un documentaire ou une émission éducative et discutez d'une idée nouvelle, pas de chaque mot inconnu.",
        "Reconnaissez son autonomie croissante tout en restant disponible pour une conversation, une question ou un encouragement.",
      ],
    },
    5: {
      school: [
        "Enseignez des formulations précises comme « Les preuves suggèrent… » ou « En revanche… », puis laissez l'élève en choisir une pour la discussion.",
        "Organisez un long travail d'écriture en étapes : affirmation, preuves, brouillon, retour et révision. Rendez visible l'objectif langagier de chaque étape.",
        "Après avoir valorisé le raisonnement, concentrez le retour sur un élément avancé, comme les transitions ou la variété des phrases.",
        "Organisez un séminaire ou un débat avec préparation, notes de preuves et règles de prise de parole claires afin que chacun contribue.",
        "Après la fin du soutien EAL, vérifiez les nouvelles exigences scolaires et mettez en place une aide avant qu'une difficulté ne devienne un obstacle.",
      ],
      home: [
        "Parlez d'objectifs, de valeurs ou d'actualité dans n'importe quelle langue et demandez à votre enfant d'expliquer ses raisons.",
        "Encouragez un journal, une histoire, une critique ou un message destiné à un vrai lecteur; écrire avec un but développe la confiance.",
        "Aidez votre enfant à trouver des livres, balados ou films en anglais sur des sujets qui l'intéressent déjà.",
        "Demandez quel soutien faciliterait un cours difficile; être autonome, c'est aussi savoir quand demander de l'aide.",
        "Restez curieux de ses idées même lorsqu'une pratique quotidienne de la langue n'est plus nécessaire.",
      ],
    },
    6: {
      school: [
        "Présentez le bilinguisme comme un atout dans les échanges, les projets et les possibilités d'apprentissage avancé.",
        "Réexaminez l'orientation en pensant à l'accès : un anglais solide doit ouvrir les portes des cours avancés, pas limiter les ambitions.",
        "Offrez des occasions de rechercher, présenter et créer pour de vrais publics en utilisant toutes les ressources linguistiques de l'élève.",
        "Maintenez de brefs suivis après la sortie du programme EAL, surtout lors d'un changement de classe, de matière ou d'école.",
      ],
      home: [
        "Célébrez cette étape et invitez votre enfant à réfléchir aux langues qu'il utilise et apprécie.",
        "Faites vivre la langue familiale par les histoires, la lecture, les appels aux proches, les médias et les conversations importantes.",
        "Restez proches grâce aux intérêts communs et aux grandes questions; la conversation familiale garde sa valeur à tout niveau.",
        "Encouragez les cours exigeants, les projets créatifs et les responsabilités qui correspondent à ses intérêts.",
        "Rappelez-lui que le multilinguisme est une force durable qu'il apporte à chaque future communauté.",
      ],
    },
  },
  ja: {
    1: {
      school: [
        "算数の授業では、絵カードで手順を示し、話しながら指差し、生徒が始める前に最初の問題を実演します。",
        "植物の単元の前に、根・茎・葉・水の絵と単語の小さな一覧を渡します。聞く、話す、読む、描く活動で使えるようにします。",
        "短い質問を一つだけして待ち、選択肢や絵を示します。「植物には何が必要？」には、指差し、絵、家庭言語、または英語の water で答えられます。",
        "課題を代わりにせず、教室の流れを示せる思いやりのある仲間と組ませます。「この単語に合う絵を探す」など明確な課題を一つ与えます。",
        "まず家庭言語で考えを話す、図にラベルを付ける、二言語用語集で計画することを認め、その後、重要な英語の語句を一つ伝える手助けをします。",
      ],
      home: [
        "夕食時や散歩中に、一番話しやすい言語で一日の出来事を聞きましょう。家庭言語での豊かな会話も英語学習を支えます。",
        "どの言語でも好きな本を選びます。絵を見て立ち止まり、指差す、予想する、出来事を語り直す活動をしましょう。全てを訳す必要はありません。",
        "ドア、コップ、靴など身近な物を三つ選び、家庭言語と英語の名前を言いながら数日間自然に繰り返します。",
        "年齢に合う短い英語動画を一緒に見ます。一、二度止めて見える物を指しながら話しましょう。どちらの言語で答えてもかまいません。",
        "「water という言葉を使えたね」「考えを伝えられたね」と努力を具体的に認めます。完璧さより伝えることを喜びましょう。",
      ],
    },
    2: {
      school: [
        "新しい単元の前に大切な絵を見せ、単語を言います。授業前に指差す、復唱する、単語と絵を合わせる活動をします。",
        "机上に小さな絵付き単語集を置きます。社会科では地図、国、海を指し、文脈の中でその語を聞けるようにします。",
        "「私は___が見えます」「私は___と思います」などの文型を示します。一つ実演し、仲間と練習してから短い答えを促します。",
        "一人が絵や指示を読み、もう一人が答えを指す・探すなど役割を決め、二人で文型を練習します。",
        "難しい考えをまず家庭言語で確認し、英語で答える前に重要な英単語と結び付けます。",
      ],
      home: [
        "どの言語でも学校での一日を聞きましょう。新しい英単語が一つ出たら、一緒に自然に一、二度使ってみます。",
        "料理や買い物で、切る、混ぜる、払う、選ぶなどの動作を両方の言語で言います。本人が望む時だけ繰り返してもらいます。",
        "学校で役立つ単語を二言語辞書で一緒に調べ、その語を使った簡単な絵や文を作ります。",
        "すでに好きなことに関係する歌、本、動画を選びます。身近な話題は新しい英語への安心感につながります。",
        "言語が混ざっても、考えを最後まで伝えたことを喜びます。目標は完璧な文法ではなく、伝える力と自信です。",
      ],
    },
    3: {
      school: [
        "読む前に原因と結果の図を渡し、一つの欄をクラスで完成させて見本にします。",
        "長い文章で新しい語に出会う前に、分かりやすい定義、絵、例文を使って重要語を少数教えます。",
        "テストの指示を段階に分け、書く前に質問を読み直したり仲間と課題を確認したりする時間を与えます。",
        "読み手、記録係、絵係、発表係などの役割を決め、参加に明確な言語目的を持たせます。",
        "学年相当の文章を保ち、重要箇所の強調、短い語注、音声版を加え、考える難しさは下げません。",
      ],
      home: [
        "「今日は何が面白かった？」「何に驚いた？」と尋ね、英語で要点を試す前にどちらの言語でも答えられるようにします。",
        "短い記事、漫画、本を一緒に読み、何が起きたか、なぜ起きたかを尋ねます。",
        "食べ物、動物、特定の音で始まる物などを挙げる単語・分類ゲームをします。",
        "学校で学んだ新しいことを教えてもらいます。全ての英語の誤りを直すより、興味を持って質問を続けます。",
        "話し合いに参加する、長い文に挑戦する、説明を求めるなどの挑戦を認めます。",
      ],
    },
    4: {
      school: [
        "新しい章の前に、内容を説明するための学術語を選び、話し合いと作文で繰り返し使います。",
        "まず考えの良さに応えます。全ての文法ミスを指摘せず、次に学ぶ言語要素を一つ選びます。",
        "全体で発表する前に、話題、学術的な表現、仲間と短く練習する時間を用意します。",
        "多くの考えを整理する読解では、年表、主張と根拠の図、注釈付き文章を使います。",
        "発表、説明付き図、録音回答の方が内容理解を示せる場合は、その方法を認めます。",
      ],
      home: [
        "地域の出来事、ニュース、家族の決定について、最も深く話せる言語で会話します。",
        "小説、漫画、雑誌、記事など好きな読書の時間を作ります。どれも知識と言語を育てます。",
        "学校で学んでいるテーマを説明してもらい、純粋な興味から質問を一つ続けます。",
        "ドキュメンタリーや教育番組を一緒に見て、知らない全ての語ではなく新しい考えを一つ話します。",
        "自立が進んでいることを認めながら、会話、質問、励ましが必要な時はそばにいます。",
      ],
    },
    5: {
      school: [
        "「根拠から___が分かります」「対照的に___」など教科特有の正確な表現を教え、話し合いで一つ選んで使わせます。",
        "長い作文を主張、根拠、下書き、助言、修正に分け、各段階の言語目標を見える形にします。",
        "考え方の良さを認めた後、つなぎ言葉や文の多様性など高度な言語要素を一つ選んで助言します。",
        "準備時間、根拠メモ、明確な発言順を設けた討論を行い、全員が考えを持って参加できるようにします。",
        "正式なEAL支援終了後も新しい学習上の要求を確認し、困難が障壁になる前に支援につなぎます。",
      ],
      home: [
        "目標、価値観、時事問題をどの言語でも話し、理由を説明してもらいます。",
        "実際の読み手に向けた日記、物語、感想、メッセージを勧めます。目的のある作文は自信を育てます。",
        "すでに関心があるテーマの英語の本、ポッドキャスト、映画を一緒に探します。",
        "難しい授業にどんな支援があると良いか尋ねます。自立には助けを求める時を知ることも含まれます。",
        "毎日の言語練習が不要になっても、考えに関心を持ち続けます。",
      ],
    },
    6: {
      school: [
        "教室での会話、プロジェクト、高度な学習機会で、バイリンガルであることを強みとして明確に伝えます。",
        "履修配置を機会へのアクセスという視点で見直します。高い英語力が上級科目への扉を開くようにします。",
        "全ての言語資源を生かし、実際の相手に向けて調査、発表、制作する機会を提供します。",
        "EAL終了後も、特に学年、教科、学校が変わる時に短い確認を続けます。",
      ],
      home: [
        "この節目を祝い、使っている言語や大切にしている言語について振り返るよう促します。",
        "物語、読書、親族との通話、メディア、意味のある家族の会話を通して家庭言語を育て続けます。",
        "共通の関心や大きな問いでつながり続けます。家族の会話はどの段階でも価値があります。",
        "関心に合う難しい科目、創造的な活動、リーダーシップの機会を勧めます。",
        "多言語であることは、将来どの共同体にも持ち込める生涯の強みだと伝えます。",
      ],
    },
  },
  de: {
    1: {
      school: [
        "Zeigen Sie im Mathematikunterricht die Arbeitsschritte mit Bildkarten, deuten Sie beim Sprechen darauf und lösen Sie die erste Aufgabe als Modell.",
        "Geben Sie vor einer Unterrichtseinheit über Pflanzen eine kleine Bild-Wort-Liste mit Wurzel, Stängel, Blatt und Wasser. Das Kind darf sie beim Hören, Sprechen, Lesen und Zeichnen nutzen.",
        "Stellen Sie eine kurze Frage, warten Sie und bieten Sie eine Auswahl oder ein Bild an. Auf „Was braucht eine Pflanze?“ darf das Kind zeigen, zeichnen, ein Wort in der Familiensprache oder water sagen.",
        "Wählen Sie ein geduldiges Partnerkind, das Abläufe vormacht, ohne die Aufgabe zu übernehmen. Geben Sie dem Paar einen klaren Auftrag: „Findet das passende Bild zu diesem Wort.“",
        "Lassen Sie das Kind eine Idee zuerst in der Familiensprache besprechen, ein Schaubild beschriften oder mit einem zweisprachigen Glossar planen. Helfen Sie danach bei einem englischen Schlüsselwort.",
      ],
      home: [
        "Bitten Sie Ihr Kind beim Abendessen oder Spazierengehen, in der vertrautesten Sprache von seinem Tag zu erzählen. Ausführliche Gespräche in der Familiensprache unterstützen auch Englisch.",
        "Wählen Sie ein Lieblingsbuch in einer beliebigen Sprache. Halten Sie bei Bildern inne und lassen Sie Ihr Kind zeigen, vorhersagen oder nacherzählen; nicht jedes Wort muss übersetzt werden.",
        "Wählen Sie drei vertraute Dinge wie Tür, Tasse und Schuhe. Zeigen Sie darauf und nennen Sie sie in der Familiensprache und auf Englisch über mehrere Tage hinweg.",
        "Sehen Sie gemeinsam einen kurzen, altersgerechten englischen Clip. Halten Sie ein- oder zweimal an und sprechen Sie über das Bild; Ihr Kind darf in jeder Sprache antworten.",
        "Benennen Sie den Einsatz konkret: „Du hast water gesagt“ oder „Du hast deine Idee gezeigt“. Lob für Verständigung statt für perfektes Englisch stärkt das Vertrauen.",
      ],
    },
    2: {
      school: [
        "Zeigen und benennen Sie vor einer neuen Einheit die wichtigsten Bilder. Das Kind kann auf das Wort zeigen, es wiederholen oder dem Bild zuordnen.",
        "Legen Sie eine kleine bebilderte Wortbank auf den Tisch. Im Sachunterricht kann das Kind auf Karte, Land und Ozean zeigen und die Wörter im Zusammenhang hören.",
        "Zeigen Sie Satzanfänge wie „Ich sehe ___“ oder „Ich denke ___“. Modellieren Sie eine Antwort, lassen Sie sie zu zweit üben und laden Sie dann zu einer kurzen Antwort ein.",
        "Verteilen Sie Rollen: Eine Person liest das Bild oder die Aufgabe, die andere zeigt oder findet die Antwort; anschließend üben beide den Satzanfang.",
        "Lassen Sie eine schwierige Idee zuerst in der Familiensprache erkunden und verbinden Sie sie dann mit wenigen wichtigen englischen Wörtern.",
      ],
      home: [
        "Fragen Sie in einer beliebigen Sprache nach dem Schultag. Teilt Ihr Kind ein neues englisches Wort, verwenden Sie es gemeinsam ein- oder zweimal ganz natürlich.",
        "Benennen Sie beim Kochen oder Einkaufen Handlungen in beiden Sprachen: schneiden, mischen, bezahlen, wählen. Ihr Kind wiederholt sie nur, wenn es möchte.",
        "Schlagen Sie gemeinsam ein nützliches Schulwort in einem zweisprachigen Wörterbuch nach und zeichnen Sie dazu oder bilden Sie einen einfachen Satz.",
        "Wählen Sie Lieder, Bücher oder Videos zu einem bestehenden Interesse. Ein vertrautes Thema macht neues Englisch zugänglicher.",
        "Würdigen Sie einen vollständigen Gedanken, auch wenn Sprachen gemischt werden. Ziel sind Verständigung und Selbstvertrauen, nicht perfekte Grammatik.",
      ],
    },
    3: {
      school: [
        "Geben Sie vor dem Lesen eine Ursache-Wirkung-Vorlage und füllen Sie ein Feld gemeinsam mit der Klasse als Beispiel aus.",
        "Vermitteln Sie vor einem längeren Text wenige Schlüsselwörter mit verständlichen Definitionen, Bildern und einem Beispielsatz.",
        "Teilen Sie Prüfungsanweisungen in Schritte und geben Sie Zeit, die Frage erneut zu lesen oder die Aufgabe vor dem Schreiben mit einem Partner zu klären.",
        "Vergeben Sie klare Rollen wie Lesen, Schreiben, Zeichnen und Berichten, damit jede Beteiligung einen sprachlichen Zweck hat.",
        "Behalten Sie den altersgemäßen Text bei und ergänzen Sie Markierungen, kurze Worterklärungen oder eine Audioversion, statt die Denkanforderung zu senken.",
      ],
      home: [
        "Fragen Sie: „Was war heute interessant?“ oder „Was hat dich überrascht?“ Ihr Kind darf zuerst in jeder Sprache antworten und danach eine Kernidee auf Englisch versuchen.",
        "Lesen Sie gemeinsam einen kurzen Artikel, Comic oder ein Buch und fragen Sie, was passiert ist und warum.",
        "Spielen Sie ein Wort- oder Kategoriespiel, etwa mit Lebensmitteln, Tieren oder Dingen, die mit einem bestimmten Laut beginnen.",
        "Lassen Sie sich eine neue Schulidee erklären. Stellen Sie neugierige Rückfragen, statt jeden englischen Fehler zu verbessern.",
        "Loben Sie mutige Schritte wie die Teilnahme an einem Gespräch, einen längeren Satz oder die Bitte um eine Erklärung.",
      ],
    },
    4: {
      school: [
        "Bestimmen Sie vor einem neuen Kapitel die Fachwörter, die zum Erklären des Themas nötig sind, und greifen Sie sie im Gespräch und Schreiben wieder auf.",
        "Reagieren Sie zuerst auf die Stärke der Idee. Wählen Sie ein sprachliches Merkmal als nächsten Lernschritt, statt jeden Grammatikfehler zu markieren.",
        "Geben Sie vor dem Austausch im Plenum eine Gesprächsfrage, einige fachsprachliche Wendungen und kurze Übungszeit mit einem Partner.",
        "Bieten Sie eine Zeitleiste, eine Behauptung-Beleg-Vorlage oder einen kommentierten Text an, wenn beim Lesen viele Gedanken zusammengehalten werden müssen.",
        "Erlauben Sie eine Präsentation, ein erklärtes Schaubild oder eine Audioantwort, wenn dies das Fachwissen besser zeigt.",
      ],
      home: [
        "Sprechen Sie über ein Ereignis in der Gemeinde, Nachrichten oder eine Familienentscheidung in der Sprache, die das tiefste Gespräch ermöglicht.",
        "Planen Sie Zeit zum Lesen aus Freude ein—Romane, Comics, Zeitschriften und Artikel bauen Wissen und Sprache auf.",
        "Bitten Sie Ihr Kind, ein aktuelles Schulthema zu erklären, und stellen Sie eine ehrliche, interessierte Nachfrage.",
        "Sehen Sie eine Dokumentation oder Lernsendung und sprechen Sie über eine neue Idee, nicht über jedes unbekannte Wort.",
        "Würdigen Sie die wachsende Selbstständigkeit und bleiben Sie für Gespräche, Fragen und Ermutigung erreichbar.",
      ],
    },
    5: {
      school: [
        "Vermitteln Sie präzise Fachformulierungen wie „Die Belege deuten darauf hin…“ oder „Im Gegensatz dazu…“ und lassen Sie eine davon im Gespräch verwenden.",
        "Gliedern Sie eine längere Schreibaufgabe in Behauptung, Belege, Entwurf, Rückmeldung und Überarbeitung. Machen Sie das Sprachziel jeder Phase sichtbar.",
        "Würdigen Sie zuerst die Qualität der Argumentation und konzentrieren Sie die Rückmeldung dann auf ein anspruchsvolles Merkmal wie Übergänge oder Satzvariation.",
        "Gestalten Sie ein Seminar oder eine Debatte mit Vorbereitungszeit, Belegnotizen und klaren Gesprächsregeln, damit alle durchdacht beitragen können.",
        "Prüfen Sie nach dem Ende der formellen EAL-Förderung neue schulische Anforderungen und vermitteln Sie Unterstützung, bevor Schwierigkeiten zu Barrieren werden.",
      ],
      home: [
        "Sprechen Sie in jeder Sprache über Ziele, Werte oder aktuelle Themen und bitten Sie Ihr Kind, seine Gründe zu erklären.",
        "Ermutigen Sie zu Tagebuch, Geschichte, Rezension oder Nachricht für ein echtes Publikum; Schreiben mit Zweck stärkt das Selbstvertrauen.",
        "Suchen Sie gemeinsam englische Bücher, Podcasts oder Filme zu Themen, die Ihr Kind bereits interessieren.",
        "Fragen Sie, welche Unterstützung einen anspruchsvollen Kurs erleichtern würde; Selbstständigkeit bedeutet auch zu wissen, wann Hilfe nötig ist.",
        "Bleiben Sie an den Gedanken Ihres Kindes interessiert, auch wenn tägliche Sprachübungen nicht mehr nötig sind.",
      ],
    },
    6: {
      school: [
        "Benennen Sie Mehrsprachigkeit in Gesprächen, Projekten und anspruchsvollen Lernangeboten ausdrücklich als Stärke.",
        "Prüfen Sie Kursentscheidungen mit Blick auf Zugang: Sicheres Englisch soll Türen zu anspruchsvollen Angeboten öffnen, keine Grenzen setzen.",
        "Bieten Sie Möglichkeiten, für echte Zielgruppen zu forschen, zu präsentieren und zu gestalten und dabei alle sprachlichen Stärken einzusetzen.",
        "Führen Sie nach dem EAL-Austritt kurze Gespräche fort, besonders beim Wechsel von Jahrgang, Fach oder Schule.",
      ],
      home: [
        "Feiern Sie diesen Meilenstein und laden Sie Ihr Kind ein, über die Sprachen nachzudenken, die es nutzt und schätzt.",
        "Pflegen Sie die Familiensprache durch Geschichten, Lesen, Gespräche mit Verwandten, Medien und bedeutungsvolle Familiengespräche.",
        "Bleiben Sie über gemeinsame Interessen und große Fragen verbunden; Familiengespräche sind auf jeder Sprachstufe wertvoll.",
        "Ermutigen Sie zu anspruchsvollen Kursen, kreativen Projekten und Führungsaufgaben, die zu den Interessen Ihres Kindes passen.",
        "Erinnern Sie daran, dass Mehrsprachigkeit eine lebenslange Stärke ist, die Ihr Kind in jede zukünftige Gemeinschaft einbringt.",
      ],
    },
  },
};
