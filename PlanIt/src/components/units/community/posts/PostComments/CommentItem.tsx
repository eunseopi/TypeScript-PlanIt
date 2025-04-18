import { useMemo, useRef } from "react";
import {
  CommentItemContainer,
  CommentHeader,
  UserSection,
  UserName,
  AuthorBadge,
  MoreOptions,
  LikeSection,
  LikeCount,
  LikeButton,
  CommentBody,
  Mention,
  CommentFooter,
  CreatedAt,
  ReplyButton,
  ShowRepliesBtn,
  ReplyContainer,
} from "./styles/commentItem.style";
import { userMenuItems, moreMenuItems } from "../../../../../constants/menus";
import useMenuToggle from "../../../../../hooks/useMenuToggle";
import useReplies from "./hooks/useReplies";
import useLike from "./hooks/useLike";
import ProfileImage from "../../../../commons/Profile/ProfileImage";
import PopupMenu from "../../../../commons/PopupMenu/PopupMenu";
import moreIcon from "../../../../../assets/icon/more.svg";
import likeIcon from "../../../../../assets/icon/like.svg";
import likedIcon from "../../../../../assets/icon/liked.svg";

// SVG 파일에 대한 타입 선언
declare module "*.svg" {
  const content: string;
  export default content;
}

interface User {
  id: string;
  name: string;
  profileImage: string;
}

interface Comment {
  id: string;
  user: User;
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

interface CommentItemProps {
  commentData: Comment;
  handlers: CommentHandlers;
}

const CommentItem = ({ commentData, handlers }: CommentItemProps) => {
  const { onReply, onEdit, onDelete } = handlers;
  const {
    user,
    content,
    isPostAuthor,
    likeCount: initialLikeCount,
    createdAt,
    replies = [],
    mentionUser = null,
  } = commentData;
  const {
    showUserMenu,
    toggleUserMenu,
    closeUserMenu,
    showMoreMenu,
    toggleMoreMenu,
    closeMoreMenu,
  } = useMenuToggle();
  const { showReplies, toggleReplies, commentRef } = useReplies();
  const { liked, likeCount, handleLikeToggle } = useLike(initialLikeCount);

  const memoizedReplies = useMemo(() => {
    return replies.map((reply) => (
      <CommentItem key={reply.id} commentData={reply} handlers={handlers} />
    ));
  }, [replies, handlers]);

  return (
    <CommentItemContainer ref={commentRef}>
      <CommentHeader>
        <UserSection>
          <ProfileImage src={user.profileImage} size="small" />
          <UserName onClick={toggleUserMenu}>{user.name}</UserName>
          {isPostAuthor && <AuthorBadge>작성자</AuthorBadge>}
          {showUserMenu && (
            <PopupMenu
              isVisible={showUserMenu}
              user={user}
              items={userMenuItems}
              onClose={closeUserMenu}
            />
          )}
          <MoreOptions onClick={toggleMoreMenu}>
            <img src={moreIcon} alt="더보기" />
          </MoreOptions>
          {showMoreMenu && (
            <PopupMenu
              isVisible={showMoreMenu}
              items={moreMenuItems}
              onClose={closeMoreMenu}
              actionHandlers={{
                onEdit: onEdit || (() => {}),
                onDelete: onDelete || (() => {}),
              }}
            />
          )}
        </UserSection>
        <LikeSection>
          {likeCount > 0 && <LikeCount>{likeCount}</LikeCount>}
          <LikeButton type="button" onClick={handleLikeToggle}>
            <img src={liked ? likedIcon : likeIcon} alt="좋아요" />
          </LikeButton>
        </LikeSection>
      </CommentHeader>

      <CommentBody>
        {mentionUser && <Mention>@{mentionUser}&nbsp;</Mention>}
        {content}
      </CommentBody>

      <CommentFooter>
        <span>작성일&nbsp;</span>
        <CreatedAt>{createdAt}</CreatedAt>
        <ReplyButton onClick={() => onReply(user.name)}>답글달기</ReplyButton>
      </CommentFooter>

      {replies.length > 0 && (
        <ShowRepliesBtn onClick={toggleReplies}>
          {showReplies ? "답글접기" : `${replies.length}개의 답글 더 보기`}
        </ShowRepliesBtn>
      )}

      {showReplies && <ReplyContainer>{memoizedReplies}</ReplyContainer>}
    </CommentItemContainer>
  );
};

export default CommentItem;
