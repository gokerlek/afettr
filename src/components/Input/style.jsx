import clsx from "clsx";

export const style = () => {
  return {
    inputClassName: (error) =>
      clsx(
        "px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  ",
        "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 ",
        "focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md text-sm focus:ring-1 ",
        {
          "border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500": error,
        }
      ),

    labelClassName: "block text-sm font-medium text-black mt-2 mb-1",

    errorClassName: "mt-1 text-pink-500 text-xs",
  };
};
