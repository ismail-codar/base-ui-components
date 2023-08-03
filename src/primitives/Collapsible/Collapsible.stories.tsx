import type { Meta, StoryObj } from "@storybook/react";
import { Collapsible } from "./Collapsible";
import { styled } from "@stitches/react";
import { violet, blackA } from "@radix-ui/colors";
import React from "react";

const Text = styled("span", {
  color: violet.violet11,
  fontSize: 15,
  lineHeight: "25px",
});

const Repository = styled("div", {
  borderRadius: 4,
  margin: "10px 0",
  padding: 10,
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

export const Story1: StoryObj<typeof meta> = {
  args: {
    label: <Text>@peduarte starred 3 repositories</Text>,
    collapsableContent: (
      <React.Fragment>
        <Repository>
          <Text>@radix-ui/colors</Text>
        </Repository>
        <Repository>
          <Text>@stitches/react</Text>
        </Repository>
      </React.Fragment>
    ),
    children: (
      <Repository>
        <Text>@radix-ui/primitives</Text>
      </Repository>
    ),
  },
};

export const Story2: StoryObj<typeof meta> = {
  args: {
    ...Story1.args,
    label: <Text>@peduarte starred 3 repositories 2</Text>,
  },
};

const meta = {
  component: Collapsible,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Collapsible>;
export default meta;
