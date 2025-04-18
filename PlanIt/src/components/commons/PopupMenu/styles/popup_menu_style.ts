import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const Trigger = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const Menu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 160px;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin-top: 8px;
`;

export const MenuItem = styled.button`
  display: block;
  width: 100%;
  padding: 12px 16px;
  text-align: left;
  background: none;
  border: none;
  color: #1a202c;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #f7fafc;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #e2e8f0;
  }
`;
