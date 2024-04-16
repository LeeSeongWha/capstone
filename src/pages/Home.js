import React from "react";

import Button from "../components/Button";
import DataChart from "../components/charts/DataChart";
import DataChart2 from "../components/charts/DataChart2";
import DataChart3 from "../components/charts/DataChart3";

import "../styles/common/Home.css";
import { NavLink } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="data">
          <NavLink to="/water1" className="section">
            <h1>유입수</h1>
            <DataChart />
          </NavLink>
          <hr className="divider" />
          <NavLink to="/water2" className="section">
            <h1>수조1</h1>
            <DataChart2 />
          </NavLink>
          <hr className="divider" />
          <NavLink to="water/3" className="section">
            <h1>수조2</h1>
            <DataChart3 />
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Home;
