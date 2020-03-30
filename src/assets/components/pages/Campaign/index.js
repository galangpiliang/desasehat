import React, { useEffect, useState } from "react";

import { Table, Input, Button, Tag, Modal } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  ACTION_GET_CAMPAIGN,
  ACTION_DELETE_CAMPAIGN,
  ACTION_VERIFY_CAMPAIGN
} from "../../../stores/actions/campaign";
// import ModalAddUser from "./Modal";

function Campaign(props) {
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
  const stateCampaign = useSelector(state => state.campaign.data);
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      ellipsis: true,
      onFilter: (value, record) => record.title.indexOf(value) === 0,
      sorter: (a, b) => {
        return a.title.localeCompare(b.title);
      },
      sortDirections: ["ascend", "descend"],
      ...getColumnSearchProps("title")
    },
    // {
    //   title: "Initiator",
    //   dataIndex: "initiator",
    //   key: "initiator",
    //   onFilter: (value, record) =>
    //     record.initiator.full_name.indexOf(value) === 0,
    //   sorter: (a, b) => {
    //     return a.initiator.full_name.localeCompare(b.initiator.full_name);
    //   },
    //   sortDirections: ["ascend", "descend"],
    //   ...getColumnSearchProps("initiator"),
    //   render: text => text.full_name
    // },
    {
      title: "Target",
      dataIndex: "total_fund",
      key: "total_fund",
      onFilter: (value, record) => record.total_fund.indexOf(value) === 0,
      sorter: (a, b) => {
        return a.total_fund - b.total_fund;
      },
      sortDirections: ["ascend", "descend"],
      ...getColumnSearchProps("total_fund"),
      render: text => text.toLocaleString()
    },
    {
      title: "Donation",
      dataIndex: "current_fund",
      key: "current_fund",
      onFilter: (value, record) => record.current_fund.indexOf(value) === 0,
      sorter: (a, b) => {
        return a.current_fund - b.current_fund;
      },
      sortDirections: ["ascend", "descend"],
      ...getColumnSearchProps("current_fund"),
      render: text => text.toLocaleString()
    },
    {
      title: "Due Date",
      dataIndex: "due_date",
      key: "due_date",
      onFilter: (value, record) => record.due_date.indexOf(value) === 0,
      sorter: (a, b) => {
        return new Date(a.due_date) - new Date(b.due_date);
      },
      sortDirections: ["ascend", "descend"],
      ...getColumnSearchProps("due_date"),
      render: text => new Date(text).toLocaleDateString()
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status",
      ellipsis: true,
      filters: [
        { text: "Pending", value: "pending" },
        { text: "Verified", value: "verified" },
        { text: "Reject", value: "reject" }
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
      sorter: (a, b) => {
        return a.status.localeCompare(b.status);
      },
      sortDirections: ["ascend", "descend"],
      render: status => (
        <span>
          <Tag
            color={
              status === "pending"
                ? "green"
                : status === "verified"
                ? "geekblue"
                : "volcano"
            }
            key={status}
          >
            {status}
          </Tag>
        </span>
      )
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          {record.status !== "verified" && (
            <a
              href="#/"
              style={{ marginRight: 16 }}
              onClick={() => dispatch(ACTION_VERIFY_CAMPAIGN(record._id, true))}
            >
              Verify
            </a>
          )}
          {record.status === "pending" && (
            <a
              href="#/"
              style={{ marginRight: 16 }}
              onClick={() =>
                dispatch(ACTION_VERIFY_CAMPAIGN(record._id, false))
              }
            >
              Reject
            </a>
          )}
          {record.status !== "pending" && (
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

  // Action Campaign
  function showConfirm(id) {
    confirm({
      title: "Are you sure want to delete this campaign?",
      icon: <ExclamationCircleOutlined />,
      content:
        "This campaign will be deleted immediately. You can't undo this action.",
      onOk() {
        return new Promise((resolve, reject) => {
          dispatch(ACTION_DELETE_CAMPAIGN(id)).then(resolve);
        }).catch(() => console.log("Oops errors!"));
      },
      onCancel() {}
    });
  }
  // End Action Campaign

  useEffect(() => {
    dispatch(ACTION_GET_CAMPAIGN());
    return () => {
      console.log("Cleanup");
    };
  }, [dispatch]);

  return (
    <div>
      {/* <ModalAddUser loading={stateLoading} addUser={addUser} /> */}
      <Table
        columns={columns}
        dataSource={stateCampaign}
        onChange={handleChange}
        loading={stateLoading}
        rowKey={i => i._id}
        expandable={{
          expandedRowRender: record => (
            <p style={{ margin: 0 }}>
              <h3>{record.title}</h3>
              {record.description}
            </p>
          ),
          rowExpandable: record => record.description
        }}
      />
    </div>
  );
}

export default Campaign;
