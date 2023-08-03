import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import React, { FC, useState } from "react";
import { CheckedState } from "@radix-ui/react-checkbox";

export const UnControlledCheckbox: FC<{}> = ({}) => {
  return (
    <Checkbox
      label="Accept terms and conditions."
      onChange={(checked) => {
        console.log(checked);
      }}
    />
  );
};

export const ControlledCheckbox: FC<{}> = ({}) => {
  const [isChecked, setIsChecked] = useState<CheckedState>(false);

  return (
    <Checkbox
      label="Accept terms and conditions."
      value={isChecked}
      onClick={() => {
        setIsChecked(isChecked ? false : true);
      }}
    />
  );
};

export default {
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Checkbox>;