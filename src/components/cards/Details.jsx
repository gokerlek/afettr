import { Button, Icon, Text } from "../index.js";

const Details = () => {
  return (
    <div className="absolute top-[10px] left-[405px] w-80 flex flex-col  h-fit z-[100] bg-white p-4 rounded-lg shadow-lg ">
      <div className="flex w-full  min-h-fit  gap-2 border-b border-gray-200 mb-2 pb-2">
        <Icon purpose="clothes-no-label" />

        <div className="flex flex-col w-full ">
          <Text className="text-gray-700 text-lg font-medium">Title</Text>

          <Text className="text-gray-500 text-sm font-normal">Address</Text>

          <Text className="text-gray-400 text-sm font-normal">last updated</Text>
        </div>
      </div>
      <div className="flex flex-col w-full border-b border-gray-200 mb-2 pb-2">
        <Text className="text-xs text-gray-400 font-semibold mb-2 uppercase">images</Text>

        <div className=" w-[304 px] h-16 overflow-x-auto mr-[-16px] flex  gap-2">
          <div className="min-w-[64px]  w-16 h-16 bg-gray-200 rounded-lg"></div>
          <div className="min-w-[64px]  w-16 h-16 bg-gray-200 rounded-lg"></div>
          <div className="min-w-[64px]  w-16 h-16 bg-gray-200 rounded-lg"></div>
          <div className="min-w-[64px]  w-16 h-16 bg-gray-200 rounded-lg"></div>
          <div className="min-w-[64px]  w-16 h-16 bg-gray-200 rounded-lg"></div>
          <div className="min-w-[64px]  w-16 h-16 bg-gray-200 rounded-lg"></div>
          <div className="min-w-[64px]  w-16 h-16 bg-gray-200 rounded-lg"></div>
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
    </div>
  );
};

export default Details;
