import { ChangeEvent, MouseEvent, ReactNode } from "react";

// GENERAL
type Colors = "primary" | "secondary" | "success" | "error" | "info" | "warning";
type Sizes = "small" | "medium" | "large";

// BUTTON

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

// TEXTFIELD

type TextFieldType = "text" | "password" | "email" | "number" | "search" | "tel" | "url";
type TextFieldVariants = "outlined" | "filled" | "standard";

export interface TextFieldProps {
  value?: string;
  defaultValue?: string;
  type?: TextFieldType;
  label?: string;
  helpText?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  size?: Sizes;
  variant?: TextFieldVariants;
  fullWidth?: boolean;
  maxLength?: number;
  required?: boolean;
  autoFocus?: boolean;
  error?: boolean;
  color?: Colors;
}

// SELECT

type SelectVariants = "filled" | "outlined" | "standard";

export interface SelectProps {
  children?: ReactNode;
  autoWidth?: boolean;
  multiple?: boolean;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  variant?: SelectVariants;
}

// CHECKBOX

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

// SWITCH
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

// MODAL

export interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}
