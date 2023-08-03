import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";

const meta = {
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof RadioGroup>;

export default meta;

export const Story1: StoryObj<typeof meta> = {
  args: {
    radioGroupProps: {
      defaultValue: "default",
      "aria-label": "View density",
      css: { color: "white" },
    },
    radioGroupItemProps: {
      css: { backgroundColor: "white" },
    },
    items: [
      {
        radioGroupItemProps: {
          value: "default",
          id: "r1",
        },
        label: "Default",
        labelProps: {
          htmlFor: "r1",
        },
      },
      {
        radioGroupItemProps: {
          value: "compatible",
          id: "r2",
        },
        label: "Compatible",
        labelProps: {
          htmlFor: "r2",
        },
      },
      {
        radioGroupItemProps: {
          value: "compact",
          id: "r3",
        },
        label: "Compact",
        labelProps: {
          htmlFor: "r3",
        },
      },
    ],
  },
};
