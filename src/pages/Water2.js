import React from "react";
import W2DO from "../components/charts/charts-division/water2/W2DO";
import W2WT from "../components/charts/charts-division/water2/W2WT";

import "../styles/chart/Water1.css";

class Water2 extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="dataBox">data</div>
        <div className="dataCharts">
          <div className="dataChart">
            <W2DO />
          </div>
          <div className="dataChart">
            <W2WT />
          </div>
        </div>
      </div>
    );
  }
}

export default Water2;
