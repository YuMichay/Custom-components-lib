import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Switch from "./Switch";
import userEvent from "@testing-library/user-event";

jest.mock("./Switch.module.scss", () => ({
  switchCustom: "switchCustom",
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

const BasicProps = {
  onChange: () => {},
};

describe("Switch component", () => {
  test("default Switch", () => {
    render(<Switch />);

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("checkbox").closest("div")).toHaveClass("switchCustom medium");
  });

  test("Secondary color small", () => {
    render(<Switch {...BasicProps} color="secondary" size="small" checked={true} />);

    expect(screen.getByRole("checkbox").closest("div")).toHaveClass("switchCustom secondary small");
  });

  test("Success color medium", () => {
    render(<Switch {...BasicProps} color="success" size="medium" checked={true} />);

    expect(screen.getByRole("checkbox").closest("div")).toHaveClass("switchCustom success medium");
  });

  test("Error color large", () => {
    render(<Switch {...BasicProps} color="error" size="large" checked={true} />);

    expect(screen.getByRole("checkbox").closest("div")).toHaveClass("switchCustom error large");
  });

  test("Info color", () => {
    render(<Switch {...BasicProps} color="info" checked={true} />);

    expect(screen.getByRole("checkbox").closest("div")).toHaveClass("switchCustom info medium");
  });

  test("Warning color", () => {
    render(<Switch {...BasicProps} color="warning" checked={true} />);

    expect(screen.getByRole("checkbox").closest("div")).toHaveClass("switchCustom warning medium");
  });

  test("Disabled", () => {
    render(<Switch {...BasicProps} disabled={true} />);

    expect(screen.getByRole("checkbox")).toBeDisabled();
    expect(screen.getByRole("checkbox").closest("div")).toHaveClass("switchCustom medium disabled");
  });

  test("Checked after click", async () => {
    render(<Switch {...BasicProps} />);

    const switchElement = screen.getByRole("checkbox");
    await userEvent.click(switchElement);

    expect(switchElement).toBeChecked();
  });
});
