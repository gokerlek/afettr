import { GoogleMap, LoadScript, Marker, MarkerClusterer } from "@react-google-maps/api";
import { locations, mapContainerStyle } from "./locations.jsx";
import { useCallback, useState } from "react";
import mapStyle from "./mapStayle.jsx";
import DetailsDrawer from "../modal/drawwer/DetailsDrawer.jsx";
import Details from "../cards/Details.jsx";
import useWindowsSize from "../../hooks/useWindowsSize.jsx";
import { BREAKPOINTS } from "../../constants.js";
import ReportProblem from "../modal/ReportProblem.jsx";

function createKey() {
  // create a unique key for each location
  return Math.random().toString(36).substr(2, 9);
}

const Maps = () => {
  const { width } = useWindowsSize();

  const drawerCondition = width < BREAKPOINTS.MOBILE;

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    if (drawerCondition) {
      console.log("drawerCondition", drawerCondition);
      setOpenDetailCard(false);
    }
  };

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const [openDetailCard, setOpenDetailCard] = useState(false);

  const [center, setCenter] = useState({ lat: -31.56391, lng: 147.154312 });

  const [zoom, setZoom] = useState(6);

  const updateCenter = useCallback(
    (lat, lng) => () => {
      setCenter({ lat, lng });
      setZoom(10);

      setOpenDetailCard(true);
    },
    [setCenter, setZoom, setOpenDetailCard]
  );

  return (
    <div className="w-full h-full">
      {drawerCondition && (
        <DetailsDrawer openDetailCard={openDetailCard} setOpenDetailCard={setOpenDetailCard} openModal={openModal} />
      )}

      {!drawerCondition && openDetailCard && (
        <div className=" fixed top-[120px] right-[32px]  flex max-w-full z-[10] ">
          <Details setOpenDetailCard={setOpenDetailCard} openModal={openModal} />
        </div>
      )}

      <ReportProblem isOpen={isOpen} onClose={closeModal} setOpenDetailCard={setOpenDetailCard} />

      <LoadScript googleMapsApiKey={"AIzaSyDWqZDg2344AcAvXFFsqLDcbzXpO7voqeM"}>
        <GoogleMap
          id="marker-example"
          mapContainerStyle={mapContainerStyle}
          zoom={zoom}
          center={center}
          options={{
            styles: mapStyle,
            fullscreenControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            zoomControl: false,
          }}>
          <MarkerClusterer
            gridSize={10}
            onMouseOver={(clusterer) => {
              console.log(clusterer.getBounds());
            }}>
            {(clusterer) => (
              <>
                {locations?.map((location) => (
                  <Marker
                    key={createKey(location)}
                    position={location}
                    clusterer={clusterer}
                    icon={location.icon}
                    onClick={updateCenter(location.lat, location.lng)}
                  />
                ))}
              </>
            )}
          </MarkerClusterer>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Maps;
