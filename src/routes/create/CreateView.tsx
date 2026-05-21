import { useState } from "react";
import TextInput from "../../components/TextInput/TextInput";
import { useFormInput } from "../../hooks/useFormInput";
import "./createView.scss";
import DateInput from "../../components/DateInput/DateInput";
import SelectInput from "../../components/SelectInput/SelectInput";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

function CreateView() {
  const userNameProps = useFormInput("", true);
  const birthDateProps = useFormInput("", true);
  const genderProps = useFormInput("", true);
  const emailProps = useFormInput("", true);
  const addressProps = useFormInput("", true);
  const phoneProps = useFormInput("", true);
  const websiteProps = useFormInput("", true);

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
      <SubmitButton />
    </div>
  );
}

export default CreateView;
