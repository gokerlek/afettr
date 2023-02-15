import { useTranslation } from "react-i18next";
import { Text, Icon } from "../index.js";
import clsx from "clsx";

const Button = ({
  children,
  onClick,
  leftIcon,
  rightIcon,
  purpose = "orange",
  className,
  fit,
  height,
  disabled,
}) => {
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
    " cursor-not-allowed hover:scale-100": disabled,
  };

  const containerClassName = {
    white: clsx(
      "flex items-center justify-center bg-white rounded-md p-2 border-card border",
      " text-primary font-medium cursor-pointer text-center text-sm",
      "hover:bg-pGray-100 w-fit min-w-[100px]",
      disabledClassName
    ),

    "white-border": clsx(
      "flex items-center justify-center hover:bg-white rounded p-1 border-card border gap-2",
      " text-white hover:text-pGray-900  cursor-pointer text-center text-sm",
      " w-fit min-w-[100px]",
      disabledClassName
    ),

    "black-border": clsx(
      "flex items-center justify-center bg-white rounded p-1 border-gray-400 border gap-2",
      "text-pGray-900  cursor-pointer text-center text-sm",
      " w-fit min-w-[100px] hover:bg-pGray-100",
      disabledClassName
    ),

    black: clsx(
      "flex items-center justify-center bg-pGray-900 rounded p-2 h-10 gap-2",
      " text-white font-medium cursor-pointer text-center text-sm",
      " hover:bg-pGray-700",
      disabledClassName,
      {
        "w-full": !fit,
        "w-fit": fit,
      }
    ),

    red: clsx(
      "flex items-center justify-start bg-pRed-700  p-2 h-10 gap-2",
      " text-white font-medium cursor-pointer text-center text-xs",
      " hover:bg-pRed-400",
      disabledClassName,
      {
        "w-full": !fit,
        "w-fit": fit,
      }
    ),

    "soft red": clsx(
      "flex items-center justify-center bg-pRed-500  p-2 h-11 gap-2 rounded-lg",
      " text-white font-medium cursor-pointer text-center text-sm",
      " hover:bg-pRed-400",
      disabledClassName,
      {
        "w-full": !fit,
        "w-fit": fit,
      }
    ),
  };

  return (
    <div
      style={{ height: height ?? null }}
      className={className ?? containerClassName[purpose]}
      onClick={disabled ? null : onClick}
    >
      {leftIconElement.purpose && <Icon {...leftIconElement} />}

      <Text>{t(children)}</Text>

      {rightIconElement.purpose && <Icon {...rightIconElement} />}
    </div>
  );
};

export default Button;
