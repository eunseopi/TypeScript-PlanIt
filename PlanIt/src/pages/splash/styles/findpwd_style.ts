import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
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

export const InputGroup = styled.div`
  display: flex;
  gap: 8px;
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
