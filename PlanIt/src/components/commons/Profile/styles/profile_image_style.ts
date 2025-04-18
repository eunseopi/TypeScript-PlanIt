import styled from "styled-components";

const sizeMap = {
  small: "32px",
  medium: "48px",
  large: "64px",
};

export const Container = styled.div<{ size: "small" | "medium" | "large" }>`
  width: ${({ size }) => sizeMap[size]};
  height: ${({ size }) => sizeMap[size]};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
