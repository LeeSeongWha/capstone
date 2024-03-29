import React from "react";
import DataChart from "../components/charts/DataChart";
import DataChart2 from "../components/charts/DataChart2";
import DataChart3 from "../components/charts/DataChart3";

import "../styles/common/Home.css";
import Button from "../components/Button";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div id="data">
          <DataChart />
          <DataChart2 />
          <DataChart3 />
        </div>
        <div>
          <Button />
        </div>
      </div>
    );
  }
}

export default Home;
