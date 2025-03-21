import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { SelectProps } from "@/types/types";
import Select from "./Select";

jest.mock("./Select.module.scss", () => ({
  selectWrapper: "selectWrapper",
  outlined: "outlined",
  filled: "filled",
  standard: "standard",
  primary: "primary",
  secondary: "secondary",
  success: "success",
  error: "error",
  info: "info",
  warning: "warning",
  small: "small",
  medium: "medium",
  large: "large",
  fullWidth: "fullWidth",
  disabled: "disabled",
}));

const BasicProps: SelectProps = {
  value: "",
  onChange: () => {},
  options: [
    { label: "First Option", value: "first" },
    { label: "Second Option", value: "second" },
  ],
};

describe("Select component", () => {
  test("default Select", () => {
    render(<Select />);

    expect(screen.getByRole("combobox").closest("div")).toHaveClass(
      "selectWrapper outlined medium primary",
    );
  });

  test("Outlined variant Secondary color Small", () => {
    render(<Select {...BasicProps} variant="outlined" color="secondary" size="small" />);

    expect(screen.getByRole("combobox").closest("div")).toHaveClass(
      "selectWrapper outlined small secondary",
    );
  });

  test("Filled variant Success color Medium", () => {
    render(<Select {...BasicProps} variant="filled" color="success" size="medium" />);

    expect(screen.getByRole("combobox").closest("div")).toHaveClass(
      "selectWrapper filled medium success",
    );
  });

  test("Standard variant Error color Large", () => {
    render(<Select {...BasicProps} variant="standard" color="error" size="large" />);

    expect(screen.getByRole("combobox").closest("div")).toHaveClass(
      "selectWrapper standard large error",
    );
  });

  test("Info color fullWidth", () => {
    render(<Select {...BasicProps} fullWidth={true} />);

    expect(screen.getByRole("combobox").closest("div")).toHaveClass(
      "selectWrapper outlined medium primary fullWidth",
    );
  });

  test("Warning color disabled", () => {
    render(<Select {...BasicProps} disabled={true} />);

    expect(screen.getByRole("combobox")).toBeDisabled();
  });

  test("Required", () => {
    render(<Select {...BasicProps} required={true} />);

    expect(screen.getByRole("combobox")).toBeRequired();
  });

  test("Click on select", async () => {
    render(<Select {...BasicProps} />);

    const select = screen.getByRole("combobox");
    await userEvent.click(select);

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(BasicProps.options.length + 1);
  });
});
