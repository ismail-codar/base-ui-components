import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";

const meta = {
  component: Slider,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Slider>;

export default meta;

export const Story1: StoryObj<typeof meta> = {
  args: {
    sliderProps: {
      defaultValue: [50],
      max: 100,
      step: 1,
    },
  },
};
