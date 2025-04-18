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

export const ProfileImageContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 24px;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const ImageLabel = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #f1f5f9;
  }
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
