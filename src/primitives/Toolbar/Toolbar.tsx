import React, { ReactNode } from "react";
import * as RadixToolbar from "@radix-ui/react-toolbar";
import { styled } from "@stitches/react";
import { violet, blackA, mauve } from "@radix-ui/colors";

interface IToolbarItem {
  itemProps?:
    | React.ComponentProps<typeof RadixToolbar.ToggleGroup>
    | React.ComponentProps<typeof ToolbarLink>
    | React.ComponentProps<typeof ToolbarButton>;
  children:
    | ReactNode
    | RadixToolbar.ToolbarSeparatorProps
    | {
        toggleItemProps: React.ComponentProps<typeof ToolbarToggleItem>;
        content: ReactNode;
      }[];
}

export const Toolbar = ({
  toolbarProps,
  items,
}: {
  toolbarProps?: RadixToolbar.ToolbarProps;
  items: IToolbarItem[];
}) => (
  <ToolbarRoot {...toolbarProps}>
    {items.map((item, index) => {
      if (
        item.itemProps &&
        "type" in item.itemProps &&
        Array.isArray(item.children)
      ) {
        return (
          <RadixToolbar.ToggleGroup
            key={index}
            {...(item.itemProps as
              | RadixToolbar.ToolbarToggleGroupSingleProps
              | RadixToolbar.ToolbarToggleGroupMultipleProps)}
          >
            {item.children.map((subItem, sIndex) => (
              <ToolbarToggleItem key={sIndex} {...subItem.toggleItemProps}>
                {subItem.content}
              </ToolbarToggleItem>
            ))}
          </RadixToolbar.ToggleGroup>
        );
      } else if (!item.children) {
        return (
          <ToolbarSeparator
            {...(item.itemProps as RadixToolbar.ToolbarSeparatorProps)}
          />
        );
      } else if (item.itemProps && "href" in item.itemProps) {
        return (
          <ToolbarLink
            key={index}
            {...(item.itemProps as RadixToolbar.ToolbarLinkProps)}
          >
            {item.children as ReactNode}
          </ToolbarLink>
        );
      }
      return (
        <ToolbarButton
          key={index}
          {...(item.itemProps as RadixToolbar.ToolbarButtonProps)}
        >
          {item.children as ReactNode}
        </ToolbarButton>
      );
    })}
  </ToolbarRoot>
);

const ToolbarRoot = styled(RadixToolbar.Root, {
  display: "flex",
  padding: 10,
  width: "100%",
  minWidth: "max-content",
  borderRadius: 6,
  backgroundColor: "white",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

const itemStyles = {
  all: "unset",
  flex: "0 0 auto",
  color: mauve.mauve11,
  height: 25,
  padding: "0 5px",
  borderRadius: 4,
  display: "inline-flex",
  fontSize: 13,
  lineHeight: 1,
  alignItems: "center",
  justifyContent: "center",
  "&:hover": { backgroundColor: violet.violet3, color: violet.violet11 },
  "&:focus": { position: "relative", boxShadow: `0 0 0 2px ${violet.violet7}` },
};

const ToolbarToggleItem = styled(RadixToolbar.ToggleItem, {
  ...itemStyles,
  backgroundColor: "white",
  marginLeft: 2,
  "&:first-child": { marginLeft: 0 },
  "&[data-state=on]": {
    backgroundColor: violet.violet5,
    color: violet.violet11,
  },
});

const ToolbarSeparator = styled(RadixToolbar.Separator, {
  width: 1,
  backgroundColor: mauve.mauve6,
  margin: "0 10px",
});

const ToolbarLink = styled(
  RadixToolbar.Link,
  {
    ...itemStyles,
    backgroundColor: "transparent",
    color: mauve.mauve11,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
  },
  { "&:hover": { backgroundColor: "transparent", cursor: "pointer" } }
);

const ToolbarButton = styled(
  RadixToolbar.Button,
  {
    ...itemStyles,
    paddingLeft: 10,
    paddingRight: 10,
    color: "white",
    backgroundColor: violet.violet9,
  },
  { "&:hover": { backgroundColor: violet.violet10, color: "white" } }
);
