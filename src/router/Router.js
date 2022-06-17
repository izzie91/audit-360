import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "../components/header/Header";
import SignUpPage from "../containers/pages/SignUpPage";
import SignInPage from "../containers/pages/SignInPage";
import ModulesPage from "../containers/pages/ModulesPage";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<SignUpPage />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="modules" element={<ModulesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
