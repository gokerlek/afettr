import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "../../index.js";
import Sidebar from "../../sidebar/index.jsx";

const FilterDrawer = ({ isOpen, setIsOpen }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[10000] hidden as:block" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 h-full  bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="pointer-events-none fixed bottom-0  h-full right-0 flex max-w-full ">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-y-full"
            enterTo="translate-y-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-y-0"
            leaveTo="translate-y-full">
            <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md bg-white rounded mt-[52px]">
              <div className="flex h-full flex-col overflow-y-scroll  px-4 pb-4 pt-3  gap-4">
                <Button rightIcon="filter" purpose="black_2" height={36} onClick={() => setIsOpen(false)}>
                  filter map
                </Button>
                <Sidebar mobile />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default FilterDrawer;
