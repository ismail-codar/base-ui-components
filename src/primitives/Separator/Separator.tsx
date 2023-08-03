import React from "react";
import * as RadixSeparator from "@radix-ui/react-separator";
import { styled } from "@stitches/react";
import { violet } from "@radix-ui/colors";

export const Separator = styled(RadixSeparator.Root, {
  backgroundColor: violet.violet6,
  "&[data-orientation=horizontal]": { height: 1, width: "100%" },
  "&[data-orientation=vertical]": { height: "100%", width: 1 },
});
