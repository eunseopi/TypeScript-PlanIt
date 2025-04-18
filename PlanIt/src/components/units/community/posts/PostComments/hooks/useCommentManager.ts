import { useCallback, useMemo, useState } from "react";
import { commentApi } from "../../../../../../api/comment.ts";

interface CommentApi {
  addComment: (data: { content: string }) => Promise<Comment>;
  editComment: (data: { id: string; content: string }) => Promise<Comment>;
  deleteComment: (id: string) => Promise<void>;
}

interface Comment {
  id: string;
  content: string;
  user: {
    id: string;
    name: string;
  };
  createdAt: string;
}

interface CommentManagerReturn {
  comments: Comment[];
  formHeight: number;
  mentionUser: string | null;
  handlers: {
    onReply: (userName: string) => void;
    onEdit: (id: string, content: string) => Promise<void>;
    onDelete: (id: string) => Promise<void>;
    onSubmit: (content: string) => Promise<void>;
    onFormHeightChange: (height: number) => void;
  };
}

const getDate = (date: string): string => {
  const _date = new Date(date);
  const yyyy = _date.getFullYear();
  const mm = _date.getMonth() + 1;
  const dd = _date.getDate();
  return `${yyyy}.${mm}.${dd}`;
};

const useCommentManager = (
  initialComments: Comment[] = []
): CommentManagerReturn => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [formHeight, setFormHeight] = useState<number>(107);
  const [mentionUser, setMentionUser] = useState<string | null>(null);

  const handleFormHeightChange = useCallback((height: number) => {
    setFormHeight(height);
  }, []);

  const addComment = async (content: string): Promise<void> => {
    if (!content.trim()) {
      alert("댓글을 입력해 주세요.");
      return;
    }

    try {
      const newComment = await commentApi.addComment({
        content,
      });
      if (newComment) {
        setComments((prev) => [...prev, newComment]);
      }
    } catch (error) {
      console.error("댓글 등록 실패", error);
      alert("댓글 등록에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const editComment = async (id: string, content: string): Promise<void> => {
    if (!content.trim()) {
      alert("댓글을 입력해 주세요.");
      return;
    }

    const originalComment = comments.find((comment) => comment.id === id);
    if (!originalComment) {
      alert("수정할 댓글을 찾을 수 없습니다.");
      return;
    }
    if (content === originalComment.content) return;

    try {
      const updatedComment = await commentApi.editComment({ id, content });
      if (updatedComment) {
        setComments((prev) =>
          prev.map((comment) =>
            comment.id === id ? { ...comment, content } : comment
          )
        );
      }
    } catch (error) {
      console.error("댓글 수정 실패", error);
      alert("댓글 수정에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const deleteComment = async (id: string): Promise<void> => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;

    try {
      await commentApi.deleteComment(id);
      setComments((prevComment) =>
        prevComment.filter((comment) => comment.id !== id)
      );
    } catch (error) {
      console.error("댓글 삭제 실패", error);
      alert("댓글 삭제에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleMentionUser = useCallback((userName: string) => {
    setMentionUser(userName);
  }, []);

  const handlers = useMemo(
    () => ({
      onReply: handleMentionUser,
      onEdit: editComment,
      onDelete: deleteComment,
      onSubmit: addComment,
      onFormHeightChange: handleFormHeightChange,
    }),
    [
      handleMentionUser,
      editComment,
      deleteComment,
      addComment,
      handleFormHeightChange,
    ]
  );

  return {
    comments,
    formHeight,
    mentionUser,
    handlers,
  };
};

export default useCommentManager;
