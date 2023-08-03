import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { CssGrid, CssGridProps } from "./CssGrid";

export default {
  title: "Components/Layouts/CssGrid",
  component: CssGrid,
} as Meta<typeof CssGrid>;

const Template: StoryFn<typeof CssGrid> = (args) => {
  return <CssGrid {...args} />;
};

export const MenuItem1 = Template.bind({}) as typeof Template;
MenuItem1.args = {
  layout: [
    ["header", "header", "header"],
    ["menu", "main", "right"],
    ["menu", "footer", "footer"],
  ],
  columns: ["150px", "1fr", "50px"],
  rows: ["30px", "1fr", "30px"],
  containerStyle: {
    height: "500px",
    backgroundColor: "white",
    gridGap: "10px",
    border: "solid  1px blue",
  },
  childstyle: {
    border: "solid  1px red",
    padding: "2px",
  },
  childs: {
    header: <div>header</div>,
    menu: <div>menu</div>,
    main: <div>main</div>,
    right: <div>right</div>,
    footer: <div>footer</div>,
  },
} as CssGridProps<"header" | "menu" | "main" | "right" | "footer", 3, 3> as any;

export const MenuItem2 = Template.bind({}) as typeof Template;
MenuItem2.args = {
  layout: [
    ["menu", "header"],
    ["menu", "subheader"],
    ["menu", "main"],
    ["menu", "footer"],
  ],
  columns: ["150px", "1fr"],
  rows: ["30px", "30px", "1fr", "30px"],
  containerStyle: {
    height: "500px",
    gridGap: "10px",
    backgroundColor: "white",
    border: "solid  1px blue",
  },
  childstyle: {
    padding: "2px",
    border: "solid  1px red",
  },
  childs: {
    menu: <div>menu</div>,
    header: <div>header</div>,
    subheader: <div>subheader</div>,
    main: <div>main</div>,
    footer: <div>footer</div>,
  },
} as CssGridProps<
  "menu" | "header" | "subheader" | "main" | "footer",
  2,
  4
> as any;
