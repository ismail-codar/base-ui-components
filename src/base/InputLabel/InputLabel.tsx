import { ReactNode } from "react";
import * as RadixLabel from "@radix-ui/react-label";
import { styled } from "@stitches/react";
import { Flex } from "../FlexBox/FlexBox";

export const Label = ({
  label,
  children,
}: {
  label: ReactNode;
  children: ReactNode;
}) => (
  <Flex
    css={{ padding: "0 20px", flexWrap: "wrap", gap: 15, alignItems: "center" }}
  >
    <LabelRoot>{label}</LabelRoot>
    {children}
  </Flex>
);

const LabelRoot = styled(RadixLabel.Root, {
  fontSize: 15,
  fontWeight: 500,
  lineHeight: "35px",
});

