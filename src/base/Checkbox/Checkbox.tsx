import React, { useEffect, useState } from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { styled } from "@stitches/react";
import { violet, blackA } from "@radix-ui/colors";
import { CheckIcon } from "@radix-ui/react-icons";
import { Flex } from "../FlexBox/FlexBox";

export const Checkbox = ({
  label,
  rootProps,
  value,
  onChange,
  onClick,
}: {
  label?: string;
  rootProps?: Omit<RadixCheckbox.CheckboxProps, "checked" | "onCheckedChange">;
  value?: RadixCheckbox.CheckedState;
  onChange?: (checked: RadixCheckbox.CheckedState) => void;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  const [isChecked, setIsChecked] = useState<RadixCheckbox.CheckedState>(
    value !== undefined ? value : false
  );

  useEffect(() => {
    if (value !== undefined) setIsChecked(value);
  }, [value]);

  useEffect(() => {
    onChange?.(isChecked);
  }, [isChecked]);

  return (
    <Flex onClick={onClick} css={{ alignItems: "center" }}>
      <CheckboxRoot
        {...rootProps}
        checked={isChecked}
        onCheckedChange={(checked) => {
          value === undefined && setIsChecked(checked);
        }}
      >
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </CheckboxRoot>
      <Label
        css={{ paddingLeft: 15 }}
        onClick={() =>
          value === undefined && setIsChecked(isChecked ? false : true)
        }
      >
        {label}
      </Label>
    </Flex>
  );
};

const CheckboxRoot = styled(RadixCheckbox.Root, {
  all: "unset",
  width: 25,
  height: 25,
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  "&:hover": { backgroundColor: violet.violet3 },
  "&:focus": { boxShadow: `0 0 0 2px black` },
});

const CheckboxIndicator = styled(RadixCheckbox.Indicator, {
  color: violet.violet11,
});

const Label = styled("label", {
  fontSize: 15,
  lineHeight: 1,
}); 
