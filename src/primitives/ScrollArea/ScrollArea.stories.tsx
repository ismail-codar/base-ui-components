import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "./ScrollArea";
import { styled } from "@stitches/react";
import { violet, mauve, blackA } from "@radix-ui/colors";
import React from "react";

const TAGS = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

const Tag = styled("div", {
  color: mauve.mauve12,
  fontSize: 13,
  lineHeight: "18px",
  marginTop: 10,
  borderTop: `1px solid ${mauve.mauve6}`,
  paddingTop: 10,
});

const Text = styled("div", {
  color: violet.violet11,
  fontSize: 15,
  lineHeight: "18px",
  fontWeight: 500,
});

const meta = {
  component: ScrollArea,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ScrollArea>;

export default meta;

export const Story1: StoryObj<typeof meta> = {
  args: {
    scrollAreaProps: {
      css: {
        width: 200,
        height: 225,
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        backgroundColor: "white",
      },
    },
    children: (
      <React.Fragment>
        <Text>Tags</Text>{" "}
        {TAGS.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </React.Fragment>
    ),
  },
};