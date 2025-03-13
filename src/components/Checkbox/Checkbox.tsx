import React, { MouseEvent, useEffect, useState } from "react";

import { CheckboxProps } from "@/types/types";
import * as styles from "./Checkbox.module.scss";

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onClick,
  disabled = false,
  required = false,
  label = "Checkbox",
  size = "medium",
  color = "primary",
  name,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleClick = (event: MouseEvent<HTMLInputElement>) => {
    setIsChecked((prevState) => (prevState = !prevState));

    if (onClick) {
      onClick(event);
    }
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <div
      className={`${styles["checkboxCustom"]} ${styles[size]} ${styles[color]} ${disabled ? styles["disabled"] : ""}`}
      onClick={handleClick}
    >
      <label>{required ? `${label}*` : label}</label>
      <input
        type="checkbox"
        checked={isChecked}
        name={name ? name : ""}
        disabled={disabled}
        required={required}
      />
    </div>
  );
};

export default Checkbox;
