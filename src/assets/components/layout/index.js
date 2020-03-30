import React from "react";
import { Layout, Menu, message, Dropdown } from "antd";
import {
  // HomeOutlined,
  UserOutlined,
  TeamOutlined,
  FormOutlined,
  DashboardOutlined,
  AlertOutlined,
  CopyOutlined,
  PoweroffOutlined
} from "@ant-design/icons";
import "./PageLayout.less";
import { Link } from "react-router-dom";
// import { Link, Switch, Route, useHistory } from "react-router-dom";
import { ACTION_SIGN_OUT } from "../../stores/actions/auth";
import { useDispatch } from "react-redux";

const PageLayout = props => {
  const { Header, Content, Footer, Sider } = Layout;
  // const history = useHistory();
  const dispatch = useDispatch();

  let title = props.location.pathname;
  let indexPage = "1";
  const dashboardPath = "/dashboard";
  const userPath = "/users";
  // const villagePath = "/village";
  const postPath = "/post";
  const campaignPath = "/campaign";
  const articlesPath = "/articles";

  console.log("props.location.pathname", props.location.pathname);

  switch (title) {
    case userPath:
      title = "Users";
      indexPage = "2";
      break;
    // case villagePath:
    //   title = "Village";
    //   indexPage = "3";
    //   break;
    case postPath:
      title = "Post New Article";
      indexPage = "4";
      break;
    case campaignPath:
      title = "Campaign";
      indexPage = "5";
      break;
    case articlesPath:
      title = "Article";
      indexPage = "6";
      break;
    default:
      title = "Dashboard";
      break;
  }

  const doSignout = () => {
    console.log("signout triggered");
    dispatch(ACTION_SIGN_OUT());
  };

  function handleMenuClick(e) {
    if (e.key === "2") {
      doSignout();
    } else {
      message.info("Profile page is not finish yet || key: " + e.key);
    }
    console.log("click", e);
  }

  function handleProfileClick(e) {
    message.info("Hello " + props.user.full_name + ", How are you ? ");
    console.log("click", e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      {/* <Menu.Item key="1">
        <UserOutlined />
        Profile
      </Menu.Item> */}
      <Menu.Item key="2">
        <PoweroffOutlined />
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <Layout className="Layout">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo">Desa Sehat</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={indexPage}>
          <Menu.Item key="1">
            <DashboardOutlined />
            <Link to={dashboardPath}>
              <span className="nav-text">Dashboard</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <TeamOutlined />
            <Link to={userPath}>
              <span className="nav-text">Users</span>
            </Link>
          </Menu.Item>
          {/* <Menu.Item key="3">
            <HomeOutlined />
            <Link to={villagePath}>
              <span className="nav-text">Village</span>
            </Link>
          </Menu.Item> */}
          <Menu.Item key="4">
            <FormOutlined />
            <Link to={postPath}>
              <span className="nav-text">Post</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <AlertOutlined />
            <Link to={campaignPath}>
              <span className="nav-text">Campaign</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <CopyOutlined />
            <Link to={articlesPath}>
              <span className="nav-text">Articles</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ display: "flex" }}
        >
          <h1>{title}</h1>
          <Dropdown.Button
            overlay={menu}
            icon={<UserOutlined />}
            onClick={handleProfileClick}
          >
            {props.user.full_name}
          </Dropdown.Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {/* Content */}
            {props.children}
            {/* End Content */}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Desa Sehat ©2020 Created by Team C - Glints Academy
        </Footer>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
