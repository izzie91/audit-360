import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import SignUpPage from "../containers/SignUpPage";
import SignInPage from "../containers/SignInPage";
import ModulesPage from "../containers/ModulesPage";

function Router() {
  const theme = useTheme();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const Layout = ({ children }) => {
    return (
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: theme.spacing(4),
          backgroundColor: theme.palette.grey[100],
        }}
      >
        <Outlet></Outlet>
      </Box>
    );
  };

  const NoMatch = () => {
    return <h2>There's nothing here: 404!</h2>;
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<SignUpPage />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="modules" element={isAuthenticated ? <ModulesPage /> : <SignInPage />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
