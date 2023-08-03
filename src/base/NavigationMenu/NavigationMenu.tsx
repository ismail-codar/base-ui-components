import React, { ReactNode } from "react";
import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import { styled, keyframes } from "@stitches/react";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { violet, mauve, blackA } from "@radix-ui/colors";

interface NavigationMenuItem {
  href?: string;
  title?: string;
  layout?: "one" | "two";
  subItems?: {
    liProps?: any;
    href?: string;
    title?: string;
    content: React.ReactNode;
  }[];
}

export const NavigationMenu = ({ items }: { items: NavigationMenuItem[] }) => {
  return (
    <NavigationMenuRoot>
      <NavigationMenuList>
        {items.map((item, index) => {
          return (
            <RadixNavigationMenu.Item key={index}>
              {item.href ? (
                <NavigationMenuLink href={item.href}>
                  {item.title}
                </NavigationMenuLink>
              ) : (
                <React.Fragment>
                  <NavigationMenuTrigger>
                    {item.title} <CaretDown aria-hidden />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <List layout={item.layout || "two"}>
                      {item.subItems?.map((subItem, sIndex) => {
                        return typeof subItem.content === "object" &&
                          !subItem.title &&
                          !subItem.href ? (
                          <li
                            {...subItem.liProps}
                            key={sIndex + subItem.title! + index}
                          >
                            {subItem.content}
                          </li>
                        ) : (
                          <ListItem
                            key={sIndex + subItem.title! + index}
                            title={subItem.title}
                            href={subItem.href}
                            liProps={subItem.liProps}
                          >
                            {subItem.content}
                          </ListItem>
                        );
                      })}
                    </List>
                  </NavigationMenuContent>
                </React.Fragment>
              )}
            </RadixNavigationMenu.Item>
          );
        })}

        <NavigationMenuIndicator key="NavigationMenuIndicator">
          <Arrow />
        </NavigationMenuIndicator>
      </NavigationMenuList>

      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenuRoot>
  );
};

const enterFromRight = keyframes({
  from: { transform: "translateX(200px)", opacity: 0 },
  to: { transform: "translateX(0)", opacity: 1 },
});

const enterFromLeft = keyframes({
  from: { transform: "translateX(-200px)", opacity: 0 },
  to: { transform: "translateX(0)", opacity: 1 },
});

const exitToRight = keyframes({
  from: { transform: "translateX(0)", opacity: 1 },
  to: { transform: "translateX(200px)", opacity: 0 },
});

const exitToLeft = keyframes({
  from: { transform: "translateX(0)", opacity: 1 },
  to: { transform: "translateX(-200px)", opacity: 0 },
});

const scaleIn = keyframes({
  from: { transform: "rotateX(-30deg) scale(0.9)", opacity: 0 },
  to: { transform: "rotateX(0deg) scale(1)", opacity: 1 },
});

const scaleOut = keyframes({
  from: { transform: "rotateX(0deg) scale(1)", opacity: 1 },
  to: { transform: "rotateX(-10deg) scale(0.95)", opacity: 0 },
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const NavigationMenuRoot = styled(RadixNavigationMenu.Root, {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  zIndex: 1,
});

const NavigationMenuList = styled(RadixNavigationMenu.List, {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "white",
  padding: 4,
  borderRadius: 6,
  listStyle: "none",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  margin: 0,
});

const itemStyles = {
  padding: "8px 12px",
  outline: "none",
  userSelect: "none",
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 4,
  fontSize: 15,
  color: violet.violet11,
  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet7}` },
  "&:hover": { backgroundColor: violet.violet3 },
};

const NavigationMenuTrigger = styled(RadixNavigationMenu.Trigger, {
  all: "unset",
  ...itemStyles,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 2,
});

const NavigationMenuLink = styled(RadixNavigationMenu.Link, {
  ...itemStyles,
  display: "block",
  textDecoration: "none",
  fontSize: 15,
  lineHeight: 1,
});

const NavigationMenuContent = styled(RadixNavigationMenu.Content, {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  "@media only screen and (minWidth: 600px)": { width: "auto" },
  animationDuration: "250ms",
  animationTimingFunction: "ease",
  '&[data-motion="from-start"]': { animationName: enterFromLeft },
  '&[data-motion="from-end"]': { animationName: enterFromRight },
  '&[data-motion="to-start"]': { animationName: exitToLeft },
  '&[data-motion="to-end"]': { animationName: exitToRight },
});

const NavigationMenuIndicator = styled(RadixNavigationMenu.Indicator, {
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  height: 10,
  top: "100%",
  overflow: "hidden",
  zIndex: 1,
  transition: "width, transform 250ms ease",
  '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
  '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
});

const NavigationMenuViewport = styled(RadixNavigationMenu.Viewport, {
  position: "relative",
  transformOrigin: "top center",
  marginTop: 10,
  width: "100%",
  backgroundColor: "white",
  borderRadius: 6,
  overflow: "hidden",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  height: "var(--radix-navigation-menu-viewport-height)",
  transition: "width, height, 300ms ease",
  '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
  '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  "@media only screen and (minWidth: 600px)": {
    width: "var(--radix-navigation-menu-viewportWidth)",
  },
});

const List = styled("ul", {
  display: "grid",
  padding: 22,
  margin: 0,
  columnGap: 10,
  listStyle: "none",
  variants: {
    layout: {
      one: {
        "@media only screen and (minWidth: 600px)": {
          width: 500,
          gridTemplateColumns: ".75fr 1fr",
        },
      },
      two: {
        "@media only screen and (minWidth: 600px)": {
          width: 600,
          gridAutoFlow: "column",
          gridTemplateRows: "repeat(3, 1fr)",
        },
      },
    },
  },
  defaultVariants: {
    layout: "one",
  },
});

const ListItem = React.forwardRef(
  (
    {
      children,
      title,
      liProps,
      ...props
    }: { href?: string; title?: string; liProps?: any; children: ReactNode },
    forwardedRef: React.ForwardedRef<HTMLAnchorElement>
  ) => (
    <li {...liProps}>
      <RadixNavigationMenu.Link asChild>
        <ListItemLink {...props} ref={forwardedRef}>
          {title && <ListItemHeading>{title}</ListItemHeading>}
          <ListItemText>{children}</ListItemText>
        </ListItemLink>
      </RadixNavigationMenu.Link>
    </li>
  )
);

const ListItemLink = styled("a", {
  display: "block",
  outline: "none",
  textDecoration: "none",
  userSelect: "none",
  padding: 12,
  borderRadius: 6,
  fontSize: 15,
  lineHeight: 1,
  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet7}` },
  "&:hover": { backgroundColor: mauve.mauve3 },
});

const ListItemHeading = styled("div", {
  fontWeight: 500,
  lineHeight: 1.2,
  marginBottom: 5,
  color: violet.violet12,
});

const ListItemText = styled("p", {
  all: "unset",
  color: mauve.mauve11,
  lineHeight: 1.4,
  fontWeight: "initial",
});


const ViewportPosition = styled("div", {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  top: "100%",
  left: 0,
  perspective: "2000px",
});

const CaretDown = styled(CaretDownIcon, {
  position: "relative",
  color: violet.violet10,
  top: 1,
  transition: "transform 250ms ease",
  "[data-state=open] &": { transform: "rotate(-180deg)" },
});

const Arrow = styled("div", {
  position: "relative",
  top: "70%",
  backgroundColor: "white",
  width: 10,
  height: 10,
  transform: "rotate(45deg)",
  borderTopLeftRadius: 2,
});
