import React from "react";
import { InputContainer, StyledInput, ErrorMessage } from "./styles";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorMessage?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  name?: string;
  id?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  error = false,
  errorMessage,
  fullWidth = false,
  disabled = false,
  name,
  id,
}) => {
  return (
    <InputContainer fullWidth={fullWidth}>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
        disabled={disabled}
        name={name}
        id={id}
      />
      {error && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  );
};

export default Input;
