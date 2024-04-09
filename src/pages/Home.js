import React from "react";

import Button from "../components/Button";
import DataChart from "../components/charts/DataChart";
import DataChart2 from "../components/charts/DataChart2";
import DataChart3 from "../components/charts/DataChart3";

import "../styles/common/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="data">
          <div className="section">
            <h1>유입수</h1>
            <DataChart />
            <Button />
          </div>
          <hr className="divider" />
          <div className="section">
            <h1>수조1</h1>
            <DataChart2 />
            <Button />
          </div>
          <hr className="divider" />
          <div className="section">
            <h1>수조2</h1>
            <DataChart3 />
            <Button />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
