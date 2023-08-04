import React, { FC, useState } from "react";
import { Calendar } from "./Calendar";

export const DateTimePicker: FC<React.ComponentProps<typeof Calendar>> = (
  props
) => {
  return (
    <Calendar
      {...{
        inline: false,
        enableTime: true,
        dateFormat: "d-m-Y H:i",
        time_24hr: true,
        ...props,
      }}
    />
  );
};
export const DateTimeInlinePicker: FC<React.ComponentProps<typeof Calendar>> = (
  props
) => {
  return (
    <Calendar
      {...{
        inline: true,
        enableTime: true,
        dateFormat: "d-m-Y H:i",
        time_24hr: true,
        ...props,
      }}
    />
  );
};
