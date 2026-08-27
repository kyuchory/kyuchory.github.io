import aqHeader from '../assets/autoquant/AutoQuant.AI_header.png'
import aqLogin from '../assets/autoquant/1.login.png'
import aqDashboard from '../assets/autoquant/2.dashboard.png'
import aqPortfolio from '../assets/autoquant/3.portfolio.png'
import aqTrigger from '../assets/autoquant/4.trigger.png'
import aqTriggerHalfAuto from '../assets/autoquant/5.trigger_halfauto.png'
import aqAiReport from '../assets/autoquant/6.ai_report.png'
import atHeader from '../assets/animaltalk/animal_talk_header.webp'
import atHome from '../assets/animaltalk/1.home.webp'
import atFeed from '../assets/animaltalk/2.feed.webp'
import atCut from '../assets/animaltalk/3.cut.webp'
import atProfile from '../assets/animaltalk/4.profile.webp'
import atChatDetail from '../assets/animaltalk/5.chatdetail.webp'
import atSearchFeed from '../assets/animaltalk/6.search_feed.webp'
import atNotification from '../assets/animaltalk/7.notification.webp'
import atBookmarked from '../assets/animaltalk/8.bookmarked.webp'
import atChatList from '../assets/animaltalk/9.chat_list.webp'
import atWritePost from '../assets/animaltalk/10.write_post.webp'

export const projects = [
  {
    slug: 'autoquant-ai',
    name: 'AutoQuant.AI',
    englishName: 'AutoQuant.AI',
    coverImage: aqHeader,
    galleryAspect: 'wide',
    gallery: [
      {
        category: '대시보드 & 자동매매 조건',
        images: [
          { src: aqDashboard, alt: '실시간 시세 대시보드' },
          { src: aqTrigger, alt: '조건부 자동매매 조건 설정' },
        ],
      },
      {
        category: 'AI 리포트 & 반자동 신호',
        images: [
          { src: aqAiReport, alt: 'AI 투자 리포트' },
          { src: aqTriggerHalfAuto, alt: 'AI 반자동 매매 신호 제안 모달' },
        ],
      },
      {
        category: '로그인 & 포트폴리오',
        images: [
          { src: aqLogin, alt: '카카오 로그인' },
          { src: aqPortfolio, alt: '포트폴리오 보유 종목 현황' },
        ],
      },
    ],
    period: '2026.07 ~ 2026.08',
    status: '개인 프로젝트',
    role: '1인 풀스택 (기획 · 설계 · 개발)',
    summary:
      'KIS 실시간 시세와 뉴스 AI 감정분석을 결합해, 가격·손절·익절·트레일링 스탑·AI 점수 조건에 따라 자동으로 매매를 체결하는 실시간 금융 모의투자 시스템',
    description:
      'Spring Boot(백엔드)와 Next.js(프론트엔드)로 구축한 실시간 금융 데이터 파이프라인 + AI 모의투자 플랫폼입니다. 한국투자증권(KIS) Open API WebSocket으로 국내 대형주 10종목의 실시간 체결가를 구독하고, 네이버 뉴스 API로 수집한 뉴스를 OpenAI로 감정 분석·임베딩해 MySQL VECTOR(1536) 컬럼 기반 RAG 리포트를 생성합니다. 여기에 가격/손절/익절/트레일링 스탑/AI 점수 조건을 AND·OR로 결합하는 조건부 자동매매 엔진을 얹어, 조건이 충족되면 모의투자 계좌로 자동 주문이 체결되도록 설계했습니다.',
    stack: {
      Backend: ['Spring Boot 3.5', 'Java 17', 'Spring AI', 'JWT', 'OAuth 2.0 (Kakao)'],
      Frontend: ['Next.js 16 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Zustand'],
      Database: ['MySQL 9 (VECTOR)', 'Redis', 'RabbitMQ'],
      'AI · 외부 연동': ['OpenAI API (Chat/Embedding)', '한국투자증권(KIS) Open API', '네이버 뉴스 검색 API'],
    },
    myRole: [
      '조건(주문 액션) + 트리거(발동 조건) 1:N 분리 구조로 가격·손절·익절·트레일링 스탑·AI 점수 기반 조건부 자동매매 엔진 설계 및 구현',
      'Spring 이벤트 기반 아키텍처(ApplicationEvent + 전용 스레드풀 @Async)로 KIS 웹소켓 수신 스레드와 주문 실행 스레드를 분리해 블로킹 문제 해결',
      '한국투자증권(KIS) WebSocket 실시간 체결가 구독, 재연결·재구독 로직, REST 인증 토큰 자동 갱신 스케줄러 구현',
      'OpenAI API 기반 뉴스 감정 분석(0~100점) + 임베딩 생성 파이프라인을 RabbitMQ 비동기 워커로 구축',
      'MySQL 네이티브 VECTOR(1536) 컬럼과 코사인 유사도 검색으로 별도 Vector DB 없이 RAG 투자 리포트 생성 구현',
      'Redis 캐싱 계층(시세·토큰·동시성 락·레이트리미터) 설계 및 락 TTL과 외부 API 응답시간 간의 정합성 검증',
      'Next.js(App Router) + Zustand + React Query 기반 프론트엔드 실시간 대시보드 개발 (실시간 시세, 조건 등록, AI 리포트, WebSocket 알림)',
      '도메인별 MySQL 제약조건(UNIQUE/CHECK) 명명 규칙과 CustomException 1:1 매핑으로 예외 처리 체계화',
    ],
    links: {
      github: 'https://github.com/kyuchory/AutoQuant.AI',
    },
    caseStudies: [
      {
        title: '조건 매칭 엔진의 이벤트 처리 스레드 블로킹 문제 해결',
        problem:
          'KIS 실시간 체결가 수신 → 조건 매칭 → 주문 실행으로 이어지는 이벤트 체인이 KIS WebSocket의 단일 이벤트 루프 스레드에서 그대로 동기 처리되어, 조건 하나만 매칭돼도 해당 스레드가 최대 8초간 블로킹되고 그 사이 모니터링 중인 10개 종목의 실시간 체결 데이터 수신이 전부 멈췄습니다.',
        cause:
          '이벤트 발행부(KisWebsocketClient)와 리스너부(ConditionMatchingEngine) 사이에 비동기 경계가 없어, Spring의 ApplicationEventPublisher.publishEvent()가 기본값인 동기 호출로 동작해 리스너가 발행 스레드에서 즉시 실행됐습니다. 그 안에서 KIS 주문 API를 WebClient.block()으로 동기 호출한 것이 근본 원인이었습니다.',
        solution:
          '조건 매칭 전용 스레드풀(ThreadPoolTaskExecutor)을 구성하고 이벤트 리스너에 @Async(CONDITION_MATCHING_EXECUTOR)를 적용해, KIS 웹소켓 수신 스레드와 조건 매칭·주문 실행 스레드를 물리적으로 분리했습니다.',
        result: [
          'KIS 웹소켓 수신 스레드가 주문 응답을 기다리며 블로킹되는 현상 제거',
          '조건 매칭·주문 처리 중에도 10종목 실시간 시세 수신 유지',
          '전용 스레드(cond-match-N)에서 매칭이 처리됨을 로그로 검증, 회귀 테스트로 @Async 누락 시 실패하도록 고정',
        ],
      },
      {
        title: 'Redis 락 TTL과 주문 응답 시간 불일치로 인한 중복 주문 레이스 컨디션',
        problem:
          '동일 조건의 중복 체결을 막기 위해 Redis 락(TTL 4초)을 걸었지만, KIS 주문 API의 실제 최대 응답 시간(레이트리미터 대기 3초 + HTTP 타임아웃 5초 = 최대 8초)이 락 TTL보다 길어, 4~8초 사이에 락이 먼저 풀리며 같은 조건에 대한 매수·매도 주문이 중복 발생할 수 있었습니다.',
        cause:
          '락 TTL을 "2차 방어선"이라는 목적만 고려해 정했을 뿐, 실제로 락이 지켜야 할 구간(주문 요청~응답)의 최대 소요 시간을 역산하지 않았습니다.',
        solution:
          '락 TTL을 KIS 주문 처리 최대 소요 시간(8초)보다 여유 있게 10초로 상향하고, Redis 키 설계 문서에 TTL 산정 근거(주문 최대 소요시간 + 여유분)를 명시했습니다.',
        result: [
          '락 만료로 인한 중복 주문 재현 케이스 제거',
          '락 TTL이 10초 미만이면 실패하는 회귀 테스트로 재발 방지',
          '1차 방어(is_active 상태 전환) + 2차 방어(Redis 락) 이중 구조의 실효성 확보',
        ],
      },
      {
        title: '트레일링 스탑 부호 미검증으로 인한 반복 매도 위험 버그',
        problem:
          '트레일링 스탑(고점 대비 -N% 하락 시 매도) 조건 등록 시 목표값 부호를 검증하지 않아, 0 이상의 값이 들어가면 "현재가 ≤ 기준가" 비교가 사실상 항상 참이 되어버려, 반복 매매 조건에서는 매 체결 틱마다 매도가 재발동될 수 있는 실질적 손실 위험이 있었습니다.',
        cause:
          '커스텀 검증 로직이 트리거 타입·기준값·비교 방식의 조합만 검사하고, 트레일링 스탑 특유의 "목표값은 반드시 음수(하락률)"라는 도메인 제약을 놓쳤습니다.',
        solution:
          '조건 검증 로직에 트레일링 스탑 타입에 한해 목표값이 음수인지 확인하는 검증을 추가해, 잘못된 조건은 등록 단계에서 즉시 거부되도록 방어했습니다.',
        result: [
          '0 이상 값으로 트레일링 스탑을 등록하는 요청을 API 레벨에서 즉시 차단',
          '반복 매도로 인한 잠재적 자산 손실 시나리오 원천 제거',
          '단위 테스트로 재발 방지 고정',
        ],
      },
      {
        title: 'AND 결합 조건에서 트레일링 스탑 고점 갱신이 트리거 평가 순서에 의존하는 버그',
        problem:
          'AND로 묶인 여러 트리거 중 하나라도 불일치하면 즉시 평가를 중단하는 구조였는데, 트레일링 스탑의 고점 갱신 로직이 그 평가 함수 안에 있어, 트리거 등록 순서에 따라 특정 체결 틱에서 고점이 갱신되지 않고 누락되는 문제가 있었습니다.',
        cause:
          '"조건 판정"과 "고점 상태 갱신"이라는 서로 다른 책임이 하나의 평가 메서드에 섞여 있어, 조기 반환(short-circuit) 로직이 부작용(상태 갱신)까지 함께 건너뛰게 만들었습니다.',
        solution:
          '고점 갱신 로직을 별도 메서드로 분리하고, AND·OR 매칭 루프를 돌기 전 등록된 모든 트리거에 대해 먼저 실행하도록 순서를 바꿔, 매칭 결과와 무관하게 고점이 항상 최신 상태로 유지되도록 했습니다.',
        result: [
          '트리거 등록 순서와 무관하게 고점이 매 체결 틱마다 갱신됨을 보장',
          'AND 조건 조기 반환 로직과 상태 갱신 로직의 책임 분리',
          '특정 트리거 순서 조합에 대한 단위 테스트로 회귀 방지',
        ],
      },
      {
        title: '고빈도 조회 쿼리의 복합 인덱스 누락으로 인한 잠재적 병목 제거',
        problem:
          '가격 체결 틱마다(10종목 × 초당 다회) 활성 조건을 조회하는 쿼리가 거래 로직에서 가장 빈번하게 실행되는데, 정작 이 조회에 필요한 종목 코드 + 활성 여부 복합 인덱스가 없어 데이터가 늘어날수록 풀스캔에 가까운 조회로 저하될 소지가 있었습니다.',
        cause:
          '외래키 제약으로 종목 코드 단일 컬럼 인덱스는 이미 존재해 조회가 겉으로는 정상 동작했지만, is_active 필터링까지 포함한 인덱스 커버리지는 별도로 검토되지 않았습니다.',
        solution:
          '(stock_code, is_active) 복합 인덱스를 추가해, 기존 단일 컬럼 인덱스를 복합 인덱스의 왼쪽 접두사로 자연스럽게 흡수시켰습니다.',
        result: [
          '체결 틱마다 반복되는 활성 조건 조회의 인덱스 커버리지 확보',
          'SHOW INDEX로 인덱스 생성을 검증하고 DDL 문서에 반영',
          '데이터 증가에 따른 잠재적 성능 저하 요인 사전 제거',
        ],
      },
    ],
  },
  {
    slug: 'animaltalk',
    name: '애니멀톡',
    englishName: 'AnimalTalk',
    coverImage: atHeader,
    gallery: [
      {
        category: 'Feed & Post UI',
        images: [
          { src: atHome, alt: '홈 피드' },
          { src: atFeed, alt: '게시글 상세' },
          { src: atWritePost, alt: '새 게시물 작성' },
        ],
      },
      {
        category: 'Chat & Cuts (숏폼)',
        images: [
          { src: atChatList, alt: '채팅 목록' },
          { src: atChatDetail, alt: '채팅 상세' },
          { src: atCut, alt: '숏폼 컷츠 상세' },
          { src: atSearchFeed, alt: '피드 검색 결과' },
        ],
      },
      {
        category: 'Profile & Notification',
        images: [
          { src: atProfile, alt: '프로필' },
          { src: atNotification, alt: '알림' },
          { src: atBookmarked, alt: '저장된 항목' },
        ],
      },
    ],
    period: '2025.09 ~ 현재',
    status: '운영 중',
    role: '1인 풀스택 (기획 · 설계 · 개발 · 배포 · 운영)',
    summary:
      '숏폼 영상(CUTS)과 광고 수익화 시스템을 결합한 반려동물 소셜 커뮤니티 앱',
    description:
      'React Native(Expo)와 Node.js/Express를 기반으로 구축한 하이브리드 소셜 앱입니다. 실시간 채팅, 게시글 공유, 세로형 영상 콘텐츠 등 SNS의 핵심 기능에 AdMob 광고 시스템을 결합해 지속 가능한 수익 모델까지 직접 설계했습니다. AI 코딩 에이전트와 협업하되 생성된 코드는 전부 직접 리팩토링하여 품질을 확보하는 방식으로 개발 속도를 높였습니다.',
    stack: {
      Frontend: [
        'React Native',
        'Expo',
        'TypeScript',
        'Zustand',
        'React Navigation',
        'Socket.io (client)',
        'react-native-reanimated',
        'expo-video',
        'react-native-google-mobile-ads',
      ],
      Backend: [
        'Node.js',
        'Express.js',
        'TypeScript',
        'MySQL',
        'Sequelize',
        'Socket.io',
        'JWT',
        'bcrypt',
      ],
      Infra: [
        'Naver Cloud Platform (Ubuntu)',
        'Naver Object Storage',
        'Firebase Admin SDK (FCM)',
        'FFmpeg',
      ],
    },
    myRole: [
      'React Native(Expo) 기반 모바일 SNS 앱 단독 설계 및 전체 개발',
      'Zustand + Persist 기반 전역 상태/인증 상태 관리 구조 설계',
      'JWT 인증 및 자동 토큰 갱신을 포함한 Custom API Client 아키텍처 구축',
      'Socket.io 기반 실시간 채팅 및 알림 시스템 설계·구현',
      '세로형 영상(CUTS) 시청 추적 로직 및 AdMob 광고 배치 전략 설계',
      'FlatList 최적화, view tracking, prefetch로 모바일 성능 개선',
      'Node.js(Express) REST API 서버 구축 및 MySQL 스키마 설계',
      'Naver Cloud Ubuntu 서버 배포 및 Object Storage 연동 미디어 운영',
    ],
    links: {
      githubClient: 'https://github.com/kyuchory/sa-native',
      githubServer: 'https://github.com/kyuchory/sa-server',
    },
    caseStudies: [
      {
        title: '소켓 재연결 시 채팅 중복 수신 문제 해결',
        problem:
          '네트워크가 불안정해 소켓이 재연결될 때 동일 메시지가 2~3번씩 중복 수신되거나, 반대로 재입장 후 메시지가 아예 수신되지 않는 문제가 발생했습니다. 장시간 사용 시 이벤트 리스너가 계속 누적되는 메모리 문제도 있었습니다.',
        cause:
          '재연결 시 기존 이벤트 리스너가 정리되지 않고 중복 등록됐고, 서버는 연결이 끊기면 채팅방 구독을 자동 해제하는데 클라이언트는 이를 인지하지 못해 재구독을 수행하지 않았습니다. 또한 reconnect 직후에는 handshake가 끝나지 않은 상태라 곧바로 subscribe하면 실패하는 타이밍 문제도 있었습니다.',
        solution:
          '재연결 감지 시 ①기존 리스너를 전부 정리하고 ②클라이언트 구독 상태를 초기화해 서버와 동기화한 뒤 ③일정 시간 지연 후 재구독 + 최대 3회 재시도하는 3단계 복구 프로세스를 설계했습니다.',
        result: [
          '채팅 메시지 중복 수신 100% 해결',
          '재연결 후 메시지 미수신 문제 완전 제거',
          '이벤트 리스너 누적 해소로 메모리 안정성 확보',
          '실사용 환경 재연결 복구 성공률 98% 이상 (테스트 100건)',
        ],
      },
      {
        title: '액세스 토큰 만료 시 무중단 API 요청 처리',
        problem:
          '토큰 만료 시 401 에러로 사용자 경험이 저하되고, 여러 요청이 동시에 401을 받으면 각각 독립적으로 refresh를 시도해 서버에 불필요한 요청이 폭증했습니다.',
        cause: '토큰 갱신 과정에 동시성 제어가 없어 Race Condition이 발생했습니다.',
        solution:
          '진행 중인 갱신이 있으면 기존 Promise를 재사용하는 싱글톤 토큰 갱신 구조를 설계하고, 갱신 중 들어오는 요청은 큐에 저장했다가 새 토큰 발급 후 일괄 자동 재시도하도록 구현했습니다.',
        result: [
          '동시 요청 상황에서 토큰 갱신 요청 90% 이상 감소',
          'API 요청 실패율 0% 달성',
          '사용자가 인지하지 못하는 무중단 인증 흐름 구현',
        ],
      },
      {
        title: '무한 스크롤 피드 성능 최적화',
        problem:
          '숏폼 피드에서 빠르게 스크롤할 때 프레임 드랍, 순간적인 빈 화면(blank), 메모리 사용량 급증이 발생했고, 저사양 기기에서 체감 성능 저하가 컸습니다.',
        cause:
          'FlatList의 기본 virtualization 설정이 과도한 초기 렌더링과 offscreen 유지로 이어졌고, 이미지·영상을 한 번에 다수 로딩하면서 CPU 디코딩 부하가 몰려 메인 스레드가 과부하됐습니다.',
        solution:
          'windowSize/initialNumToRender/maxToRenderPerBatch 튜닝과 removeClippedSubviews로 렌더링 범위를 최소화하고, Viewability 기반 이미지 Lazy Loading과 다음 아이템 debounce prefetch 구조를 함께 적용했습니다.',
        result: [
          '스크롤 FPS 45 → 60 개선',
          '메모리 사용량 약 35% 감소',
          'Blank screen 현상 완전 제거',
        ],
      },
      {
        title: 'Idempotency Key 기반 게시물 중복 생성 방지',
        problem:
          '네트워크 지연이나 사용자의 연속 클릭으로 동일 게시물 생성 요청이 반복 전송되어 피드에 같은 게시물이 여러 번 노출되는 문제가 있었습니다.',
        cause: 'API 요청이 멱등하지 않아 서버가 동일 요청 여부를 구분할 기준이 없었습니다.',
        solution:
          '클라이언트에서 게시 시도마다 UUID 기반 idempotency key를 생성해 전달하고, Post/FeedPost/Short 테이블에 (user_id, idempotency_key) UNIQUE 제약을 걸어 DB 레벨에서 중복을 차단했습니다. 중복 요청 시 새로 생성하지 않고 기존 데이터를 반환하도록 처리했습니다.',
        result: [
          '동일 게시 시도에 대한 중복 생성 100% 방지',
          '네트워크 재시도 상황에서도 데이터 무결성 확보',
          '불필요한 DB 쓰기 감소로 서버 부하 완화',
        ],
      },
      {
        title: '채팅방 멤버 메모리 캐싱으로 실시간 메시지 성능 개선',
        problem:
          '메시지를 전송할 때마다 채팅방 멤버 목록을 DB에서 조회해, 트래픽이 늘수록 DB 부하가 급증하고 실시간성이 저하됐습니다.',
        cause:
          '멤버 정보는 조회 빈도는 매우 높지만 변경 빈도는 낮은 데이터인데도 매번 DB I/O를 거치는 구조였습니다.',
        solution:
          '서버 기동 시 채팅방·멤버 정보를 Map 구조로 메모리에 캐싱해두고, 메시지 브로드캐스트 시 DB 대신 캐시에서 active 멤버만 즉시 조회하도록 변경했습니다.',
        result: [
          '메시지 전송 시 DB 조회 0회 달성',
          '평균 메시지 처리 시간 50ms → 5ms (90% 감소)',
          '트래픽 증가에도 안정적인 채팅 운영',
        ],
      },
      {
        title: '알림 Rate Limiting 설계로 스팸 알림 방지',
        problem:
          '좋아요 연타, 짧은 시간 내 반복 댓글 등으로 동일 알림이 수십 개씩 생성되어 사용자 알림 피로도가 크게 증가했습니다.',
        cause: '이벤트 발생 시 빈도 제어 없이 즉시 알림을 생성하는 구조였습니다.',
        solution:
          "좋아요 10초, 댓글 30초, 팔로우 5분 등 알림 유형별 발송 제한 시간을 정의하고, `type:userId:targetId` 형태의 고유 키로 마지막 발송 시각을 메모리에 저장해 DB 조회 없이 빠르게 발송 가능 여부를 판단하도록 설계했습니다.",
        result: [
          '동일 알림 중복 발생 100% 방지',
          '알림 생성 트래픽 감소로 서버 부하 완화',
          '사용자 알림 피로도 감소',
        ],
      },
    ],
  },
  {
    slug: 'dental-community',
    name: '중국 치과의사 전용 커뮤니티',
    englishName: 'Dental Community Web Service',
    period: '2025.04 ~ 2025.08',
    status: '비공개 (사내 프로젝트)',
    role: '프론트엔드 단독 개발',
    summary: '실사용자 100명 이상의 중국 치과의사 대상 웹 커뮤니티 서비스',
    description:
      '주식회사 클로이소프트에서 진행한 실서비스 프로젝트로, Next.js(App Router) 기반 프론트엔드 개발을 단독으로 전담했습니다. 회사 자산이라 코드는 공개할 수 없지만, 다국어·권한 처리와 협업 프로세스에서 겪은 문제를 기록합니다.',
    stack: {
      Frontend: ['Next.js (App Router)', 'TypeScript', 'Zustand', 'Tailwind CSS'],
      협업도구: ['Figma (디자인 토큰)', 'Swagger'],
    },
    myRole: [
      'Next.js(App Router) 기반 프론트엔드 단독 개발 및 실서비스 운영 (유저 100명+)',
      'Zustand를 활용한 전역 상태 설계로 다국어 및 복합 권한 시스템 최적화',
      '디자인 시스템 기반의 반응형 UI 구현 및 협업 프로세스 리드',
    ],
    links: {},
    caseStudies: [],
    points: [
      {
        title: '권한 기반 라우팅 및 다국어 시스템 구축',
        description:
          'Zustand로 로그인, 사용자 권한(의사/학생), 다국어 상태를 통합 관리하여 일관된 유저 경험을 제공했습니다.',
      },
      {
        title: '반응형 UI 및 에러 핸들링',
        description:
          'Tailwind CSS를 활용해 모바일 환경에 최적화된 UI를 구현하고, 사용자 이탈을 방지하기 위한 선제적 로딩/에러 상태 처리를 적용했습니다.',
      },
      {
        title: '효율적인 협업 인터페이스 설계',
        description:
          '백엔드와 Swagger 기반 API 스펙을 조율해 개발 리소스를 단축하고, Figma 디자인 토큰(Color, Typo)을 시스템화해 디자인-개발 간 일관성을 유지하고 수정 공수를 줄였습니다.',
      },
      {
        title: '운영 및 유지보수',
        description: '실제 유저 피드백 기반 UI/UX 개선과 배포 후 발생한 버그에 실시간으로 대응했습니다.',
      },
    ],
  },
]
