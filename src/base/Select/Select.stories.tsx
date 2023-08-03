import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta = {
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story1: Story = {
  args: {
    value: "banana",
    onChange(value) {
      console.log(value);
    },
    placeholder: "Select a fruit…",
    groups: [
      {
        label: "Fruits",
        items: [
          {
            value: "apple",
            label: "Apple",
          },
          {
            value: "banana",
            label: "Banana",
          },
        ],
      },
      {
        seperator: true,
      },
      {
        label: "Vegetables",
        items: [
          {
            label: "Aubergine",
            value: "aubergine",
          },
          {
            label: "Broccoli",
            value: "broccoli",
          },
          {
            label: "Carrot",
            value: "carrot",
            disabled: true,
          },
        ],
      },
    ],
  },
};
