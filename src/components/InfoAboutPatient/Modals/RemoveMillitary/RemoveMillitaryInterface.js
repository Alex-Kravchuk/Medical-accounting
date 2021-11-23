import React, { useState } from "react";

import { Tooltip } from "antd";
import { useDispatch } from "react-redux";

import { Block, Img } from "../../PatientInterface";
import RemoveMillitaryModal from "./RemoveMillitaryModal";
import remove_user from "../../../../images/remove_user.png";
import { removeMillitary } from "../../../../redux/reducers/millitaryReducer";

const RemoveMillitaryInterface = ({ id, type }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const showRemoveMillitaryModal = () => {
    setVisible(true);
  };

  const hideRemoveMillitaryModal = () => {
    setVisible(false);
  };

  const removeMillitaryHandler = () => {
    dispatch(removeMillitary({ id, type }));
    setVisible(false);
  };
  return (
    <>
      <Tooltip title="Remove the military from the list">
        <Block onClick={showRemoveMillitaryModal}>
          <Img src={remove_user} alt="remove_user" />
        </Block>
        <RemoveMillitaryModal
          visible={visible}
          onSend={removeMillitaryHandler}
          onCancel={hideRemoveMillitaryModal}
        />
      </Tooltip>
    </>
  );
};

export default RemoveMillitaryInterface;
