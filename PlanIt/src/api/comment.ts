import { api } from "./config";

interface Comment {
  id: string;
  content: string;
  user: {
    id: string;
    name: string;
  };
  createdAt: string;
}

interface AddCommentData {
  content: string;
}

interface EditCommentData {
  id: string;
  content: string;
}

interface CommentApi {
  getComments: () => Promise<Comment[]>;
  addComment: (data: AddCommentData) => Promise<Comment | null>;
  editComment: (data: EditCommentData) => Promise<Comment | null>;
  deleteComment: (id: string) => Promise<boolean>;
}

export const commentApi: CommentApi = {
  getComments: async () => {
    try {
      const res = await api.get<Comment[]>("/comments");
      return res.data;
    } catch (error) {
      console.error("댓글 불러오기를 실패하였습니다.", error);
      return [];
    }
  },

  addComment: async (data: AddCommentData) => {
    try {
      const res = await api.post<Comment>("/comments", data);
      return res.data;
    } catch (error) {
      console.error("댓글 등록에 실패하였습니다.", error);
      return null;
    }
  },

  editComment: async ({ id, content }: EditCommentData) => {
    try {
      const res = await api.put<Comment>(`/comments/${id}`, { content });
      return res.data;
    } catch (error) {
      console.error("댓글 수정에 실패하였습니다.", error);
      return null;
    }
  },

  deleteComment: async (id: string) => {
    try {
      await api.delete(`/comments/${id}`);
      return true;
    } catch (error) {
      console.error("댓글 삭제에 실패하였습니다.", error);
      return false;
    }
  },
};
