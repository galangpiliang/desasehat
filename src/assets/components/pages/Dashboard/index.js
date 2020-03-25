import React, { useEffect } from "react";
import { Card, Button, Typography, Spin } from "antd";
import {
  HomeOutlined,
  TeamOutlined,
  FormOutlined,
  AlertOutlined,
  CopyOutlined
} from "@ant-design/icons";
import "./Dashboard.scss";
import { useHistory } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { ACTION_GET_DASHBOARD } from "../../../stores/actions/dashboard";

const { Title } = Typography;

export default function Dashboard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const stateLoading = useSelector(state => state.loading);
  const stateDashboard = useSelector(state => state.dashboard);

  const redirect = url => {
    history.push(url);
  };

  useEffect(() => {
    dispatch(ACTION_GET_DASHBOARD());
    return () => {
      console.log("Cleanup");
    };
  }, [dispatch]);
  return (
    <div className="Dashboard">
      <div className="site-card-border-less-wrapper">
        <Card
          title={
            <span>
              <TeamOutlined /> &emsp; Users
            </span>
          }
          bordered={false}
          style={{ width: 300 }}
        >
          <Title> {stateLoading ? <Spin /> : stateDashboard.user}</Title>
          <Button type="primary" onClick={() => redirect("users")}>
            More Detail
          </Button>
        </Card>
      </div>
      <div className="site-card-border-less-wrapper">
        <Card
          title={
            <span>
              <HomeOutlined /> &emsp; Village
            </span>
          }
          bordered={false}
          style={{ width: 300 }}
        >
          <Title> {stateLoading ? <Spin /> : stateDashboard.village}</Title>
          <Button type="primary" onClick={() => redirect("village")}>
            More Detail
          </Button>
        </Card>
      </div>
      <div className="site-card-border-less-wrapper">
        <Card
          title={
            <span>
              <FormOutlined /> &emsp; Post
            </span>
          }
          bordered={false}
          style={{ width: 300 }}
        >
          <Title> {stateLoading ? <Spin /> : "Create"}</Title>
          <Button type="primary" onClick={() => redirect("post")}>
            New Post
          </Button>
        </Card>
      </div>
      <div className="site-card-border-less-wrapper">
        <Card
          title={
            <span>
              <AlertOutlined /> &emsp; Campaign
            </span>
          }
          bordered={false}
          style={{ width: 300 }}
        >
          <Title> {stateLoading ? <Spin /> : stateDashboard.campaign}</Title>
          <Button type="primary" onClick={() => redirect("campaign")}>
            More Detail
          </Button>
        </Card>
      </div>
      <div className="site-card-border-less-wrapper">
        <Card
          title={
            <span>
              <CopyOutlined /> &emsp; Pages
            </span>
          }
          bordered={false}
          style={{ width: 300 }}
        >
          <Title> {stateLoading ? <Spin /> : stateDashboard.post}</Title>
          <Button type="primary" onClick={() => redirect("pages")}>
            More Detail
          </Button>
        </Card>
      </div>
    </div>
  );
}
