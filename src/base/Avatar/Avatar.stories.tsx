import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta = {
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story1: Story = {
  args: {
    gap: 10,
    items: [
      {
        image: {
          src: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
          alt: "Colm Tuite",
        },
        fallback: {
          delayMs: 600,
          children: "JD",
        },
      },
      {
        image: {
          src: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
          alt: "Pedro Duarte",
        },
      },
      {
        fallback: {
          delayMs: 600,
          children: "JD",
        },
      },
    ],
  },
};
