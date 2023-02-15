import clsx from "clsx";

const useInputHelpers = ({ purpose, show, type, error, title }) => {
  const inputClassName = clsx(
    {
      "text-red placeholder:text-placeholder": error,
      "text-textDark": !error,
    },
    " appearance-none w-full border-none"
  );

  const containerClassName = clsx(
    {
      "border-red": error,
      "h-12 px-[12px]": type !== "textarea",
    },
    " flex items-center gap-2 bg-white rounded-4 w-full border-cardBorder border-[1px] focus:outline-none focus:shadow-outline"
  );

  const inputTileClassName = clsx(
    "flex items-center gap-1 mb-1 text-[14px] text-mGray800 font-[400]",
    {
      "text-red": error,
    }
  );

  const eye = clsx(show ? "show" : "hide", { error: error });

  const lock = clsx(show ? "unlock" : "lock", { error: error });

  const conditionalType = show ? "text" : type;

  const hideEyeCondition = !!(
    purpose === "createPassword" || purpose === "reEnterPassword"
  );

  const inputContainerCondition = !!(
    purpose === "currentPassword" ||
    purpose === "newPassword" ||
    purpose === "confirmNewPassword" ||
    hideEyeCondition
  );

  const lockIconCondition = () => {
    if (
      purpose === "currentPassword" ||
      purpose === "newPassword" ||
      purpose === "confirmNewPassword" ||
      purpose === "password"
    ) {
      return true;
    } else {
      return false;
    }
  };

  const searchCondition = purpose === "search";

  const inputContainerClassName = clsx(
    inputContainerCondition && "w-full",
    "w-full"
  );

  const eyeIconCondition = !!(!hideEyeCondition && type === "password");

  const titleConditions = !!title;

  return {
    inputClassName,
    containerClassName,
    inputTileClassName,
    eye,
    lock,
    conditionalType,
    inputContainerCondition,
    lockIconCondition,
    searchCondition,
    inputContainerClassName,
    eyeIconCondition,
    titleConditions,
  };
};

export default useInputHelpers;
