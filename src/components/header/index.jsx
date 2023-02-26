import Icon from "../Icon.jsx";
import { Button, Text } from "../index.js";
import useToggle from "../../hooks/useToggle.jsx";
import BeEditorDrawer from "../modal/drawwer/BeEditorDrawer.jsx";

const Header = () => {
  const [isOpen, setIsOpen] = useToggle(false);
  const beEditor = () => {};
  const openMenu = () => {
    setIsOpen();
  };

  return (
    <header className="flex-1 h-16 flex gap-5 mx-5 as:px-5 as:mx-0 as:justify-center as:relative z-[1001] bg-white">
      <Icon purpose="logo" className="w-[270px] as:w-fit flex items-center" />

      <div className="flex flex-row justify-between items-center h-full flex-1 as:hidden">
        <div className="flex flex-row justify-start items-center h-full ">
          <Text className="text-gray-500 text-[10px] font-[400] leading-none max-w-xl " markdown>
            header-info
          </Text>

          <div className="flex flex-row gap-2 items-center p-1 border-l border-gray-100">
            <a href="#" target="_blank" rel="noreferrer noopener" className="w-6 cursor-pointer">
              <Icon purpose="apple" />
            </a>

            <a href="#" target="_blank" rel="noreferrer noopener" className="w-6 cursor-pointer">
              <Icon purpose="google" />
            </a>

            <div className="flex flex-col items-start">
              <Text className="text-[10px] text-gray-500 font-normal capitalize">contact us</Text>
              <div className="text-[10px] text-gray-500 font-semibold">info@afettr.com</div>
            </div>
          </div>
        </div>

        <Button purpose="black" fit onClick={beEditor} text={"text-xs"}>
          Become a Volunteer Editor
        </Button>
      </div>

      <Icon
        purpose={isOpen ? "close menu" : "menu"}
        className="absolute inset-y-0 right-[20px] items-center as:flex hidden h-fit my-auto"
        onClick={openMenu}
      />

      <BeEditorDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};
export default Header;
