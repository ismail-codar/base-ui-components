import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";
import React from "react";
import { styled } from "@stitches/react";
import { violet, mauve, blackA, green } from "@radix-ui/colors";
import { Input } from "../Input/Input";
import { Flex } from "../FlexBox/FlexBox";
import { Button } from "../Button/Button";

const Text = styled("p", {
  marginTop: 0,
  marginBottom: 20,
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
});

const Fieldset = styled("fieldset", {
  all: "unset",
  marginBottom: 15,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});

const Label = styled("label", {
  fontSize: 13,
  lineHeight: 1,
  marginBottom: 10,
  color: violet.violet12,
  display: "block",
});

const meta = {
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tabs>;

export default meta;

export const Story1: StoryObj<typeof meta> = {
  args: {
    tabsProps: {
      defaultValue: "0",
    },
    items: [
      {
        trigger: "Account",
        content: (
          <React.Fragment>
            <Text>
              Make changes to your account here. Click save when you're done.
            </Text>
            <Fieldset>
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </Fieldset>
            <Fieldset>
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </Fieldset>
            <Flex css={{ marginTop: 20, justifyContent: "flex-end" }}>
              <Button variant="mauve">Save changes</Button>
            </Flex>
          </React.Fragment>
        ),
      },
      {
        trigger: "Password",
        content: (
          <React.Fragment>
            <Text>
              Change your password here. After saving, you'll be logged out.
            </Text>
            <Fieldset>
              <Label htmlFor="currentPassword">Current password</Label>
              <Input id="currentPassword" type="password" />
            </Fieldset>
            <Fieldset>
              <Label htmlFor="newPassword">New password</Label>
              <Input id="newPassword" type="password" />
            </Fieldset>
            <Fieldset>
              <Label htmlFor="confirmPassword">Confirm password</Label>
              <Input id="confirmPassword" type="password" />
            </Fieldset>
            <Flex css={{ marginTop: 20, justifyContent: "flex-end" }}>
              <Button variant="mauve">Change password</Button>
            </Flex>
          </React.Fragment>
        ),
      },
    ],
  },
};
