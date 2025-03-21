import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Checkbox from "./Checkbox";
import { CheckboxProps } from "@/types/types";

jest.mock("./Checkbox.module.scss", () => ({
  checkboxCustom: "checkboxCustom",
  primary: "primary",
  secondary: "secondary",
  success: "success",
  error: "error",
  info: "info",
  warning: "warning",
  small: "small",
  medium: "medium",
  large: "large",
  disabled: "disabled",
}));

const BasicProps: CheckboxProps = {
  onChange: () => {},
};

describe("Checkbox component", () => {
  test("default Checkbox", () => {
    render(<Checkbox />);

    expect(screen.getByRole("checkbox").closest("div")).toHaveClass(
      "checkboxCustom medium primary",
    );
  });

  test("Checkbox with label", () => {
    render(<Checkbox label="Checkbox label" />);

    expect(screen.getByText("Checkbox label")).toBeInTheDocument();
  });

  test("Secondary color small", () => {
    render(<Checkbox {...BasicProps} color="secondary" size="small" />);

    expect(screen.getByRole("checkbox").closest("div")).toHaveClass(
      "checkboxCustom small secondary",
    );
  });

  test("Success color medium", () => {
    render(<Checkbox {...BasicProps} color="success" size="medium" />);

    expect(screen.getByRole("checkbox").closest("div")).toHaveClass(
      "checkboxCustom medium success",
    );
  });

  test("Error color large", () => {
    render(<Checkbox {...BasicProps} color="error" size="large" />);

    expect(screen.getByRole("checkbox").closest("div")).toHaveClass("checkboxCustom large error");
  });

  test("Info color medium", () => {
    render(<Checkbox {...BasicProps} color="info" />);

    expect(screen.getByRole("checkbox").closest("div")).toHaveClass("checkboxCustom medium info");
  });

  test("Warning color medium", () => {
    render(<Checkbox {...BasicProps} color="warning" />);

    expect(screen.getByRole("checkbox").closest("div")).toHaveClass(
      "checkboxCustom medium warning",
    );
  });

  test("Disabled", () => {
    render(<Checkbox {...BasicProps} disabled={true} />);

    expect(screen.getByRole("checkbox").closest("div")).toHaveClass(
      "checkboxCustom medium primary disabled",
    );
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  test("Required", () => {
    render(<Checkbox {...BasicProps} required={true} />);

    expect(screen.getByRole("checkbox").closest("div")).toHaveClass(
      "checkboxCustom medium primary",
    );
    expect(screen.getByRole("checkbox")).toBeRequired();
  });

  test("Checked", async () => {
    render(<Checkbox {...BasicProps} />);

    const checkbox = screen.getByRole("checkbox");

    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
