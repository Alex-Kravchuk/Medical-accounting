import React from "react";
import ReactDOM from "react-dom";

import "antd/dist/antd.css";

import { createGlobalStyle } from "styled-components";

import { store } from "./redux";
import { Provider } from "react-redux";

import App from "./App";
import { initialState } from "./db/millitarys";
import { generalUpdateState } from "./redux/reducers/millitaryReducer";

import { HashRouter } from "react-router-dom";

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: #f8ffd7;
  }
`;

const setInitialState = () => {
  const { millitarys } = store.getState();
  const { currentYear } = millitarys;
  const data = localStorage.getItem(currentYear);

  if (!data) {
    localStorage.setItem(
      currentYear,
      JSON.stringify({ currentYear, ...initialState })
    );
  } else {
    store.dispatch(
      generalUpdateState({
        millitarys: JSON.parse(data),
        year: currentYear,
      })
    );
  }
};

setInitialState();

// write the updated state to Local Storage during each update
store.subscribe(() => {
  const { millitarys } = store.getState();
  const { currentYear } = millitarys;

  const data = localStorage.getItem(currentYear);
  if (data) {
    localStorage.setItem(currentYear, JSON.stringify(millitarys));
  } else {
    setInitialState();
  }
});

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <GlobalStyles />
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
