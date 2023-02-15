import * as React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-screen h-screen">
      <div />

      <div className="flex flex-row w-screen h-[calc(100vh-84px)]">
        <div />

        <div className=" w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
