import * as React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/index.jsx";
import Sidebar from "../components/sidebar/index.jsx";

const MainLayout = () => {
  return (
    <div className="w-screen h-screen ">
      <Header />

      <div className="flex flex-row  h-[calc(100vh-82px)] gap-5 mx-5">
        <Sidebar />

        <div className=" flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
