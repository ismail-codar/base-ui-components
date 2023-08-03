import type { Meta, StoryObj } from "@storybook/react";
import { Menubar } from "./Menubar";

const meta = {
  component: Menubar,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Menubar>;

export default meta;

export const Story1: StoryObj<typeof meta> = {
  args: {
    items: [
      {
        text: "File",
        contentProps: { align: "start", sideOffset: 5, alignOffset: -3 },
        items: [
          {
            text: "New Tab",
            rightSlot: "⌘ T",
          },
          {
            text: "New Window",
            rightSlot: "⌘ N",
          },
          {
            text: "New Incognito Window",
            menuItemProps: { disabled: true },
          },
          {
            text: "",
          },
          {
            text: "Share",
            items: [
              {
                text: "Email Link",
              },
              {
                text: "Messages",
              },
              {
                text: "Notes",
              },
            ],
          },
        ],
      },
      {
        text: "View",
        items: [
          {
            text: "Always Show Bookmarks Bar",
            data: true,
            checkBy: "checkbox",
          },
          {
            text: "Always Show Full URLs",
            data: false,
            checkBy: "checkbox",
          },
          {
            text: "",
          },
          {
            text: "Reload",
          },
        ],
      },
      {
        text: "Profiles",
        data: "Benoit",
        items: [
          {
            text: "Andy",
            data: "Andy",
            checkBy: "radiogroup",
          },
          {
            text: "Benoit",
            data: "Benoit",
            checkBy: "radiogroup",
          },
          {
            text: "Luis",
            data: "Luis",
            checkBy: "radiogroup",
          },
          {
            text: "",
          },
          {
            text: "Edit",
          },
        ],
      },
    ],
  },
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Menubar {...args} />
    </div>
  ),
};
