import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      defaultValue: "violet",
      options: ["mauve", "red", "violet"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story1: Story = {
  args: {
    children: "Button 1",
    variant: "violet",
    ref: undefined,
  },
};
