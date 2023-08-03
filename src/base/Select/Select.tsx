import React, { FC, ReactNode } from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { styled } from "@stitches/react";
import { violet, mauve, blackA } from "@radix-ui/colors";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

export const SelectTrigger = styled(RadixSelect.SelectTrigger, {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 13,
  lineHeight: 1,
  height: 35,
  gap: 5,
  backgroundColor: "white",
  color: violet.violet11,
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  "&:hover": { backgroundColor: mauve.mauve3 },
  "&:focus": { boxShadow: `0 0 0 2px black` },
  "&[data-placeholder]": { color: violet.violet9 },
});

export const SelectIcon = styled(RadixSelect.SelectIcon, {
  color: violet.violet11,
});

export const SelectContent = styled(RadixSelect.Content, {
  overflow: "hidden",
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
});

const SelectViewport = styled(RadixSelect.Viewport, {
  padding: 5,
});

export const SelectItem: FC<{
  value: string;
  children: ReactNode;
  disabled?: boolean;
}> = React.forwardRef(
  ({ children, ...props }, forwardedRef: React.ForwardedRef<any>) => {
    return (
      <StyledItem {...props} ref={forwardedRef}>
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
        <StyledItemIndicator>
          <CheckIcon />
        </StyledItemIndicator>
      </StyledItem>
    );
  }
);

const StyledItem = styled(RadixSelect.Item, {
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0 35px 0 25px",
  position: "relative",
  userSelect: "none",

  "&[data-disabled]": {
    color: mauve.mauve8,
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    outline: "none",
    backgroundColor: violet.violet9,
    color: violet.violet1,
  },
});

const SelectLabel = styled(RadixSelect.Label, {
  padding: "0 25px",
  fontSize: 12,
  lineHeight: "25px",
  color: mauve.mauve11,
});

const SelectSeparator = styled(RadixSelect.Separator, {
  height: 1,
  backgroundColor: violet.violet6,
  margin: 5,
});

const StyledItemIndicator = styled(RadixSelect.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

const scrollButtonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 25,
  backgroundColor: "white",
  color: violet.violet11,
  cursor: "default",
};

const SelectScrollUpButton = styled(
  RadixSelect.ScrollUpButton,
  scrollButtonStyles
);

const SelectScrollDownButton = styled(
  RadixSelect.ScrollDownButton,
  scrollButtonStyles
);

export type SelectItemValueType = {
  value: string;
  label: string;
  disabled?: boolean;
};

type SelectItemType =
  | { seperator: true }
  | {
      label?: string;
      items: SelectItemValueType[];
    };

export const Select = ({
  placeholder,
  groups,
  selectProps,
  value,
  onChange,
}: {
  placeholder?: string;
  groups: SelectItemType[];
  selectProps?: Omit<RadixSelect.SelectProps, "value" | "onValueChange">;
  value?: string;
  onChange?: (
    value: string,
    data?: SelectItemValueType & { group?: string }
  ) => void;
}) => (
  <RadixSelect.Root
    {...selectProps}
    value={value}
    onValueChange={(v) => {
      if (onChange) {
        for (var g = 0; g < groups.length; g++) {
          const group = groups[g];
          if ("items" in group) {
            const val = group.items.find((item) => item.value === v);
            if (val) {
              onChange(v, { group: group.label, ...val });
              break;
            }
          }
        }
      }
    }}
  >
    <SelectTrigger aria-label={placeholder}>
      <RadixSelect.Value placeholder={placeholder} />
      <SelectIcon>
        <ChevronDownIcon />
      </SelectIcon>
    </SelectTrigger>
    <RadixSelect.Portal>
      <SelectContent>
        <SelectScrollUpButton>
          <ChevronUpIcon />
        </SelectScrollUpButton>
        <SelectViewport>
          {groups.map((group, gIndex) => {
            return (
              <RadixSelect.Group key={gIndex}>
                {"items" in group && (
                  <React.Fragment>
                    <SelectLabel> {group.label || " "}</SelectLabel>
                    {group.items.map((item, index) => (
                      <SelectItem
                        key={index}
                        disabled={item.disabled}
                        value={item.value}
                      >
                        {item.label}
                      </SelectItem>
                    ))}
                  </React.Fragment>
                )}
                {"seperator" in group && <SelectSeparator />}
              </RadixSelect.Group>
            );
          })}
        </SelectViewport>
        <SelectScrollDownButton>
          <ChevronDownIcon />
        </SelectScrollDownButton>
      </SelectContent>
    </RadixSelect.Portal>
  </RadixSelect.Root>
);
