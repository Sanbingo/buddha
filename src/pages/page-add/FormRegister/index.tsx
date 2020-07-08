import styles from "./index.less";
import React, { useState } from "react";
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Upload
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const { Option } = Select;
const { TextArea } = Input


const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "86",
      }}
      scrollToFirstError
    >
      <Form.Item
        name="name"
        label="页面名称"
        rules={[
          {
            required: true,
            message: "Please input your nickname!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="说明备注"
      >
        <TextArea />
      </Form.Item>
      <Form.Item name="image" label="示意图">
        <Upload listType="picture-card">点击上传</Upload>
      </Form.Item>
    </Form>
  );
};

export default () => (
  <div className={styles.container}>
    <h3>页面信息</h3>
    <div id="components-form-demo-register">
      <RegistrationForm />
    </div>
  </div>
);
