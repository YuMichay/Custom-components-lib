import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/Button/Button";

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    children: "Button",
    type: "button",
    variant: "contained",
    size: "medium",
    disabled: false,
  },
};
