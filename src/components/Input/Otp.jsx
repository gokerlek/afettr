import useInputValue from "../../hooks/useInputValue.js";
import { useController, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import OtpInput from "react-otp-input";
const Otp = ({ purpose, control }) => {
  const { t } = useTranslation();

  const { name } = useInputValue(purpose, t);

  const {} = useController({
    control,
    name: name,
  });

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <OtpInput
          value={value}
          onChange={onChange}
          inputStyle={{
            width: "2.5rem",
            height: "3rem",
            margin: "1rem 0.4rem",
            fontSize: "1.5rem",
            borderRadius: 4,
            border: "1px solid rgba(0,0,0,0.3)",
          }}
          numInputs={4}
          isInputNum={true}
        />
      )}
    />
  );
};

export default Otp;
