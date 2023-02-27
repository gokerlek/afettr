import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Text } from "../../components/index.js";
import InputMask from "react-input-mask";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import clsx from "clsx";
import PhoneInput from "react-phone-input-2";

const inputs = {
  name: {
    name: "name",
    type: "text",
    placeholder: "Ad Soyad yazınız",
    label: "Ad Soyad",
    required: "Lütfen adınızı ve soyadınızı yazınız",
  },
  birthYear: {
    name: "birthYear",
    type: "number",
    placeholder: "Doğum Yılı yazınız",
    label: "Doğum Yılı",
    required: "Lütfen doğum yılınızı yazınız",
  },

  tc: {
    name: "tc",
    type: "number",
    placeholder: "11111111111",
    label: "TC Kimlik Numarası",
    required: "Lütfen TC kimlik numaranızı yazınız",
  },
  education: {
    name: "education",
    type: "text",
    placeholder: "Öğrenim durumunuzu yazınız",
    label: "Öğrenim Durumu",
    required: "Lütfen öğrenim durumunuzu seçiniz",
  },
  job: {
    name: "job",
    type: "text",
    placeholder: "Mesleğinizi yazınız",
    label: "Meslek",
    required: "Lütfen mesleğinizi yazınız",
  },
  email: {
    name: "email",
    type: "email",
    placeholder: "ornek@mail.com",
    label: "E-posta",
    required: "Lütfen geçerli bir e-posta adresi yazınız",
  },
  phone: {
    name: "phone",
    type: "text",
    placeholder: "Phone",
    label: "Telefon Numarası",
    required: "Lütfen geçerli bir telefon numarası yazınız",
  },
  checkbox: {
    name: "checkbox",
    type: "checkbox",
    placeholder: "Checkbox",
    label: "Checkbox",
    required: "Lütfen kullanım koşullarını kabul ediniz",
  },
};
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
  const onSubmit = (data) => console.log(data);

  const inputClassName = (error) =>
    clsx(
      "px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  ",
      "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 ",
      "focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md text-sm focus:ring-1 ",
      {
        "border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500": error,
      }
    );

  const labelClassName = "block text-sm font-medium text-black mt-2 mb-1";

  const errorClassName = "mt-1 text-pink-500 text-xs";
  return (
    <div className="flex flex-col items-center justify-start w-full h-[calc(100vh-80px)]  overflow-y-auto no-scrollbar">
      <Text className="text-black text-2xl font-bold mb-3">Kayıt Ol</Text>
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
              {...register(inputs.education.name, { required: inputs.education.required })}>
              <option value="ilk okul">İlk Okul</option>
              <option value="orta okul">Orta Okul</option>
              <option value="lise">Lise</option>
              <option value="üniversite" selected>
                Üniversite
              </option>
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

        <div className="flex gap-2 items-center mt-4">
          <input
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
          <Text className="text-sm text-gray-700 font-normal underline hover:underline-offset-1 cursor-pointer">
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
        Hesabın var mı? <Text className="text-gray-900 cursor-pointer ">Giriş Yap</Text>
      </div>
    </div>
  );
};

export default Signup;
