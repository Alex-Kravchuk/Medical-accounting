import React from "react";
import styled from "styled-components";

import PatientInterface from "./PatientInterface";
import PlaceOfTreatment from "./PlacesOfTreatment";

const Wrapper = styled.div`
  flex: 0 0 25%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;

const LeftSideOfInfo = ({ patient, type }) => {
  const { placesOfTreatment, id } = patient;
  return (
    <Wrapper>
      <Container>
        <PlaceOfTreatment data={placesOfTreatment} />
        <PatientInterface id={id} type={type} />
      </Container>
    </Wrapper>
  );
};

export default LeftSideOfInfo;
