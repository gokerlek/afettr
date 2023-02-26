import { Link, Outlet } from "react-router-dom";
import * as React from "react";
import Header from "../components/header/index.jsx";

const AuthLayout = () => {
  return (
    <div className="w-screen h-screen ">
      <Header editor />

      <div className="flex flex-row  h-[calc(100vh-82px)] gap-5 mx-5">
        <div className=" flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
