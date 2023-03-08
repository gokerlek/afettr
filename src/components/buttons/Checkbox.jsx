/**
 * Checkbox component
 *
 * @param {string} label - The text label for the checkbox.
 * @param {boolean} initialState - The initial state for the checkbox (either checked or unchecked).
 * @param {function} onChange - A callback function that is called when the checkbox state is changed.
 * @param {boolean} isChecked - A prop that can be used to set the checkbox state externally.
 * @param {boolean} table - A prop that specifies whether the checkbox is being used in a table.
 *
 * @returns {JSX} - Returns a JSX representation of a checkbox component.
 */

import { useState } from "react";
import { useTranslation } from "react-i18next";

const Checkbox = ({ label, initialState, onChange, isChecked, table }) => {
  const [checked, setChecked] = useState(initialState ?? false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
    onChange(event.target.checked);
  };

  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-2 pl-1 ">
      <input
        type="checkbox"
        checked={table ? isChecked : checked}
        onChange={handleCheckboxChange}
        className="w-4 h-4  border border-t500 rounded z-[100]
        text-yellow-500
        cursor-pointer
        appearance-none
        checked:accent-yellow-500
        checked:bg-yellow-500
        bg-white
        transform transition duration-300 ease-in-out
        focus:outline-none focus:ring-transparent checked:hover:bg-yellow-500"
      />
      {label && <label className="text-sm font-medium text-gray-700 capitalize">{t(label.toLowerCase())}</label>}
    </div>
  );
};

export default Checkbox;
