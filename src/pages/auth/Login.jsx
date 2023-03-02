import { Button, Text } from "../../components/index.js";
import React, { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { inputs } from "../../components/Input/inputs.jsx";
import { style } from "../../components/Input/style.jsx";
import paths from "../../paths.js";
import { useNavigate } from "react-router-dom";
import Conditions from "../../components/Conditions.jsx";

const Login = () => {
  const [openConditionsModal, setOpenConditionsModal] = useState(false);

  const openConditions = useCallback(() => {
    setOpenConditionsModal(true);
  }, [setOpenConditionsModal]);

  const closeConditions = useCallback(() => {
    setOpenConditionsModal(false);
  }, [setOpenConditionsModal]);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: yupResolver(
      yup.object().shape({
        phone: yup.string().required(inputs.phone.required),
      })
    ),
  });
  const { inputClassName, errorClassName } = style();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
  };

  const route_signup = () => {
    navigate(paths.signup);
  };

  return (
    <div className="flex items-center justify-start  flex-col h-[calc(100vh-10%)]  w-full gap-5 mt-[10%] mx-auto ">
      <div className="space-y-2">
        <Text className="text-2xl as:text-lg font-bold text-center w-full">Giriş</Text>
        <Text className="text-gray-500 text-sm font-medium mb-6 text-center w-11/12 mx-auto">
          Hesabına giriş yap ve aktif nokta bildirmeye başla.
        </Text>
      </div>
      <form className="flex flex-col max-w-[400px] w-full h-fit mx-3 px-2 gap-5">
        <Controller
          name="phoneNumber"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <PhoneInput
              {...field}
              country={"tr"}
              specialLabel={"Telefon Numarası"}
              placeholder="Telefon Numarası Giriniz"
              inputClass={inputClassName(errors.phone)}
              inputStyle={{ width: "100%" }}
            />
          )}
        />
        {errors.phone && <p className={errorClassName}>{errors.phone.message}</p>}

        <Button purpose="black" height={42} onClick={handleSubmit(onSubmit)}>
          Giriş Yap
        </Button>
      </form>

      <div className="flex flex-row gap-1 text-gray-500 text-sm font-medium mt-16">
        Hesabın yok mu?
        <Text onClick={route_signup} className="text-gray-900 cursor-pointer ">
          Kayıt Ol
        </Text>
      </div>

      <Text
        onClick={openConditions}
        className=" fixed bottom-1/4 as:bottom-2 text-sm text-gray-700 font-normal underline hover:underline-offset-1 cursor-pointer">
        Kullanım koşulları
      </Text>

      <Conditions closeConditions={closeConditions} openConditionsModal={openConditionsModal} only_read />
    </div>
  );
};

export default Login;
