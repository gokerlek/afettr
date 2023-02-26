import { createContext, useCallback, useContext, useState, useMemo } from "react";
import useApi from "../hooks/useApi.jsx";

const defaultValues = {
  openList: false,
  setOpenList: () => {},
  open: () => {},
  close: () => {},
};

const MapContext = createContext(defaultValues);

export const useMap = () => useContext(MapContext);

export const MapProvider = ({ children }) => {
  const { get, post, put, del, logout, token, data } = useApi();
  const [openList, setOpenList] = useState(false);

  const open = useCallback(() => {
    setOpenList(true);
  }, []);

  const close = useCallback(() => {
    setOpenList(false);
  }, []);

  const values = useMemo(() => {
    return {
      openList,
      setOpenList,
      open,
      close,
    };
  }, [openList, setOpenList, open, close]);

  return <MapContext.Provider value={values}>{children}</MapContext.Provider>;
};
