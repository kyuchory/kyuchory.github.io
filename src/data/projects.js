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
