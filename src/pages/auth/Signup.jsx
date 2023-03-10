import React, { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Text } from "../../components/index.js";
import InputMask from "react-input-mask";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
// import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import paths from "../../paths.js";
import { inputs } from "../../components/Input/inputs.jsx";
import { style } from "../../components/Input/style.jsx";
import Conditions from "../../components/Conditions.jsx";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required(inputs.name.required),
        birthYear: yup.number().required(inputs.birthYear.required),
        tc: yup.number().required(inputs.tc.required),
        education: yup.string().required(inputs.education.required),
        job: yup.string().required(inputs.job.required),
        email: yup.string().email().required(inputs.email.required),
        phone: yup.string().required(inputs.phone.required),
        checkbox: yup.boolean().oneOf([true], inputs.checkbox.required),
      })
    ),
  });
  const navigate = useNavigate();
  const route_login = () => {
    navigate(paths.login);
  };

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [openConditionsModal, setOpenConditionsModal] = useState(false);

  const openConditions = useCallback(() => {
    setOpenConditionsModal(true);
  }, [setOpenConditionsModal]);

  const closeConditions = useCallback(() => {
    setOpenConditionsModal(false);
  }, [setOpenConditionsModal]);

  const acceptConditions = useCallback(() => {
    setIsCheckboxChecked(true);
    setOpenConditionsModal(false);
  }, [setOpenConditionsModal, setIsCheckboxChecked]);
  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(!!e.target.checked);
  };
  const onSubmit = (data) => console.log(data);

  const { labelClassName, inputClassName, errorClassName } = style();

  return (
    <div className="flex flex-col items-center justify-start w-full h-[calc(100vh-80px)]  overflow-y-auto no-scrollbar">
      <Text className="text-black text-2xl as:text-lg font-bold mb-3">Kayıt Ol</Text>
      <Text className="text-gray-500 text-sm font-medium mb-6">Gönüllü olarak kayıt ol, yer bildirmeye başla!</Text>
      <form className="flex flex-col max-w-[400px] w-full h-fit mx-3 px-2">
        <label className={labelClassName} htmlFor="name">
          {inputs.name.label}
        </label>
        <input
          autoComplete="off"
          className={inputClassName(errors[inputs.name.name])}
          type={inputs.name.type}
          id="name"
          placeholder={inputs.name.placeholder}
          {...register(inputs.name.name, { required: inputs.name.required })}
        />
        {errors[inputs.name.name] && <p className={errorClassName}>{errors[inputs.name.name].message}</p>}

        <label className={labelClassName} htmlFor="birthdate">
          {inputs.birthYear.label}
        </label>
        <InputMask
          autoComplete="off"
          className={inputClassName(errors[inputs.birthYear.name])}
          mask="9999"
          id="birthdate"
          placeholder={inputs.birthYear.placeholder}
          {...register(inputs.birthYear.name)}
        />
        {errors[inputs.birthYear.name] && <p className={errorClassName}>{inputs.birthYear.required}</p>}

        <label className={labelClassName} htmlFor="tc">
          {inputs.tc.label}
        </label>
        <InputMask
          autoComplete="off"
          className={inputClassName(errors[inputs.tc.name])}
          name="tc"
          mask="99999999999"
          pattern="[0-9]{11}"
          id="tc"
          placeholder={inputs.tc.placeholder}
          {...register(inputs.tc.name)}
        />
        {errors[inputs.tc.name] && <p className={errorClassName}>{inputs.tc.required}</p>}
        <div className="text-xs text-gray-700 font-normal mt-1.5">
          Afet zamanlarında yaşanabilecek karışıklığın önüne geçmek adına TC kimlik numaranız teyit amacı ile
          kullanılacaktır.
        </div>

        <div className="flex flex-row gap-3">
          <div className="w-full">
            <label className={labelClassName} htmlFor="education">
              {inputs.education.label}
            </label>
            <select
              className={inputClassName(errors[inputs.education.name])}
              id="education"
              defaultValue="Üniversite"
              {...register(inputs.education.name, { required: inputs.education.required })}>
              <option value="ilk okul">İlk Okul</option>
              <option value="orta okul">Orta Okul</option>
              <option value="lise">Lise</option>
              <option value="üniversite">Üniversite</option>
              <option value="yüksek lisans">Yüksek Lisans</option>
              <option value="doktora">Doktora</option>
            </select>

            {errors[inputs.education.name] && <p className={errorClassName}>{errors[inputs.education.name].message}</p>}
          </div>

          <div className="w-full">
            <label className={labelClassName} htmlFor="job">
              {inputs.job.label}
            </label>
            <input
              className={inputClassName(errors[inputs.job.name])}
              type={inputs.job.type}
              id="job"
              placeholder={inputs.job.placeholder}
              {...register(inputs.job.name, { required: inputs.job.required })}
            />
            {errors[inputs.job.name] && <p className={errorClassName}>{errors[inputs.job.name].message}</p>}
          </div>
        </div>

        <label className={labelClassName} htmlFor="email">
          {inputs.email.label}
        </label>
        <input
          className={inputClassName(errors[inputs.email.name])}
          type={inputs.email.type}
          id="email"
          placeholder={inputs.email.placeholder}
          {...register(inputs.email.name, { required: inputs.email.required })}
        />
        {errors[inputs.email.name] && <p className={errorClassName}>{errors[inputs.email.name].message}</p>}

        <label className={labelClassName} htmlFor="phone">
          {inputs.phone.label}
        </label>
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              value={value}
              onChange={onChange}
              country={"tr"}
              enableSearch={true}
              containerStyle={{ width: "100%", zIndex: 999 }}
              inputStyle={{
                width: "100%",
                height: "40px",
              }}
            />
          )}
        />
        {errors.phone && <p className={errorClassName}>{errors.phone.message}</p>}

        <div className="flex gap-2 items-center mt-4">
          <input
            checked={!!isCheckboxChecked}
            onClick={(e) => handleCheckboxChange(e)}
            className="w-4 h-4  border border-t500 rounded z-[100]
        text-yellow-500
        cursor-pointer
        appearance-none
        checked:accent-yellow-500
        checked:bg-yellow-500
        bg-white
        transform transition duration-300 ease-in-out
        focus:outline-none focus:ring-transparent checked:hover:bg-yellow-500"
            type="checkbox"
            id="checkbox"
            placeholder="Check"
            {...register("checkbox", { required: true })}
          />
          <Text
            onClick={openConditions}
            className="text-sm text-gray-700 font-normal underline hover:underline-offset-1 cursor-pointer">
            Kullanım koşulları
          </Text>
        </div>
        {errors["checkbox"] && <p className={errorClassName}>{inputs.checkbox.required}</p>}
        <div className=" mt-4" />

        <Button purpose="black" height={42} onClick={handleSubmit(onSubmit)}>
          Kayıt Ol
        </Button>
      </form>

      <div className="flex flex-row gap-1 text-gray-500 text-sm font-medium mt-16">
        Hesabın var mı?
        <Text onClick={route_login} className="text-gray-900 cursor-pointer ">
          Giriş Yap
        </Text>
      </div>

      <Conditions
        acceptConditions={acceptConditions}
        closeConditions={closeConditions}
        openConditionsModal={openConditionsModal}
      />
    </div>
  );
};

export default Signup;
