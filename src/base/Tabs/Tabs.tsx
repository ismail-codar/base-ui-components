import React from "react";
import * as RadixTabs from "@radix-ui/react-tabs";
import { styled } from "@stitches/react";
import { violet, mauve, blackA, green } from "@radix-ui/colors";

interface ITabItem {
  triggerProps?: RadixTabs.TabsTriggerProps;
  contentProps?: RadixTabs.TabsContentProps;
  trigger: React.ReactNode;
  content: React.ReactNode;
}

export const Tabs = ({
  tabsProps,
  listProps,
  triggerProps,
  contentProps,
  items,
}: {
  tabsProps: RadixTabs.TabsProps;
  listProps?: RadixTabs.TabsListProps;
  triggerProps?: RadixTabs.TabsTriggerProps;
  contentProps?: RadixTabs.TabsContentProps;
  items: ITabItem[];
}) => (
  <TabsRoot {...tabsProps}>
    <TabsList {...listProps}>
      {items.map((item, index) => (
        <TabsTrigger
          key={index}
          value={index.toString()}
          {...triggerProps}
          {...item.triggerProps}
        >
          {item.trigger}
        </TabsTrigger>
      ))}
    </TabsList>
    {items.map((item, index) => (
      <TabsContent
        key={index}
        value={index.toString()}
        {...contentProps}
        {...item.contentProps}
      >
        {item.content}
      </TabsContent>
    ))}
  </TabsRoot>
);

const TabsRoot = styled(RadixTabs.Root, {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  boxShadow: `0 2px 10px ${blackA.blackA4}`,
});

const TabsList = styled(RadixTabs.List, {
  flexShrink: 0,
  display: "flex",
});

const TabsTrigger = styled(RadixTabs.Trigger, {
  all: "unset",
  backgroundColor: "white",
  padding: "0 20px",
  height: 45,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none",
  "&:hover": { color: violet.violet11 },
  '&[data-state="active"]': {
    color: "#1F1F1F",
    boxShadow: "inset 0px -2px 0px 0px #1F1F1F",
    "fontWeight": "700",
  },
  "color": "#616063",
  "fontFamily": "Satoshi",
  "fontSize": "16px",
  "fontStyle": "normal",
  "fontWeight": "500",
  "lineHeight": "24px"
});

const TabsContent = styled(RadixTabs.Content, {
  flexGrow: 1,
  padding: 20,
  backgroundColor: "white",
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: "none",
  "borderRadius": "8px",
  "background": "#F3F5F7"
});

