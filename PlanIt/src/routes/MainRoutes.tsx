import React from "react";
import { Routes, Route } from "react-router-dom";
import SplashPage from "../pages/splash/SplashPage";

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
    </Routes>
  );
};

export default MainRoutes;
