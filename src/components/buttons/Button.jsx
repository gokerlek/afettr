import { useTranslation } from "react-i18next";
import { Text, Icon } from "../index.js";
import clsx from "clsx";

const Button = ({ children, onClick, leftIcon, rightIcon, purpose, className, fit, height, disabled }) => {
  const { t } = useTranslation();
  const leftIconElement = {
    purpose: typeof leftIcon === "object" ? leftIcon.purpose : leftIcon,
    width: leftIcon?.width ?? null,
    height: leftIcon?.height ?? null,
    color: leftIcon?.color ?? null,
    className: leftIcon?.className ?? null,
  };

  const rightIconElement = {
    purpose: typeof rightIcon === "object" ? rightIcon.purpose : rightIcon,
    width: rightIcon?.width,
    height: rightIcon?.height,
    color: rightIcon?.color,
  };

  const disabledClassName = {
    " cursor-not-allowed hover:bg-opacity-100": disabled,
  };

  const containerClassName = {
    black: clsx(
      disabledClassName,
      "flex items-center justify-center bg-black rounded-lg py-2 px-4 h-7 gap-2 font-medium",
      " text-white font-medium  text-center text-xs capitalize",
      " hover:bg-opacity-80",
      {
        "w-full": !fit,
        "w-fit min-w-fit": fit,
        "cursor-pointer bg-black": !disabled,
        "bg-gray-400": disabled,
      }
    ),
    gray: clsx(
      "flex items-center justify-center bg-gray-200 rounded py-2 px-4 h-7 gap-2 font-medium",
      " text-gray-500 font-medium cursor-pointer text-center text-xs capitalize",
      " hover:bg-gray-300",
      disabledClassName,
      {
        "w-full": !fit,
        "w-fit min-w-fit": fit,
      }
    ),

    "dark-gray": clsx(
      "flex items-center justify-center bg-gray-700 rounded py-2 px-1  h-7 gap-1 font-medium shadow-md",
      " text-white font-medium cursor-pointer text-center text-xs capitalize",
      " hover:bg-gray-900",
      disabledClassName,
      {
        "w-full": !fit,
        "w-fit min-w-fit": fit,
      }
    ),
    "dark-gray text": clsx(
      "flex items-center justify-center  rounded py-2 px-1  h-7 gap-1 font-medium",
      " text-gray-700 font-medium cursor-pointer text-center text-xs capitalize",
      " hover:text-gray-900",
      disabledClassName,
      {
        "w-full": !fit,
        "w-fit min-w-fit": fit,
      }
    ),
  };

  return (
    <div
      style={{ height: height ?? null }}
      className={className ?? containerClassName[purpose]}
      onClick={disabled ? null : onClick}>
      {leftIconElement.purpose && <Icon {...leftIconElement} />}

      <Text>{t(children)}</Text>

      {rightIconElement.purpose && <Icon {...rightIconElement} />}
    </div>
  );
};

export default Button;
