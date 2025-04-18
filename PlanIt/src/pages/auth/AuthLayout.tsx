import React from "react";
import { Outlet } from "react-router-dom";
import * as auth from "./styles";

interface AuthLayoutProps {
  children?: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <auth.Container>
      <auth.Header>
        <auth.Logo>PlanIt</auth.Logo>
      </auth.Header>
      <auth.Content>{children || <Outlet />}</auth.Content>
      <auth.Footer>
        <auth.FooterText>© 2024 PlanIt. All rights reserved.</auth.FooterText>
      </auth.Footer>
    </auth.Container>
  );
};

export default AuthLayout;
