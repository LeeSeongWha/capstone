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
const dataPoints = [6, 5.8, 6.1, 6, 6.1, 6.2, 6.3, 6.5]; // 기존의 데이터 배열

const beforeAtNow = new Date(
  now.getTime() - (dataPoints.length - 1) * 30 * 60 * 1000
); // 현재 시간으로부터 2시간 전

const hourLater = new Date(now.getTime() + 1 * 30 * 60 * 1000);

const formattedData = dataPoints.map((value, index) => {
  return {
    x: new Date(beforeAtNow.getTime() + index * 30 * 60 * 1000), // 각 데이터 포인트에 대해 30분 간격으로 시간 설정
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
      min: beforeAtNow.getTime(), // 현재 시간을 원점으로 설정
      max: hourLater.getTime(),
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
      label: "pH농도",
      // data: Array(labels.length).fill(null), // 초기에는 모두 null로 채움
      data: formattedData,
      backgroundColor: "#FFCA29",
      borderColor: "#FFCA29",
    },
  ],
};

const W1PH = () => {
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

export default W1PH;
