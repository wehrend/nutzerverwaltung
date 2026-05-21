import { useState } from "react";
import TextInput from "../../components/TextInput/TextInput";
import { useFormInput } from "../../hooks/useFormInput";
import "./createView.scss";
import DateInput from "../../components/DateInput/DateInput";

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
        <br />
        <TextInput
          value={userNameProps.value}
          onChange={userNameProps.handleInputChangeEvent}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Geburtsdatum</span>
        <br />
        <DateInput
          value={birthDateProps.value}
          onChange={birthDateProps.handleInputChangeEvent}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Geschlecht</span>
        <br />
        <TextInput
          value={genderProps.value}
          onChange={genderProps.handleInputChangeEvent}
        />
      </div>
      <div className="input-container">
        <span className="input-title">E-Mail Addresse</span>
        <br />
        <TextInput
          value={emailProps.value}
          onChange={emailProps.handleInputChangeEvent}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Post Addresse</span>
        <br />
        <TextInput
          value={addressProps.value}
          onChange={addressProps.handleInputChangeEvent}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Telephon</span>
        <br />
        <TextInput
          value={phoneProps.value}
          onChange={phoneProps.handleInputChangeEvent}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Webseite</span>
        <br />
        <TextInput
          value={websiteProps.value}
          onChange={websiteProps.handleInputChangeEvent}
        />
      </div>
    </div>
  );
}

export default CreateView;
