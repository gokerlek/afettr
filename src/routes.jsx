import * as React from "react";

import paths from "./paths.js";
import NoMatch from "./pages/NoMatch.jsx";
import MainLayout from "./layouts/main.jsx";
import Home from "./pages/Home.jsx";
import EditorLayout from "./layouts/editor.jsx";

let routes = [
  // {
  //   element: <AuthLayout />,
  //   children: [{ path: paths.main, element: <NoMatch /> }],
  // },

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
