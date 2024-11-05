import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/login";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default RoutesConfig;
