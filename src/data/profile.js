export const profile = {
  name: '신규철',
  englishName: 'Kyuchul Shin',
  hanjaName: '申奎澈',
  birthday: '1999.07.19',
  title: '풀스택 개발자',
  tagline: "사용자가 불편함을 느끼기 전에 먼저 찾아 없애는, '화면 뒤의 안정성'을 만드는 풀스택 개발자입니다.",
  bio: "제 개발 경험은 '콘텐츠를 사용자에게 안정적으로 전달하는 과정'을 넓혀온 과정이었습니다. KARING.kr에서 웹 서비스의 트래픽과 성능을, 애니멀톡에서 모바일 앱·백엔드·인프라 운영 전체를, AutoQuant.AI에서 AI를 실제 서비스 로직에 연결하는 신뢰성 설계까지 경험했습니다. 기능을 완성하는 것만큼 중요한 건 사용자가 불편함을 느끼기 전에 먼저 찾아 없애는 것이라고 생각합니다.",
  contact: {
    email: 'sls789456@naver.com',
    github: 'https://github.com/kyuchory',
  },
  career: [
    {
      org: '주식회사 클로이소프트',
      period: '2025.04.01 ~ 2025.08.29 (5개월)',
      role: '개발팀 · 정규직 · 프론트엔드 개발 (사원)',
      type: '경력',
      details: [
        '담당 프로젝트: 중국 치과의사 전용 커뮤니티 웹 서비스 (Next.js App Router 단독 개발·운영, 실사용자 100명+)',
        'Zustand 기반 전역 상태 설계로 다국어 및 복합 권한(의사/학생) 시스템 최적화',
        'Figma 디자인 토큰 기반 반응형 UI 구현 및 Swagger 기반 백엔드 협업 리드',
      ],
    },
    {
      org: '삼성 청년 SW 아카데미(SSAFY) 16기',
      period: '2026.07.07 ~ 현재 (수강 중)',
      role: 'Java 백엔드 트랙 교육생',
      type: '경험',
      details: [
        'Java/OOP: 기본 문법, 추상화 · 상속 · 다형성 · 인터페이스',
        '자료구조: Generic, Collection Framework, XML/JSON 파싱',
        '심화: 예외 처리, 멀티스레드, Java 관통 프로젝트',
        'AI/ML 이론(서울대 · 연세대 · KAIST 교수진): AI/ML 기초 · 방법론(지도/비지도학습, 회귀, 신경망), NLP · 언어모델(임베딩, RNN, Transformer, LLM 학습/추론/평가), 비전 · 이미지 파운데이션(VLM, Small VLM, 합성데이터), 심화(LangChain, AI Agent, 효율적 학습법, Ambient AI)',
      ],
    },
  ],
  education: [
    {
      org: '단국대학교',
      period: '2018.02 ~ 2024.02',
      role: '컴퓨터공학과 졸업 (심화과정)',
      type: '학력',
      gpaOverall: '전체 평점 3.6 / 4.5 (환산 91점 / 100점)',
      gpaMajor: '전공(전필 · 전선) 평점 약 3.86 / 4.5',
      notableCourses: [
        '데이터베이스 (A+)',
        '객체지향프로그래밍(SW) (A+)',
        '프로그래밍언어 (A+)',
        '컴퓨터구조론 (A+)',
        '논리회로 (A+)',
        '디지털설계 (A+)',
        '로봇공학개론 (A+)',
      ],
    },
  ],
  certifications: [
    { name: '정보처리기사', org: '한국산업인력공단', date: '2023.11.15' },
    { name: 'SQLD', org: '한국데이터산업진흥원', date: '2026.06.19' },
  ],
  languages: [{ name: 'OPIc (영어)', level: 'IM1 (Intermediate Mid)', date: '2026.03.15' }],
  military: {
    status: '병역필',
    detail: '육군 병장 (방공) 만기제대',
    period: '2019.08.26 ~ 2021.03.21',
  },
  awards: [
    {
      title: 'SW융합대학 x 경영경제대학 연합 해커톤 — 동상',
      org: '단국대학교',
      date: '2021.11.15',
      summary:
        '환경 보호 활동과 경제적 보상을 결합한 순환형 비즈니스 모델(BM) 기반 커머스 플랫폼입니다. 경영 전공 팀원들의 비즈니스 아이디어를 기술 명세로 정의하며, 재활용 참여 데이터가 실제 보상 시스템으로 이어지는 핵심 로직을 구축하여 동상을 수상했습니다.',
      highlights: [
        "BM 기술 구체화: '재활용 참여 → 포인트 적립 → 쇼핑몰 캐시 전환'으로 이어지는 순환형 보상 시스템의 백엔드 로직 및 데이터 흐름 설계",
        '데이터 정합성 확보: 포인트 적립·사용 프로세스에서 오차 없는 실시간 정산 로직을 구현하여 시스템의 기술적 안정성 확보',
        '인터페이스 최적화: 복잡한 적립/결제 프로세스를 React Native 기반의 직관적인 모바일 UI로 설계',
        "타 전공 협업 가교 역할: 경영 전공 팀원들의 아이디어를 기능 명세서로 구체화하는 '기술 가교' 역할을 수행하며 초기 아이디어를 실제 서비스로 구현",
      ],
    },
    {
      title: 'SW융합대학 x 경영경제대학 연합 해커톤 — 은상',
      org: '단국대학교',
      date: '2022.08.15',
      summary:
        '시니어 계층의 디지털 포용성을 높이기 위한 병원 관리 및 공공기관 탐색 MVP 서비스입니다. 기획 단계부터 참여하여 시니어 특화 UX를 기술적으로 구현하고, 긴급 상황 대응 프로세스를 최적화하여 기술 안정성과 실효성을 인정받아 은상을 수상했습니다.',
      highlights: [
        'LBS(위치 기반 서비스) 고도화: 카카오맵 API를 연동하여 병원 및 공공기관 실시간 검색 기능을 구현하고, 지도 호출 로직 최적화를 통해 렌더링 속도 20% 향상',
        '시니어 특화 UX 구현: 고대비 UI, 텍스트 크기 최적화, 버튼 배치 등 시니어 맞춤형 UX 가이드를 준수한 고성능 인터페이스 설계',
        '긴급 대응 프로세스 최적화: Native Linking 기술을 활용하여 긴급 상황 시 즉시 병원 및 보호자 연결이 가능한 프로세스 구축(단계 최소화)',
        '기술 커뮤니케이션 주도: 기획 의도를 실제 기능으로 연결하는 과정에서 기술적 의사결정을 주도하며 전년 대비 고도화된 협업 역량 발휘',
      ],
    },
  ],
  skills: {
    Frontend: ['React', 'React Native', 'Next.js', 'TypeScript', 'Zustand'],
    Backend: [
      'Node.js (Express)',
      'Spring Boot',
      'RESTful API',
      'JWT 인증/인가',
      'Sequelize ORM',
      'RabbitMQ',
      '트랜잭션 · 비즈니스 로직',
    ],
    Database: ['MySQL', 'Redis', 'SQL 쿼리 최적화 · 데이터 모델링'],
    'DevOps / Infra': [
      'Naver Cloud Platform (Ubuntu Server)',
      'Object Storage (S3-compatible)',
      'CI/CD (GitHub Actions)',
    ],
    Tools: ['Git / GitHub', 'Figma', 'Swagger'],
    Strengths: ['협업 커뮤니케이션', '문제 해결 능력', '서비스 운영 경험'],
  },
}
