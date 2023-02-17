import Maps from "../components/map/Maps.jsx";
import { Text, Icon, Button } from "../components/index.js";
import Details from "../components/cards/Details.jsx";

const Home = () => {
  return (
    <div className="relative flex gap-5 h-full">
      <div className="min-w-[376px] relative  flex flex-col h-full  rounded-lg border border-gray-200 overflow-auto">
        <div className=" absolute inset-0  flex flex-col divide-y divide-gray-200 w-full  overflow-auto no-scrollbar">
          {Array(100)
            .fill(" ")
            .map((_, i) => (
              <div key={i} className="flex  w-full min-h-[140px] min-h-fit hover:bg-gray-50 gap-2 p-4">
                <Icon purpose="clothes-no-label" />
                <div className="flex flex-col gap-2 w-full ">
                  <div className="flex flex-col">
                    <Text className="text-gray-700 text-lg font-medium">Title</Text>
                    <Text className="text-gray-500 text-sm font-normal">Address</Text>
                    <Text className="text-gray-400 text-sm font-normal">last updated</Text>
                  </div>

                  <Button fit purpose="gray">
                    see details
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Details />
      <Maps />
    </div>
  );
};

export default Home;
