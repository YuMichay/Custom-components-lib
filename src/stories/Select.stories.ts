import type { Meta, StoryObj } from "@storybook/react";

import Select from "../components/Select/Select";

const meta: Meta<typeof Select> = {
  component: Select,
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Basic: Story = {
  args: {
    value: "",
    options: [
      { label: "First", value: "first" },
      { label: "Second", value: "second" },
    ],
    disabled: false,
    size: "medium",
    color: "primary",
    fullWidth: false,
    required: false,
    label: "Select an option",
    variant: "outlined",
  },
};
