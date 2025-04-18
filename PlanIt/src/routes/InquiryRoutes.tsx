import React from "react";
import { Routes, Route } from "react-router-dom";
import Inquiry from "../pages/splash/inquiry/Inquiry";

const InquiryRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/inquiry" element={<Inquiry />} />
    </Routes>
  );
};

export default InquiryRoutes;
