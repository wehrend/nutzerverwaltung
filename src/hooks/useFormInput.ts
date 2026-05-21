import { useState, type ChangeEvent } from "react";

export function useFormInput(value: string) {
  const [inputValue, setInputValue] = useState(value);

  function handleInputChangeEvent(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }
  return {
    value: inputValue,
    handleInputChangeEvent,
  };
}
