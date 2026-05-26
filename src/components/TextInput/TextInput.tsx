import "./textInput.scss";
import type { ValidationError } from "../../types/Validation";

type TextInputProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error: ValidationError;
};

function TextInput({ value, onChange, error }: TextInputProps) {
  function displayError() {
    if (error.isError) {
      return <p className="input-error">{error.errorMessage}</p>;
    }
  }
  return (
    <>
      <input
        type="text"
        className="input-text"
        value={value}
        onChange={onChange}
      />
      {displayError()}
    </>
  );
}

export default TextInput;
