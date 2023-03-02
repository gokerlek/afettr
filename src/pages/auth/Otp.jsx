import { useForm } from "react-hook-form";
import Otp from "../../components/Input/Otp.jsx";
import { Button, Text } from "../../components";

const OtpPage = () => {
  const { control, handleSubmit, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const watchAllFields = watch("code");

  console.log(watchAllFields?.length);

  return (
    <div className="flex items-center justify-start  flex-col h-[calc(100vh-10%)] max-w-[312px] gap-5 mt-[10%] mx-auto">
      <Text className="text-2xl as:text-lg font-bold">SMS Kodu</Text>

      <Otp control={control} purpose="code" />

      <Button height={42} purpose="black" onClick={handleSubmit(onSubmit)} disabled={watchAllFields?.length !== 4}>
        Devam Et
      </Button>

      <Button height={42} purpose="white" onClick={() => console.log("clicked")}>
        Tekrar Gönder
      </Button>
    </div>
  );
};

export default OtpPage;
