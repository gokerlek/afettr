import { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import Icon from "../Icon.jsx";
import { useTranslation } from "react-i18next";

const Select = ({
  options,
  multiple,
  placeholder,
  onChange,
  defaultValue,
  disabled,
  width,
  height,
  text,
  deSelectable,
  value,
  outsideClick,
}) => {
  const [selected, setSelected] = useState(defaultValue ?? null);

  const { t } = useTranslation();

  const handleSelect = (value) => {
    if (
      deSelectable &&
      (selected === value || selected?.value === value.value)
    ) {
      setSelected(null);
      onChange(null);
    } else {
      setSelected(value);
      onChange(value);
    }
  };

  // disardan veri alınmansi gerktiginde kullanılır
  useEffect(() => {
    if (value && outsideClick) {
      options.find((item) => item.id === value) &&
        setSelected(options.find((item) => item.id === value));
    }
  }, [value]);

  return (
    <Listbox
      value={value ?? selected}
      onChange={outsideClick ? onChange : handleSelect}
      multiple={multiple}
      disabled={disabled || options?.length === 0}
      defaultValue={defaultValue}
      by="id"
    >
      {({ open }) => (
        <div
          className={clsx("relative", height ?? "", width ?? "", {
            "w-full": !width,
            "h-11": !height,
            "z-10": open,
          })}
        >
          <div className="absolute inset-0">
            <div
              className={clsx(
                " rounded bg-pGray-400 text-left border border-gray-400 overflow-hidden",
                {
                  "box-shadow-card": open,
                }
              )}
            >
              <Listbox.Button
                className={clsx(
                  "relative w-full h-11 disabled:cursor-not-allowed",
                  height ?? "",
                  {
                    "h-11": !height,
                  }
                )}
              >
                {({ open }) => (
                  <>
                    <span
                      className={clsx(
                        "flex gap-2 items-center justify-between text-left truncate text-tGray-600 px-3",
                        text ?? "",
                        {
                          "text-black font-medium": selected?.value?.length > 0,
                          "w-3/4": selected?.decorator,
                          "text-sm": !text,
                        }
                      )}
                    >
                      {t(selected?.value ? selected.value : placeholder)}

                      {selected?.decorator && selected?.decorator}
                    </span>

                    <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center ">
                      <Icon
                        purpose={clsx({
                          up: open,
                          down: !open,
                        })}
                      />
                    </span>
                  </>
                )}
              </Listbox.Button>

              <Listbox.Options
                className={clsx(
                  "max-h-60 w-full overflow-auto bg-pGray-400  rounded-md py-1",
                  text ?? "",
                  {
                    "text-base": !text,
                  }
                )}
              >
                {options?.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={(props) =>
                      clsx(" cursor-pointer select-none py-2 px-3", {
                        "bg-pGray-200 text-pGray-700":
                          props.active ||
                          props.selected ||
                          selected?.value === option.value,
                        "text-pGray-700 ": !props.active,
                      })
                    }
                    value={option}
                  >
                    {(props) => (
                      <span
                        className={`flex items-center justify-between gap-2 truncate ${
                          props.selected || selected?.value === option.value
                            ? "font-medium"
                            : "font-normal"
                        }`}
                      >
                        {t(option.value)}
                        {option.decorator && option.decorator}
                      </span>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </div>
        </div>
      )}
    </Listbox>
  );
};

export default Select;
