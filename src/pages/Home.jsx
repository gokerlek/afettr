import { useCallback, useState } from "react";
import Maps from "../components/map/Maps.jsx";
import ListMap from "../components/map/ListMap.jsx";
import List from "../components/map/List.jsx";
import { useMap } from "../context/MapProvider.jsx";
import { Button } from "../components/index.js";
import FilterDrawer from "../components/modal/drawwer/FilterDrawer.jsx";
import useWindowsSize from "../hooks/useWindowsSize.jsx";

const Home = () => {
  const { openList } = useMap();
  const [open, setOpen] = useState(false);

  const openFilter = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const { width } = useWindowsSize();

  const drawerCondition = width < 500;

  return (
    <div className="relative flex gap-5  as:gap-3 h-full as:flex-col">
      {openList && <List />}

      <ListMap />
      <div className="as:block hidden">
        <Button rightIcon="filter" purpose="black_2" height={36} onClick={openFilter}>
          filter map
        </Button>
        {drawerCondition && <FilterDrawer isOpen={open} setIsOpen={setOpen} />}
      </div>
      <Maps />
    </div>
  );
};

export default Home;
