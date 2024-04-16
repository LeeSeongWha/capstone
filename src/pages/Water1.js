import React from "react";
import W1DO from "../components/charts/charts-division/water1/W1DO";
import W1PH from "../components/charts/charts-division/water1/W1PH";
import W1WT from "../components/charts/charts-division/water1/W1WT";
import W1SALT from "../components/charts/charts-division/water1/W1SALT";
import Button from "../components/Button";

import "../styles/chart/Water1.css";

class Water1 extends React.Component {
  render() {
    return (
      <div className="body">
        <Button />
        <div className="dataBox">data</div>
        <div className="dataCharts">
          <div className="dataChart">
            <W1DO />
          </div>
          <div className="dataChart">
            <W1PH />
          </div>
        </div>
        <div className="dataCharts">
          <div className="dataChart">
            <W1WT />
          </div>
          <div className="dataChart">
            <W1SALT />
          </div>
        </div>
      </div>
    );
  }
}

export default Water1;
