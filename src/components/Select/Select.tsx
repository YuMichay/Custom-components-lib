import React, { ChangeEvent, useEffect, useRef, useState } from "react";

import { SelectProps } from "@/types/types";
import * as styles from "./Select.module.scss";

const Select: React.FC<SelectProps> = ({
  value = "",
  onChange,
  options = [
    { label: "First Option", value: "first" },
    { label: "Second Option", value: "second" },
  ],
  disabled = false,
  size = "medium",
  color = "primary",
  fullWidth = false,
  required = false,
  label = "Select an option",
  variant = "outlined",
}) => {
  const selectRef = useRef<HTMLDivElement | null>(null);
  const [isOpenSelect, setIsOpenSelect] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(value || "");

  const handleOpenSelect = () => {
    setIsOpenSelect((prevState) => (prevState = !prevState));
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;

    setSelectedValue(newValue);

    if (onChange) {
      onChange(event);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpenSelect(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={selectRef}
      className={`${styles["selectWrapper"]} ${styles[variant]} ${styles[size]} ${styles[color]} ${fullWidth ? styles["fullWidth"] : ""} ${disabled ? styles["disabled"] : ""} ${isOpenSelect ? styles["openSelect"] : ""}`}
      onClick={handleOpenSelect}
    >
      <label
        htmlFor="selectCustom"
        className={selectedValue || isOpenSelect ? styles["labelUp"] : ""}
      >
        {required ? `${label}*` : label}
      </label>
      <select
        id="selectCustom"
        value={selectedValue}
        onChange={handleSelectChange}
        required={required}
        disabled={disabled}
      >
        <option value="">
          {!selectedValue ? "" : selectedValue && required ? `${label}*` : label}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
