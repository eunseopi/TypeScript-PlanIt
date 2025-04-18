import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "../pages/auth/AuthLayout";
import Login from "../pages/auth/Login";
import FindAccount from "../pages/auth/findAccount/FindAccount";
import FindPassword from "../pages/auth/findPassword/FindPassword";
import ChangePassword from "../pages/auth/findPassword/ChangePassword";
import PasswordChanged from "../pages/auth/findPassword/PasswordChanged";
import AccountRecovery from "../pages/auth/accountRecovery";

const AuthRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/find-account" element={<FindAccount />} />
        <Route path="/find-password" element={<FindPassword />} />
        <Route
          path="/find-password/change-password"
          element={<ChangePassword />}
        />
        <Route
          path="/find-password/password-changed"
          element={<PasswordChanged />}
        />
        <Route path="/account-recovery" element={<AccountRecovery />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
