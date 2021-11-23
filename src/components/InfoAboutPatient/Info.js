import React from "react";

import moment from "moment";
import styled from "styled-components";

import LeftSideOfInfo from "./LeftSideOfInfo";
import MedicalHistory from "./MedicalHistoryTable/MedicalHistory";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = ({ patient, type }) => {
  const { diagnoses, id } = patient;

  // change data date, in order to they displayed correctly
  const mutateDate = (data) => {
    const updateData = data.map((element) => {
      const copyElement = Object.assign({}, element);
      const { onsetOfDeases, dayOfDischarge } = copyElement;
      copyElement.onsetOfDeases = moment(onsetOfDeases);
      copyElement.dayOfDischarge = moment(dayOfDischarge);
      return copyElement;
    });
    return updateData;
  };
  return (
    <Wrapper>
      <LeftSideOfInfo patient={patient} type={type} />
      <MedicalHistory data={mutateDate(diagnoses)} type={type} id={id} />
    </Wrapper>
  );
};

export default Info;
