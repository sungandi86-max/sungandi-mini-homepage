export const profile = {
  teacherName: "쑤캥",
  title: "쑤캥의 미니홈피",
  introTitle: "쑤캥의 미니홈피",
  introDescription: "보건교사의 반복 업무를 줄이는 AI·웹앱·구글시트 도구를 개발합니다.",
  catalogTitle: "쑤캥T 작업실",
  catalogDescription: "보건실과 AI 작업실을 오가며 만든 기록과 도구",
  /* 왼쪽 프로필 사진입니다. public/assets/ 안에 파일을 넣고 경로를 적으세요. */
  photo: { src: "/assets/ssukaeng-profile.webp", alt: "보건실에서 일하는 수달 캐릭터 쑤캥" },
  /* 홈 탭 위쪽 미니룸 이미지입니다. public/assets/ 안에 파일을 넣고 경로를 적으세요. */
  miniroom: { src: "/assets/ssukaeng-miniroom.webp", alt: "쑤캥T의 보건실과 AI 작업실 미니룸" },
  /* 아래는 탭 이름표입니다. 나만의 이름으로 바꿔도 되고, 안 바꾸면 기본값 그대로 나옵니다. */
  storyLabel: "연재물",
  boardLabel: "작업실",
  boardSubtitle: "AI·웹앱·업무도구",
  boardEmptyText: "아직 올린 글이 없습니다.",
  photoLabel: "일상",
  photoSubtitlePrefix: "사진",
  /* 오른쪽 위, 옛날 싸이월드 주소창을 흉내 낸 문구입니다. */
  displayUrl: "sungandi86-max.github.io/sungandi-mini-homepage"
};

/* 프로필 탭에 들어가는 소개 글입니다. 문구만 바꿔서 쓰세요. */
export type ProfileBlock =
  | { kind: "text"; lines: string[] }
  | { kind: "list"; heading: string; items: string[] }
  | { kind: "contact"; items: { label: string; value: string; href: string }[] };

export type ProfileSection = {
  id: string;
  title: string;
  /* 제목 옆 작은 글씨입니다. 생략하면 제목만 나옵니다. */
  subtitle?: string;
  blocks: ProfileBlock[];
};

export const profileSections: ProfileSection[] = [
  {
    id: "about",
    title: "쑤캥T를 소개합니다",
    subtitle: "보건실과 AI 작업실 사이",
    blocks: [
      {
        kind: "text",
        lines: [
          "보건실과 AI 작업실을 오가며 이것저것 만드는 쑤캥T입니다 :)",
          "학교 현장에서 반복되는 업무를 조금 더 쉽고 편하게 만드는 방법을 고민하고 있어요.",
          "AI와 디지털 도구를 활용해 보건업무 자동화, 웹페이지·업무도구·교육자료를 만들고, 직접 사용해본 경험과 자료를 기록하고 나눕니다."
        ]
      },
      {
        kind: "list",
        heading: "하고 있는 일들",
        items: [
          "🏫 고등학교 보건교사",
          "🤖 AI를 활용한 보건업무 자동화",
          "💻 보건교사용 웹페이지·업무도구 제작",
          "📚 보건교사 실무자료·템플릿 제작 및 공유",
          "✍️ 보건교사·AI 활용 블로그 운영",
          "🎓 교사를 위한 AI·업무자동화 강의",
          "📖 보건교사 실무·AI 활용 전자책 제작"
        ]
      },
      {
        kind: "contact",
        items: [
          { label: "블로그", value: "쑤캥의 보건실 실무 시스템", href: "https://blog.naver.com/bogun_sh" },
          { label: "인스타그램", value: "@ssuvibe_t", href: "https://www.instagram.com/ssuvibe_t/" },
          { label: "Email", value: "kindly_sh@naver.com", href: "mailto:kindly_sh@naver.com" }
        ]
      }
    ]
  }
];

/* 미요툰 회차는 src/config/miyotoon.ts 에 있습니다. */
export { episodes, type Episode } from "./miyotoon";

/* 미요앱 탭입니다. 앱과 게시글 링크를 여기에 추가하세요.
   preview 는 화면 미리보기 이미지입니다. public/assets/apps 에 넣고 경로를 적으세요.
   생략하면 썸네일 없이 제목만 나옵니다. */
export type BoardPost = {
  id: string;
  category: "앱" | "글";
  title: string;
  summary?: string;
  date: string;
  href: string;
  preview?: { src: string; alt: string };
};

export const boardPosts: BoardPost[] = [
  {
    id: "bogunon",
    category: "앱",
    title: "BOGUNON | 보건교사를 위한 일정·업무 관리",
    date: "2026.09.02",
    href: "https://bogunon.vercel.app"
  },
  {
    id: "staff-training",
    category: "앱",
    title: "교직원 교육 QR 전자서명·이수관리",
    date: "2026.09.02",
    href: "https://school-health-hub.github.io/school-staff-training-center/"
  },
  {
    id: "tb-screening",
    category: "앱",
    title: "교직원 결핵검진 신청·제출 관리 웹앱",
    date: "2026.09.02",
    href: "https://dorms.school/apps/614d29c5-3b49-44d1-8ee8-3e59f483e8a4"
  }
];

/* 사진첩 탭입니다. */
export type PhotoItem = {
  id: string;
  name: string;
  src: string;
};

export const photos: PhotoItem[] = [
  { id: "badminton", name: "🏸 퇴근하면 라켓 들고", src: "/assets/badminton.webp" },
  { id: "health-office", name: "🏥 나의 작은 보건실", src: "/assets/health-office.webp" },
  { id: "ai-workspace", name: "보건실과 AI 작업실 사이 💻", src: "/assets/health-office-ai-workspace.webp" },
  { id: "cpr-lecture", name: "🎤 보건실 밖에서는 연수 강사로", src: "/assets/cpr-training-lecture.webp" },
  { id: "otter-teacher", name: "🦦 그리고, 수달쌤입니다", src: "/assets/otter-teacher.webp" }
];

/* 왼쪽 아래 파도타기 목록입니다.
   고정 규칙: 첫 번째 항목은 반드시 "도름스 커뮤니티 나의 활동" 링크입니다. 지우지 마세요. */
export type WaveLink = {
  id: string;
  label: string;
  href: string;
};

export const waveLinks: WaveLink[] = [
  { id: "dorms-activity", label: "도름스 커뮤니티 나의 활동", href: "https://dorms.school/channels/e5925b55-8da4-4dbc-bf34-af5f196e0d39" },
  { id: "naver-blog", label: "쑤캥의 보건실 실무 시스템", href: "https://blog.naver.com/bogun_sh" },
  { id: "instagram", label: "쑤캥T Instagram", href: "https://www.instagram.com/ssuvibe_t/" }
];

/* 미니홈피 BGM 입니다. 유튜브 영상을 음원으로 씁니다.
   videoId 는 https://www.youtube.com/watch?v=abcd1234XYZ 에서 v= 뒤에 오는 값입니다.
   배열을 비우면 플레이어가 아예 표시되지 않습니다.

   여러 곡이 이어진 플레이리스트 영상이라면, 같은 videoId 를 쓰면서 startAt 에
   각 곡이 시작하는 지점을 초 단위로 적으세요. 제목을 누르면 그 지점부터 재생됩니다.
   startAt 은 secondsAt("3:21") 처럼 적으면 편합니다. */
export type BgmTrack = {
  id: string;
  title: string;
  artist?: string;
  videoId: string;
  /* 영상 안에서 이 곡이 시작하는 지점입니다. 초 단위이고, 생략하면 처음부터입니다. */
  startAt?: number;
};

/* "3:21" 이나 "1:02:30" 을 초로 바꿔 줍니다. */
export function secondsAt(timestamp: string): number {
  return timestamp
    .split(":")
    .map(Number)
    .reduce((total, part) => total * 60 + part, 0);
}

export const bgmTracks: BgmTrack[] = [
  { id: "perhaps-love", title: "Perhaps Love (사랑인가요)", artist: "HowL & J", videoId: "cjaW3edHhHA", startAt: 0 },
  { id: "if", title: "만약에", artist: "태연", videoId: "dXn41-UWv58", startAt: 0 },
  { id: "spring", title: "너는 나의 봄이다", artist: "성시경", videoId: "epj0C8snkgc", startAt: 0 }
];

/* 홈 탭 아래쪽 한마디입니다. */
export type GuestbookEntry = {
  id: number;
  author: string;
  text: string;
  date: string;
};

export const guestbook: GuestbookEntry[] = [];
