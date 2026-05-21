import { useState, type ChangeEvent } from "react";
import type { ValidationError } from "../types/Validation";

export function useFormInput(value: string, required = false) {
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState<ValidationError>({
    isError: false,
    errorMessage: "",
  });

  function handleInputChangeEvent(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const inputValue = event.target.value;
    console.log(inputValue);
    setInputValue(inputValue);
    console.log("required: " + required);
    if (required) {
      if (inputValue === "") {
        //throw error
        setError({
          isError: true,
          errorMessage: "Bitte geben Sie einen Wert ein",
        });

        console.log("Set error: " + error.isError);
      } else {
        // reset error state
        setError({ isError: false, errorMessage: "" });
        console.log("reset error:  " + error.isError);
      }
    }
  }
  return {
    value: inputValue,
    handleInputChangeEvent,
    error: error,
  };
}
