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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["2017", "2018", "2019", "2020", "2021", "2022", "2023"]; // 시간대별로 나타내기

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
      label: "용존 산소 농도",
      data: [32, 42, 51, 60, 51, 95, 97], // 데이터 실시간으로 받아오기
      backgroundColor: "#0CD3FF",
      borderColor: "#0CD3FF",
    },
  ],
};

const PredictionChart2 = () => {
  return (
    <div>
      <div style={{ width: 400, height: 300 }}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default PredictionChart2;
