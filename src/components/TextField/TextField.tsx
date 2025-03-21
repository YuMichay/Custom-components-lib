import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { TextFieldProps } from "@/types/types";
import * as styles from "./TextField.module.scss";

const TextField: React.FC<TextFieldProps> = ({
  value = "",
  defaultValue = "",
  type = "text",
  label = "Text field",
  helpText = "",
  placeholder = "",
  onChange,
  disabled = false,
  size = "medium",
  variant = "outlined",
  fullWidth = false,
  maxLength = 20,
  required = false,
  autoFocus = false,
  error = false,
  color = "primary",
}) => {
  const [hasValue, setHasValue] = useState(!!value || !!defaultValue || !!placeholder);
  const [isTouched, setIsTouched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setHasValue(!!value || !!defaultValue || !!placeholder);
  }, [value, defaultValue, placeholder]);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.focus();

    onChange(event);
    setHasValue(!!event.target.value);
    setIsTouched(true);
  };

  const isRequired = !required || (required && hasValue);

  return (
    <div
      className={`${styles["customTextField"]} ${styles[variant]} ${error || (!isRequired && isTouched) ? styles["error"] : styles[color]} ${styles[size]}${
        fullWidth ? " " + styles.fullWidth : ""
      }${error || (!isRequired && isTouched) ? " " + styles.errorField : ""}${disabled ? " " + styles.disabled : ""}${
        hasValue ? " " + styles.hasValue : ""
      }`}
    >
      <input
        ref={inputRef}
        type={type}
        {...(value ? { value } : { defaultValue })}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
        maxLength={maxLength}
        required={required}
        autoFocus={autoFocus}
      />
      <label>{required ? `${label}*` : label}</label>
      {error && helpText && <span>{helpText}</span>}
    </div>
  );
};

export default TextField;
