import { Button, Text } from "../index.js";
import { useCallback, useState } from "react";
import ReportProblem from "../modal/ReportProblem.jsx";
import DetailsHeader from "./DetailsHeader.jsx";

const Details = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="absolute top-[60px] right-[12px] w-80 flex flex-col  h-fit z-[10] bg-white p-4 rounded-lg shadow-lg ">
      <DetailsHeader />
      <div className="flex flex-col w-full border-b border-gray-200 mb-2 pb-2">
        <Text className="text-xs text-gray-400 font-semibold mb-2 uppercase">images</Text>

        <div className=" w-[304 px] h-16 overflow-x-auto mr-[-16px] flex  gap-2 no-scrollbar">
          {Array(10)
            .fill("")
            .map((_, i) => (
              <div key={i} className="min-w-[64px]  w-16 h-16 bg-gray-200 rounded-lg"></div>
            ))}
        </div>
      </div>

      <div className="flex flex-col w-full  mb-2 pb-2">
        <Text className="text-xs text-gray-400 font-semibold mb-2 uppercase">detailed info</Text>

        <div className="flex flex-col gap-2">
          <div className="flex w-full border-b border-gray-200 py-1">
            <Text className="text-gray-500 text-sm font-normal w-24 capitalize">meal</Text>
            <Text className=" flex-1 text-gray-800 text-sm font-normal capitalize">2</Text>
          </div>
          <div className="flex w-full border-b border-gray-200 py-1">
            <Text className="text-gray-500 text-sm font-normal w-24 capitalize">meal</Text>
            <Text className=" flex-1 text-gray-800 text-sm font-normal capitalize">Sabah-Aksam</Text>
          </div>
          <div className="flex w-full border-b border-gray-200 py-1">
            <Text className="text-gray-500 text-sm font-normal w-24 capitalize">meal</Text>
            <Text className=" flex-1 text-gray-800 text-sm font-normal capitalize">2</Text>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full mb-2 pb-2">
        <Text className="text-xs text-gray-400 font-semibold mb-2 uppercase">officer's notes</Text>
        <Text className="text-gray-500 text-sm font-normal capitalize">
          Lorem ipsum dolor sit amet consectetur Consectetur blandit donec.
        </Text>
      </div>

      <Button height={40} purpose="black">
        get directions
      </Button>

      <Button
        onClick={openModal}
        className="text-red-400 text-sm font-medium mt-2 capitalize flex items-center justify-center gap-1 w-fit mx-auto cursor-pointer hover:text-red-500"
        height={40}
        leftIcon="alert">
        report a problem
      </Button>

      <ReportProblem isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

export default Details;
