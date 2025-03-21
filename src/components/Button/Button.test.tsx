import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "./Button";
import { ButtonProps } from "@/types/types";

jest.mock("./Button.module.scss", () => ({
  customButton: "customButton",
  text: "text",
  contained: "contained",
  outlined: "outlined",
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
}));

const BasicProps: ButtonProps = {
  type: "button",
  onClick: () => {},
  loading: false,
};

describe("Button component", () => {
  test("default Button", () => {
    render(<Button />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button").className).toBe("customButton contained primary medium");
  });

  test("Text variant Secondary color Small", () => {
    render(<Button {...BasicProps} variant="text" color="secondary" size="small" />);

    expect(screen.getByRole("button").className).toBe("customButton text secondary small");
  });

  test("Contained variant Success color Medium", () => {
    render(<Button {...BasicProps} variant="contained" color="success" size="medium" />);

    expect(screen.getByRole("button").className).toBe("customButton contained success medium");
  });

  test("Outlined variant Error color Large", () => {
    render(<Button {...BasicProps} variant="outlined" color="error" size="large" />);

    expect(screen.getByRole("button").className).toBe("customButton outlined error large");
  });

  test("Info color fullWidth", () => {
    render(<Button {...BasicProps} color="info" fullWidth={true} />);

    expect(screen.getByRole("button").className).toBe(
      "customButton contained info medium fullWidth",
    );
  });

  test("Warning color disabled", () => {
    render(<Button {...BasicProps} color="warning" disabled={true} />);

    expect(screen.getByRole("button")).toBeDisabled();
  });
});
