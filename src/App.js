import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import {  Routes, Route, HashRouter } from "react-router-dom";

import List from "./components/List/List";
import HomePage from "./components/Home/HomePage";

const App = () => {
  const { millitarys } = useSelector((state) => state);
  const { currentYear } = millitarys;

  const [state, setState] = useState(millitarys);

  useEffect(() => {
    const data = localStorage.getItem(currentYear);
    if (data) {
      setState(JSON.parse(data));
    }
  }, [millitarys, currentYear]);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="officers"
          element={
            <List
              millitarys={state.officers}
              type="officers"
            />
          }
        />
        <Route
          path="sergeants"
          element={
            <List
              millitarys={state.sergeants}
              type="sergeants"
            />
          }
        />
        <Route
          path="soldiers"
          element={
            <List
              millitarys={state.soldiers}
              type="soldiers"
            />
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
