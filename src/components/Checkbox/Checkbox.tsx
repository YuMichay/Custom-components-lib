import React, { ChangeEvent, useEffect, useState } from "react";

import { CheckboxProps } from "@/types/types";
import * as styles from "./Checkbox.module.scss";

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onChange,
  disabled = false,
  required = false,
  label = "Checkbox",
  size = "medium",
  color = "primary",
  name,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked((prevState) => (prevState = !prevState));

    if (onChange) {
      onChange(event);
    }
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <div
      className={`${styles["checkboxCustom"]} ${styles[size]} ${styles[color]}${disabled ? " " + styles["disabled"] : ""}`}
    >
      <label>{required ? `${label}*` : label}</label>
      <input
        type="checkbox"
        checked={isChecked}
        name={name ? name : ""}
        disabled={disabled}
        required={required}
        onChange={handleChange}
      />
    </div>
  );
};

export default Checkbox;
