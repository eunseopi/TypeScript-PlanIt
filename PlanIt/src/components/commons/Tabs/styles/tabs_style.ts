import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 16px;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 8px;
`;

export const Tab = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  font-size: 16px;
  color: ${({ active }) => (active ? "#1a202c" : "#4a5568")};
  cursor: pointer;
  padding: 0;
  position: relative;

  &:hover {
    color: #1a202c;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -9px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #1a202c;
    transform: scaleX(${({ active }) => (active ? 1 : 0)});
    transition: transform 0.2s ease-in-out;
  }
`;
