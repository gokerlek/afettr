import * as React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes.jsx";

const App = () => {
  const routeList = useRoutes(routes);
  return routeList;
};

export default App;

// bisi sorcam arastima yaptim ettim sunu yapiyormusun server ayarlarinda hangi sayfaya gidersen git index.html yonlendirmesi yaptin mi? fallback url deniyor sanirm.
