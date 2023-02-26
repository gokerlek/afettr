/**
 * @description Icon component called by other components to display an icon from the icon list in the src/components/Icon.jsx file
 * @param {string} purpose - The purpose of the icon. This is used to determine which icon to display
 * @param {number} width - The width of the icon in pixels, If you have enabled this prop, make sure height and width attributes are deleted in the svg file.
 * @param {number} height - The height of the icon in pixels, If you have enabled this prop, make sure the height and width attributes are deleted in the svg file.
 * @param {string} color - The color of the icon. If you have enabled this prop, make sure the fill attribute is "currentColor" in the svg file.
 * @returns {JSX.Element} - Returns an icon from the icon list in the src/components/Icon.jsx file
 * @example
 * import { Icon } from "./index.js";
 *
 *      <Icon purpose="logo" width={150} />
 *      <Icon purpose="logo" width={150} height={150} />
 *      <Icon purpose="logo" width={150} height={150} color="red" />
 *
 */

import iconList from "../hooks/iconList.jsx";
import clsx from "clsx";

const Icon = ({ purpose = "", width, height, color, className, onClick }) => {
  return (
    <div
      className={clsx(className, "active:bg-transparent", { "cursor-pointer": !!onClick })}
      onClick={onClick}
      style={{
        width: width,
        height: height,
        color: color,
      }}>
      {iconList(purpose, { width: width, height: height, color: color })}
    </div>
  );
};

export default Icon;
