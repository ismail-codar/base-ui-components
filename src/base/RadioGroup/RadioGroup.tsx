import React, { ReactNode } from "react";
import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import { styled } from "@stitches/react";
import { violet, blackA } from "@radix-ui/colors";
import { Flex } from "../FlexBox/FlexBox";

interface IRadioGroupItem {
  radioGroupItemProps: React.ComponentProps<typeof RadioGroupItem>;
  flexProps?: React.ComponentProps<typeof Flex>;
  indicatorProps?: React.ComponentProps<typeof RadioGroupIndicator>;
  labelProps?: React.ComponentProps<typeof Label>;
  label: ReactNode;
}

export const RadioGroup = ({
  value,
  onChange,
  radioGroupProps,
  items,
  radioGroupItemProps,
  flexProps,
  indicatorProps,
  labelProps,
}: {
  value?: string;
  onChange?: (value: string) => void;
  radioGroupProps: Omit<
    React.ComponentProps<typeof RadioGroupRoot>,
    "value" | "onValueChange"
  >;
  radioGroupItemProps?: Omit<
    React.ComponentProps<typeof RadioGroupItem>,
    "value" | "id"
  >;
  flexProps?: React.ComponentProps<typeof Flex>;
  indicatorProps?: React.ComponentProps<typeof RadioGroupIndicator>;
  labelProps?: React.ComponentProps<typeof Label>;
  items: IRadioGroupItem[];
}) => (
  <RadioGroupRoot onValueChange={onChange} value={value} {...radioGroupProps}>
    {items.map((item) => (
      <Flex css={{ alignItems: "center" }} {...flexProps} {...item.flexProps}>
        <RadioGroupItem {...radioGroupItemProps} {...item.radioGroupItemProps}>
          <RadioGroupIndicator {...indicatorProps} {...item.indicatorProps} />
        </RadioGroupItem>
        <Label {...labelProps} {...item.labelProps}>
          {item.label}
        </Label>
      </Flex>
    ))}
  </RadioGroupRoot>
);

const RadioGroupRoot = styled(RadixRadioGroup.Root, {
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

const RadioGroupItem = styled(RadixRadioGroup.Item, {
  all: "unset",
  width: 25,
  height: 25,
  borderRadius: "100%",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  "&:hover": { backgroundColor: violet.violet3 },
  "&:focus": { boxShadow: `0 0 0 2px black` },
});

const RadioGroupIndicator = styled(RadixRadioGroup.Indicator, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  position: "relative",
  "&::after": {
    content: '""',
    display: "block",
    width: 11,
    height: 11,
    borderRadius: "50%",
    backgroundColor: violet.violet11,
  },
});

const Label = styled("label", {
  fontSize: 15,
  lineHeight: 1,
  paddingLeft: 15,
});
