import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

import officers from "../../images/officers.png";
import soldiers from "../../images/soldiers.png";
import sergeants from "../../images/sergeants.png";

import Header from "../Header/Header";
import HeaderSelect from "./HeaderSelect";

const WrapperPage = styled.div``;
const WrapperContent = styled.div`
  margin: 0 auto;
  width: 75vw;
  height: 85vh;
  background-color: #c5e1a5;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Category = styled.div`
  text-align: center;
  width: 20vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffff89;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.3s all ease;

  &&:hover {
    background-color: #d4e157;
    img {
      width: 12vw;
    }

    h2 {
      font-size: 24px;
    }
  }
`;

const NameOfCategory = styled.h2`
  margin: 0;
  text-align: center;
  width: 200px;
  transition: 0.3s all ease;
`;
const Img = styled.img`
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
  transition: 0.3s all ease;
  width: 10vw;
`;

function HomePage() {
  return (
    <WrapperPage>
      <Header category="Home" />
      <WrapperContent>
        <HeaderSelect />
        <Container>
          <Link to="/officers">
            <Category>
              <Img src={officers} alt="officers" />
              <NameOfCategory>Officers</NameOfCategory>
            </Category>
          </Link>
          <Link to="/sergeants">
            <Category>
              <Img src={sergeants} alt="sergeants" />
              <NameOfCategory>Sergeants</NameOfCategory>
            </Category>
          </Link>
          <Link to="/soldiers">
            <Category>
              <Img src={soldiers} alt="soldiers" />
              <NameOfCategory>Soldiers</NameOfCategory>
            </Category>
          </Link>
        </Container>
      </WrapperContent>
    </WrapperPage>
  );
}

export default HomePage;
