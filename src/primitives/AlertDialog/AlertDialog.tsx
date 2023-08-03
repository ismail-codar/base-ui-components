import React from 'react';
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';
import { styled, keyframes } from '@stitches/react';
import { violet, blackA, red, mauve } from '@radix-ui/colors';
import { Button } from "../Button/Button";
import { Flex } from "../FlexBox/FlexBox";

export const AlertDialog = ({
  children,
  title,
  description,
  cancel,
  action,
  rootProps,
}: {
  children?: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  cancel: React.ReactNode;
  action: React.ReactNode;
  rootProps?: RadixAlertDialog.DialogProps;
}) => (
  <RadixAlertDialog.Root>
    {children && (
      <RadixAlertDialog.Trigger asChild>{children}</RadixAlertDialog.Trigger>
    )}
    <RadixAlertDialog.Portal>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogTitle> {title}</AlertDialogTitle>
        <AlertDialogDescription>{description}</AlertDialogDescription>
        <Flex css={{ justifyContent: "flex-end" }}>
          <RadixAlertDialog.Cancel asChild>
            <Button variant="mauve" css={{ marginRight: 25 }}>
              {cancel}
            </Button>
          </RadixAlertDialog.Cancel>
          <RadixAlertDialog.Action asChild>
            <Button variant="red">{action}</Button>
          </RadixAlertDialog.Action>
        </Flex>
      </AlertDialogContent>
    </RadixAlertDialog.Portal>
  </RadixAlertDialog.Root>
);

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const AlertDialogOverlay = styled(RadixAlertDialog.Overlay, {
  backgroundColor: blackA.blackA9,
  position: "fixed",
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const AlertDialogContent = styled(RadixAlertDialog.Content, {
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "500px",
  maxHeight: "85vh",
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  "&:focus": { outline: "none" },
});

const AlertDialogTitle = styled(RadixAlertDialog.Title, {
  margin: 0,
  color: mauve.mauve12,
  fontSize: 17,
  fontWeight: 500,
});

const AlertDialogDescription = styled(RadixAlertDialog.Description, {
  marginBottom: 20,
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
});


