import ModalContainer from "./ModalContainer.jsx";
import { Button, Text } from "../index.js";
import DetailsHeader from "../cards/DetailsHeader.jsx";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import useInputValue from "../../hooks/useInputValue.js";
import Icon from "../Icon.jsx";
import { useMap } from "../../context/MapProvider.jsx";

const ReportProblem = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const { location_data } = useMap();

  const { cat_name, cat_icon, neighborhood_name, street, town_name, city_name, cat_id } = location_data ?? {};

  const cat_address = `${neighborhood_name} ${street} - ${town_name}/${city_name}`;

  const { name, placeholder } = useInputValue("report-a-problem", t);

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, cat_id);
  };

  return (
    <ModalContainer
      isOpen={isOpen}
      onClose={onClose}
      options={{
        maxWidth: "max-w-[436px]",
      }}>
      <div className="as:flex flex-col as:justify-between as:h-full">
        <div>
          <Icon purpose="close" onClick={onClose} className="absolute top-2 right-2" />
          <DetailsHeader data={{ icon: cat_icon, title: cat_name, address: cat_address, lastUpdated: null }} />
          <Text className="text-gray-700 text-sm font-medium capitalize mt-4">report a problem</Text>
          <textarea
            autoFocus={false}
            className="w-full h-40 mt-2 mb-5 text-gray-900 text-sm font-normal border border-gray-200 rounded-lg py-2 px-3 outline-none focus:outline-none focus:border-gray-200 focus:ring-0 focus:ring-offset-0 "
            placeholder={placeholder}
            {...register(name, { required: true, maxLength: 3000, minLength: 3 })}
          />
        </div>

        <Button height={40} purpose="black" onClick={handleSubmit(onSubmit)} disabled={!isValid}>
          forward
        </Button>
      </div>
    </ModalContainer>
  );
};

export default ReportProblem;
