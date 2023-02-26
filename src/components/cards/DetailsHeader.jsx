import { Icon, Text } from "../index.js";

const DetailsHeader = ({ data, setOpenDetailCard }) => {
  const { type, title, address, lastUpdated } = data ?? {};
  const closeDetail = () => {
    console.log("close detail");
    setOpenDetailCard(false);
  };

  return (
    <div className="flex relative  w-full  min-h-fit  gap-2 border-b border-gray-200 mb-2 pb-2">
      <Icon purpose={type ?? "clothes-no-label"} />

      <div className="flex flex-col w-full ">
        <Text className="text-gray-700 text-lg font-medium">{title ?? ""}</Text>

        <Text className="text-gray-500 text-sm font-normal">{address ?? ""}</Text>

        <Text
          className="text-gray-400 text-sm font-normal capitalize"
          searchTerms={["**lastUpdate**"]}
          changeTerms={[lastUpdated ?? "NA"]}>
          last updated
        </Text>
      </div>

      {!!setOpenDetailCard && <Icon purpose="close" className="absolute right-0 top-0" onClick={closeDetail} />}
    </div>
  );
};

export default DetailsHeader;
