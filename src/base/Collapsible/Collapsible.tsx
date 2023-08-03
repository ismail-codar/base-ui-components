import React, { ReactNode } from "react";
import * as RadixCollapsible from "@radix-ui/react-collapsible";
import { styled } from "@stitches/react";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";
import { IconButton } from "../Button/Button";
import { Flex } from "../FlexBox/FlexBox";

export const Collapsible = ({
  label,
  children,
  collapsableContent,
}: {
  label: ReactNode;
  children?: ReactNode;
  collapsableContent: ReactNode;
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <CollapsibleRoot open={open} onOpenChange={setOpen}>
      <Flex css={{ alignItems: "center", justifyContent: "space-between" }}>
        {label}
        <RadixCollapsible.Trigger asChild>
          <IconButton>{open ? <Cross2Icon /> : <RowSpacingIcon />}</IconButton>
        </RadixCollapsible.Trigger>
      </Flex>

      {children}

      <RadixCollapsible.Content>{collapsableContent}</RadixCollapsible.Content>
    </CollapsibleRoot>
  );
};

const CollapsibleRoot = styled(RadixCollapsible.Root, {
  width: 300,
});


