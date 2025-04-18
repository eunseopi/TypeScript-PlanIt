import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #ffffff;
`;

export const Logo = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: #4a5568;
  margin-bottom: 32px;
`;

export const Loader = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f1f5f9;
  border-top: 4px solid #1a202c;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
