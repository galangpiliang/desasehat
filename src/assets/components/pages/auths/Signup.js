import React from "react";
import { Form, Input, Select, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./Signup.scss";

const formItemLayout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

const { Option } = Select;

export default function Signup() {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log("Received values of form: ", values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className="Signup">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        className="register-form"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          label="Fullname"
          name="fullname"
          hasFeedback
          rules={[
            { min: 3, required: true, message: "Please input your Fullname!" }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          hasFeedback
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
          <Input />
        </Form.Item>

        <Form.Item
          label="Bio"
          name="bio"
          hasFeedback
          rules={[
            { min: 5, required: true, message: "Please input your Bio!" }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select placeholder="Please select your Gender!" allowClear>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          hasFeedback
          rules={[
            { min: 5, required: true, message: "Please input your Address!" }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              min: 3,
              message: "Please input your password!"
            }
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!"
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              }
            })
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Row col={24}>
            <Col span={11}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Col>
            <Col span={11} offset={2}>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </Col>
          </Row>
          Or <Link to="/signin">Back to Login</Link>
        </Form.Item>
      </Form>
    </div>
  );
}
