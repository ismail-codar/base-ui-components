import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";
import { DataTablePagination } from "./data-table-pagination";
import { Table } from "@tanstack/react-table";

// https://ui.shadcn.com/examples/tasks

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableToolbar } from "./data-table-toolbar";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("firstName", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: "lastName",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("age", {
    header: () => "Age",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("visits", {
    header: () => <span>Visits</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("progress", {
    header: "Profile Progress",
    footer: (info) => info.column.id,
  }),
];

const meta = {
  component: DataTable,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof DataTable>;

export default meta;
{
}

const useDataTableDefault = () => {
  const [data, setData] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return table;
};

export const Pagination: StoryObj<typeof meta> = {
  args: {} as any,
  render: () => {
    const table = useDataTableDefault();
    return <DataTablePagination table={table} />;
  },
};

export const ColumnHeader: StoryObj<typeof meta> = {
  args: {} as any,
  render: () => {
    const table = useDataTableDefault();
    return (
      <DataTableColumnHeader column={table.getAllColumns()[1]} title="Col1" />
    );
  },
};

export const DataTableToolbarDemo: StoryObj<typeof meta> = {
  args: {} as any,
  render: () => {
    const table = useDataTableDefault();
    return <DataTableToolbar table={table} />;
  },
};

export const DataTableDemo: StoryObj<typeof meta> = {
  args: {} as any,
  render: () => {
    const table = useDataTableDefault();
    console.log(table);
    return <DataTable columns={table.getAllColumns()} data={defaultData} />;
  },
};
