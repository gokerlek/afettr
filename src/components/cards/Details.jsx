import { Button, Text } from "../index.js";
import DetailsHeader from "./DetailsHeader.jsx";
import { useMap } from "../../context/MapProvider.jsx";

const Details = ({ openModal }) => {
  const { location_data, setOpenDetailCard } = useMap();

  const { cat_name, cat_icon, lat, lng, cat_details } = location_data;

  const { cat_address, images, details, notes } = cat_details;

  function openMap() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const startLat = position.coords.latitude;
          const startLng = position.coords.longitude;

          const url = `https://www.google.com/maps/dir/?api=1&origin=${startLat},${startLng}&destination=${lat},${lng}&travelmode=driving`;
          window.open(url, "_blank");
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation API desteklenmiyor.");
    }
  }

  return (
    <div className=" w-80 as:w-full flex flex-col  h-fit z-[10] bg-white p-4 as:px-0 rounded-lg shadow-lg as:shadow-none ">
      <DetailsHeader
        setOpenDetailCard={setOpenDetailCard}
        data={{ icon: cat_icon, title: cat_name, address: cat_address, lastUpdated: null }}
      />
      {images && images.length > 0 && (
        <div className="flex flex-col w-full border-b border-gray-200 mb-2 pb-2">
          <Text className="text-xs text-gray-400 font-semibold mb-2 uppercase">images</Text>

          <div className=" h-16 overflow-x-auto mr-[-16px] flex  gap-2 no-scrollbar">
            {images.map((image, i) => (
              <img src={image + ""} alt={"marker"} key={i} className="min-w-[64px]  w-16 h-16 bg-gray-200 rounded-lg" />
            ))}
          </div>
        </div>
      )}

      {details && details.length > 0 && (
        <div className="flex flex-col w-full  mb-2 pb-2">
          <Text className="text-xs text-gray-400 font-semibold mb-2 uppercase">detailed info</Text>

          <div className="flex flex-col gap-2">
            {details.map(({ title, value }, i) => (
              <div key={i} className="flex w-full border-b border-gray-200 py-1">
                <Text className="text-gray-500 text-sm font-normal w-24 capitalize">{title}</Text>
                <Text className=" flex-1 text-gray-800 text-sm font-normal capitalize">{value}</Text>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col w-full mb-2 pb-2">
        <Text className="text-xs text-gray-400 font-semibold mb-2 uppercase">officer's notes</Text>
        <Text className="text-gray-500 text-sm font-normal capitalize max-h-[60px] overflow-y-auto">{notes}</Text>
      </div>

      <Button height={40} purpose="black" onClick={openMap}>
        get directions
      </Button>

      <Button
        onClick={openModal}
        className="text-red-400 text-sm font-medium mt-2 capitalize flex items-center justify-center gap-1 w-fit mx-auto cursor-pointer hover:text-red-500"
        height={40}
        leftIcon="alert">
        report a problem
      </Button>
    </div>
  );
};

export default Details;
