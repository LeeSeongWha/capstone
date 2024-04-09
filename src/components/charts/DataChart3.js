import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]; // 현재값 + 이후의 값

const options = {
  responsive: true,
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "수온",
      data: [32, 42, 51, 60, 51, 95, 97], // 데이터 실시간으로 받아오기
      backgroundColor: "#0CD3FF",
      borderColor: "#0CD3FF",
    },
    {
      label: "용존 산소 농도",
      data: [37, 42, 41, 37, 31, 44, 42], // 데이터 실시간으로 받아오기
      backgroundColor: "#a6120d",
      borderColor: "#a6120d",
    },
    {
      label: "용존 산소 예측값",
      data: [null, null, null, null, null, null, null, 42, 52, 47], // 용존 산소 예측값
      backgroundColor: "#ff0000",
      borderColor: "#ff0000",
    },
  ],
};

const DataChart3 = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("api-endpoint"); // api endpoint 받기
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //     } catch (error) {
  //       console.log("Error fetching data: ", error);
  //     }
  //   };

  //   fetchData();

  //   const interval = setInterval(fetchData, 1800000);

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div>
      <div style={{ width: 400, height: 200 }}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default DataChart3;
