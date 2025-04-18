import React from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  disabled = false,
  onClick,
  type = "button",
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
