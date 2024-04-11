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
const dataPointsWT = [20, 19, 20, 21, 22, 23, 25, 26]; // 기존의 데이터 배열
const dataPointsPH = [6, 5.8, 6.1, 6, 6.1, 6.2, 6.3, 6.5]; // 기존의 데이터 배열
const dataPointsST = [35, 36, 36, 35, 35, 34, 35, 36]; // 기존의 데이터 배열
const dataPointsDO = [7, 7.6, 7.5, 8.1, 7.9, 8, 8.1, 8.2]; // 기존의 데이터 배열
const dataPointsDOPred = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  7.6,
  7.1,
];

const formattedData1 = dataPointsWT.map((value, index) => {
  return {
    x: new Date(twoHoursAgo.getTime() + index * 30 * 60 * 1000), // 각 데이터 포인트에 대해 30분 간격으로 시간 설정
    y: value,
  };
});

const formattedData2 = dataPointsPH.map((value, index) => {
  return {
    x: new Date(twoHoursAgo.getTime() + index * 30 * 60 * 1000), // 각 데이터 포인트에 대해 30분 간격으로 시간 설정
    y: value,
  };
});

const formattedData3 = dataPointsST.map((value, index) => {
  return {
    x: new Date(twoHoursAgo.getTime() + index * 30 * 60 * 1000), // 각 데이터 포인트에 대해 30분 간격으로 시간 설정
    y: value,
  };
});

const formattedData4 = dataPointsDO.map((value, index) => {
  return {
    x: new Date(twoHoursAgo.getTime() + index * 30 * 60 * 1000), // 각 데이터 포인트에 대해 30분 간격으로 시간 설정
    y: value,
  };
});

const formattedData5 = dataPointsDOPred.map((value, index) => {
  return {
    x: new Date(twoHoursAgo.getTime() + index * 30 * 60 * 1000), // 각 데이터 포인트에 대해 30분 간격으로 시간 설정
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
      data: formattedData1,
      backgroundColor: "#0CD3FF",
      borderColor: "#0CD3FF",
    },
    {
      label: "pH농도",
      // data: Array(labels.length).fill(null), // 초기에는 모두 null로 채움
      data: formattedData2,
      backgroundColor: "#FFCA29",
      borderColor: "#FFCA29",
    },
    {
      label: "염도",
      // data: Array(labels.length).fill(null), // 초기에는 모두 null로 채움
      data: formattedData3,
      backgroundColor: "#A9A6A7",
      borderColor: "#A9A6A7",
    },
    {
      label: "용존 산소량",
      // data: Array(labels.length).fill(null), // 초기에는 모두 null로 채움
      data: formattedData4,
      backgroundColor: "#a6120d",
      borderColor: "#a6120d",
    },
    {
      label: "용존 산소 예측량",
      // data: Array(labels.length).fill(null), // 초기에는 모두 null로 채움
      data: formattedData5,
      backgroundColor: "#ff0000",
      borderColor: "#ff0000",
    },
  ],
};

// 초기 데이터 설정
// const initialData = {
//   labels,
//   datasets: [
//     {
//       label: "수온",
//       data: Array(labels.length).fill(null), // 초기에는 모두 null로 채움
//       backgroundColor: "#0CD3FF",
//       borderColor: "#0CD3FF",
//     },
//     {
//       label: "용존 산소 농도",
//       data: Array(labels.length).fill(null), // 초기에는 모두 null로 채움
//       backgroundColor: "#a6120d",
//       borderColor: "#a6120d",
//     },
//     {
//       label: "pH농도",
//       data: Array(labels.length).fill(null), // 초기에는 모두 null로 채움
//       backgroundColor: "#FFCA29",
//       borderColor: "#FFCA29",
//     },
//     {
//       label: "염도",
//       data: Array(labels.length).fill(null), // 초기에는 모두 null로 채움
//       backgroundColor: "#A9A6A7",
//       borderColor: "#A9A6A7",
//     },
//     {
//       label: "용존 산소 예측값",
//       data: Array(labels.length).fill(null), // 초기에는 모두 null로 채움
//       backgroundColor: "#ff0000",
//       borderColor: "#ff0000",
//     },
//   ],
// };

const DataChart = () => {
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
      <div style={{ width: 400, height: 300 }}>
        <Line options={options} data={initialData} />
      </div>
    </div>
  );
};

export default DataChart;
