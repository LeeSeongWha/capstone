import React from "react";

import Button from "../components/Button";
import DataChart from "../components/charts/DataChart";
import DataChart2 from "../components/charts/DataChart2";
import DataChart3 from "../components/charts/DataChart3";

import "../styles/common/Home.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <div id="data">
          <div id="data-button">
            <DataChart />
            <Button />
          </div>
          <div>
            <DataChart2 />
            <Button />
          </div>
          <div>
            <DataChart3 />
            <Button />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
