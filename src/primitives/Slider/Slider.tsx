import React from "react";
import * as RadixSlider from "@radix-ui/react-slider";
import { styled } from "@stitches/react";
import { violet, blackA } from "@radix-ui/colors";

export const Slider = ({
  sliderProps,
  sliderTrackProps,
  sliderRangeProps,
  sliderThumbProps,
}: {
  sliderProps: React.ComponentProps<typeof SliderRoot>;
  sliderTrackProps?: React.ComponentProps<typeof SliderTrack>;
  sliderRangeProps?: React.ComponentProps<typeof SliderRange>;
  sliderThumbProps?: React.ComponentProps<typeof SliderThumb>;
}) => (
  <SliderRoot {...sliderProps}>
    <SliderTrack {...sliderTrackProps}>
      <SliderRange {...sliderRangeProps} />
    </SliderTrack>
    <SliderThumb {...sliderThumbProps} />
  </SliderRoot>
);

const SliderRoot = styled(RadixSlider.Root, {
  position: "relative",
  display: "flex",
  alignItems: "center",
  userSelect: "none",
  touchAction: "none",
  width: 200,
  height: 20,
});

const SliderTrack = styled(RadixSlider.Track, {
  backgroundColor: blackA.blackA10,
  position: "relative",
  flexGrow: 1,
  borderRadius: "9999px",
  height: 3,
});

const SliderRange = styled(RadixSlider.Range, {
  position: "absolute",
  backgroundColor: "lightgray",
  borderRadius: "9999px",
  height: "100%",
});

const SliderThumb = styled(RadixSlider.Thumb, {
  display: "block",
  width: 20,
  height: 20,
  backgroundColor: "lightgray",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  borderRadius: 10,
  "&:hover": { backgroundColor: violet.violet3 },
  "&:focus": { outline: "none", boxShadow: `0 0 0 5px ${blackA.blackA8}` },
});
