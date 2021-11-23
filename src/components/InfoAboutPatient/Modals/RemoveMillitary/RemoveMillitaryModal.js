import React from "react";

import { Modal } from "antd";

const RemoveMillitaryModal = ({ visible, onSend, onCancel }) => {
  return (
    <Modal
      title="Remove military"
      visible={visible}
      onOk={onSend}
      onCancel={onCancel}
    >
      <p>
        Are you sure you want to remove the military from the list?
      </p>
    </Modal>
  );
};

export default RemoveMillitaryModal;
