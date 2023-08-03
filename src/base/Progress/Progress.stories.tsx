import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./Progress";

const meta = {
  component: Progress,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Progress>;

export default meta;

export const Story1: StoryObj<typeof meta> = {
  args: {
    progressProps: {
      value: 30,
    },
    indicatorProps: {
      css: {
        backgroundColor: "White",
      },
    },
  },
};
