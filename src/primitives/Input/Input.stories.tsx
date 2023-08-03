import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;

export const Story1: StoryObj<typeof meta> = {
  args: {},
};

export const Story2: StoryObj<typeof meta> = {
  args: {
    ...Story1.args,
  },
};
