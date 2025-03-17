import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Modal from "../components/Modal/Modal";

const meta: Meta<typeof Modal> = {
  component: Modal,
  argTypes: {
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
    children: { control: { disable: true } },
  },
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  args: {
    open: false,
    title: "Modal",
    size: "medium",
    showCloseButton: true,
    backDropClickClose: true,
    showOpenModalButton: true,
  },
};

export const WithChildren: Story = {
  args: {
    ...Basic.args,
    children: React.createElement("p", null, "Lorem Ipsum"),
  },
};
