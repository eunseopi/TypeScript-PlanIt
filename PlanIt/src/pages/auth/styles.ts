import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #ffffff;
`;

export const Header = styled.header`
  padding: 20px;
  border-bottom: 1px solid #e2e8f0;
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #1a202c;
`;

export const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Footer = styled.footer`
  padding: 20px;
  text-align: center;
  border-top: 1px solid #e2e8f0;
`;

export const FooterText = styled.p`
  font-size: 14px;
  color: #4a5568;
`;

export const LoginContainer = styled.div`
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
