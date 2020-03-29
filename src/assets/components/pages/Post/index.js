import React from "react";
import { Form, Input, Button, Upload, Select, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { ACTION_ADD_ARTICLES } from "../../../stores/actions/articles";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 24
  },
  wrapperCol: {
    span: 24
  }
};

const { TextArea } = Input;

// const normFile = e => {
//   console.log("Upload event:", e);
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e && e.fileList;
// };

const Post = () => {
  const [form] = Form.useForm();
  const stateLoading = useSelector(state => state.loading);

  const dispatch = useDispatch();

  const onFinish = values => {
    console.log("Success:", values);
    dispatch(ACTION_ADD_ARTICLES(values)).then(e => onReset());
  };

  function normFile(input) {
    const file = input.file;
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M && input.fileList;
  }

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  const onReset = () => {
    console.log("reset woi");
    form.resetFields();
  };

  const props = {
    name: "logo",
    // action: "//jsonplaceholder.typicode.com/posts/",
    listType: "picture"
    // previewFile(file) {
    //   console.log("Your upload file:", file);
    //   // Your process logic. Here we just mock to the same file
    //   return fetch("https://desasehatg.herokuapp.com/api/address")
    //     .then(res => res.json())
    //     .then(({ thumbnail }) => thumbnail);
    // }
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true
      }}
      form={form}
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
        <Upload {...props}>
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

      <Form.Item name="tag" label="Tag" rules={[{ required: true }]}>
        <Select placeholder="Select Tag" allowClear>
          <Option value="prevention">prevention</Option>
          <Option value="treatment">treatment</Option>
          <Option value="facts">facts</Option>
        </Select>
      </Form.Item>

      <Form.Item name="category" label="Category" rules={[{ required: true }]}>
        <Select placeholder="Select Category" allowClear>
          <Option value="Asthma">Asthma</Option>
          <Option value="Diarrhea">Diarrhea</Option>
          <Option value="Diabetes Mellitus">Diabetes Mellitus</Option>
          <Option value="Dengue Fever">Dengue Fever</Option>
          <Option value="Poor Nutrition">Poor Nutrition</Option>
          <Option value="Hypertension">Hypertension</Option>
          <Option value="Coronary Heart Disease">Coronary Heart Disease</Option>
          <Option value="Malaria">Malaria</Option>
          <Option value="Tuberculosis">uberculosis</Option>
          <Option value="Covid19">Covid19</Option>
          <Option value="Dental Health Problem">Dental Health Problem</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ margin: "1rem 1rem 0 0" }}
          loading={stateLoading}
        >
          Submit
        </Button>
        <Button htmlType="button" onClick={() => onReset()}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Post;
