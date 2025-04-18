import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #ffffff;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #4a5568;
  line-height: 1.5;
`;

export const ImageContainer = styled.div`
  margin-bottom: 40px;
`;

export const Image = styled.img`
  width: 200px;
  height: auto;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  max-width: 320px;
`;
