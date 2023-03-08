import { GoogleMap, LoadScript, Marker, MarkerClusterer } from "@react-google-maps/api";
import { mapContainerStyle } from "./locations.jsx";
import { useCallback, useState } from "react";
import mapStyle from "./mapStayle.jsx";
import DetailsDrawer from "../modal/drawwer/DetailsDrawer.jsx";
import Details from "../cards/Details.jsx";
import useWindowsSize from "../../hooks/useWindowsSize.jsx";
import { BREAKPOINTS } from "../../constants.js";
import ReportProblem from "../modal/ReportProblem.jsx";
import { useMap } from "../../context/MapProvider.jsx";

function createKey() {
  // create a unique key for each location
  return Math.random().toString(36).substr(2, 9);
}

const Maps = () => {
  const { width } = useWindowsSize();
  const { updateCenter, center, zoom, openDetailCard, setOpenDetailCard, filteredLocations } = useMap();

  const drawerCondition = width < BREAKPOINTS.MOBILE;

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    if (drawerCondition) {
      setOpenDetailCard(false);
    }
  };

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="w-full h-full">
      {drawerCondition && <DetailsDrawer openModal={openModal} />}

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
                {filteredLocations?.map((location) => (
                  <Marker
                    key={createKey(location)}
                    position={{ lat: Number(location.lat), lng: Number(location.lng) }}
                    clusterer={clusterer}
                    icon={{
                      url: location.cat_icon,
                      scaledSize: new window.google.maps.Size(30, 30),
                    }}
                    onClick={updateCenter(location)}
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
