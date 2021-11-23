import React, { useState } from "react";

import { Tooltip } from "antd";

import { Block, Img } from "../../PatientInterface";
import AddingMillitaryModal from "./AddingMillitaryModal";

import add_top from "../../../../images/add_top.png";
import add_under from "../../../../images/add_under.png";
import { useDispatch } from "react-redux";
import { addMillitary } from "../../../../redux/reducers/millitaryReducer";

const AddingMillitaryInterface = ({ id, type }) => {
  const [visibleConfig, setVisibleConfig] = useState({
    visible: false,
    position: "",
  });
  const dispatch = useDispatch();

  const showAddItemModal = (position) => {
    setVisibleConfig({ visible: true, position });
  };

  const hideAddItemModal = (position) => {
    setVisibleConfig({ visible: false, position });
  };

  const sendAddedData = (data, position) => {
    setVisibleConfig({ visible: false, position });
    dispatch(addMillitary({ id, type, position, data }));
  };
  return (
    <>
      <Tooltip title="Add military before this military">
        <Block onClick={() => showAddItemModal("top")}>
          <Img src={add_top} alt="add_top" />
          <AddingMillitaryModal
            visible={visibleConfig.visible}
            onCancel={hideAddItemModal}
            onSend={sendAddedData}
            position={visibleConfig.position}
          />
        </Block>
      </Tooltip>
      <Tooltip title="Add military after this military">
        <Block onClick={() => showAddItemModal("under")}>
          <Img src={add_under} alt="add_under" />
        </Block>
        <AddingMillitaryModal
          visible={visibleConfig.visible}
          onCancel={hideAddItemModal}
          onSend={sendAddedData}
          position={visibleConfig.position}
          type={type}
        />
      </Tooltip>
    </>
  );
};

export default AddingMillitaryInterface;
