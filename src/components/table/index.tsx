"use client";
import React from "react";
import {
  Table as NextTable,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  TableProps as NextTableProps,
  Pagination,
} from "@nextui-org/react";

// Define the Column type
export type Column = {
  key: string;
  label: string;
};

// Define the TableProps type with generics
export type TableProps<T> = {
  columns: Column[];
  data: T[];
  renderCell: (item: T, columnKey: React.Key) => React.ReactNode;
  tableProps?: NextTableProps;
};

export function Table<T>({
  columns,
  data,
  renderCell,
  tableProps,
}: TableProps<T>) {
  const itemsPerPage = 40;
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get the items for the current page
  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <NextTable
        isHeaderSticky
        aria-label="Example table with pagination"
        {...tableProps} // Additional props for the table
      >
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody
          items={currentItems} // Items to be displayed in the table
          loadingContent={<Spinner color="white" />} // Content to display while loading
        >
          {(item) => (
            <TableRow key={(item as any).id}>
              {columns.map((column) => (
                <TableCell key={column.key}>
                  {renderCell(item, column.key)}
                </TableCell>
              ))}
            </TableRow>
          )}
        </TableBody>
      </NextTable>
      {/* Pagination Controls */}
      <Pagination
        className="max-md:px-10 mt-2"
        page={currentPage}
        onChange={handlePageChange}
        showControls
        total={totalPages}
        initialPage={1}
      />
    </>
  );
}
