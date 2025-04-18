import styled from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  disabled?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;
  outline: none;
  padding: ${({ size }) => {
    switch (size) {
      case "small":
        return "8px 16px";
      case "large":
        return "12px 24px";
      default:
        return "10px 20px";
    }
  }};
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "14px";
      case "large":
        return "16px";
      default:
        return "15px";
    }
  }};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  background-color: ${({ variant, theme }) => {
    switch (variant) {
      case "primary":
        return theme.colors.primary;
      case "secondary":
        return theme.colors.secondary;
      case "outline":
        return "transparent";
      case "text":
        return "transparent";
      default:
        return theme.colors.primary;
    }
  }};
  color: ${({ variant, theme }) => {
    switch (variant) {
      case "primary":
        return "#ffffff";
      case "secondary":
        return "#ffffff";
      case "outline":
        return theme.colors.primary;
      case "text":
        return theme.colors.primary;
      default:
        return "#ffffff";
    }
  }};
  border: ${({ variant, theme }) => {
    switch (variant) {
      case "outline":
        return `1px solid ${theme.colors.primary}`;
      default:
        return "none";
    }
  }};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.98);
  }
`;
