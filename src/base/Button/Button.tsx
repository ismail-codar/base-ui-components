import { styled } from "@stitches/react";
import { violet, blackA, red, mauve, green } from "@radix-ui/colors";

export const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: violet.violet11,
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&[data-state="open"]': { backgroundColor: violet.violet3 },
  "&:hover": { backgroundColor: violet.violet3 },
  "&:focus": { boxShadow: `0 0 0 2px black` },
});

export const Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    size: {
      small: {
        fontSize: 12,
        padding: "0 10px",
        lineHeight: "25px",
        height: 25,
      },
      large: {
        fontSize: 15,
        padding: "0 15px",
        lineHeight: "35px",
        height: 35,
      },
    },
    variant: {
      outline: {},
      ghost: {},
      violet: {
        backgroundColor: "white",
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: mauve.mauve3 },
        "&:focus": { boxShadow: `0 0 0 2px black` },
      },
      red: {
        backgroundColor: red.red4,
        color: red.red11,
        "&:hover": { backgroundColor: red.red5 },
        "&:focus": { boxShadow: `0 0 0 2px ${red.red7}` },
      },
      mauve: {
        backgroundColor: mauve.mauve4,
        color: mauve.mauve11,
        "&:hover": { backgroundColor: mauve.mauve5 },
        "&:focus": { boxShadow: `0 0 0 2px ${mauve.mauve7}` },
      },
      green: {
        backgroundColor: green.green2,
        color: green.green11,
        boxShadow: `inset 0 0 0 1px ${green.green7}`,
        "&:hover": { boxShadow: `inset 0 0 0 1px ${green.green8}` },
        "&:focus": { boxShadow: `0 0 0 2px ${green.green8}` },
      },
    },
  },

  defaultVariants: {
    variant: "violet",
  },
});
