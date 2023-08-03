import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";
import { styled } from "@stitches/react";
import { violet, mauve } from "@radix-ui/colors";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { IconButton } from "../Button/Button";
import { Flex } from "../FlexBox/FlexBox";

const Fieldset = styled("fieldset", {
  all: "unset",
  display: "flex",
  gap: 20,
  alignItems: "center",
});

const Label = styled("label", {
  fontSize: 13,
  color: violet.violet11,
  width: 75,
});

const Input = styled("input", {
  all: "unset",
  width: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "1",
  borderRadius: 4,
  padding: "0 10px",
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  height: 25,

  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet8}` },
});

const Text = styled("p", {
  margin: 0,
  color: mauve.mauve12,
  fontSize: 15,
  lineHeight: "19px",
  fontWeight: 500,
});

const meta = {
  component: Popover,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Popover>;

export default meta;

export const Story1: StoryObj<typeof meta> = {
  args: {
    trigger: (
      <IconButton
        aria-label="Update dimensions"
        css={{ width: "35px", height: "35px" }}
      >
        <MixerHorizontalIcon />
      </IconButton>
    ),
    children: (
      <Flex css={{ flexDirection: "column", gap: 10 }}>
        <Text css={{ marginBottom: 10 }}>Dimensions</Text>
        <Fieldset>
          <Label htmlFor="width">Width</Label>
          <Input id="width" defaultValue="100%" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="maxWidth">Max. width</Label>
          <Input id="maxWidth" defaultValue="300px" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="height">Height</Label>
          <Input id="height" defaultValue="25px" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="maxHeight">Max. height</Label>
          <Input id="maxHeight" defaultValue="none" />
        </Fieldset>
      </Flex>
    ),
  },
};
