import type { Meta, StoryObj } from "@storybook/react";

import TextField from "../components/TextField/TextField";

const meta: Meta<typeof TextField> = {
  component: TextField,
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Basic: Story = {
  args: {
    value: "",
    defaultValue: "",
    type: "text",
    label: "Text field",
    helpText: "Error",
    placeholder: "",
    disabled: false,
    size: "medium",
    variant: "outlined",
    fullWidth: false,
    maxLength: 20,
    required: false,
    autoFocus: false,
    error: false,
    color: "primary",
  },
};
