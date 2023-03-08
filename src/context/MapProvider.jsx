import { createContext, useCallback, useContext, useState, useMemo } from "react";
import { mapData } from "../../public/locs.js";

const defaultValues = {
  openList: false,
  setOpenList: () => {},
  open: () => {},
  close: () => {},
  get_location_data: () => {},
};

const MapContext = createContext(defaultValues);

export const useMap = () => useContext(MapContext);

export const MapProvider = ({ children }) => {
  const { initial_map_Center, locations } = mapData;
  const [openList, setOpenList] = useState(false);
  const [cityOptions, setCityOptions] = useState([]);
  const [townOptions, setTownOptions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedTown, setSelectedTown] = useState(null);

  const [location_data, setLocationData] = useState(null);
  const [openDetailCard, setOpenDetailCard] = useState(false);
  const [checkedCategories, setCheckedCategories] = useState([]);

  const [filteredLocations, setFilteredLocations] = useState(locations);

  const filter_locations = useCallback(() => {
    let filteredLocation = filteredLocations.filter((location) => {
      return checkedCategories.includes(location.cat_name);
    });
    if (checkedCategories.length === 0) {
      filteredLocation = locations;
    }
    setFilteredLocations(filteredLocation);
  }, [checkedCategories]);

  const filter_locations_by_city = useCallback(
    (city_id) => {
      let filteredLocation = filteredLocations.filter((location) => {
        return location.city_id === city_id;
      });
      if (city_id === 0) {
        filteredLocation = locations;
      }
      setFilteredLocations(filteredLocation);
    },
    [locations]
  );
  const filter_locations_by_town = useCallback(
    (town_id) => {
      let filteredLocation = filteredLocations.filter((location) => {
        return location.town_id === town_id;
      });
      if (town_id === 0) {
        filteredLocation = locations;
      }
      setFilteredLocations(filteredLocation);
    },
    [locations]
  );

  const clear_filter = () => {
    setCheckedCategories([]);
    setFilteredLocations(locations);
    setSelectedCity(null);
    setSelectedTown(null);
  };

  const get_location_data = (location) => {
    setLocationData(location);
  };

  const open = useCallback(() => {
    setOpenList(true);
  }, []);

  const close = useCallback(() => {
    setOpenList(false);
  }, []);

  const [center, setCenter] = useState({ lat: Number(initial_map_Center.lat), lng: Number(initial_map_Center.lng) });

  const [zoom, setZoom] = useState(6);

  const updateCenter = (location) => () => {
    const { lat, lng } = location;

    setCenter({ lat: Number(lat), lng: Number(lng) });
    setZoom(15);

    get_location_data(location);

    setOpenDetailCard(true);
  };

  const get_city = async () =>
    await fetch("http://afettr.com/api/address.php?type=listcity", {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "multipart/form-data",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const options = data.map(({ city_id, city_name }) => {
          return { id: city_id, label: city_name };
        });
        setCityOptions(options);
      })
      .catch((error) => {
        console.log(error);
      });

  const get_town = async (city_id) =>
    await fetch(`http://afettr.com/api/address.php?type=listtown&city_id=${city_id}`, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "multipart/form-data",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const options = data.map(({ town_id, town_name }) => {
          return { id: town_id, label: town_name };
        });
        setTownOptions(options);
      })
      .catch((error) => {
        console.log(error);
      });

  const values = useMemo(() => {
    return {
      openList,
      setOpenList,
      open,
      close,
      get_location_data,
      location_data,
      setLocationData,
      openDetailCard,
      setOpenDetailCard,
      center,
      setCenter,
      zoom,
      setZoom,
      updateCenter,
      checkedCategories,
      setCheckedCategories,
      filter_locations,
      filter_locations_by_city,
      filter_locations_by_town,
      clear_filter,
      filteredLocations,
      cityOptions,
      get_city,
      townOptions,
      get_town,
      selectedCity,
      setSelectedCity,
      selectedTown,
      setSelectedTown,
    };
  }, [
    openList,
    setOpenList,
    open,
    close,
    get_location_data,
    location_data,
    setLocationData,
    openDetailCard,
    setOpenDetailCard,
    center,
    setCenter,
    zoom,
    setZoom,
    updateCenter,
    checkedCategories,
    setCheckedCategories,
    filter_locations,
    filter_locations_by_city,
    filter_locations_by_town,
    clear_filter,
    filteredLocations,
    cityOptions,
    get_city,
    townOptions,
    get_town,
    selectedCity,
    setSelectedCity,
    selectedTown,
    setSelectedTown,
  ]);

  return <MapContext.Provider value={values}>{children}</MapContext.Provider>;
};
