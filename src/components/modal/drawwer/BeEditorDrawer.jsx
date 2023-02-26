import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button, Text } from "../../index.js";
import Icon from "../../Icon.jsx";

const BeEditorDrawer = ({ isOpen, setIsOpen }) => {
  const beEditor = () => {};

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-x-0 h-full top-[64px] bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed top-[64px]  h-fit right-0 flex max-w-full ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-y-full"
                enterTo="-translate-y-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="-translate-y-0"
                leaveTo="-translate-y-full">
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md bg-white">
                  <div className="flex h-full flex-col overflow-y-scroll  px-4 pb-4  gap-4">
                    <Button height={42} purpose="black" onClick={beEditor}>
                      Become a Volunteer Editor
                    </Button>

                    <div className="flex flex-col justify-start items-center h-full  border border-gray-200 rounded">
                      <Text className="text-gray-500 text-xs font-400 p-3" markdown>
                        header-info
                      </Text>

                      <div className="flex h-full px-3 py-1 gap-2 w-full items-center  border-t border-gray-200">
                        <a
                          href="#"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="w-7 cursor-pointer focus:ring-0 focus:border-0 focus:outline-none">
                          <Icon purpose="apple" />
                        </a>

                        <a href="#" target="_blank" rel="noreferrer noopener" className="w-7 cursor-pointer">
                          <Icon purpose="google" />
                        </a>

                        <div className="flex flex-col items-start">
                          <Text className="text-[12px] text-gray-500 font-normal capitalize">contact us</Text>
                          <div className="text-[12px] text-gray-500 font-semibold">info@afettr.com</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default BeEditorDrawer;
