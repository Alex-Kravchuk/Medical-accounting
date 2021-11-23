import React from "react";
import styled from "styled-components";

import { PageHeader, Descriptions } from "antd";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  width: 100%;
  height: ${(props) => (props.homePage ? "15vh" : "20vh")};
  background-color: #aed581;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: ${(props) => (props.homePage ? "75vw" : "85vw")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PageHeaderWrapper = styled(PageHeader)`
  display: ${(props) => props.homePage && "flex"};
  background: #aed581;
  height: 15vh;
  padding: 0;
  margin: 0;
`;

const Header = ({ category, numberOfMillitarys, data }) => {
  const { millitarys } = useSelector((state) => state);
  const { currentYear } = millitarys;
  const homePage = category === "Home";
  return (
    <Wrapper homePage={homePage}>
      <Container homePage={homePage}>
        <div className="site-page-header-ghost-wrapper">
          <PageHeaderWrapper
            ghost={false}
            onBack={() => window.history.back()}
            title={category}
            homePage={homePage}
          >
            {!homePage && (
              <Descriptions
                size="default"
                column={4}
                labelStyle={{ fontSize: "16px" }}
                contentStyle={{ fontSize: "16px", height: "100%" }}
              >
                <Descriptions.Item label="Number of military">
                  <strong>{numberOfMillitarys}</strong>
                </Descriptions.Item>
                <Descriptions.Item label=""></Descriptions.Item>
                <Descriptions.Item label=""></Descriptions.Item>
                <Descriptions.Item label=""></Descriptions.Item>
                <Descriptions.Item
                  label={`In ${currentYear} were treated`}
                ></Descriptions.Item>
                <Descriptions.Item label="at home">
                  <strong>{data.home}</strong>
                </Descriptions.Item>
                <Descriptions.Item label="in the hospital">
                  <strong>{data.hospital}</strong>
                </Descriptions.Item>
                <Descriptions.Item label="at the medical point">
                  <strong>{data.medPoint}</strong>
                </Descriptions.Item>
              </Descriptions>
            )}
          </PageHeaderWrapper>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Header;
