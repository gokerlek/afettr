import * as React from "react";
import { useState } from "react";
import clsx from "clsx";

const Toggle = ({ onClick, openColor, closeColor, size = "medium" }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);

    onClick && onClick(!toggle);
  };

  return (
    <div
      onClick={handleToggle}
      className={clsx(
        "cursor-pointer pointer-events-auto  rounded-full p-0.5  transition duration-200 ease-in-out",
        {
          "w-7 h-4": size === "small",
          "w-11 h-6": size === "medium",
          "w-[60px] h-9": size === "large",
          [openColor ?? "bg-primary "]: toggle,
          [closeColor ?? "bg-tGray-350 "]: !toggle,
        }
      )}
    >
      <div
        className={clsx(
          "h-5 w-5 rounded-full bg-white shadow-toggle transition duration-200 ease-in-out",
          {
            "translate-x-3": toggle && size === "small",
            "translate-x-5": toggle && size === "medium",
            "translate-x-6": toggle && size === "large",
            "h-3 w-3": size === "small",
            "h-5 w-5": size === "medium",
            "h-8 w-8": size === "large",
          }
        )}
      ></div>
    </div>
  );
};

export default Toggle;
