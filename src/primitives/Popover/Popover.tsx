import React from "react";
import * as RadixPopover from "@radix-ui/react-popover";
import { styled, keyframes } from "@stitches/react";
import { violet } from "@radix-ui/colors";
import { Cross2Icon } from "@radix-ui/react-icons";

export const Popover = ({
  rootProps,
  trigger,
  children,
  closeButtonEnable = true,
}: {
  rootProps?: RadixPopover.PopoverProps;
  trigger?: React.ReactNode;
  children?: React.ReactNode;
  closeButtonEnable?: boolean;
}) => (
  <RadixPopover.Root {...rootProps}>
    <RadixPopover.Trigger asChild>{trigger}</RadixPopover.Trigger>
    <CustomPortal>
      <PopoverContent sideOffset={5}>
        {children}
        {closeButtonEnable && (
          <PopoverClose aria-label="Close">
            <Cross2Icon />
          </PopoverClose>
        )}

        <PopoverArrow />
      </PopoverContent>
    </CustomPortal>
  </RadixPopover.Root>
);
const CustomPortal = styled(RadixPopover.Portal, {});
const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});
("");
const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const PopoverContent = styled(RadixPopover.Content, {
  padding: 0,
  boxShadow:
    "0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 2px 4px 0px rgba(0, 0, 0, 0.10), 0px 7px 7px 0px rgba(0, 0, 0, 0.09), 0px 16px 10px 0px rgba(0, 0, 0, 0.05), 0px 28px 11px 0px rgba(0, 0, 0, 0.01), 0px 44px 12px 0px rgba(0, 0, 0, 0.00)",
  border: "1px solid #DEDEE2",
  flexShrink: "0",
  borderRadius: "16px",
  background: "#FFF",
  gap: "16px",
  width: "272px",
  backgroundColor: "white",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
  "&:focus": {
    outline: "none",
  },
  "&:focus-visible": {
    outline: "none",
  },
});

const PopoverArrow = styled(RadixPopover.Arrow, {
  fill: "white",
});

const PopoverClose = styled(RadixPopover.Close, {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: violet.violet11,
  position: "absolute",
  top: 5,
  right: 5,

  "&:hover": { backgroundColor: violet.violet4 },
  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet7}` },
});
