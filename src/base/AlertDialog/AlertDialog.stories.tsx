import type { Meta, StoryObj } from "@storybook/react";
import { AlertDialog } from "./AlertDialog";
import { Button } from "../Button/Button";

const meta = {
  component: AlertDialog,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof AlertDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story1: Story = {
  args: {
    children: <Button>Sil</Button>,
    title: "Silmek istediğinizden emin misiniz?",
    description: "Hesabı silerseniz geri döndüremezsiniz.",
    cancel: (
      <Button variant="mauve" css={{ marginRight: 25 }}>
        İptal
      </Button>
    ),
    action: <Button variant="red">Evet, Hesabı sil</Button>,
  },
};
