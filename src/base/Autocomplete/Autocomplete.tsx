import React, { FC, useEffect, useState } from "react";
import { useCombobox, useMultipleSelection, useSelect } from "downshift";
import { styled } from "@stitches/react";
import clsx from "clsx";
import { Input as DefaultInput } from "../Input/Input";

export interface ISelectItem<T extends unknown> {
  value: string | number;
  label: string;
  data?: T;
}

const AutoCompleteRoot = styled("div", {
  width: "100%",
});

const AutoCompleteContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const AutoCompleteLabel = styled("label", { width: "fit-content" });

const SelectedItemList = styled("div", {
  display: "inline-flex",
  padding: "0.375rem",
  backgroundColor: "#ffffff",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "0.5rem",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
});

const SelectedItem = styled("span", {
  paddingLeft: "0.25rem",
  paddingRight: "0.25rem",
  backgroundColor: "#F3F4F6",
  borderRadius: "0.375rem",
});

const RemoveSelectedItem = styled("span", {
  paddingLeft: "0.25rem",
  paddingRight: "0.25rem",
  cursor: "pointer",
});

const UserInput = styled("div", {
  display: "flex",
  flex: 1,
  position: "relative",
});

const TriggerButton = styled("button", {
  backgroundColor: "transparent",
  border: "none",
  zIndex: "1",
  marginLeft: "-32px",
  position: "absolute",
  right: 10,
  top: 8,
});

const ListContainer = styled("ul", {
  overflow: "auto",
  position: "absolute",
  zIndex: "1",
  width: "100%",
  padding: "0",
  backgroundColor: "#ffffff",
  maxHeight: "20rem",
  boxShadow:
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
});

const ListItem = styled("li", {
  display: "flex",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
  flexDirection: "column",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
});

export const Autocomplete = <T extends unknown>({
  multiple,
  data,
  initialSelectedItems,
  value,
  className,
  onChange,
  placeholder,
  label,
  loading,
  Input,
  Wrapper,
  Trigger,
  onSearch,
  filter,
}: {
  multiple?: boolean;
  data: ISelectItem<T>[];
  initialSelectedItems?: (ISelectItem<T> | null | undefined)[];
  value?: (string | number)[];
  onChange?: (items: (ISelectItem<T> | null | undefined)[]) => void;
  placeholder?: string;
  label?: string;
  loading?: boolean;
  Input?: React.FC<any>;
  Wrapper?: React.FC<ISelectItem<T>>;
  Trigger: React.FC<{ loading?: boolean }>;
  className?: string;
  onSearch?: (text: string) => void;
  filter?: (item: ISelectItem<T>, searchString: string) => boolean;
}) => {
  const [items, setItems] = React.useState(data);
  const [selectedItems, setSelectedItems] = React.useState(
    initialSelectedItems || []
  );
  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
  } = useMultipleSelection({
    selectedItems,
    onStateChange({ selectedItems: newSelectedItems, type }) {
      switch (type) {
        case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownBackspace:
        case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
        case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
        case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
          setSelectedItems(newSelectedItems || []);
          newSelectedItems && onChange?.(newSelectedItems);
          break;
        default:
          break;
      }
    },
  });
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
    inputValue,
    setInputValue,
    closeMenu,
  } = useCombobox({
    items,
    onInputValueChange({ inputValue }) {
      setItems(
        filter ? data.filter((item) => filter(item, inputValue || "")) : data
      );
    },
    itemToString(item) {
      return item ? item.label : "";
    },
    // defaultHighlightedIndex: 0, // after selection, highlight the first item.
    // selectedItem: null,
    // stateReducer(state, actionAndChanges) {
    //   const { changes, type } = actionAndChanges;

    //   switch (type) {
    //     case useCombobox.stateChangeTypes.InputKeyDownEnter:
    //     case useCombobox.stateChangeTypes.ItemClick:
    //     case useCombobox.stateChangeTypes.InputBlur:
    //       return {
    //         ...changes,
    //         ...(changes.selectedItem && {
    //           isOpen: true,
    //           highlightedIndex: 0,
    //         }),
    //       };
    //     default:
    //       return changes;
    //   }
    // },
    onStateChange({
      inputValue: newInputValue,
      type,
      selectedItem: newSelectedItem,
    }) {
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          const newSelectedItems = multiple
            ? [...selectedItems!, newSelectedItem!]
            : [newSelectedItem];
          setSelectedItems(newSelectedItems);
          newInputValue && onChange?.(newSelectedItems);
          if (!multiple) {
            closeMenu();
          }
          break;

        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(newInputValue!);

          break;
        default:
          break;
      }
    },
  });

  useEffect(() => {
    const _selectedItems: ISelectItem<T>[] = [];
    value?.forEach((val) => {
      const _selectedItem = data.find((item) => item.value === val);
      if (_selectedItem) {
        _selectedItems.push(_selectedItem);
      }
    });
    if (!multiple && _selectedItems.length) {
      setInputValue(_selectedItems[0].label);
    }
    setSelectedItems(_selectedItems);
    onChange?.(_selectedItems);
  }, [value]);

  useEffect(() => {
    onSearch?.(inputValue);
  }, [inputValue]);

  const inputProps = {
    placeholder,
    css: { width: "100%", minWidth: "100px" },
    ...getInputProps(getDropdownProps({ preventKeyAction: isOpen })),
  };

  return (
    <AutoCompleteRoot className={className}>
      <AutoCompleteContainer>
        <AutoCompleteLabel {...getLabelProps()}>{label}</AutoCompleteLabel>
        <SelectedItemList>
          {multiple &&
            selectedItems?.map(function renderSelectedItem(
              selectedItemForRender,
              index
            ) {
              return (
                <SelectedItem
                  key={`selected-item-${index}`}
                  {...getSelectedItemProps({
                    selectedItem: selectedItemForRender,
                    index,
                  })}
                >
                  {selectedItemForRender?.label}x
                  <RemoveSelectedItem
                    onClick={(e) => {
                      e.stopPropagation();
                      removeSelectedItem(selectedItemForRender);
                    }}
                  >
                    &#10005;
                  </RemoveSelectedItem>
                </SelectedItem>
              );
            })}
          <UserInput>
            {Input ? (
              <Input {...inputProps} />
            ) : (
              <DefaultInput {...inputProps} />
            )}
            <TriggerButton
              aria-label="toggle menu"
              type="button"
              {...getToggleButtonProps()}
            >
              <Trigger loading={loading} />
            </TriggerButton>
          </UserInput>
        </SelectedItemList>
      </AutoCompleteContainer>
      <ListContainer {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <ListItem
              css={{
                ...(highlightedIndex === index
                  ? { backgroundColor: "#93C5FD" }
                  : undefined),
                ...(selectedItem === item ? { fontWeight: "700" } : undefined),
              }}
              key={`${item.value}${index}`}
              {...getItemProps({ item, index })}
            >
              {Wrapper ? <Wrapper {...item} /> : item.label}
            </ListItem>
          ))}
      </ListContainer>
    </AutoCompleteRoot>
  );
};
