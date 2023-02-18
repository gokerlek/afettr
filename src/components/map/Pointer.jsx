import Text from "../Text.jsx";
import clsx from "clsx";
import Icon from "../Icon.jsx";

const pointers = {
  shelter: {
    label: "shelter",
    icon: "shelter",
    color: "bg-orange-500",
  },
  "safe-area-at-night": {
    label: "safe area at night",
    icon: "safe-area-at-night",
    color: "bg-[#24389C]",
  },
  wc: {
    label: "wc",
    icon: "wc",
    color: "bg-[#0284C7]",
  },
};
const Pointer = ({ purpose = "shelter" }) => {
  const { label, icon, color } = pointers[purpose];

  return (
    <div className="flex flex-col gap-1 items-center max-w-fit hover:scale-110 cursor-pointer">
      <Text className={clsx("px-2 py-1.5 rounded capitalize text-white font-semibold text-xs ", color)}>{label}</Text>
      <Icon purpose={icon} />
    </div>
  );
};

export default Pointer;
