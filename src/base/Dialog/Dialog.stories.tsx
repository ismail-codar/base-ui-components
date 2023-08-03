import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./Dialog";
import { Button } from "../Button/Button";
import { styled, keyframes } from "@stitches/react";
import { violet, blackA, mauve, green } from "@radix-ui/colors";
import React from "react";

const meta = {
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Dialog>;

export default meta;

const Fieldset = styled("fieldset", {
  all: "unset",
  display: "flex",
  gap: 20,
  alignItems: "center",
  marginBottom: 15,
});

const Label = styled("label", {
  fontSize: 15,
  color: violet.violet11,
  width: 90,
  textAlign: "right",
});

const Input = styled("input", {
  all: "unset",
  width: "100%",
  flex: "1",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 10px",
  fontSize: 15,
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  height: 35,

  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet8}` },
});

export const Story1: StoryObj<typeof meta> = {
  args: {
    trigger: <Button>Edit profile</Button>,
    close: <Button variant="red">Save changes</Button>,
    title: "Edit profile",
    description:
      "Make changes to your profile here. Click save when you're done.",
    children: (
      <React.Fragment>
        <Fieldset>
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="Pedro Duarte" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="@peduarte" />
        </Fieldset>
      </React.Fragment>
    ),
  },
};

export const Story2: StoryObj<typeof meta> = {
  args: {
    trigger: <Button>Profili düzenle</Button>,
    close: <Button variant="red">Kaydet</Button>,
    title: "Profili düzenle",
    children: (
      <React.Fragment>
        <Fieldset>
          <Label htmlFor="name">Adı</Label>
          <Input id="name" defaultValue="İsmail Codar" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="username">Kullanıcı Adı</Label>
          <Input id="username" defaultValue="@icodar" />
        </Fieldset>
      </React.Fragment>
    ),
  },
};
