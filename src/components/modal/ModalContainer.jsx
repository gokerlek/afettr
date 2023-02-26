import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";

const ModalContainer = ({ isOpen, onClose, children, options }) => {
  const { maxWidth } = options ?? {};

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[1002]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[2px]" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full  items-center justify-center p-4 as:p-0 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel
                className={clsx(
                  "w-full as:h-[80vh]  transform overflow-hidden rounded-lg bg-white p-8 as:px-4 text-left align-middle shadow-xl transition-all",
                  maxWidth ?? "max-w-2xl"
                )}>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalContainer;
