import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";

const meta = {
  component: DataTable,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof DataTable>;

export default meta;

export const Story1: StoryObj<typeof meta> = {
  args: {},
};
