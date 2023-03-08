/**

 @component NeededCheck
 A component that renders a checkbox with a label and a colored dot, and allows the user to toggle its state.
 @example
 <NeededCheck />
 @returns {JSX.Element}
 A JSX element that represents the NeededCheck component.
 */
import Checkbox from "../buttons/Checkbox.jsx";
import clsx from "clsx";

const NeededCheck = ({ data, isChecked, onCheckboxChange }) => {
  const { cat_name, cat_color } = data;
  return (
    <div
      onClick={onCheckboxChange}
      className="flex items-center justify-between w-full py-1.5 px-2 hover:bg-gray-100 rounded cursor-pointer ">
      <Checkbox label={cat_name} isChecked={isChecked} table onChange={() => {}} />
      <div
        style={{
          backgroundColor: cat_color,
        }}
        className={clsx("w-2 h-2 rounded")}
      />
    </div>
  );
};

export default NeededCheck;
