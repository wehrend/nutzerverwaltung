import { useState, type ChangeEvent } from "react";

export function useFormInput(value: string) {
  const [inputValue, setInputValue] = useState(value);

  function handleInputChangeEvent(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    setInputValue(event.target.value);
  }
  return {
    value: inputValue,
    handleInputChangeEvent,
  };
}
