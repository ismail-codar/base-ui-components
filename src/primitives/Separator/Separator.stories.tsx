import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./Separator";
import { styled } from "@stitches/react";
import { violet } from "@radix-ui/colors";
import { Flex } from "../FlexBox/FlexBox";

const Box = styled("div", {});
const Text = styled("div", {
  color: "white",
  fontSize: 15,
  lineHeight: "20px",
});

const meta = {
  component: Separator,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Separator>;

export default meta;

export const Story1: StoryObj<typeof meta> = {
  args: {},
  render: (args) => {
    return (
      <Box css={{ width: "100%", maxWidth: 300, margin: "0 15px" }}>
        <Text css={{ fontWeight: 500 }}>Radix Primitives</Text>
        <Text>An open-source UI component library.</Text>
        <Separator css={{ margin: "15px 0" }} />
        <Flex css={{ height: 20, alignItems: "center" }}>
          <Text>Blog</Text>
          <Separator
            decorative
            orientation="vertical"
            css={{ margin: "0 15px" }}
          />
          <Text>Docs</Text>
          <Separator
            decorative
            orientation="vertical"
            css={{ margin: "0 15px" }}
          />
          <Text>Source</Text>
        </Flex>
      </Box>
    );
  },
};
