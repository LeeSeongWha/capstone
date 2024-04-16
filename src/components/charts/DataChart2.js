import { useEffect, useState } from "react";
import "chartjs-adapter-moment";
import { ko } from "date-fns/locale";
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

const now = new Date();
const twoHoursLater = new Date(now.getTime() + 3 * 30 * 60 * 1000); // 현재 시간으로부터 2시간 후

function formatDataSets(dataPoints, beforeAtNow) {
  return dataPoints.map((dataSet) =>
    dataSet.map((value, index) => ({
      x: new Date(beforeAtNow.getTime() + index * 30 * 60 * 1000), // 각 데이터 포인트에 대해 30분 간격으로 시간 설정
      y: value,
    }))
  );
}

const dataPoints = [
  [20, 19, 20, 21, 22, 23, 25, 26],
  [7, 7.6, 7.5, 8.1, 7.9, 8, 8.1, 8.2],
  [null, null, null, null, null, null, null, null, 7.6, 7.1],
];

const beforeAtNow = new Date(
  now.getTime() - (dataPoints[0].length - 1) * 30 * 60 * 1000
);

const formattedDataSets = formatDataSets(dataPoints, beforeAtNow);

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
      type: "time",
      time: {
        unit: "minute",
        stepSize: 30,
      },
      min: beforeAtNow.getTime(), // 현재 시간을 원점으로 설정
      max: twoHoursLater.getTime(),
      adapters: {
        date: {
          locale: ko,
        },
      },
      ticks: {
        autoSkip: true,
        maxTicksLimit: 13, // 2시간 전부터 2시간 후까지 30분 간격으로 최대 8개의 눈금을 표시
      },
    },
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

// 초기 데이터 설정
const initialData = {
  // labels,
  datasets: [
    {
      label: "수온",
      // data: Array(labels.length).fill(null), // 초기에는 모두 null로 채움
      data: formattedDataSets[0],
      backgroundColor: "#0CD3FF",
      borderColor: "#0CD3FF",
    },
    {
      label: "용존 산소량",
      // data: Array(labels.length).fill(null), // 초기에는 모두 null로 채움
      data: formattedDataSets[1],
      backgroundColor: "#a6120d",
      borderColor: "#a6120d",
    },
    {
      label: "용존 산소 예측량",
      // data: Array(labels.length).fill(null), // 초기에는 모두 null로 채움
      data: formattedDataSets[2],
      backgroundColor: "#ff0000",
      borderColor: "#ff0000",
    },
  ],
};

const DataChart2 = () => {
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
      <Line options={options} data={initialData} height={300} width={400} />
    </div>
  );
};

export default DataChart2;
