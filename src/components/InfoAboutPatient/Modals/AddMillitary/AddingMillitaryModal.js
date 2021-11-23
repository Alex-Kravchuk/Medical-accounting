import React from "react";
import {
  officersRanks,
  sergeantsRanks,
  soldiersRanks,
} from "../../../../db/ranks";

import { Input, Select, Form, Modal } from "antd";

const { Option } = Select;

const AddingMillitaryModal = ({
  visible,
  onCancel,
  onSend,
  position,
  type,
}) => {
  const [form] = Form.useForm();

  const addingPosition = position === "top" ? "before" : "after";

  const defineTypeOfMillitarys = (type) => {
    if (type === "sergeants") return [...sergeantsRanks];
    if (type === "soldiers") return [...soldiersRanks];
    return [...officersRanks];
  };

  const handleOnSend = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        onSend(values, position);
      })
      .catch((info) => {
        console.log("Validate Failed", info);
      });
  };

  const handleOnCanel = () => {
    form.resetFields();
    onCancel();
  };

  const typeOfMillitarys = defineTypeOfMillitarys(type);

  return (
    <Modal
      title="Add the military to the list"
      visible={visible}
      onOk={handleOnSend}
      onCancel={handleOnCanel}
      okButtonProps={{
        form: "add-millitary",
        key: "submit",
        htmlType: "submit",
      }}
    >
      <p>
        Add the military to the list <strong>{addingPosition}</strong> this
        military
      </p>
      <Form form={form} name="add-millitary">
        <Form.Item
          name="rank"
          rules={[
            {
              required: true,
              message: `
          Please fill in the field`,
            },
          ]}
        >
          <Select placeholder={typeOfMillitarys[0]}>
            {typeOfMillitarys.map((item, index) => (
              <Option key={index} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: `
          Please fill in the field`,
            },
          ]}
        >
          <Input placeholder="John Fitzgerald Kennedy" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddingMillitaryModal;
