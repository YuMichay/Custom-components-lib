import type { Meta, StoryObj } from "@storybook/react";

import Switch from "../components/Switch/Switch";

const meta: Meta<typeof Switch> = {
  component: Switch,
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  args: {
    label: "",
    checked: false,
    disabled: false,
    size: "medium",
    color: "primary",
  },
};
