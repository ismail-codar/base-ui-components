import type { Meta, StoryObj } from "@storybook/react";
import { Toolbar } from "./Toolbar";
import {
  StrikethroughIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  FontBoldIcon,
  FontItalicIcon,
} from "@radix-ui/react-icons";

const meta = {
  component: Toolbar,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Toolbar>;

export default meta;

export const Story1: StoryObj<typeof meta> = {
  args: {
    toolbarProps: {
      "aria-label": "Formatting options",
    },
    items: [
      {
        itemProps: { type: "multiple", "aria-label": "Text formatting" },
        children: [
          {
            toggleItemProps: {
              value: "bold",
            },
            content: <FontBoldIcon />,
          },
          {
            toggleItemProps: {
              value: "italic",
            },
            content: <FontItalicIcon />,
          },
          {
            toggleItemProps: {
              value: "strikethrough",
            },
            content: <StrikethroughIcon />,
          },
        ],
      },
      {
        children: "",
      },
      {
        itemProps: {
          type: "single",
          defaultValue: "center",
          "aria-label": "Text alignment",
        },
        children: [
          {
            toggleItemProps: {
              value: "left",
            },
            content: <TextAlignLeftIcon />,
          },
          {
            toggleItemProps: {
              value: "center",
            },
            content: <TextAlignCenterIcon />,
          },
          {
            toggleItemProps: {
              value: "right",
            },
            content: <TextAlignRightIcon />,
          },
        ],
      },
      {
        itemProps: {
          href: "#",
          target: "_blank",
          css: { marginRight: 10 },
        },
        children: "Edited 2 hours ago",
      },
      {
        itemProps: {
          onClick: () => {
            alert("click");
          },
          css: { marginLeft: "auto" },
        },
        children: "Share",
      },
    ],
  },
};
