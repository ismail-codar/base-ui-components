import React, { ReactNode } from "react";
import * as RadixSwitch from "@radix-ui/react-switch";
import { styled } from "@stitches/react";
import { blackA } from "@radix-ui/colors";

export const Switch = ({
  id = Math.random().toExponential(36).substring(2),
  label,
  labelProps,
  switchProps,
  switchThumbProps,
}: {
  id?: string;
  label?: ReactNode;
  labelProps?: React.ComponentProps<typeof Label>;
  switchProps?: React.ComponentProps<typeof SwitchRoot>;
  switchThumbProps?: React.ComponentProps<typeof SwitchThumb>;
}) => (
  <React.Fragment>
    {label && (
      <Label
        htmlFor={id}
        {...labelProps}
        css={{ paddingRight: 15, ...labelProps?.css }}
      >
        {label}
      </Label>
    )}
    <SwitchRoot id={id} {...switchProps}>
      <SwitchThumb {...switchThumbProps} />
    </SwitchRoot>
  </React.Fragment>
);

const SwitchRoot = styled(RadixSwitch.Root, {
  all: "unset",
  width: 42,
  height: 25,
  backgroundColor: blackA.blackA9,
  borderRadius: "9999px",
  position: "relative",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  "&:focus": { boxShadow: `0 0 0 2px black` },
  '&[data-state="checked"]': { backgroundColor: "black" },
});

const SwitchThumb = styled(RadixSwitch.Thumb, {
  display: "block",
  width: 21,
  height: 21,
  backgroundColor: "white",
  borderRadius: "9999px",
  boxShadow: `0 2px 2px ${blackA.blackA7}`,
  transition: "transform 100ms",
  transform: "translateX(2px)",
  willChange: "transform",
  '&[data-state="checked"]': { transform: "translateX(19px)" },
});

const Label = styled("label", {
  color: "white",
  fontSize: 15,
  lineHeight: 1,
});
