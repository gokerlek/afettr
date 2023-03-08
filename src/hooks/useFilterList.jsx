import { useMemo } from "react";

const useFilterList = (list) => {
  const filter_list = useMemo(() => {
    let uniqueList = [];
    list.forEach((item) => {
      const existingItem = uniqueList.find((newItem) => newItem.cat_name === item.cat_name);
      if (!existingItem) {
        uniqueList = [
          ...uniqueList,
          {
            cat_name: item.cat_name,
            cat_color: item.cat_color,
          },
        ];
      }
    });
    return uniqueList;
  }, [list]);

  return filter_list;
};

export default useFilterList;
