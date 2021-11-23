import React from "react";

import { Select } from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { initialState } from "../../db/millitarys";
import { defaultYears } from "../../db/defaultYears";
import { generalUpdateState } from "../../redux/reducers/millitaryReducer";

const { Option } = Select;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleHomePage = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const HeaderSelect = () => {
  const { millitarys } = useSelector((state) => state);
  const { currentYear } = millitarys;
  const dispatch = useDispatch();

  const yearsFromLocalStorage = Object.keys(localStorage).sort();
  const years =
    yearsFromLocalStorage.length > 3 ? yearsFromLocalStorage : defaultYears;

  const hadleChange = (data) => {
    if (currentYear !== data) {
      const relevantDataFormLocalStorage = localStorage.getItem(data);
      if (relevantDataFormLocalStorage) {
        dispatch(
          generalUpdateState({
            millitarys: JSON.parse(relevantDataFormLocalStorage),
            year: data,
          })
        );
      } else {
        dispatch(generalUpdateState({ millitarys: initialState, year: data }));
      }
    }
  };
  
  return (
    <Wrapper>
      <TitleHomePage>Patient accounting in {currentYear}</TitleHomePage>
      <Select
        key={1}
        placeholder="Змінити рік"
        size="default"
        style={{ width: "200px" }}
        onChange={hadleChange}
        defaultValue={currentYear}
      >
        {years.map((year, index) => (
          <Option key={index} value={year}>
            {year}
          </Option>
        ))}
      </Select>
    </Wrapper>
  );
};

export default HeaderSelect;
