import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";

const meta = {
  component: Table,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;

export const Story1: StoryObj<typeof meta> = {
  args: {},
};
