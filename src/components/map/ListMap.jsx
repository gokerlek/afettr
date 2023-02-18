import { Button } from "../index.js";
import { useMap } from "../../context/MapProvider.jsx";
import clsx from "clsx";

const ListMap = () => {
  const { open, close, openList } = useMap();

  return (
    <div className="flex items-center p-1 bg-white border border-gray-200 w-fit h-fit gap-2 absolute top-[12px] right-[12px] z-[100]">
      <Button fit leftIcon="list" purpose={clsx("dark-gray", { text: !openList })} onClick={open}>
        list
      </Button>

      <Button
        fit
        leftIcon={clsx("map", { light: !openList })}
        purpose={clsx("dark-gray", { text: openList })}
        onClick={close}>
        map
      </Button>
    </div>
  );
};

export default ListMap;
