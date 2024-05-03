import React, { useRef, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "chartjs-adapter-date-fns";
import { ko } from "date-fns/locale";

import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const W3PH = () => {
  const [chartData, setChartData] = useState({ datasets: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const chartRef = useRef(null);

  const fetchChartData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response_data = await axios.get(
        "http://13.209.98.150:7355/api/test?tankid=rt2"
      );
      const dataPoints = response_data.data; // API로부터 데이터 받기

      // 데이터 포맷팅
      const formattedDataSets = formatDataSets(dataPoints);

      setChartData({
        datasets: formattedDataSets.map((dataset) => ({
          label: "pH농도",
          data: dataset,
          backgroundColor: "#FFCA29",
          borderColor: "#FFCA29",
        })),
      });
    } catch (error) {
      setError("데이터를 불러오는 데 실패했습니다.");
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchChartData();
    const chart = chartRef.current;
    return () => {
      chart?.destroy();
    };
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Line data={chartData} options={options} height={200} width={400} />
      )}
    </div>
  );
};

export default W3PH;

function formatDataSets(dataPoints) {
  // 필터링하여 30분 간격의 데이터만 추출
  const filteredDataPoints = dataPoints.filter((dp) => {
    const date = parseDate(dp.time);
    return date.getMinutes() === 0 || date.getMinutes() === 30;
  });

  const temperatures = filteredDataPoints.map((dp) => ({
    x: parseDate(dp.time),
    y: dp.ph,
  }));

  return [temperatures];
}

function parseDate(timeString) {
  const year = parseInt(timeString.substring(0, 4), 10);
  const month = parseInt(timeString.substring(4, 6), 10) - 1;
  const day = parseInt(timeString.substring(6, 8), 10);
  const hour = parseInt(timeString.substring(8, 10), 10);
  const minute = parseInt(timeString.substring(10, 12), 10);

  return new Date(year, month, day, hour, minute);
}

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
        unit: "hour", // 'minute' 대신 'hour' 사용
        stepSize: 0.5, // 30분 간격
        tooltipFormat: "HH:mm",
        displayFormats: {
          hour: "HH:mm", // 시간 표시 형식
          minute: "HH:mm", // 시간이 정시가 아닐 때 표시 형식
        },
      },
      adapters: {
        date: {
          locale: ko,
        },
      },
      min: new Date().setHours(new Date().getHours() - 6),
      max: new Date().setHours(new Date().getHours() + 3),
    },
    y: {
      beginAtZero: false,
    },
  },
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};