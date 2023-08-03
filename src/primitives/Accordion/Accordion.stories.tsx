import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta = {
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Accordion>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Story1: Story = {
  args: {
    defaultValue: "2",
    items: [
      {
        value: "1",
        trigger: "Item 1",
        content: "Content 1",
      },
      {
        value: "2",
        trigger: <b>Item 2</b>,
        content: <b> Content 2</b>,
      },
      {
        value: "3",
        trigger: "Item 3",
        content: "Content 3",
      },
    ],
  },
};