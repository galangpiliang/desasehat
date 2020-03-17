import React from "react";
import { Card, Button, Typography } from "antd";
import {
  HomeOutlined,
  TeamOutlined,
  FormOutlined,
  AlertOutlined,
  CopyOutlined
} from "@ant-design/icons";
import "./Dashboard.scss";
import { useHistory } from "react-router-dom";

const { Title } = Typography;

export default function Dashboard() {
  const history = useHistory();
  const redirect = url => {
    history.push(url);
  };
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
          <Title>105</Title>
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
          <Title>32</Title>
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
          <Title>Create</Title>
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
          <Title>472</Title>
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
          <Title>12</Title>
          <Button type="primary" onClick={() => redirect("pages")}>
            More Detail
          </Button>
        </Card>
      </div>
    </div>
  );
}
