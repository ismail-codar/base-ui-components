import { ReactNode } from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import { styled, keyframes } from "@stitches/react";
import { blackA, mauve } from "@radix-ui/colors";
import { Cross2Icon } from "@radix-ui/react-icons";
import { IconButton } from "../Button/Button";
import { Flex } from "../FlexBox/FlexBox";

export const Dialog = ({
  trigger,
  close,
  title,
  description,
  children,
}: {
  trigger: ReactNode;
  close: ReactNode;
  title: string;
  description?: string;
  children: ReactNode;
} & RadixDialog.DialogProps) => (
  <RadixDialog.Root>
    <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
        {children}
        <Flex css={{ marginTop: 25, justifyContent: "flex-end" }}>
          <RadixDialog.Close asChild>{close}</RadixDialog.Close>
        </Flex>
        <RadixDialog.Close asChild>
          <IconButton aria-label="Close">
            <Cross2Icon />
          </IconButton>
        </RadixDialog.Close>
      </DialogContent>
    </DialogPortal>
  </RadixDialog.Root>
);
const DialogPortal = styled(RadixDialog.Portal, {
  zIndex: 99999,
});
const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const DialogOverlay = styled(RadixDialog.Overlay, {
  backgroundColor: blackA.blackA9,
  position: "fixed",
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 100,
});

const DialogContent = styled(RadixDialog.Content, {
  zIndex: 101,
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  "&:focus": { outline: "none" },
});

const DialogTitle = styled(RadixDialog.Title, {
  margin: 0,
  fontWeight: 500,
  color: mauve.mauve12,
  fontSize: 17,
});

const DialogDescription = styled(RadixDialog.Description, {
  margin: "10px 0 20px",
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
});
