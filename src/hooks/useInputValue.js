/**
 * @summary  useInputValue hook is used to get the input name label and placeholder from the inputValues object.
 * @param {string} purpose - purpose of the input. It is used to match the "name", "label" and "purpose" props.
 * @return {object} - returns the input name, label and placeholder.
 */

const useInputValue = (purpose, t) => {
  const inputValues = {
    phone: {
      name: purpose,
      placeholder: "(0532) 123 45 67",
      type: "text",
    },
    "report-a-problem": {
      name: purpose,
      placeholder: t("You can enter detailed information."),
    },
    code: {
      name: purpose,
      label: "",
      type: "number",
    },
  };

  const { name, label, placeholder, leftIcon, rightIcon, type } = inputValues[purpose];

  return { name, label, placeholder, leftIcon, rightIcon, type };
};

export default useInputValue;
