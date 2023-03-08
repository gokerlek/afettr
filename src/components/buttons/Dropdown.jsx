/**
 *  const options = [
 *     { label: "Edit details", action: () => console.log("edit") },
 *     { label: "Archive", action: () => console.log("archive") },
 *     { label: "Clear all history", action: () => console.log("clear") },
 *     { label: "Delete project", action: () => console.log("delete") },
 *   ];
 */

import { Listbox } from "@headlessui/react";
import Icon from "../Icon.jsx";
import clsx from "clsx";
import { Text } from "../../components";

const Dropdown = ({ options, placeholder, selection, setSelection }) => {
  return (
    <div className="relative h-10 w-full ">
      <div className="absolute inset-x-0 top-0 w-full flex items-center">
        <Listbox value={selection} onChange={(e) => setSelection(e)} by={"id"}>
          {({ open }) => (
            <div
              className={clsx("flex flex-col w-full min-h-[40px] border border-gray-200 rounded bg-white ", {
                "z-[1000]": open,
              })}>
              <Listbox.Button className="focus:outline-none">
                {({ open }) => (
                  <div className="flex h-10 items-center  justify-between  px-4">
                    <div className=" text-gray-500 font-400 text-sm capitalize">
                      {selection ? selection?.label : placeholder}
                    </div>

                    <Icon purpose={clsx(open ? "up" : "down")} />
                  </div>
                )}
              </Listbox.Button>

              <Listbox.Options className=" w-full max-h-[200px] overflow-y-auto focus:outline-none  bg-white  z-[100000] mb-2">
                {options?.map((option) => (
                  <Listbox.Option key={option.id} value={option}>
                    {({ active, selected }) => {
                      return (
                        <div
                          onClick={option.action}
                          className={clsx(
                            `cursor-default select-none text-sm text-gray-500  flex items-start py-1 flex-row gap-2 px-4 capitalize`,
                            {
                              "bg-gray-100": selected || active,
                            }
                          )}>
                          <Text className={`${selected ? "font-medium" : "font-normal"}  `}>{option.label}</Text>
                        </div>
                      );
                    }}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          )}
        </Listbox>
      </div>
    </div>
  );
};

export default Dropdown;
