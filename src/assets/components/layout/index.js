import React from "react";
import { Layout, Menu, Avatar } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  TeamOutlined,
  FormOutlined,
  DashboardOutlined,
  AlertOutlined,
  CopyOutlined
} from "@ant-design/icons";
import "./PageLayout.scss";
import { Link, Switch, Route } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const PageLayout = props => {
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1">
            <DashboardOutlined />
            <Link to="/">
              <span className="nav-text">Dashboard</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <TeamOutlined />
            <Link to="/users">
              <span className="nav-text">Users</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <HomeOutlined />
            <Link to="/village">
              <span className="nav-text">Village</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <FormOutlined />
            <Link to="/post">
              <span className="nav-text">Post</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <AlertOutlined />
            <Link to="/campaign">
              <span className="nav-text">Campaign</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <CopyOutlined />
            <Link to="/pages">
              <span className="nav-text">Pages</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ display: "flex" }}
        >
          <h1>
            <Switch>
              <Route path="/users">Users</Route>
              <Route path="/village">Village</Route>
              <Route path="/post">Post</Route>
              <Route path="/campaign">Campaign</Route>
              <Route path="/pages">Pages</Route>
              <Route path="/">Dashboard</Route>
            </Switch>
          </h1>
          <Avatar icon={<UserOutlined />} />
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
