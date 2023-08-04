import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./Calendar";
import { TimePicker } from "./TimePicker";
import { DateTimePicker } from "./DateTimePicker";

const meta = {
  component: Calendar,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Calendar>;

export default meta;

export const TimePickerDemo: StoryObj<typeof meta> = {
  args: {},
  render: () => {
    return <TimePicker />;
  },
};

export const InlineCalendar: StoryObj<typeof meta> = {
  args: {},
  render: () => {
    return <Calendar inline={true} />;
  },
};

export const InputDate: StoryObj<typeof meta> = {
  args: {},
  render: () => {
    return <Calendar inline={false} />;
  },
};

export const DateTimePickerDemo: StoryObj<typeof meta> = {
  args: {},
  render: () => {
    return <DateTimePicker />;
  },
};
