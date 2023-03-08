import { Button } from "../index.js";
import { useMap } from "../../context/MapProvider.jsx";

const List = () => {
  const { updateCenter, filteredLocations } = useMap();

  return (
    <div className="min-w-[376px] relative  flex flex-col h-full  rounded-lg border border-gray-200 overflow-auto">
      <div className=" absolute inset-0  flex flex-col divide-y divide-gray-200 w-full  overflow-auto no-scrollbar">
        {filteredLocations?.map((location, i) => {
          const { cat_icon, cat_details, cat_name } = location;
          return (
            <div key={i} className="flex  w-full min-h-[140px] min-h-fit hover:bg-gray-50 gap-2 p-4">
              <img src={cat_icon} alt="" className="w-8 h-8 rounded-lg" />
              <div className="flex flex-col gap-2 w-full ">
                <div className="flex flex-col">
                  <div className="text-gray-700 text-lg font-medium">{cat_name ?? "N/A"}</div>
                  <div className="text-gray-500 text-sm font-normal">{cat_details.cat_address ?? "N/A"}</div>
                  {/*<Text className="text-gray-400 text-sm font-normal">last updated</Text>*/}
                </div>

                <Button fit purpose="gray" onClick={updateCenter(location)}>
                  see details
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
