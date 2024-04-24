import React from "react";
import W1DO from "../components/charts/charts-division/water1/W1DO";
import W1PH from "../components/charts/charts-division/water1/W1PH";
import W1WT from "../components/charts/charts-division/water1/W1WT";
import W1SALT from "../components/charts/charts-division/water1/W1SALT";
import Button from "../components/Button";
import DataTextBox from "../components/charts/charts-division/water1/DataTextBox";

import "../styles/chart/Water1.css";

class Water1 extends React.Component {
  render() {
    return (
      <div className="body">
        <Button />
        <div className="dataBox">
          <DataTextBox />
        </div>
        <div className="dataCharts">
          <div className="dataChart">
            <div className="dataName">용존산소</div>
            <W1DO />
          </div>
          <div className="dataChart">
            <div className="dataName">pH농도</div>
            <W1PH />
          </div>
        </div>
        <div className="dataCharts">
          <div className="dataChart">
            <div className="dataName">수온</div>
            <W1WT />
          </div>
          <div className="dataChart">
            <div className="dataName">염도</div>
            <W1SALT />
          </div>
        </div>
      </div>
    );
  }
}

export default Water1;
