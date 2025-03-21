import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import TextField from "./TextField";
import { TextFieldProps } from "@/types/types";

jest.mock("./TextField.module.scss", () => ({
  customTextField: "customTextField",
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

const BasicProps: TextFieldProps = {
  value: "",
  defaultValue: "",
  onChange: () => {},
  maxLength: 20,
};

describe("TextField component", () => {
  test("default TextField", () => {
    render(<TextField />);

    expect(screen.getByRole("textbox").closest("div")).toBeInTheDocument();
    expect(screen.getByRole("textbox").closest("div")).toHaveClass(
      "customTextField outlined primary medium ",
    );
  });

  test("TextField with placeholder", () => {
    render(<TextField placeholder="Text field placeholder" />);

    expect(screen.getByRole("textbox").getAttribute("placeholder")).toBe("Text field placeholder");
  });

  test("Text type Outlined variant Secondary color Small", () => {
    render(
      <TextField {...BasicProps} type="text" variant="outlined" color="secondary" size="small" />,
    );

    expect(screen.getByRole("textbox").closest("div")).toHaveClass(
      "customTextField outlined secondary small",
    );
  });

  test("Password type Filled variant Success color Medium", () => {
    render(
      <TextField
        {...BasicProps}
        type="password"
        variant="filled"
        color="success"
        size="medium"
        placeholder="password"
      />,
    );

    expect(screen.getByPlaceholderText(/password/).closest("div")).toHaveClass(
      "customTextField filled success medium",
    );
    expect(screen.getByPlaceholderText(/password/).getAttribute("type")).toBe("password");
  });

  test("Email type Standard variant Error color Large", () => {
    render(
      <TextField {...BasicProps} type="email" variant="standard" color="error" size="large" />,
    );

    expect(screen.getByRole("textbox").closest("div")).toHaveClass(
      "customTextField standard error large",
    );
    expect(screen.getByRole("textbox").getAttribute("type")).toBe("email");
  });

  test("Number type Info color required", () => {
    render(<TextField {...BasicProps} type="number" color="info" required={true} />);

    expect(screen.getByRole("spinbutton").closest("div")).toHaveClass(
      "customTextField outlined info medium",
    );
    expect(screen.getByRole("spinbutton").getAttribute("type")).toBe("number");
    expect(screen.getByRole("spinbutton")).toBeRequired();
  });

  test("Search type warning color disabled", () => {
    render(<TextField {...BasicProps} type="search" color="warning" disabled={true} />);

    expect(screen.getByRole("searchbox").closest("div")).toHaveClass(
      "customTextField outlined warning medium disabled",
    );
    expect(screen.getByRole("searchbox").getAttribute("type")).toBe("search");
    expect(screen.getByRole("searchbox")).toBeDisabled();
  });

  test("Tel type", () => {
    render(<TextField {...BasicProps} type="tel" />);

    expect(screen.getByRole("textbox").closest("div")).toHaveClass(
      "customTextField outlined primary medium",
    );
    expect(screen.getByRole("textbox").getAttribute("type")).toBe("tel");
  });

  test("Url type", () => {
    render(<TextField {...BasicProps} type="url" />);

    expect(screen.getByRole("textbox").closest("div")).toHaveClass(
      "customTextField outlined primary medium",
    );
    expect(screen.getByRole("textbox").getAttribute("type")).toBe("url");
  });

  test("Enter the value", async () => {
    render(<TextField {...BasicProps} type="text" />);

    const input = screen.getByRole("textbox");

    await userEvent.type(input, "Text");
    expect(input).toHaveValue("Text");
  });
});
