import styled from "styled-components";

interface StyledSocialBtnProps {
  variant?: "primary" | "secondary";
  state?: "pressed" | "disabled" | null;
}

export const StyledSocialBtn = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "variant" && prop !== "state",
})<StyledSocialBtnProps>`
  display: inline-flex;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.45;
  letter-spacing: -0.14px;
  border-radius: 6px;
  transition: 0.2s all ease-in-out;

  // 기본 스타일
  ${({ variant }) => {
    return variant === "primary"
      ? `
            background-color: #DBEBFF;
            color: var(--color-text-brand-on-brand-tertiary);
        `
      : `
            color: #1E1E1E;
            border:1px solid #B3B3B3;
            background-color: #ffffff;
        `;
  }};

  // 상태별 오버라이드
  ${({ variant, state }) => {
    if (variant === "primary") {
      switch (state) {
        case "pressed":
          return `
                        background-color: #ADD2FF;
                    `;
        case "disabled":
          return `
                        background-color: #D9D9D9;
                    `;
        default:
          return "";
      }
    } else if (variant === "secondary") {
      switch (state) {
        case "pressed":
          return `
                        border: 1px solid #F5F5F5;
                    `;
        case "disabled":
          return `
                        background-color: #D9D9D9;
                    `;
        default:
          return "";
      }
    }
  }}

  &:disabled {
    cursor: not-allowed;
    color: #b3b3b3;
  }
`;

export default StyledSocialBtn;
