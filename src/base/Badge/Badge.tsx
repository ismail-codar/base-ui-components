import { styled } from "@stitches/react";
import React, { useState } from "react";

export const Badge = styled("span", {
  paddingTop: "0.125rem",
  paddingBottom: "0.125rem",
  paddingLeft: "0.625rem",
  paddingRight: "0.625rem",
  alignItems: "center",
  borderRadius: "0.375rem",
  borderWidth: "1px",
  fontSize: "0.75rem",
  lineHeight: "1rem",
  fontWeight: 600,
  transitionProperty:
    "color, background-color, border-color, text-decoration-color, fill, stroke",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "300ms",
  variants: {
    variant: {
      default: {
        borderColor: "transparent",
        boxShadow:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        ":hover": {},
      },
      secondary: { borderColor: "transparent", ":hover": {} },
      destructive: {
        borderColor: "transparent",
        boxShadow:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        ":hover": {},
      },
      outline: {},
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
