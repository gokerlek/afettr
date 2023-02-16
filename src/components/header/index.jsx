import Icon from "../Icon.jsx";
import { Button, Text } from "../index.js";

const Header = () => {
  const register = () => {};

  const login = () => {};

  return (
    <header className="flex-1 h-16 flex gap-5 mx-5">
      <Icon purpose="logo" className="w-[270px] flex items-center" />

      <div className="flex flex-row justify-between items-center h-full flex-1 ">
        <div className="flex flex-row justify-start items-center h-full ">
          <Text className="text-gray-500 text-[10px] font-[400] leading-none max-w-xl " markdown>
            header-info
          </Text>

          <div className="flex flex-row gap-2 items-center p-1 border-l border-gray-100">
            <a href="#" target="_blank" rel="noreferrer noopener" className="w-6 cursor-pointer">
              <img src="/public/app/Apple.png" loading="lazy" alt="apple" className="object-cover w-full" />
            </a>

            <a href="#" target="_blank" rel="noreferrer noopener" className="w-6 cursor-pointer">
              <img src="/public/app/Google.png" loading="lazy" className="object-cover w-full" />
            </a>

            <div className="flex flex-col items-start">
              <Text className="text-[10px] text-gray-500 font-normal capitalize">contact us</Text>
              <div className="text-[10px] text-gray-500 font-semibold">info@afettr.com</div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-5 items-center">
          <Text className="text-xs min-w-fit font-medium capitalize cursor-pointer hover:underline" onClick={login}>
            login
          </Text>
          <Button purpose="black" fit onClick={register}>
            register
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Header;
