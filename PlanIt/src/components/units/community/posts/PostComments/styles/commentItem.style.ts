import styled from "styled-components";

export const CommentItemContainer = styled.div`
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
`;

export const UserName = styled.span`
  font-weight: 600;
  cursor: pointer;
`;

export const AuthorBadge = styled.span`
  background-color: #f0f0f0;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
`;

export const MoreOptions = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
`;

export const LikeSection = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LikeCount = styled.span`
  font-size: 14px;
  color: #666;
`;

export const LikeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
`;

export const CommentBody = styled.div`
  margin-bottom: 8px;
  line-height: 1.5;
`;

export const Mention = styled.span`
  color: #1a73e8;
  font-weight: 500;
`;

export const CommentFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #666;
`;

export const CreatedAt = styled.span`
  color: #666;
`;

export const ReplyButton = styled.button`
  background: none;
  border: none;
  color: #1a73e8;
  cursor: pointer;
  padding: 0;
`;

export const ShowRepliesBtn = styled.button`
  background: none;
  border: none;
  color: #1a73e8;
  cursor: pointer;
  padding: 8px 0;
  font-size: 14px;
`;

export const ReplyContainer = styled.div`
  margin-left: 32px;
  margin-top: 8px;
`;
