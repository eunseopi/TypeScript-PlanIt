import { useRef, useEffect } from "react";
import useCommentManager from "./hooks/useCommentManager";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { CommentContainer } from "./styles/commentManager.style";

interface Comment {
  id: string;
  content: string;
  author: {
    id: string;
    name: string;
    profileImage: string;
  };
  createdAt: string;
  replies?: Comment[];
}

interface CommentManagerProps {
  initialComments: Comment[];
}

const CommentManager = ({ initialComments }: CommentManagerProps) => {
  const { comments, formHeight, mentionUser, handlers } =
    useCommentManager(initialComments);

  const commentListRef = useRef<HTMLDivElement>(null);
  const prevCommentListRef = useRef(comments.length);

  useEffect(() => {
    // 댓글 추가/삭제 될 때만 하단으로
    if (prevCommentListRef.current !== comments.length) {
      // window.scrollTo({
      window.scrollIntoView({
        // top: document.body.scrollHeight,
        behavior: "smooth",
        block: "end",
      });
    }
    prevCommentListRef.current = comments.length;
  }, [comments]);

  return (
    <CommentContainer ref={commentListRef} marginBottom={`${formHeight}px`}>
      <CommentList
        comments={comments}
        handlers={{
          onReply: handlers.onReply,
          onEdit: handlers.onEdit,
          onDelete: handlers.onDelete,
        }}
      />
      <CommentForm
        onSubmit={handlers.onSubmit}
        mentionUser={mentionUser}
        onHeightChange={handlers.onFormHeightChange}
      />
    </CommentContainer>
  );
};

export default CommentManager;
