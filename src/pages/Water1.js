import React from "react";
import W1DO from "../components/charts/charts-division/water1/W1DO";
import W1PH from "../components/charts/charts-division/water1/W1PH";
import W1WT from "../components/charts/charts-division/water1/W1WT";
import W1SALT from "../components/charts/charts-division/water1/W1SALT";

import "../styles/chart/Water1.css";

class Water1 extends React.Component {
  render() {
    return (
      <div className="body">
        <h1>유입수 대시보드</h1>
        <div className="dataCharts">
          <W1DO />
          <W1PH />
        </div>
        <div className="dataCharts">
          <W1WT />
          <W1SALT />
        </div>
      </div>
    );
  }
}

export default Water1;
