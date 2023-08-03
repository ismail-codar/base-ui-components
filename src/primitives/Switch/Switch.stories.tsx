import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta = {
  component: Switch,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Switch>;

export default meta;

export const Story1: StoryObj<typeof meta> = {
  args: {
    label: "Airplane mode",
    switchProps: {
      checked: true,
    },
  },
};
