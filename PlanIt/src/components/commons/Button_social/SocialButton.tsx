import StyledSocialBtn from "./styles";
import { ReactNode } from "react";

interface SocialButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  state?: "pressed" | "disabled" | null;
  disabled?: boolean;
  [key: string]: any;
}

const SocialButton = ({
  children,
  variant = "primary",
  state = null,
  disabled = false,
  ...props
}: SocialButtonProps) => {
  return (
    <StyledSocialBtn
      variant={variant}
      state={state}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledSocialBtn>
  );
};

export default SocialButton;
