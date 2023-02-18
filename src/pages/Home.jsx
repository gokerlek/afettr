import Maps from "../components/map/Maps.jsx";
import Details from "../components/cards/Details.jsx";
import ListMap from "../components/map/ListMap.jsx";
import List from "../components/map/List.jsx";
import { useMap } from "../context/MapProvider.jsx";

const Home = () => {
  const { openList, openDetailCard } = useMap();

  console.log(openDetailCard);

  return (
    <div className="relative flex gap-5 h-full">
      {openList && <List />}

      {openDetailCard && <Details />}
      <ListMap />
      <Maps />
    </div>
  );
};

export default Home;
