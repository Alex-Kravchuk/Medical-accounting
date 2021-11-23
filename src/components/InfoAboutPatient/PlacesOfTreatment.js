import React from "react";
import styled from "styled-components";

const BlockOfData = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;
const Place = styled.div``;
const Number = styled.div``;

const PlaceOfTreatment = ({ data }) => {
  return (
    <div>
      <h3>Was in treatment:</h3>
      <BlockOfData>
        <Place>At home:</Place>
        <Number>
          <strong>{data.home}</strong>
        </Number>
      </BlockOfData>
      <BlockOfData>
        <Place>In the hospital:</Place>
        <Number>
          <strong>{data.hospital}</strong>
        </Number>
      </BlockOfData>
      <BlockOfData>
        <Place>At the medical point:</Place>
        <Number>
          <strong>{data.medPoint}</strong>
        </Number>
      </BlockOfData>
    </div>
  );
};

export default PlaceOfTreatment;
