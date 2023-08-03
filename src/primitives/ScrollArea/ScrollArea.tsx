import { ReactNode } from "react";
import * as RadixScrollArea from "@radix-ui/react-scroll-area";
import { styled } from "@stitches/react";
import { mauve, blackA } from "@radix-ui/colors";

export const ScrollArea = ({
  scrollBarSize = 10,
  children,
  scrollAreaProps,
  scrollBoxProps,
  scrollAreaViewportProps,
  scrollAreaScrollbarProps,
  scrollAreaThumbProps,
  scrollAreaCornerProps,
}: {
  scrollBarSize?: number;
  children?: ReactNode;
  scrollAreaProps?: React.ComponentProps<typeof ScrollAreaRoot>;
  scrollBoxProps?: React.ComponentProps<typeof Box>;
  scrollAreaViewportProps?: React.ComponentProps<typeof ScrollAreaViewport>;
  scrollAreaScrollbarProps?: React.ComponentProps<typeof ScrollAreaScrollbar>;
  scrollAreaThumbProps?: React.ComponentProps<typeof ScrollAreaThumb>;
  scrollAreaCornerProps?: React.ComponentProps<typeof ScrollAreaCorner>;
}) => (
  <ScrollAreaRoot {...scrollAreaProps}>
    <ScrollAreaViewport {...scrollAreaViewportProps}>
      <Box
        {...scrollBoxProps}
        css={{ padding: "15px 20px", ...scrollBoxProps?.css }}
      >
        {children}
      </Box>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar
      orientation="vertical"
      {...scrollAreaScrollbarProps}
      css={{
        '&[data-orientation="vertical"]': { width: scrollBarSize },
        '&[data-orientation="horizontal"]': {
          flexDirection: "column",
          height: scrollBarSize,
        },
        ...scrollAreaScrollbarProps?.css,
      }}
    >
      <ScrollAreaThumb
        {...scrollAreaThumbProps}
        css={{ borderRadius: scrollBarSize, ...scrollAreaThumbProps?.css }}
      />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar
      orientation="horizontal"
      {...scrollAreaScrollbarProps}
      css={{
        '&[data-orientation="vertical"]': { width: scrollBarSize },
        '&[data-orientation="horizontal"]': {
          flexDirection: "column",
          height: scrollBarSize,
        },
        ...scrollAreaScrollbarProps?.css,
      }}
    >
      <ScrollAreaThumb
        {...scrollAreaThumbProps}
        css={{ borderRadius: scrollBarSize, ...scrollAreaThumbProps?.css }}
      />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner {...scrollAreaCornerProps} />
  </ScrollAreaRoot>
);

const ScrollAreaRoot = styled(RadixScrollArea.Root, {
  width: 200,
  height: 225,
  borderRadius: 4,
  overflow: "hidden",
});

const ScrollAreaViewport = styled(RadixScrollArea.Viewport, {
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
});

const ScrollAreaScrollbar = styled(RadixScrollArea.Scrollbar, {
  display: "flex",
  // ensures no selection
  userSelect: "none",
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: "none",
  padding: 2,
  background: blackA.blackA6,
  transition: "background 160ms ease-out",
  "&:hover": { background: blackA.blackA8 },
  '&[data-orientation="horizontal"]': {
    flexDirection: "column",
  },
});

const ScrollAreaThumb = styled(RadixScrollArea.Thumb, {
  flex: 1,
  background: mauve.mauve10,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    minWidth: 44,
    minHeight: 44,
  },
});

const ScrollAreaCorner = styled(RadixScrollArea.Corner, {
  background: blackA.blackA8,
});

const Box = styled("div", {});
