import { Icon } from "./index.js";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Icon
        purpose="loading"
        className="w-10 h-10 text-gray-600 animate-pulse"
      />
    </div>
  );
};

export default Loading;
