import { ChangeEventHandler } from "react";
// import "./textInput.scss";

type DateInputProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function DateInput({ value, onChange }: DateInputProps) {
  return (
    <input
      type="date"
      className="input-text"
      value={value}
      onChange={onChange}
    />
  );
}

export default DateInput;
