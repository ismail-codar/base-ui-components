import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { styled } from "@stitches/react";
import { violet, blackA } from "@radix-ui/colors";
import { Flex } from "../FlexBox/FlexBox";

export const Avatar = ({
  gap,
  items,
}: {
  gap?: number;
  items: {
    image?: { src: string; alt: string };
    fallback?: { delayMs: number; children?: React.ReactNode };
  }[];
}) => (
  <Flex css={{ gap }}>
    {items.map((item, index) => {
      return (
        <AvatarRoot key={index}>
          {item.image && <AvatarImage {...item.image} />}
          {item.fallback && <AvatarFallback {...item.fallback} />}
        </AvatarRoot>
      );
    })}
  </Flex>
);

const AvatarRoot = styled(AvatarPrimitive.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  width: 45,
  height: 45,
  borderRadius: "100%",
  backgroundColor: blackA.blackA3,
});

const AvatarImage = styled(AvatarPrimitive.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  color: violet.violet11,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

