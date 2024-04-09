import { useEffect, useState } from "react";
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
import "chartjs-adapter-moment";
import { ko } from "date-fns/locale";

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
const twoHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000); // 현재 시간으로부터 2시간 전
const twoHoursLater = new Date(now.getTime() + 4 * 60 * 60 * 1000); // 현재 시간으로부터 2시간 후
const dataPoints = [20, 19, 20, 21, 22, 23, 25, 30]; // 기존의 데이터 배열
const dataPointsPred = [null, null, null, null, null, null, null, null, 27, 23];

const formattedData = dataPoints.map((value, index) => {
  return {
    x: new Date(twoHoursAgo.getTime() + index * 30 * 60 * 1000),
    y: value,
  };
});

const formattedDataPred = dataPointsPred.map((value, index) => {
  return {
    x: new Date(twoHoursAgo.getTime() + index * 30 * 60 * 1000),
    y: value,
  };
});

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
      min: twoHoursAgo.getTime(), // 현재 시간을 원점으로 설정
      max: twoHoursLater.getTime(),
      adapters: {
        date: {
          locale: ko,
        },
      },
      ticks: {
        autoSkip: true,
        maxTicksLimit: 8, // 2시간 전부터 2시간 후까지 30분 간격으로 최대 8개의 눈금을 표시
      },
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
  datasets: [
    {
      label: "용존 산소 농도",
      // data: Array(labels.length).fill(null),
      data: formattedData,
      backgroundColor: "#a6120d",
      borderColor: "#a6120d",
    },
    {
      label: "용존 산소 예측값",
      // data: Array(labels.length).fill(null),
      data: formattedDataPred,
      backgroundColor: "#ff0000",
      borderColor: "#ff0000",
    },
  ],
};

const W1DO = () => {
  // const [data, setData] = useState(() => {
  //   const savedData = localStorage.getItem("chartData");
  //   return savedData ? JSON.parse(savedData) : initialData;
  // });

  // useEffect(() => {
  //   // 여기서 API 호출 및 데이터 설정
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/posts"
  //       );
  //       const jsonData = await response.json();
  //       console.log(jsonData);

  //       // API로부터 받은 데이터를 기존 데이터에 적용
  //       const newData = { ...initialData };

  //       // 여기서 jsonData를 기반으로 newData.datasets의 각 데이터셋을 업데이트
  //       // "수온" 데이터셋 업데이트
  //       newData.datasets[0].data = jsonData.map((item) => item.id);
  //       // "용존 산소 농도" 데이터셋 업데이트

  //       // "pH 농도" 데이터셋 업데이트

  //       // "염도" 데이터셋 업데이트

  //       // "용존 산소 농도 예측값" 데이터셋 업데이트

  //       // 데이터 저장
  //       localStorage.setItem("chartData", JSON.stringify(newData));

  //       // 전체 데이터 업데이트
  //       setData(newData);
  //     } catch (error) {
  //       console.log("Error fetching data: ", error);
  //     }
  //   };

  //   fetchData();

  //   // 주기적으로 데이터 업데이트
  //   const interval = setInterval(fetchData, 1800000);

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div>
      <div style={{ width: 500, height: 300 }}>
        <Line options={options} data={initialData} />
      </div>
    </div>
  );
};

export default W1DO;
