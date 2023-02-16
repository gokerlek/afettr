import { Button, Text } from "../index.js";
import Dropdown from "../buttons/Dropdown.jsx";
import Checkbox from "../buttons/Checkbox.jsx";
import { useCallback, useEffect, useState } from "react";

const Sidebar = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(null);

  const handleCityChange = (value) => {
    if (!!selectedCity && value.id === selectedCity.id) return;
    setSelectedCity(value);
    setSelectedDistrict(null);
    setSelectedNeighborhood(null);
  };

  const handleDistrictChange = (value) => {
    if (!!selectedDistrict && value.id === selectedDistrict.id) return;
    setSelectedDistrict(value);
    setSelectedNeighborhood(null);
  };

  const handleNeighborhoodChange = (value) => {
    if (!!selectedNeighborhood && value.id === selectedNeighborhood.id) return;
    setSelectedNeighborhood(value);
  };

  return (
    <div className="flex flex-col gap-5 min-w-[270px] h-full">
      <div className="w-full h-full rounded-lg border border-gray-200 p-4">
        <div className="flex flex-col h-full w-full  gap-5 divide-gray-200 divide-y">
          <div className="flex flex-col w-full">
            <Text className="text-xs text-gray-400 font-semibold mb-2 uppercase">filter map</Text>
            <div className="flex flex-col gap-2 w-full">
              <Dropdown
                options={[
                  { id: 1, label: "option 1" },
                  { id: 2, label: "option 2" },
                ]}
                placeholder="select a city"
                selection={selectedCity}
                setSelection={handleCityChange}
              />
              <Dropdown
                options={[
                  { id: 11, label: "option 1" },
                  { id: 22, label: "option 2" },
                ]}
                placeholder={"select a district"}
                setSelection={handleDistrictChange}
                selection={selectedDistrict}
              />
              <Dropdown
                options={[
                  { id: 111, label: "option 1" },
                  { id: 222, label: "option 2" },
                ]}
                placeholder={"select a neighborhood"}
                setSelection={handleNeighborhoodChange}
                selection={selectedNeighborhood}
              />
            </div>
          </div>

          <div className=" relative  flex flex-col w-full  h-full pt-3">
            <Text className="text-xs text-gray-400 font-semibold mb-2 uppercase">need</Text>

            <div className=" absolute inset-0 top-[40px] flex flex-col gap-2 w-full  overflow-y-auto no-scrollbar">
              {Array(10)
                .fill(" ")
                .map((_, i) => (
                  <div key={i} className="flex items-center justify-between w-full">
                    <Checkbox label="option 1" />
                    <div className="w-2 h-2 rounded bg-orange-400" />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <Button height={40} purpose="black">
        filter
      </Button>
    </div>
  );
};

export default Sidebar;
