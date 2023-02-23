/**

 @component NeededCheck
 A component that renders a checkbox with a label and a colored dot, and allows the user to toggle its state.
 @example
 <NeededCheck />
 @returns {JSX.Element}
 A JSX element that represents the NeededCheck component.
 */
import Checkbox from "../buttons/Checkbox.jsx";
import { useState } from "react";
import clsx from "clsx";

const NeededCheck = ({ data }) => {
  const { label, bg_color } = data;
  // Initialize the state of the checkbox to unchecked
  const [isChecked, setIsChecked] = useState(false);

  // Function that toggles the state of the checkbox
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // Render the checkbox with a label and a colored dot
  return (
    <div
      onClick={handleCheckboxChange}
      className="flex items-center justify-between w-full py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer ">
      <Checkbox label={label} isChecked={isChecked} table />
      <div className={clsx("w-2 h-2 rounded", bg_color)} />
    </div>
  );
};

export default NeededCheck;
