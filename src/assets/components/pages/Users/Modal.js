import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Input, Radio, Cascader } from "antd";

// Redux
import { useDispatch } from "react-redux";
import {
  ACTION_GET_ADDRESS,
  ACTION_GET_ADDRESS_DISTRICT
} from "../../../stores/actions/address";

const formItemLayout = {
  labelCol: {
    span: 5
  },
  wrapperCol: {
    span: 19
  }
};

const CollectionCreateForm = ({ visible, onCreate, onCancel, loading }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    options: []
  });
  // const stateAddress = useSelector(state => state.address);

  const onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };

  const loadData = selectedOptions => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    console.log("targetOption.loading", targetOption);

    dispatch(ACTION_GET_ADDRESS_DISTRICT(targetOption.value)).then(res => {
      targetOption.loading = false;
      const district = res.data.data.map(district => {
        return targetOption.value.length > 4
          ? {
              value: district.nama,
              label: district.nama
            }
          : {
              value: district.id,
              label: district.nama,
              isLeaf: false
            };
      });

      targetOption.children = district;
      setState({
        options: [...state.options]
      });
    });
  };
  useEffect(() => {
    dispatch(ACTION_GET_ADDRESS()).then(res => {
      console.log(res);
      const provinces = res.data.data.map(province => {
        return {
          value: province.id,
          label: province.nama,
          isLeaf: false
        };
      });
      setState({
        options: [...provinces]
      });
    });
    return () => {
      console.log("Cleanup");
    };
  }, [dispatch]);
  return (
    <Modal
      visible={visible}
      confirmLoading={loading}
      title="Create a new User"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            onCreate(values, form);
          })
          .catch(info => {
            // console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        {...formItemLayout}
        form={form}
        layout="horizontal"
        name="form_in_modal"
        initialValues={{
          modifier: "public"
        }}
      >
        <Form.Item
          label="Full Name"
          name="full_name"
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
          name="gender"
          label="Gender"
          className="collection-create-form_last-form-item"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Radio.Group>
            <Radio value="Male">Male</Radio>
            <Radio value="Female">Female</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          hasFeedback
          rules={[
            {
              type: "array",
              required: true,
              message: "Please select your address!"
            }
          ]}
        >
          <Cascader
            options={state.options}
            loadData={loadData}
            onChange={onChange}
          />
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
          name="password_confirmation"
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
      </Form>
    </Modal>
  );
};

const ModalAddUser = props => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values, form) => {
    values.address = values.address[values.address.length - 1];
    console.log("values", values);
    console.log("form", form);
    props.addUser(values, form, setVisible);
  };

  return (
    <div>
      <Button
        type="primary"
        style={{ marginBottom: "1rem" }}
        onClick={() => {
          setVisible(true);
        }}
      >
        New User
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        loading={props.loading}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalAddUser;
