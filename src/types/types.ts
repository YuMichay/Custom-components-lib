import { ChangeEvent, MouseEvent, ReactNode } from "react";

// GENERAL
type Colors = "primary" | "secondary" | "success" | "error" | "info" | "warning";
export type Sizes = "small" | "medium" | "large";
type Variants = "outlined" | "filled" | "standard";

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
  variant?: Variants;
  fullWidth?: boolean;
  maxLength?: number;
  required?: boolean;
  autoFocus?: boolean;
  error?: boolean;
  color?: Colors;
}

// SELECT

export interface SelectProps {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  options?: OptionProps[];
  disabled?: boolean;
  size?: Sizes;
  color?: Colors;
  fullWidth?: boolean;
  required?: boolean;
  label?: string;
  variant?: Variants;
}

export interface OptionProps {
  label: string;
  value: string;
}

// CHECKBOX

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  size?: Sizes;
  color?: Colors;
  name?: string;
}

// SWITCH
export interface SwitchProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  size?: Sizes;
  color?: Colors;
}

// MODAL

export interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  children?: ReactNode;
  size?: Sizes;
  title?: string;
  showCloseButton?: boolean;
  backDropClickClose?: boolean;
  showOpenModalButton?: boolean;
}
