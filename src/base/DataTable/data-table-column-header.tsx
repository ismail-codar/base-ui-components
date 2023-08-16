import {
  ArrowDownIcon,
  ArrowUpIcon,
  CaretSortIcon,
  EyeNoneIcon,
} from "@radix-ui/react-icons";
import { Column } from "@tanstack/react-table";
import { Button } from "../Button/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import { styled } from "@stitches/react";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={clsx(className)}>{title}</div>;
  }

  return (
    <DataTableColumnRoot>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="small"
            css={{ marginLeft: "-0.75rem", height: "2rem" }}
          >
            <span>{title}</span>
            <IconSelectedContainer>
              {column.getIsSorted() === "desc" ? (
                <ArrowDownIcon />
              ) : column.getIsSorted() === "asc" ? (
                <ArrowUpIcon />
              ) : (
                <CaretSortIcon />
              )}
            </IconSelectedContainer>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <StyledDropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ArrowUpIcon />
            Asc
          </StyledDropdownMenuItem>
          <StyledDropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ArrowDownIcon />
            Desc
          </StyledDropdownMenuItem>
          <DropdownMenuSeparator />
          <StyledDropdownMenuItem
            onClick={() => column.toggleVisibility(false)}
          >
            <EyeNoneIcon />
            Hide
          </StyledDropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </DataTableColumnRoot>
  );
}

const DataTableColumnRoot = styled("div", {
  display: "flex",
  marginLeft: "0.5rem",
  alignItems: "center",
});
const IconSelectedContainer = styled("div", {
  marginLeft: "0.5rem",
  width: "1rem",
  height: "1rem",
});
const IconContainer = styled("div", {
  marginRight: "0.5rem",
  width: "0.875rem",
  height: "0.875rem",
});

const StyledDropdownMenuItem = styled(DropdownMenuItem, {
  display: "flex",
  alignItems: "center",
  padding: 8,
});
