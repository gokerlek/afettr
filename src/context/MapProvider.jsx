import { createContext, useCallback, useContext, useState, useMemo } from "react";

const defaultValues = {
  openList: false,
  setOpenList: () => {},
  open: () => {},
  close: () => {},
  openDetailCard: false,
  setOpenDetailCard: () => {},
  openDetail: () => {},
  closeDetail: () => {},
};

const MapContext = createContext(defaultValues);

export const useMap = () => useContext(MapContext);

export const MapProvider = ({ children }) => {
  const [openList, setOpenList] = useState(false);

  const open = useCallback(() => {
    setOpenList(true);
  }, []);

  const close = useCallback(() => {
    setOpenList(false);
  }, []);

  const [openDetailCard, setOpenDetailCard] = useState(false);

  const openDetail = useCallback(() => {
    setOpenDetailCard(true);
  }, []);

  const closeDetail = useCallback(() => {
    setOpenDetailCard(false);
  }, []);

  const values = useMemo(() => {
    return {
      openList,
      setOpenList,
      open,
      close,
      openDetailCard,
      setOpenDetailCard,
      openDetail,
      closeDetail,
    };
  }, [openList, setOpenList, open, close, openDetailCard, setOpenDetailCard, openDetail, closeDetail]);

  return <MapContext.Provider value={values}>{children}</MapContext.Provider>;
};
