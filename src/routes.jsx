import * as React from "react";

import paths from "./paths.js";
import NoMatch from "./pages/NoMatch.jsx";
import MainLayout from "./layouts/main.jsx";
import Home from "./pages/Home.jsx";

let routes = [
  // {
  //   element: <AuthLayout />,
  //   children: [{ path: paths.main, element: <NoMatch /> }],
  // },

  {
    element: <MainLayout />,
    children: [
      { path: paths.main, element: <Home /> },
      { path: paths.jobs, element: <Home /> },
      { path: paths.candidates, element: <Home /> },
      { path: paths.talent_pools, element: <Home /> },
      { path: paths.reports, element: <Home /> },
      { path: paths.campaigns, element: <Home /> },
      { path: paths.settings, element: <Home /> },
    ],
  },
  {
    path: "*",
    element: <NoMatch />,
  },
];

export default routes;
