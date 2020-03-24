import React from "react";
import { Form, Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const layout = {
  labelCol: {
    span: 24
  },
  wrapperCol: {
    span: 24
  }
};

const { TextArea } = Input;

const normFile = e => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const Post = () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="upload"
        label="Upload Cover"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[
          {
            required: true,
            message: "Please input your Image Cover!"
          }
        ]}
        extra="Please input .jpg or .png only!"
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button>
            <UploadOutlined /> Click to upload
          </Button>
        </Upload>
      </Form.Item>

      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input your Title!"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Article"
        name="article"
        rules={[
          {
            required: true,
            message: "Please input your Article!"
          }
        ]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ marginRight: "1rem" }}
        >
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Post;
