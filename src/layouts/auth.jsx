import { Outlet } from "react-router-dom";
import * as React from "react";
import Header from "../components/header/index.jsx";
import { Text } from "../components/index.js";
import Icon from "../components/Icon.jsx";

const AuthLayout = () => {
  return (
    <div className="w-screen h-screen ">
      <Header editor />

      <div className="flex flex-row  h-[calc(100vh-82px)] gap-5 mx-5 ">
        <div className=" flex-1">
          <Outlet />
        </div>

        <div className="fixed bottom-4 flex flex-col max-w-[270px] justify-between items-start border rounded-lg border-b-gray-200   as:hidden divide-y divide-gray-200">
          <Text className="text-gray-500 text-[10px] font-[400]  max-w-xl p-4 " markdown>
            header-info
          </Text>

          <div className="flex flex-row gap-2 items-center p-1 border-l border-gray-100 p-4 w-full ">
            <a href="#" target="_blank" rel="noreferrer noopener" className="w-6 cursor-pointer">
              <Icon purpose="apple" />
            </a>

            <a href="#" target="_blank" rel="noreferrer noopener" className="w-6 cursor-pointer">
              <Icon purpose="google" />
            </a>

            <div className="flex flex-col items-start">
              <Text className="text-[10px] text-gray-500 font-normal capitalize">contact us</Text>
              <div className="text-[10px] text-gray-500 font-semibold">info@afettr.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
