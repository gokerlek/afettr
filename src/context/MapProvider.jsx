import { createContext, useCallback, useContext, useState, useMemo } from "react";
import useAverageLocation from "../hooks/useAvarageLocation.jsx";

const defaultValues = {
  openList: false,
  setOpenList: () => {},
  open: () => {},
  close: () => {},
  get_location_data: () => {},
  getMapData: () => {},
};

const MapContext = createContext(defaultValues);

export const useMap = () => useContext(MapContext);

export const MapProvider = ({ children }) => {
  const [map_data, setMapData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mop_locs, setMopLocs] = useState([]);

  const [openList, setOpenList] = useState(false);
  const [cityOptions, setCityOptions] = useState([]);
  const [townOptions, setTownOptions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedTown, setSelectedTown] = useState(null);

  const [location_data, setLocationData] = useState(null);
  const [openDetailCard, setOpenDetailCard] = useState(false);
  const [checkedCategories, setCheckedCategories] = useState([]);

  const [filteredLocations, setFilteredLocations] = useState([]);
  const [initial, setInitialLocations] = useState({});

  const [center, setCenter] = useState({});

  console.log(center);

  const [zoom, setZoom] = useState(6);

  const getMapData = async () => {
    const url = "https://afettr.com/locs.php";
    setLoading(true);

    await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "multipart/form-data",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMapData(data);

        const locs = data.map((location) => location.details);
        setMopLocs(locs);

        setInitialLocations(useAverageLocation(locs));

        console.log(useAverageLocation(locs), locs);

        setCenter({
          lat: useAverageLocation(locs, locs).averageLatitude,
          lng: useAverageLocation(locs, locs).averageLongitude,
        });

        const loc = data.map((location) => ({
          ...location.details,
          pics: location.pics,
          sub_cats: location.subcats,
        }));

        setFilteredLocations(loc);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filter_locations = useCallback(() => {
    let filteredLocation = filteredLocations.filter((location) => {
      return checkedCategories.includes(location?.cat_name);
    });
    if (checkedCategories.length === 0) {
      filteredLocation = mop_locs;
    }
    setFilteredLocations(filteredLocation);

    setCenter({
      lat: useAverageLocation(filteredLocation, mop_locs).averageLatitude,
      lng: useAverageLocation(filteredLocation, mop_locs).averageLongitude,
    });
  }, [checkedCategories]);

  const filter_locations_by_city = useCallback(
    (city_id) => {
      let filteredLocation = filteredLocations.filter((location) => {
        return location.city_id === city_id;
      });
      if (city_id === 0) {
        filteredLocation = mop_locs;
      }
      setFilteredLocations(filteredLocation);
      setCenter({
        lat: useAverageLocation(filteredLocation, mop_locs).averageLatitude,
        lng: useAverageLocation(filteredLocation, mop_locs).averageLongitude,
      });
    },
    [map_data]
  );
  const filter_locations_by_town = useCallback(
    (town_id) => {
      let filteredLocation = filteredLocations.filter((location) => {
        return location.town_id === town_id;
      });
      if (town_id === 0) {
        filteredLocation = mop_locs;
      }
      setFilteredLocations(filteredLocation);

      setCenter({
        lat: useAverageLocation(filteredLocation, mop_locs).averageLatitude,
        lng: useAverageLocation(filteredLocation, mop_locs).averageLongitude,
      });
    },
    [map_data]
  );

  const clear_filter = () => {
    setCheckedCategories([]);
    setFilteredLocations(mop_locs);
    setSelectedCity(null);
    setSelectedTown(null);
    setCenter({
      lat: useAverageLocation(mop_locs, mop_locs).averageLatitude,
      lng: useAverageLocation(mop_locs, mop_locs).averageLongitude,
    });
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

  const updateCenter = (location) => () => {
    const { latitude, longitude } = location;

    setCenter({ lat: Number(latitude), lng: Number(longitude) });
    setZoom(15);

    get_location_data(location);

    setOpenDetailCard(true);
  };

  const get_city = async () =>
    await fetch("https://afettr.com/api/address.php?type=listcity", {
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
    await fetch(`https://afettr.com/api/address.php?type=listtown&city_id=${city_id}`, {
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
      map_data,
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
      getMapData,
    };
  }, [
    map_data,
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
    getMapData,
  ]);

  return <MapContext.Provider value={values}>{children}</MapContext.Provider>;
};
