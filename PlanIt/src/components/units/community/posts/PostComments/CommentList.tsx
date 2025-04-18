import CommentItem from "./CommentItem";
import {
  CommentListContainer,
  CommentListHeader,
  EmptyCommentBox,
} from "./styles/commentList.style";

interface Comment {
  id: string;
  user: {
    id: string;
    name: string;
    profileImage: string;
  };
  content: string;
  isPostAuthor: boolean;
  likeCount: number;
  createdAt: string;
  replies?: Comment[];
  mentionUser?: string;
}

interface CommentHandlers {
  onReply: (userName: string) => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

interface CommentListProps {
  comments?: Comment[];
  handlers?: CommentHandlers;
}

const CommentList = ({ comments = [], handlers = {} }: CommentListProps) => (
  <CommentListContainer>
    <CommentListHeader>코멘트</CommentListHeader>
    {comments.length === 0 ? (
      <EmptyCommentBox>
        아직 댓글이 없어요!
        <br />첫 번째 댓글을 작성해보세요.
      </EmptyCommentBox>
    ) : (
      comments.map((comment) => (
        <CommentItem
          key={comment.id}
          commentData={comment}
          handlers={handlers}
        />
      ))
    )}
  </CommentListContainer>
);

export default CommentList;
