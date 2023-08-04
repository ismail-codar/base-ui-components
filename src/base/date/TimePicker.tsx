import { FC } from "react";
import { Calendar } from "./Calendar";

export const TimePicker: FC<React.ComponentProps<typeof Calendar>> = (
  props
) => {
  return (
    <Calendar
      {...{
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true,
        ...props,
      }}
    />
  );
};
