import clsx from "clsx";

export const style = ({ darkLabel, leftIcon, rightIcon, error, purpose }) => {
  return {
    base: {
      label: clsx("text-sm font-medium  mb-1", {
        "text-tGray-700": darkLabel,
        "text-tGray-600": !darkLabel,
      }),
      input: clsx(
        " appearance-none bg-t100  border  rounded-md py-2  shadow-sm ",
        " placeholder:text-t700 animate-shadow ",
        "focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm",
        {
          "pl-9": leftIcon,
          "pr-9": rightIcon,
          "pr-3": !rightIcon,
          "pl-3": !leftIcon,
          "border-t500": !error,
          "border-error": error,
          "w-12 h-12 flex items-center justify-center text-center":
            purpose.includes("code"),
          "w-full block": !purpose.includes("code"),
        }
      ),
    },
    firmProfile: {
      label: "text-sm font-light  mb-2.5 text-pGray-800 text-pBlack-400",
      input: clsx(
        " appearance-none bg-t100  border  rounded py-3  shadow-sm w-full block ",
        " placeholder:text-t700 animate-shadow ",
        "focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm",
        {
          "border-pBorder-50": !error,
          "border-error": error,
        }
      ),
    },
  };
};
