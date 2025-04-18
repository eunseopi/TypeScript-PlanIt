import styled from "styled-components";

export const Divider = styled.hr<{ vertical?: boolean }>`
  border: none;
  background-color: #e2e8f0;
  margin: 0;
  ${({ vertical }) =>
    vertical
      ? `
        width: 1px;
        height: 100%;
      `
      : `
        width: 100%;
        height: 1px;
      `}
`;
