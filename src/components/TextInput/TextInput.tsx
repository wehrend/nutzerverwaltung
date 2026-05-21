import { ChangeEventHandler } from "react";
import "./textInput.scss";

type TextInputProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function TextInput({ value, onChange }: TextInputProps) {
  return (
    <input
      type="text"
      className="input-text"
      value={value}
      onChange={onChange}
    />
  );
}

export default TextInput;
