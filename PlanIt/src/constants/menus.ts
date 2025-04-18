export interface MenuItem {
  id: string;
  label: string;
  action: string;
}

export const userMenuItems: MenuItem[] = [
  {
    id: "profile",
    label: "프로필 보기",
    action: "viewProfile",
  },
  {
    id: "message",
    label: "쪽지 보내기",
    action: "sendMessage",
  },
];

export const moreMenuItems: MenuItem[] = [
  {
    id: "edit",
    label: "수정하기",
    action: "edit",
  },
  {
    id: "delete",
    label: "삭제하기",
    action: "delete",
  },
];
