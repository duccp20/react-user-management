import React from "react";
import Table from "react-bootstrap/Table";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const TableUser = ({ tableData, columns, handleSorting }) => {
  return (
    <Table striped bordered hover>
      <TableHead columns={columns} handleSorting={handleSorting}></TableHead>
      <TableBody tableData={tableData} columns={columns}></TableBody>
    </Table>
  );
};

export default TableUser;
