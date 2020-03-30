import React, { useEffect, useState } from "react";

import { Table, Input, Button, Tag, Modal } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  ACTION_GET_ARTICLES,
  ACTION_DELETE_ARTICLES
} from "../../../stores/actions/articles";
// import ModalAddUser from "./Modal";

function Articles(props) {
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
  const stateArticles = useSelector(state => state.articles.data);
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
    {
      title: "tag",
      dataIndex: "tag",
      key: "tag",
      ellipsis: true,
      filters: [
        { text: "Facts", value: "facts" },
        { text: "Prevention", value: "prevention" },
        { text: "Treatment", value: "treatment" }
      ],
      onFilter: (value, record) => record.tag.indexOf(value) === 0,
      sorter: (a, b) => {
        return a.tag.localeCompare(b.tag);
      },
      sortDirections: ["ascend", "descend"],
      render: tag => (
        <span>
          <Tag
            color={
              tag === "facts"
                ? "green"
                : tag === "prevention"
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
      title: "disease_category",
      dataIndex: "disease_category",
      key: "disease_category",
      ellipsis: true,
      onFilter: (value, record) => record.disease_category.indexOf(value) === 0,
      sorter: (a, b) => {
        return a.disease_category.localeCompare(b.disease_category);
      },
      sortDirections: ["ascend", "descend"],
      ...getColumnSearchProps("disease_category"),
      render: tag => (
        <span>
          <Tag
            color={
              tag === "Asthma"
                ? "#ff6600"
                : tag === "Diarrhea"
                ? "#ff9900"
                : tag === "Diabetes Mellitus"
                ? "#ffcc00"
                : tag === "Dengue Fever"
                ? "#00b467"
                : tag === "Poor Nutrition"
                ? "#009899"
                : tag === "Hypertension"
                ? "#0033cc"
                : tag === "Coronary Heart Disease"
                ? "#330099"
                : tag === "Malaria"
                ? "#670099"
                : tag === "Stroke"
                ? "#cc0098"
                : "#e60065"
            }
            key={tag}
          >
            {tag}
          </Tag>
        </span>
      )
    },
    {
      title: "Publish",
      dataIndex: "createdAt",
      key: "createdAt",
      onFilter: (value, record) => record.createdAt.indexOf(value) === 0,
      sorter: (a, b) => {
        return new Date(a.createdAt) - new Date(b.createdAt);
      },
      sortDirections: ["ascend", "descend"],
      ...getColumnSearchProps("createdAt"),
      render: text => new Date(text).toLocaleDateString()
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <a
            href="#/"
            style={{ marginRight: 16 }}
            onClick={() => showConfirm(record._id)}
          >
            Delete
          </a>
        </span>
      )
    }
  ];
  // End Table Data

  // Action Articles
  function showConfirm(id) {
    confirm({
      title: "Are you sure want to delete this articles?",
      icon: <ExclamationCircleOutlined />,
      content:
        "This articles will be deleted immediately. You can't undo this action.",
      onOk() {
        return new Promise((resolve, reject) => {
          dispatch(ACTION_DELETE_ARTICLES(id)).then(resolve);
        }).catch(() => console.log("Oops errors!"));
      },
      onCancel() {}
    });
  }
  // End Action Articles

  useEffect(() => {
    dispatch(ACTION_GET_ARTICLES());
    return () => {
      console.log("Cleanup");
    };
  }, [dispatch]);

  return (
    <div>
      {/* <ModalAddUser loading={stateLoading} addUser={addUser} /> */}
      <Table
        columns={columns}
        dataSource={stateArticles}
        onChange={handleChange}
        loading={stateLoading}
        rowKey={i => i._id}
        expandable={{
          expandedRowRender: record => (
            <p style={{ margin: 0 }}>
              <h3>{record.title}</h3>
              {record.body}
            </p>
          ),
          rowExpandable: record => record.body
        }}
      />
    </div>
  );
}

export default Articles;
