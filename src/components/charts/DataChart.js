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

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "수온",
//       data: [32, 42, 51, 60, 51, 95, 97], // 데이터 실시간으로 받아오기
//       backgroundColor: "#0CD3FF",
//       borderColor: "#0CD3FF",
//     },
//     {
//       label: "용존 산소 농도",
//       data: [37, 42, 41, 37, 31, 44, 42], // 데이터 실시간으로 받아오기
//       backgroundColor: "#a6120d",
//       borderColor: "#a6120d",
//     },
//     {
//       label: "pH농도",
//       data: [60, 54, 54, 28, 27, 49, 52], // 데이터 실시간으로 받아오기
//       backgroundColor: "#FFCA29",
//       borderColor: "#FFCA29",
//     },
//     {
//       label: "염도",
//       data: [20, 24, 27, 28, 30, 31, 27], // 데이터 실시간으로 받아오기
//       backgroundColor: "#A9A6A7",
//       borderColor: "#A9A6A7",
//     },
//     {
//       label: "용존 산소 예측값",
//       data: [null, null, null, null, null, null, 37, 42, 52, 47], // 용존 산소 예측값
//       backgroundColor: "#ff0000",
//       borderColor: "#ff0000",
//     },
//   ],
// };

// 초기 데이터 설정
const initialData = {
  labels,
  datasets: [
    {
      label: "수온",
      data: Array(labels.length).fill(null), // 초기에는 모두 null로 채움
      backgroundColor: "#0CD3FF",
      borderColor: "#0CD3FF",
    },
    {
      label: "용존 산소 농도",
      data: Array(labels.length).fill(null), // 초기에는 모두 null로 채움
      backgroundColor: "#a6120d",
      borderColor: "#a6120d",
    },
    {
      label: "pH농도",
      data: Array(labels.length).fill(null), // 초기에는 모두 null로 채움
      backgroundColor: "#FFCA29",
      borderColor: "#FFCA29",
    },
    {
      label: "염도",
      data: Array(labels.length).fill(null), // 초기에는 모두 null로 채움
      backgroundColor: "#A9A6A7",
      borderColor: "#A9A6A7",
    },
    {
      label: "용존 산소 예측값",
      data: Array(labels.length).fill(null), // 초기에는 모두 null로 채움
      backgroundColor: "#ff0000",
      borderColor: "#ff0000",
    },
  ],
};

const DataChart = () => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    // 여기서 API 호출 및 데이터 설정
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const jsonData = await response.json();
        console.log(jsonData);

        // API로부터 받은 데이터를 기존 데이터에 적용
        const newData = { ...initialData };

        // 여기서 jsonData를 기반으로 newData.datasets의 각 데이터셋을 업데이트
        // "수온" 데이터셋 업데이트
        newData.datasets[0].data = jsonData.map((item) => item.id);
        // "용존 산소 농도" 데이터셋 업데이트

        // "pH 농도" 데이터셋 업데이트

        // "염도" 데이터셋 업데이트

        // "용존 산소 농도 예측값" 데이터셋 업데이트

        // 전체 데이터 업데이트
        setData(newData);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    fetchData();

    // 주기적으로 데이터 업데이트
    const interval = setInterval(fetchData, 1800000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div style={{ width: 400, height: 300 }}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default DataChart;
