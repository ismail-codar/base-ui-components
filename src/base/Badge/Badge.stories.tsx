import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
  component: Badge,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Badge>;

export default meta;

export const Story1: StoryObj<typeof meta> = {
  args: {},
};

export const Story2: StoryObj<typeof meta> = {
  args: {
    ...Story1.args,
  },
};
