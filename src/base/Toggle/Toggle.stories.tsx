import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./Toggle";
import { FontItalicIcon } from "@radix-ui/react-icons";

const meta = {
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Toggle>;

export default meta;

export const Story1: StoryObj<typeof meta> = {
  args: {
    "aria-label": "Toggle italic",
    children: <FontItalicIcon />,
  },
};
