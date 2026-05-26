type SelectInputProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: string[];
};

function SelectInput({ value, onChange, options }: SelectInputProps) {
  return (
    <select className="input-text" value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default SelectInput;
