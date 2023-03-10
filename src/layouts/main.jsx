import * as React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/index.jsx";
import Sidebar from "../components/sidebar/index.jsx";
import useWindowsSize from "../hooks/useWindowsSize.jsx";
import { BREAKPOINTS } from "../constants.js";
import { useMap } from "../context/MapProvider.jsx";
import { useEffect } from "react";

const MainLayout = () => {
  const { width } = useWindowsSize();

  const sidebarCondition = width > BREAKPOINTS.MOBILE;

  const { getMapData } = useMap();

  useEffect(() => {
    getMapData();
  }, []);

  return (
    <div className="w-screen h-screen ">
      <Header />

      <div className="flex flex-row  h-[calc(100vh-82px)] gap-5 mx-5">
        {sidebarCondition && <Sidebar />}

        <div className=" flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
