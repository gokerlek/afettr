import { Button, Text } from "../index.js";
import Dropdown from "../buttons/Dropdown.jsx";
import { useEffect } from "react";
import NeededCheck from "../header/NeededCheck.jsx";
import clsx from "clsx";
import { mapData } from "../../../public/locs.js";
import useFilterList from "../../hooks/useFilterList.jsx";
import { useMap } from "../../context/MapProvider.jsx";

const Sidebar = () => {
  const {
    checkedCategories,
    setCheckedCategories,
    filter_locations,
    filter_locations_by_city,
    filter_locations_by_town,
    clear_filter,
    cityOptions,
    get_city,
    townOptions,
    get_town,
    selectedCity,
    setSelectedCity,
    selectedTown,
    setSelectedTown,
  } = useMap();
  const { locations } = mapData;
  const filter_list = useFilterList(locations);

  useEffect(() => {
    get_city();
  }, []);

  const handleCityChange = (value) => {
    console.log(value);
    if (!!selectedCity && value.id === selectedCity.id) {
      setSelectedCity(null);
      filter_locations_by_city(0);
    } else {
      setSelectedCity(value);
      get_town(value.id);
      filter_locations_by_city(value.id);
    }
    setSelectedTown(null);
  };

  const handleTownChange = (value) => {
    if (!!selectedTown && value.id === selectedTown.id) return;
    setSelectedTown(value);
    filter_locations_by_town(value.id);
  };

  const handleCheckboxChange = (cat_name) => {
    setCheckedCategories((prevChecked) => {
      if (prevChecked.includes(cat_name)) {
        return prevChecked.filter((name) => name !== cat_name);
      } else {
        return [...prevChecked, cat_name];
      }
    });
  };

  return (
    <div className={clsx("flex flex-col gap-5 min-w-[270px] h-full ")}>
      <div className="w-full h-full  rounded-lg border border-gray-200 p-4">
        <div className="flex flex-col h-full w-full  gap-5 divide-gray-200 divide-y">
          <div className="flex flex-col w-full">
            <div className="flex justify-between gap-2 w-full">
              <Text className="text-xs text-gray-400 font-semibold mb-2 uppercase">filter map</Text>
              <Text
                onClick={clear_filter}
                markdown
                noTranslate
                className="text-[10px] min-w-fit text-gray-400 font-semibold  mb-2 uppercase hover:text-gray-500 cursor-pointer">
                Temizle **X**
              </Text>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <Dropdown
                options={cityOptions}
                placeholder="İl seçiniz"
                selection={selectedCity}
                setSelection={handleCityChange}
              />
              <Dropdown
                options={townOptions}
                placeholder="İlçe seçiniz"
                setSelection={handleTownChange}
                selection={selectedTown}
              />
            </div>
          </div>

          <div className=" relative  flex flex-col w-full  h-full pt-3">
            <Text className="text-xs text-gray-400 font-semibold mb-2 uppercase">need</Text>

            <div className=" absolute inset-0 top-[40px] flex flex-col  w-full  overflow-y-auto no-scrollbar">
              {filter_list?.map((category, i) => {
                return (
                  <NeededCheck
                    key={i}
                    data={category}
                    isChecked={checkedCategories?.includes(category.cat_name)}
                    onCheckboxChange={() => handleCheckboxChange(category.cat_name)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Button height={40} purpose="black" onClick={filter_locations}>
        filter
      </Button>
    </div>
  );
};

export default Sidebar;
