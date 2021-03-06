import React, { useEffect, useState } from "react";

import { Table, Input, Button, Tag, Modal } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  ACTION_GET_USERS,
  ACTION_DELETE_USERS,
  ACTION_ROLE_USERS,
  ACTION_ADD_USERS
} from "../../../stores/actions/users";
import ModalAddUser from "./Modal";

function Users(props) {
  const dispatch = useDispatch();
  const { confirm } = Modal;
  const stateLoading = useSelector(state => state.loading);

  // Filter Table Data
  const [state, setState] = useState({
    searchText: "",
    searchedColumn: ""
  });
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
      ...state,
      searchText: selectedKeys[0],
      searchedColumn: dataIndex
    });
  };

  const handleReset = clearFilters => {
    clearFilters();
    setState({ ...state, searchText: "" });
  };

  const handleChange = (pagination, filters, sorter) => {
    // console.log("Various parameters", pagination, filters, sorter);
    setState({ ...state, filteredInfo: filters, sortedInfo: sorter });
  };
  // End Filter Table Data

  // Table Data
  const stateUsers = useSelector(state => state.users.data);
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
      ...getColumnSearchProps("full_name")
      // render: text => <a href="#/">{text}</a>
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
      title: "address",
      dataIndex: "address",
      key: "address",
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: (a, b) => {
        return a.address.localeCompare(b.address);
      },
      sortDirections: ["ascend", "descend"],
      ...getColumnSearchProps("address")
    },
    {
      title: "gender",
      dataIndex: "gender",
      key: "gender",
      filters: [
        { text: "Male", value: "Male" },
        { text: "Female", value: "Female" }
      ],
      onFilter: (value, record) => record.gender.includes(value),
      sorter: (a, b) => {
        return a.gender.localeCompare(b.gender);
      },
      sortDirections: ["ascend", "descend"],
      render: tag => (
        <span>
          <Tag color={tag === "Male" ? "blue" : "magenta"} key={tag}>
            {tag.toUpperCase()}
          </Tag>
        </span>
      )
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
      onFilter: (value, record) => record.role === value,
      sorter: (a, b) => a.role.length - b.role.length,
      sortDirections: ["ascend", "descend"],
      render: tag => (
        <span>
          <Tag
            color={
              tag === "user"
                ? "green"
                : tag === "admin"
                ? "geekblue"
                : "volcano"
            }
            key={tag}
          >
            {tag}
          </Tag>
        </span>
      )
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          {record.role !== "superuser" && (
            <a
              href="#/"
              style={{ marginRight: 16 }}
              onClick={() =>
                roleUser(record._id, record.role === "user" ? "admin" : "user")
              }
            >
              Change Role
            </a>
          )}
          {record.role !== "superuser" && (
            <a
              href="#/"
              style={{ marginRight: 16 }}
              onClick={() => showConfirm(record._id)}
            >
              Delete
            </a>
          )}
        </span>
      )
    }
  ];
  // End Table Data

  // Action User
  const roleUser = (id, role) => {
    dispatch(ACTION_ROLE_USERS(id, role));
  };

  const addUser = (values, form, setVisible) => {
    dispatch(ACTION_ADD_USERS(values)).then(e => {
      setVisible(false);
      form.resetFields();
      setState({ ...state });
    });
  };

  function showConfirm(id) {
    confirm({
      title: "Are you sure want to delete this user?",
      icon: <ExclamationCircleOutlined />,
      content:
        "This user will be deleted immediately. You can't undo this action.",
      onOk() {
        return new Promise((resolve, reject) => {
          dispatch(ACTION_DELETE_USERS(id)).then(resolve);
        }).catch(() => console.log("Oops errors!"));
      },
      onCancel() {}
    });
  }
  // End Action User

  useEffect(() => {
    dispatch(ACTION_GET_USERS());
    return () => {
      console.log("Cleanup");
    };
  }, [dispatch]);

  return (
    <div>
      <ModalAddUser loading={stateLoading} addUser={addUser} />
      <Table
        columns={columns}
        dataSource={stateUsers}
        onChange={handleChange}
        loading={stateLoading}
        rowKey={i => i._id}
        expandable={{
          expandedRowRender: record => (
            <p style={{ margin: 0 }}>
              <b>Bio : </b> {record.bio}
            </p>
          ),
          rowExpandable: record => record.bio
        }}
      />
    </div>
  );
}

export default Users;
