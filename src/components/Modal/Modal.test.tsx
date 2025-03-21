import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "./Modal";
import userEvent from "@testing-library/user-event";

jest.mock("./Modal.module.scss", () => ({
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

const BasicProps = {
  onClose: () => {},
  showOpenModalButton: true,
};

describe("Modal component", () => {
  test("default Modal", () => {
    render(<Modal {...BasicProps} open={true} />);

    expect(screen.getByTestId("custom-modal-wrapper")).toHaveClass("medium");
  });

  test("Small", () => {
    render(<Modal {...BasicProps} open={true} size="small" />);

    expect(screen.getByTestId("custom-modal-wrapper")).toHaveClass("small");
  });

  test("Medium with children", () => {
    render(
      <Modal {...BasicProps} open={true} size="medium">
        <p>Text for modal</p>
      </Modal>,
    );

    expect(screen.getByTestId("custom-modal-wrapper")).toHaveClass("medium");
    expect(screen.getByRole("paragraph")).toBeInTheDocument();
  });

  test("Large with close button and without backDropClickClose", async () => {
    render(
      <Modal
        {...BasicProps}
        open={true}
        size="large"
        showCloseButton={true}
        backDropClickClose={false}
      />,
    );

    expect(screen.getByTestId("custom-modal-wrapper")).toHaveClass("large");
    expect(screen.getByTestId("close-button-modal")).toBeInTheDocument();

    await userEvent.click(screen.getByTestId("overlay-modal"));
    expect(screen.getByTestId("custom-modal")).toBeInTheDocument();
  });

  test("Open after click", async () => {
    render(<Modal {...BasicProps} />);

    const openModalButton = screen.getByRole("button");
    await userEvent.click(openModalButton);

    expect(screen.getByTestId("custom-modal")).toBeInTheDocument();
  });
});
