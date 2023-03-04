import * as React from "react";

import paths from "./paths.js";
import NoMatch from "./pages/NoMatch.jsx";
import MainLayout from "./layouts/main.jsx";
import Home from "./pages/Home.jsx";
import EditorLayout from "./layouts/editor.jsx";
import AuthLayout from "./layouts/auth.jsx";
import Signup from "./pages/auth/Signup.jsx";
import OtpPage from "./pages/auth/Otp.jsx";
import Login from "./pages/auth/Login.jsx";

let routes = [
  {
    element: <AuthLayout />,
    children: [
      { path: paths.signup, element: <Signup /> },
      { path: paths.register, element: <OtpPage /> },
      { path: paths.login, element: <Login /> },
    ],
  },

  {
    element: <MainLayout />,
    children: [{ path: paths.main, element: <Home /> }],
  },
  {
    element: <EditorLayout />,
    children: [{ path: paths.editor, element: <Home /> }],
  },
  {
    path: "*",
    element: <NoMatch />,
  },
];

export default routes;
