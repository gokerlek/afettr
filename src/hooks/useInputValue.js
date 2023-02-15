/**
 * @summary  useInputValue hook is used to get the input name label and placeholder from the inputValues object.
 * @param {string} purpose - purpose of the input. It is used to match the "name", "label" and "purpose" props.
 * @return {object} - returns the input name, label and placeholder.
 */

const useInputValue = (purpose) => {
  const inputValues = {
    phone: {
      name: purpose,
      placeholder: "(0532) 123 45 67",
      type: "text",
    },

    kode: {
      name: purpose,
      label: "",
      placeholder: "Code",
      type: "text",
    },
    code: {
      name: purpose,
      label: "",
      type: "number",
    },

    code1: {
      name: purpose,
      label: "",
      placeholder: "0",
      type: "text",
    },

    code2: {
      name: purpose,
      label: "",
      placeholder: "0",
      type: "text",
    },

    code3: {
      name: purpose,
      label: "",
      placeholder: "0",
      type: "text",
    },

    code4: {
      name: purpose,
      label: "",
      placeholder: "0",
      type: "text",
    },

    confirmNewPassword: {
      name: purpose,
      label: "Confirm new password",
      placeholder: "Confirm new password",
      type: "password",
    },

    name: {
      name: purpose,
      label: "",
      placeholder: "",
      type: "text",
    },

    referenceCode: {
      name: purpose,
      type: "text",
    },

    signName: {
      name: purpose,
      label: "Sign Name",
      type: "text",
    },

    officialTitle: {
      name: purpose,
      label: "Official Title",
      type: "text",
    },

    TCKN: {
      name: purpose,
      label: "TCKN veya VKN",
      type: "text",
    },

    mersisNo: {
      name: purpose,
      label: "Mersis No",
      type: "text",
    },

    kepAddress: {
      name: purpose,
      label: "KEP Adresi",
      type: "email",
    },

    IBAN: {
      name: purpose,
      label: "IBAN",
      type: "text",
    },

    officerNameSurname: {
      name: purpose,
      label: "Officer Name-Surname",
      type: "text",
    },

    officerPhoneNumber: {
      name: purpose,
      label: "Officer Phone Number",
      type: "text",
    },

    branchOfficer: {
      name: purpose,
      label: "Branch Officer",
      type: "text",
    },

    landPhone: {
      name: purpose,
      label: "Land Phone",
      type: "text",
    },

    fax: {
      name: purpose,
      label: "Fax",
      type: "text",
    },

    email: {
      name: purpose,
      label: "E-mail",
      type: "text",
    },

    street: {
      name: purpose,
      type: "text",
    },

    buildingNo: {
      name: purpose,
      type: "text",
    },
  };

  const { name, label, placeholder, leftIcon, rightIcon, type } =
    inputValues[purpose];

  return { name, label, placeholder, leftIcon, rightIcon, type };
};

export default useInputValue;
