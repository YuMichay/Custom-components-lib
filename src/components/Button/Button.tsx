import React, { ReactNode } from "react";

import { ButtonProps } from "../../types/types";
import * as styles from "./Button.module.scss";

const Button: React.FC<ButtonProps> = ({
  children = "Button",
  type = "button",
  onClick = () => console.log("Button clicked"),
  disabled = false,
  size = "medium",
  variant = "contained",
  color = "primary",
  loading = false,
  fullWidth = false,
}): ReactNode => {
  if (!children) {
    children = variant.slice(0, 1).toUpperCase() + variant.slice(1);
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${styles[variant]} ${styles[color]} ${styles[size]} ${fullWidth ? styles["fullWidth"] : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
