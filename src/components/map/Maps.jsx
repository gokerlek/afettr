import { GoogleMap, LoadScript, Marker, MarkerClusterer } from "@react-google-maps/api";
import { locations, mapContainerStyle } from "./locations.jsx";
import { useState } from "react";
import mapStyle from "./mapStayle.jsx";
import { useMap } from "../../context/MapProvider.jsx";

function createKey(location) {
  return location.lat + location.lng;
}

const Maps = () => {
  const { openDetail } = useMap();

  const [center, setCenter] = useState({ lat: -31.56391, lng: 147.154312 });

  const [zoom, setZoom] = useState(6);

  const updateCenter = (lat, lng) => () => {
    setCenter({ lat, lng });
    setZoom(10);
    openDetail();
  };

  return (
    <div className="w-full h-full">
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
          }}>
          <MarkerClusterer>
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
