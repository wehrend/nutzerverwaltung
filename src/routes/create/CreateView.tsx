import { useState } from "react";
import TextInput from "../../components/TextInput/TextInput";
import { useFormInput } from "../../hooks/useFormInput";
import "./createView.scss";
import DateInput from "../../components/DateInput/DateInput";
import SelectInput from "../../components/SelectInput/SelectInput";

function CreateView() {
  const userNameProps = useFormInput("");
  const birthDateProps = useFormInput("");
  const genderProps = useFormInput("");
  const emailProps = useFormInput("");
  const addressProps = useFormInput("");
  const phoneProps = useFormInput("");
  const websiteProps = useFormInput("");

  return (
    <div className="input-form-container">
      <div className="input-container">
        <span className="input-title">Username</span>
        <TextInput
          value={userNameProps.value}
          onChange={userNameProps.handleInputChangeEvent}
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
        />
      </div>
      <div className="input-container">
        <span className="input-title">Post Addresse</span>
        <TextInput
          value={addressProps.value}
          onChange={addressProps.handleInputChangeEvent}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Telephon</span>
        <TextInput
          value={phoneProps.value}
          onChange={phoneProps.handleInputChangeEvent}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Webseite</span>
        <TextInput
          value={websiteProps.value}
          onChange={websiteProps.handleInputChangeEvent}
        />
      </div>
    </div>
  );
}

export default CreateView;
