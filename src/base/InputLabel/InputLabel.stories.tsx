import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./InputLabel";
import { Input } from "../Input/Input";

const meta = {
  component: Label,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Label>;

export default meta;

export const Story1: StoryObj<typeof meta> = {
  args: {
    label: "First name",
    children: <Input type="text" id="firstName" defaultValue="Pedro Duarte" />,
  },
};

export const Story2: StoryObj<typeof meta> = {
  args: {
    label: "Adı",
    children: <Input type="text" id="firstName" defaultValue="İsmail Codar" />,
  },
};
