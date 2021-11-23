import React from "react";

import { Form, Input, Select, DatePicker, Modal } from "antd";

const AddMedicalHistoryModal = ({ visible, onCancel, onSend }) => {
  const [form] = Form.useForm();
  const handleOnSend = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        onSend(values);
      })
      .catch((info) => {
        console.log("Validate Failed", info);
      });
  };
  const handleOnCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <Modal
      title="Add data to medical history"
      visible={visible}
      onOk={handleOnSend}
      onCancel={handleOnCancel}
    >
      <Form
        form={form}
        name="add-ill"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          name="onsetOfDeases"
          label="Onset of dease"
          rules={[{ required: true, message: `Please fill in the field` }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="nameOfDiagnosis"
          label="Diagnosis"
          rules={[{ required: true, message: `Please fill in the field` }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="placeOfTreatment"
          label="Place of treatment"
          rules={[{ required: true, message: `Please fill in the field` }]}
        >
          <Select>
            <Select.Option value="At home">At home</Select.Option>
            <Select.Option value="In the hospital">In the hospital</Select.Option>
            <Select.Option value="In the medical point">
              In the medical point
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="dayOfDischarge"
          label="Day of discharge"
          rules={[{ required: true, message: `Please fill in the field` }]}
        >
          <DatePicker />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddMedicalHistoryModal;
