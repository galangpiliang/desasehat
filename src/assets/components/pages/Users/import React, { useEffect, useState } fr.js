import React, { useEffect, useState } from "react";

import { Table, Input, Button } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { ACTION_GET_USERS } from "../../../stores/actions/users";

function Users(props) {
  const dispatch = useDispatch();
  const stateUsers = useSelector(state => state.users);
  console.log(Array.isArray(stateUsers));
  const tableData = stateUsers.map(user => ({ ...user, key: user._id }));

  const [state, setState] = useState({
    searchText: "",
    searchedColumn: ""
  });

  let { sortedInfo, filteredInfo } = state;
  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};
  let searchInput = false;

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select());
      }
    },
    render: text =>
      state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      )
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex
    });
  };

  const handleReset = clearFilters => {
    clearFilters();
    setState({ searchText: "" });
  };

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  };

  const columns = [
    {
      title: "Full Name",
      dataIndex: "full_name",
      key: "full_name",
      onFilter: (value, record) => record.full_name.indexOf(value) === 0,
      sorter: (a, b) => {
        return a.full_name.localeCompare(b.full_name);
      },
      sortDirections: ["ascend", "descend"],
      ...getColumnSearchProps("full_name"),
      render: text => <a href="#/">{text}</a>
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
      onFilter: (value, record) => record.email.indexOf(value) === 0,
      sorter: (a, b) => {
        return a.email.localeCompare(b.email);
      },
      sortDirections: ["ascend", "descend"],
      ...getColumnSearchProps("email")
    },
    {
      title: "gender",
      dataIndex: "gender",
      key: "gender",
      filters: [
        { text: "Male", value: "Male" },
        { text: "Female", value: "Female" }
      ],
      filteredValue: filteredInfo.gender || null,
      onFilter: (value, record) => record.gender.includes(value),
      sorter: (a, b) => {
        return a.gender.localeCompare(b.gender);
      },
      sortDirections: ["ascend", "descend"]
    },
    {
      title: "role",
      dataIndex: "role",
      key: "role",
      filters: [
        { text: "superuser", value: "superuser" },
        { text: "admin", value: "admin" },
        { text: "user", value: "user" }
      ],
      filteredValue: filteredInfo.role || null,
      onFilter: (value, record) => record.role === value,
      sorter: (a, b) => a.role.length - b.role.length,
      sortDirections: ["ascend", "descend"]
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <a href="#/" style={{ marginRight: 16 }}>
            Invite {record.name}
          </a>
          <a href="#/">Delete</a>
        </span>
      )
    }
  ];

  useEffect(() => {
    dispatch(ACTION_GET_USERS());
    return () => {
      console.log("Cleanup");
    };
  }, [dispatch]);

  return (
    <div>
      {console.log(props)}
      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </div>
  );
}

export default Users;
