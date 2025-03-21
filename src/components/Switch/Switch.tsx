import React, { ChangeEvent, useEffect, useState } from "react";

import { SwitchProps } from "@/types/types";
import * as styles from "./Switch.module.scss";

const Switch: React.FC<SwitchProps> = ({
  label = "",
  checked = false,
  disabled = false,
  onChange,
  size = "medium",
  color = "primary",
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
      className={`${styles["switchCustom"]} ${styles[size]}${isChecked ? " " + styles[color] : ""}${disabled ? " " + styles["disabled"] : ""}`}
    >
      <label>{label ? label : ""}</label>
      <input type="checkbox" checked={isChecked} disabled={disabled} onChange={handleChange} />
    </div>
  );
};

export default Switch;
