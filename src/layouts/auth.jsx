import { Link, Outlet } from "react-router-dom";
import * as React from "react";

const AuthLayout = () => {
  return (
    <div className='fixed inset-0 bg-neutral-700 flex justify-center'>
        <Outlet />
    </div>
  );
};

export default AuthLayout;
