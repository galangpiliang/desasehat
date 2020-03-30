import React from "react";
// import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { MailOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";
import "./Signin.less";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { ACTION_SIGN_IN } from "../../../stores/actions/auth";

export default function Signin(props) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);

  const onFinish = values => {
    console.log("Received values of form: ", values);
    dispatch(ACTION_SIGN_IN(values));
  };

  return (
    <div className="Signin">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <div className="logo"></div>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!"
            },
            {
              required: true,
              message: "Please input your E-mail!"
            }
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="E-mail"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="/#">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            icon={<LoginOutlined />}
            loading={loading}
          >
            SIGN IN
          </Button>
          {/* Or <Link to="/signup">register now!</Link> */}
        </Form.Item>
      </Form>
    </div>
  );
}
