import React, { FC, useEffect, useMemo, useRef, useState } from "react";

import flatpickr from "flatpickr";
import { Turkish } from "flatpickr/dist/l10n/tr.js";
import { english } from "flatpickr/dist/l10n/default";
import { Button } from "../Button/Button";
import { styled } from "@stitches/react";

export const Calendar: React.FC<
  {
    className?: string;
    showGoToToday?: boolean;
    showCloseButton?: boolean;
    isMonthPickerVisible?: boolean;
    value?: Date;
  } & flatpickr.Options.Options
> = ({
  className,
  showGoToToday,
  showCloseButton,
  isMonthPickerVisible,
  value,
  ...options
}) => {
  const ref = useRef<HTMLInputElement>(null);
  // const tr = useEraTranslation()
  if (!options.locale) {
    options.locale = Turkish;
  }
  if (options.inline === undefined) {
    options.inline = true;
  }

  useEffect(() => {
    if (ref.current) {
      const _instance = flatpickr(ref.current, options);
      if (value) {
        _instance.setDate(value);
      }
    }
  }, [ref.current]);

  return options.inline ? (
    <StyledCalendarInput ref={ref} css={{ display: "none" }} />
  ) : (
    <Button size="small">
      <TagInfo>
        🗓️
        <StyledCalendarInput ref={ref} />
      </TagInfo>
    </Button>
  );
};

const StyledCalendarInput = styled("input", {
  border: "none",
  backgroundColor: "transparent",
  fontFamily: "Satoshi",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "24px",
  display: "flex",
  alignItems: "center",
  width: 128,
  padding: 0,
  marginLeft: 8,
});

const TagInfo = styled("div", {
  color: "#1F1F1F",

  fontFamily: "Satoshi",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "24px",
  padding: "4px 10px 4px 10px",
  display: "flex",
  alignItems: "center",
});
