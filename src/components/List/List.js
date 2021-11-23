import React from "react";

import { Collapse } from "antd";
import styled from "styled-components";

import Header from "../Header/Header";
import Info from "../InfoAboutPatient/Info";

const { Panel } = Collapse;

const WrapperPage = styled.div``;
const WrapperContent = styled.div`
  width: 85vw;
  margin: 0 auto;
`;

const List = ({ millitarys, type }) => {
  const defineAmountOfTreatment = (data) => {
    const generalData = { home: 0, hospital: 0, medPoint: 0 };

    data.forEach((element) => {
      generalData.home += element.placesOfTreatment.home;
      generalData.hospital += element.placesOfTreatment.hospital;
      generalData.medPoint += element.placesOfTreatment.medPoint;
    });

    return generalData;
  };
  return (
    <WrapperPage>
      <Header
        category={type}
        numberOfMillitarys={millitarys.length}
        data={defineAmountOfTreatment(millitarys)}
      />
      <WrapperContent>
        <Collapse accordion={true}>
          {millitarys.map((millitary) => (
            <Panel
              header={
                <div
                  style={{
                    display: "inline-flex",
                    justifyContent: "space-between",
                    width: "50%",
                  }}
                >
                  <span>{millitary.rank}</span>{" "}
                  <strong>{millitary.name}</strong>
                </div>
              }
              key={millitary.id}
            >
              <Info patient={millitary} type={type} />
            </Panel>
          ))}
        </Collapse>
      </WrapperContent>
    </WrapperPage>
  );
};

export default List;
