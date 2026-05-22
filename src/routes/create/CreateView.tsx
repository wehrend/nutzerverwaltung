import { useContext, useState } from "react";
import TextInput from "../../components/TextInput/TextInput";
import { useFormInput } from "../../hooks/useFormInput";
import "./createView.scss";
import DateInput from "../../components/DateInput/DateInput";
import SelectInput from "../../components/SelectInput/SelectInput";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { UserContext } from "../../context/UserContext";
import { Gender, type User } from "../../types/User";

function CreateView() {
  const userNameProps = useFormInput("", true);
  const birthDateProps = useFormInput("", true);
  const genderProps = useFormInput("", true);
  const emailProps = useFormInput("", true);
  const addressProps = useFormInput("", true);
  const phoneProps = useFormInput("", true);
  const websiteProps = useFormInput("", true);

  const { usersDispatch } = useContext(UserContext);

  function convertStringToGender(value: string): Gender {
    switch (value) {
      case "Male":
        return Gender.MALE;
      case "Female":
        return Gender.FEMALE;
      case "other":
        return Gender.OTHER;
      default:
        return Gender.NONE;
    }
  }

  function isValidateInputs(): boolean {
    const isUsernameValid = userNameProps.validateInput(userNameProps.value);
    const isBirthdateValid = birthDateProps.validateInput(birthDateProps.value);
    const isGenderValid = genderProps.validateInput(genderProps.value);
    const isEmailValid = emailProps.validateInput(emailProps.value);
    const isAddressValid = addressProps.validateInput(addressProps.value);
    const isPhoneValid = phoneProps.validateInput(phoneProps.value);

    const isWebsiteValid = websiteProps.validateInput(websiteProps.value);
    return (
      isUsernameValid &&
      isBirthdateValid &&
      isGenderValid &&
      isEmailValid &&
      isAddressValid &&
      isPhoneValid &&
      isWebsiteValid
    );
  }

  function handleSubmitNewUser() {
    console.log("Submit button clicked");
    if (isValidateInputs()) {
      const user: User = {
        id: Math.random(),
        name: userNameProps.value,
        birthdate: birthDateProps.value,
        gender: convertStringToGender(genderProps.value),
        email: emailProps.value,
        address: addressProps.value,
        phone: phoneProps.value,
        website: websiteProps.value,
      };
      usersDispatch({ type: "ADD_USER", user: user });

      alert("Added User");
    } else {
      alert("Bitte Informationen ergänzen");
    }
  }

  return (
    <div className="input-form-container">
      <div className="input-container">
        <span className="input-title">Username</span>
        <TextInput
          value={userNameProps.value}
          onChange={userNameProps.handleInputChangeEvent}
          error={userNameProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Geburtsdatum</span>
        <DateInput
          value={birthDateProps.value}
          onChange={birthDateProps.handleInputChangeEvent}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Geschlecht</span>
        <SelectInput
          value={genderProps.value}
          onChange={genderProps.handleInputChangeEvent}
          options={["Männlich", "Weiblich", "Divers"]}
        />
      </div>
      <div className="input-container">
        <span className="input-title">E-Mail Addresse</span>
        <TextInput
          value={emailProps.value}
          onChange={emailProps.handleInputChangeEvent}
          error={emailProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Post Addresse</span>
        <TextInput
          value={addressProps.value}
          onChange={addressProps.handleInputChangeEvent}
          error={addressProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Telephon</span>
        <TextInput
          value={phoneProps.value}
          onChange={phoneProps.handleInputChangeEvent}
          error={phoneProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Webseite</span>
        <TextInput
          value={websiteProps.value}
          onChange={websiteProps.handleInputChangeEvent}
          error={websiteProps.error}
        />
      </div>
      <SubmitButton onClick={handleSubmitNewUser} />
    </div>
  );
}

export default CreateView;
