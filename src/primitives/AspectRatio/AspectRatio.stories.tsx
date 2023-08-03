import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "./AspectRatio";
import { styled } from "@stitches/react";
import { blackA } from "@radix-ui/colors";

const Box = styled("div", {});
const Img = styled("img", {
  objectFit: "cover",
  width: "100%",
  height: "100%",
});

const meta = {
  component: AspectRatio,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof AspectRatio>;

export default meta;

export const Story1: StoryObj<typeof meta> = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => {
    return (
      <Box
        css={{
          width: 300,
          borderRadius: 6,
          overflow: "hidden",
          boxShadow: `0 2px 10px ${blackA.blackA7}`,
        }}
      >
        <AspectRatio {...args}>
          <Img
            src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
            alt="Landscape photograph by Tobias Tullius"
          />
        </AspectRatio>
      </Box>
    );
  },
};
