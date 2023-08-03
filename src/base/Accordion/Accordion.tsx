import React from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { styled, keyframes } from "@stitches/react";
import { violet, blackA, mauve } from "@radix-ui/colors";
import { ChevronDownIcon } from "@radix-ui/react-icons";

/**
 * Accordion arayüz bileşeni
 */
export const Accordion = ({
  items,
  ...accordionProps
}: RadixAccordion.AccordionImplSingleProps & {
  items: (Omit<RadixAccordion.AccordionItemProps, "content"> & {
    trigger: React.ReactNode;
    content: React.ReactNode;
  })[];
}) => {
  return (
    <AccordionRoot type="single" collapsible {...accordionProps}>
      {items.map(({ trigger, content, ...itemProps }, index) => {
        return (
          <AccordionItem {...itemProps} key={index}>
            <AccordionTrigger>{trigger}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        );
      })}
    </AccordionRoot>
  );
};

const AccordionRoot = styled(RadixAccordion.Root, {
  borderRadius: 6,
  width: "100%",
  backgroundColor: mauve.mauve6,
  boxShadow: `0 2px 10px ${blackA.blackA4}`,
});

const AccordionItem = styled(RadixAccordion.Item, {
  overflow: "hidden",
  marginTop: 1,

  "&:first-child": {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  "&:last-child": {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  "&:focus-within": {
    position: "relative",
    zIndex: 1,
    boxShadow: `0 0 0 2px ${mauve.mauve12}`,
  },
});

const AccordionTrigger = React.forwardRef(
  (
    { children, ...props }: { children?: any },
    forwardedRef: React.ForwardedRef<any>
  ) => (
    <StyledHeader>
      <StyledTrigger {...props} ref={forwardedRef}>
        {children}
        <StyledChevron aria-hidden />
      </StyledTrigger>
    </StyledHeader>
  )
);

const AccordionContent = React.forwardRef(
  (
    { children, ...props }: { children?: any },
    forwardedRef: React.ForwardedRef<any>
  ) => (
    <StyledContent {...props} ref={forwardedRef}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  )
);

const StyledHeader = styled(RadixAccordion.Header, {
  all: "unset",
  display: "flex",
});

const StyledTrigger = styled(RadixAccordion.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  padding: "0 20px",
  height: 45,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: 15,
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 1px 0 ${mauve.mauve6}`,
  backgroundColor: "white",
  "&:hover": { backgroundColor: mauve.mauve2 },
});

const StyledChevron = styled(ChevronDownIcon, {
  color: violet.violet10,
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  "[data-state=open] &": { transform: "rotate(180deg)" },
});

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

const StyledContent = styled(RadixAccordion.Content, {
  overflow: "hidden",
  fontSize: 15,
  color: mauve.mauve11,
  backgroundColor: mauve.mauve2,

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const StyledContentText = styled("div", {
  padding: "15px 20px",
});
