import styled from "styled-components";

interface InputProps {
  error?: boolean;
  fullWidth?: boolean;
}

export const InputContainer = styled.div<InputProps>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
`;

export const StyledInput = styled.input<InputProps>`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid
    ${({ error, theme }) => (error ? theme.colors.danger : "#e2e8f0")};
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.dark};
  background-color: #ffffff;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    background-color: #f1f5f9;
    cursor: not-allowed;
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.danger};
`;
