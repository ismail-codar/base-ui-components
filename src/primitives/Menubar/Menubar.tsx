import React, { ReactNode, useMemo, useState } from "react";
import * as RadixMenubar from "@radix-ui/react-menubar";
import { styled } from "@stitches/react";
import { blackA, violet, mauve } from "@radix-ui/colors";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";
import { PopperContentProps } from "@radix-ui/react-popper";

interface IMenuItem {
  id?: string;
  text: ReactNode;
  rightSlot?: ReactNode;
  menuItemProps?: RadixMenubar.MenuItemProps;
  contentProps?: PopperContentProps;
  data?: any;
  checkBy?: "checkbox" | "radiogroup";
  items?: IMenuItem[];
}

interface IMenu {
  id?: string;
  text: ReactNode;
  data?: any;
  contentProps?: PopperContentProps;
  items?: IMenuItem[];
}

const calcuateItems = (menuItems: IMenu[]) => {
  const checkedItems: IMenuItem[] = [];
  const radioGroupItems: {
    [key: string]: { value: string; items: IMenuItem[] };
  } = {};

  let stack: any[] = menuItems.slice(0);
  const parentItems: any = {};
  while (stack.length) {
    const item = stack.pop()!;
    if (!item.id) {
      item.id = Math.random().toString(36).substring(2);
    }
    if (item.items) {
      item.items.forEach((subItem: any) => {
        if (!subItem.id) {
          subItem.id = Math.random().toString(36).substring(2);
        }
        parentItems[subItem.id] = item;
      });
      stack = stack.concat(item.items);
    }
  }

  stack = menuItems.slice(0);
  while (stack.length) {
    const item = stack.pop()!;
    if (!item.id) {
      item.id = Math.random().toString(36).substring(2);
    }
    if (item.items) {
      stack = stack.concat(item.items);
    }
    if (item.checkBy) {
      if (item.checkBy === "checkbox") {
        checkedItems.push(item);
      }
      if (item.checkBy === "radiogroup") {
        const parentId = parentItems[item.id].id;
        if (!radioGroupItems[parentId]) {
          radioGroupItems[parentId] = {
            value: parentItems[item.id].data,
            items: [],
          };
        }
        radioGroupItems[parentId].items.push(item);
      }
    }
  }
  return { checkedItems, radioGroupItems };
};

export const Menubar = ({ items }: { items: IMenu[] }) => {
  const { checkedItems, radioGroupItems } = useMemo(
    () => calcuateItems(items),
    [items]
  );

  const [checkedSelection, setCheckedSelection] =
    useState<IMenuItem[]>(checkedItems);
  const [radioSelection, setRadioSelection] = useState(radioGroupItems);

  const renderMenuItem = (
    menuItem: IMenuItem,
    index: number,
    parentId?: string
  ) => {
    if (menuItem.items) {
      return (
        <RadixMenubar.Sub key={index}>
          <MenubarSubTrigger>
            {menuItem.text}
            <RightSlot>{menuItem.rightSlot || <ChevronRightIcon />}</RightSlot>
          </MenubarSubTrigger>
          <RadixMenubar.Portal>
            <MenubarSubContent {...menuItem.contentProps}>
              {menuItem.items?.map((subMenuItem, sIndex) => {
                if (subMenuItem.checkBy === "radiogroup") {
                  return (
                    <RadixMenubar.RadioGroup
                      key={index}
                      value={radioSelection[subMenuItem.id!].value}
                      onValueChange={(val) => {
                        setRadioSelection({
                          ...radioSelection,
                          [subMenuItem.id!]: {
                            value: val,
                            items: radioSelection[subMenuItem.id!].items,
                          },
                        });
                      }}
                    >
                      {renderMenuItem(subMenuItem, sIndex, menuItem.id)}
                    </RadixMenubar.RadioGroup>
                  );
                } else {
                  return renderMenuItem(subMenuItem, sIndex);
                }
              })}
            </MenubarSubContent>
          </RadixMenubar.Portal>
        </RadixMenubar.Sub>
      );
    } else {
      if (!menuItem.text) {
        return <MenubarSeparator key={index} />;
      } else if (menuItem.checkBy) {
        if (menuItem.checkBy === "checkbox") {
          return (
            <MenubarCheckboxItem
              key={index}
              checked={
                checkedSelection.find((item) => item.id === menuItem.id)
                  ?.data as boolean
              }
              variant="inset"
              onCheckedChange={() => {
                setCheckedSelection(
                  checkedSelection.map((item) =>
                    item.id === menuItem.id
                      ? {
                          ...item,
                          data: !item.data,
                        }
                      : item
                  )
                );
              }}
            >
              <MenubarItemIndicator>
                <CheckIcon />
              </MenubarItemIndicator>
              {menuItem.text}{" "}
              {menuItem.rightSlot && (
                <RightSlot>{menuItem.rightSlot}</RightSlot>
              )}
            </MenubarCheckboxItem>
          );
        } else if (menuItem.checkBy === "radiogroup") {
          return (
            <MenubarRadioItem
              value={menuItem.data.toString()}
              variant="inset"
              key={index}
            >
              <MenubarItemIndicator>
                <DotFilledIcon />
              </MenubarItemIndicator>
              {menuItem.text}{" "}
              {menuItem.rightSlot && (
                <RightSlot>{menuItem.rightSlot}</RightSlot>
              )}
            </MenubarRadioItem>
          );
        }
      } else {
        return (
          <MenubarItem {...menuItem.menuItemProps} key={index}>
            {menuItem.text}{" "}
            {menuItem.rightSlot && <RightSlot>{menuItem.rightSlot}</RightSlot>}
          </MenubarItem>
        );
      }
    }
  };

  return (
    <MenubarRoot>
      {items.map((menu, index) => {
        return (
          <RadixMenubar.Menu key={index}>
            <MenubarTrigger>{menu.text}</MenubarTrigger>
            <RadixMenubar.Portal>
              <MenubarContent {...menu.contentProps}>
                {radioSelection[menu.id!] ? (
                  <RadixMenubar.RadioGroup
                    key={index}
                    value={radioSelection[menu.id!].value}
                    onValueChange={(val) => {
                      setRadioSelection({
                        ...radioSelection,
                        [menu.id!]: {
                          value: val,
                          items: radioSelection[menu.id!].items,
                        },
                      });
                    }}
                  >
                    {menu.items?.map((menuItem, index) => {
                      return renderMenuItem(menuItem, index, menu.id);
                    })}
                  </RadixMenubar.RadioGroup>
                ) : (
                  menu.items?.map((menuItem, index) => {
                    return renderMenuItem(menuItem, index);
                  })
                )}
              </MenubarContent>
            </RadixMenubar.Portal>
          </RadixMenubar.Menu>
        );
      })}
    </MenubarRoot>
  );
};

const MenubarRoot = styled(RadixMenubar.Root, {
  display: "flex",
  backgroundColor: "white",
  padding: 3,
  borderRadius: 6,
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

const MenubarTrigger = styled(RadixMenubar.Trigger, {
  all: "unset",
  padding: "8px 12px",
  outline: "none",
  userSelect: "none",
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 4,
  fontSize: 13,
  color: violet.violet11,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 2,

  '&[data-highlighted], &[data-state="open"]': {
    backgroundColor: violet.violet4,
  },
});

const contentStyles = {
  minWidth: 220,
  backgroundColor: "white",
  borderRadius: 6,
  padding: 5,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
};

const MenubarContent = styled(RadixMenubar.Content, contentStyles);
const MenubarSubContent = styled(RadixMenubar.SubContent, contentStyles);

const itemStyles = {
  all: "unset",
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0 10px",
  position: "relative",
  userSelect: "none",

  "&[data-disabled]": {
    color: mauve.mauve8,
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    backgroundImage: `linear-gradient(135deg, ${violet.violet9} 0%, ${violet.violet10} 100%)`,
    color: violet.violet1,
  },

  variants: {
    variant: {
      inset: {
        paddingLeft: 20,
      },
    },
  },
};

const MenubarItem = styled(RadixMenubar.Item, itemStyles);
const MenubarSubTrigger = styled(RadixMenubar.SubTrigger, {
  '&[data-state="open"]': {
    backgroundColor: violet.violet4,
    color: violet.violet11,
  },
  ...itemStyles,
});

const MenubarCheckboxItem = styled(RadixMenubar.CheckboxItem, itemStyles);
const MenubarRadioItem = styled(RadixMenubar.RadioItem, itemStyles);

const MenubarItemIndicator = styled(RadixMenubar.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 20,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

const RightSlot = styled("div", {
  marginLeft: "auto",
  paddingLeft: 20,
  color: mauve.mauve9,
  "[data-highlighted] > &": { color: "white" },
  "[data-disabled] &": { color: mauve.mauve8 },
});

const MenubarSeparator = styled(RadixMenubar.Separator, {
  height: 1,
  backgroundColor: violet.violet6,
  margin: 5,
});
