/**
 *  const options = [
 *     { label: "Edit details", action: () => console.log("edit") },
 *     { label: "Archive", action: () => console.log("archive") },
 *     { label: "Clear all history", action: () => console.log("clear") },
 *     { label: "Delete project", action: () => console.log("delete") },
 *   ];
 */

import { Menu } from "@headlessui/react";
import { Icon, Text } from "../index.js";
import clsx from "clsx";

const Dropdown = ({ options, big = true }) => {
  return (
    <Menu as="div" className="relative h-full">
      <Menu.Button className="h-full">
        <Icon
          className="flex h-full items-center cursor-pointer"
          purpose={big ? "ellipsis-20" : "ellipsis"}
        />
      </Menu.Button>

      <Menu.Items className="absolute -right-2 mt-2 w-44 origin-top-right border border-border rounded bg-white shadow-card z-10">
        <div className="px-2 py-3 ">
          {options.map((option, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <button
                  onClick={option?.action}
                  className={clsx(
                    {
                      "bg-tGray-100 text-tGray-700":
                        !option?.label.includes("Delete") && active,
                      "bg-tGray-100 text-tRed-500":
                        option?.label.includes("Delete") && active,
                      "text-tGray-500":
                        !option?.label.includes("Delete") && !active,
                      "text-tRed-500":
                        option?.label.includes("Delete") && !active,
                    },
                    "group flex w-full items-center rounded px-2 py-2 text-xs capitalize"
                  )}
                >
                  <Text>{option?.label}</Text>
                </button>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
