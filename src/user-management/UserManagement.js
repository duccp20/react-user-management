import React, { useState } from "react";
import FormUser from "./FormUser";
import Search from "./Search";
import TableUser from "./TableUser";

//column table
const columns = [
  { label: "Name", accessor: "name" },
  { label: "Gender", accessor: "gender" },
  { label: "Bio", accessor: "bio" },
  { label: "Email", accessor: "email" },
  { label: "Status", accessor: "status" },
];

const UserManagement = () => {
  //state
  const [tableData, setTableData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [formInput, setFormInput] = useState({
    name: "",
    gender: "",
    email: "",
    bio: "",
    status: "pending",
  });
  const [searchInput, setSearchInput] = useState("");

  //handle
  function onChange(e) {
    const name = e.target.name;
    setFormInput({
      ...formInput,
      [name]: e.target.value,
    });
  }

  function handleSorting(sortField, sortOrder) {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, gender, email, bio, status } = formInput;
    if (!name || !gender || !email || !bio || !status) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    } 
    setTableData([...tableData, formInput]);
    setFilterData([...tableData, formInput]);
  }

  function handleSearchInput(e) {
    let value = e.target.value;
    console.log("value", value);
    setSearchInput(value);
    dataQueried(value);
  }

  function dataQueried(input) {
    // const dataQueried = [...tableData].filter((data) => {
    //   if (input === '') return data;
    //   if (data.name.toLowerCase().includes(input.toLowerCase())) return data;
    // });
    const dataQueried = [...tableData].filter((data) => data.name.toLowerCase().includes(input.toLowerCase()));
    input === "" ? setTableData(filterData) : setTableData(dataQueried);
  }

  return (
    <>
      <div className="form-user">
        <FormUser
          formInput={formInput}
          handleSubmit={handleSubmit}
          onChange={onChange}
        />
      </div>
      <div className="search">
        <Search searchInput={searchInput} onChange={handleSearchInput}></Search>
      </div>

      <div className="table-user">
        <TableUser
          tableData={tableData}
          columns={columns}
          handleSorting={handleSorting}
        />
      </div>
    </>
  );
};

export default UserManagement;
