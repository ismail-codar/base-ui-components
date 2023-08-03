import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";
import { Button } from "../Button/Button";
import React from "react";

function oneWeekAway(date?: Date) {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

function prettyDate(date?: Date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);
}

const meta = {
  component: Toast,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Toast>;

export default meta;

export const Story1: StoryObj<typeof meta> = {
  args: {},
  render: (args) => {
    const [open, setOpen] = React.useState(false);
    const eventDateRef = React.useRef(new Date());
    const timerRef = React.useRef(0);

    React.useEffect(() => {
      return () => clearTimeout(timerRef.current);
    }, []);

    return (
      <Toast
        {...args}
        toastProps={{
          open,
          onOpenChange: setOpen,
        }}
        trigger={
          <Button
            onClick={() => {
              setOpen(false);
              window.clearTimeout(timerRef.current);
              timerRef.current = window.setTimeout(() => {
                eventDateRef.current = oneWeekAway();
                setOpen(true);
              }, 100);
            }}
          >
            Add to calendar
          </Button>
        }
        title={"Scheduled: Catch up"}
        description={
          <time dateTime={eventDateRef.current.toISOString()}>
            {prettyDate(eventDateRef.current)}
          </time>
        }
        action={
          <Button size="small" variant="green">
            Undo
          </Button>
        }
      />
    );
  },
};
