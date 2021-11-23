import React from "react";
import styled from "styled-components";
import TableOfHistory from "./Table";

const Wrapper = styled.div`
  flex: 1 1 auto;
`;

const MedicalHistory = ({ data, type, id }) => {
  return (
    <Wrapper>
      <h3>Medical history</h3>
      <TableOfHistory data={data} type={type} id={id} />
    </Wrapper>
  );
};

export default MedicalHistory;
