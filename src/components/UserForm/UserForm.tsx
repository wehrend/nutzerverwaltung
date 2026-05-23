import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useFormInput } from "../../hooks/useFormInput";
import { Gender, type User } from "../../types/User";
import DateInput from "../DateInput/DateInput";
import SelectInput from "../SelectInput/SelectInput";
import SubmitButton from "../SubmitButton/SubmitButton";
import TextInput from "../TextInput/TextInput";

type userFormProps = {
  user: User | undefined;
  onSubmit: (user: User) => void;
};

function UserForm({ user, onSubmit }: userFormProps) {
  const userNameProps = useFormInput(user?.name ?? "", true);
  const birthDateProps = useFormInput(user?.birthdate ?? "", true);
  const genderProps = useFormInput(user?.gender ?? "", true);
  const emailProps = useFormInput(user?.email ?? "", true);
  const addressProps = useFormInput(user?.address ?? "", true);
  const phoneProps = useFormInput(user?.phone ?? "", true);
  const websiteProps = useFormInput(user?.website ?? "", true);

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

  function handleSubmitUser() {
    console.log("Submit button clicked");
    if (isValidateInputs()) {
      const submittedUser: User = {
        id: user?.id ?? Math.random(),
        name: userNameProps.value,
        birthdate: birthDateProps.value,
        gender: convertStringToGender(genderProps.value),
        email: emailProps.value,
        address: addressProps.value,
        phone: phoneProps.value,
        website: websiteProps.value,
      };
      onSubmit(submittedUser);
    } else {
      alert("Bitte Informationen ergänzen!");
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
          options={["Männlich", "Weiblich", "Divers", ""]}
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
      <SubmitButton onClick={handleSubmitUser} />
    </div>
  );
}

export default UserForm;
