import { Button, Text } from "../index.js";
import Dropdown from "../buttons/Dropdown.jsx";
import { useState } from "react";
import NeededCheck from "../header/NeededCheck.jsx";
import { needs } from "../../constants.js";
import clsx from "clsx";

const Sidebar = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const needOptions = Object.values(needs);

  fetch("http://afettr.com/api/address.php?type=listcity", {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "multipart/form-data",
    },
    // mode: "no-cors",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error(error);
    });

  const handleCityChange = (value) => {
    if (!!selectedCity && value.id === selectedCity.id) {
      setSelectedCity(null);
    } else {
      setSelectedCity(value);
    }
    setSelectedDistrict(null);
  };

  const handleDistrictChange = (value) => {
    if (!!selectedDistrict && value.id === selectedDistrict.id) return;
    setSelectedDistrict(value);
  };

  return (
    <div className={clsx("flex flex-col gap-5 min-w-[270px] h-full ")}>
      <div className="w-full h-full  rounded-lg border border-gray-200 p-4">
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
            </div>
          </div>

          <div className=" relative  flex flex-col w-full  h-full pt-3">
            <Text className="text-xs text-gray-400 font-semibold mb-2 uppercase">need</Text>

            <div className=" absolute inset-0 top-[40px] flex flex-col  w-full  overflow-y-auto no-scrollbar">
              {needOptions.map((need, i) => {
                return <NeededCheck key={i} data={need} />;
              })}
            </div>
          </div>
        </div>
      </div>

      <Button height={40} purpose="black" disabled={!!!selectedCity}>
        filter
      </Button>
    </div>
  );
};

export default Sidebar;
