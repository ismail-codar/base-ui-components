import type { Meta, StoryObj } from "@storybook/react";
import { ToggleGroup } from "./ToggleGroup";
import {
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
} from "@radix-ui/react-icons";

const meta = {
  component: ToggleGroup,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ToggleGroup>;

export default meta;

export const Story1: StoryObj<typeof meta> = {
  args: {
    toggleGroupProps: {
      type: "single",
      defaultValue: "1",
      "aria-label": "Text alignment",
    },
    items: [
      {
        content: <TextAlignLeftIcon />,
      },
      {
        content: <TextAlignCenterIcon />,
      },
      {
        content: <TextAlignRightIcon />,
      },
    ],
  },
};
