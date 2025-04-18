import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  color: #4a5568;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #1a202c;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 24px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const Link = styled.button`
  background: none;
  border: none;
  color: #4a5568;
  font-size: 14px;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #1a202c;
    text-decoration: underline;
  }
`;
