import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Filter = styled.div`
  display: flex;
  gap: 16px;
`;

export const FilterItem = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  font-size: 16px;
  color: ${({ active }) => (active ? "#1a202c" : "#4a5568")};
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #1a202c;
  }
`;

export const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PostItem = styled.div`
  padding: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border-color: #1a202c;
  }
`;

export const PostTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 8px;
`;

export const PostContent = styled.p`
  font-size: 14px;
  color: #4a5568;
  margin-bottom: 8px;
`;

export const PostDate = styled.span`
  font-size: 12px;
  color: #718096;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px;
  border: 1px dashed #e2e8f0;
  border-radius: 4px;
`;

export const EmptyStateText = styled.p`
  font-size: 16px;
  color: #4a5568;
  margin-bottom: 16px;
`;
