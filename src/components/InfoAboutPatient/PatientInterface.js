import React from "react";
import styled from "styled-components";

import AddingMillitaryIterface from "./Modals/AddMillitary/AddingMillitaryInterface";
import RemoveMillitaryInterface from "./Modals/RemoveMillitary/RemoveMillitaryInterface";
import AddMedicalHistoryInterface from "./Modals/AddMedicalHistory/AddMedicalHistoryIntraface";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;
export const Block = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
`;
export const Img = styled.img`
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
  width: 50px;
  transition: 0.2s all ease;
  &&:hover {
    width: 55px;
  }
`;

const PatientInterface = ({ id, type }) => {
  return (
    <Wrapper>
      <AddingMillitaryIterface id={id} type={type} />
      <AddMedicalHistoryInterface id={id} type={type} />
      <RemoveMillitaryInterface id={id} type={type} />
    </Wrapper>
  );
};

export default PatientInterface;
