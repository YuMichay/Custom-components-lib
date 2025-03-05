import { ChangeEvent, MouseEvent, ReactNode } from "react";

type Colors = "primary" | "secondary" | "success" | "error" | "info" | "warning";
type Sizes = "small" | "medium" | "large";

type ButtonType = "button" | "submit" | "reset";
type ButtonVariants = "text" | "contained" | "outlined";

export interface ButtonProps {
  children?: ReactNode;
  type?: ButtonType;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  size?: Sizes;
  variant?: ButtonVariants;
  color?: Colors;
  loading?: boolean;
  fullWidth?: boolean;
}

type TextFieldType = "text" | "password" | "email" | "number" | "search" | "tel" | "url";
type TextFieldVariants = "outlined" | "filled" | "standard";
type TextFieldSizes = "small" | "medium";

export interface TextFieldProps {
  type?: TextFieldType;
  variant?: TextFieldVariants;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  size?: TextFieldSizes;
  fullWidth?: boolean;
  color?: Colors;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
}

type SelectVariants = "filled" | "outlined" | "standard";

export interface SelectProps {
  children?: ReactNode;
  autoWidth?: boolean;
  multiple?: boolean;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  variant?: SelectVariants;
}

export interface CheckboxProps {
  defaultChecked?: boolean;
  disabled?: boolean;
  checked?: boolean;
  size?: Sizes;
  color?: Colors;
  icon?: ReactNode;
  checkedIcon?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface SwitchProps {
  defaultChecked?: boolean;
  disabled?: boolean;
  checked?: boolean;
  size?: Sizes;
  color?: Colors;
  icon?: ReactNode;
  checkedIcon?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}
