import React, { useState } from "react";

import { Tooltip } from "antd";
import { useDispatch } from "react-redux";

import { Block, Img } from "../../PatientInterface";
import AddMedicalHistoryModal from "./AddMedicalHistoryModal";
import { addMedicalHistory } from "../../../../redux/reducers/millitaryReducer";

import medical_add from "../../../../images/medical_add.png";

const AddMedicalHistoryInterface = ({ id, type }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const showAddMedicalHistoryModal = () => {
    setVisible(true);
  };

  const hideAddMedicalHistoryModal = () => {
    setVisible(false);
  };

  const sendAddedData = (data) => {
    const { onsetOfDeases, dayOfDischarge } = data;

    // to find the difference between onset of deases and day of discharge
    const diff = dayOfDischarge.diff(onsetOfDeases, "days");

    data = {
      ...data,
      onsetOfDeases: onsetOfDeases.format("YYYY-MM-DD"),
      dayOfDischarge: dayOfDischarge.format("YYYY-MM-DD"),
      numberOfIncapacitatedDay: diff,
    };
    dispatch(addMedicalHistory({ data, type, id }));

    setVisible(false);
  };
  return (
    <>
      <Tooltip title="Add data to medical history">
        <Block onClick={showAddMedicalHistoryModal}>
          <Img src={medical_add} alt="add_medical" />
        </Block>
        <AddMedicalHistoryModal
          visible={visible}
          onCancel={hideAddMedicalHistoryModal}
          onSend={sendAddedData}
        />
      </Tooltip>
    </>
  );
};

export default AddMedicalHistoryInterface;
