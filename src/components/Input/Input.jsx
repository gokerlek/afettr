import useInputValue from "../../hooks/useInputValue.js";
import { useController } from "react-hook-form";
import { Icon, Text } from "../index.js";
import { useTranslation } from "react-i18next";
import { style } from "./style.jsx";

const Input = ({
  purpose,
  control,
  register,
  disabled,
  darkLabel,
  styleType = "base",
}) => {
  const { t } = useTranslation();

  const { name, label, placeholder, leftIcon, rightIcon, type } = useInputValue(
    purpose,
    t
  );

  const {
    field: { onChange },
    fieldState: { error },
  } = useController({
    control,
    name: name,
  });

  const styleProps = {
    darkLabel: darkLabel,
    leftIcon: leftIcon,
    rightIcon: rightIcon,
    error: error,
    purpose: purpose,
  };

  const labelClassName = style(styleProps)[styleType].label;

  const inputClassName = style(styleProps)[styleType].input;

  return (
    <div className="flex flex-col w-full">
      <Text className={labelClassName}>{label}</Text>

      <label className="relative flex w-full ">
        {leftIcon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <Icon purpose={leftIcon} />
          </span>
        )}

        <input
          type={type}
          onChange={onChange}
          className={inputClassName}
          placeholder={t(placeholder)}
          disabled={disabled}
          {...register(name)}
        />

        {rightIcon && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <Icon purpose={rightIcon} />
          </span>
        )}
      </label>

      {error && <span className="text-error text-xs  ">{error?.message}</span>}
    </div>
  );
};

export default Input;
