import React from "react";
import * as RadixProgress from "@radix-ui/react-progress";
import { styled } from "@stitches/react";
import { blackA } from "@radix-ui/colors";

export const Progress = ({
  progressProps,
  indicatorProps,
}: {
  progressProps: React.ComponentProps<typeof ProgressRoot>;
  indicatorProps?: React.ComponentProps<typeof ProgressIndicator>;
}) => {
  return (
    <ProgressRoot {...progressProps}>
      <ProgressIndicator
        style={{ transform: `translateX(-${100 - progressProps.value!}%)` }}
        {...indicatorProps}
      />
    </ProgressRoot>
  );
};

const ProgressRoot = styled(RadixProgress.Root, {
  position: "relative",
  overflow: "hidden",
  background: blackA.blackA9,
  borderRadius: "99999px",
  width: 300,
  height: 25,

  // Fix overflow clipping in Safari
  // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
  transform: "translateZ(0)",
});

const ProgressIndicator = styled(RadixProgress.Indicator, {
  backgroundColor: "lightgray",
  width: "100%",
  height: "100%",
  transition: "transform 660ms cubic-bezier(0.65, 0, 0.35, 1)",
});
