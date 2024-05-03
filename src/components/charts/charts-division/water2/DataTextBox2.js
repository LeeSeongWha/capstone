import axios from "axios";
import { useEffect, useState } from "react";

import "../../../../styles/chart/DataTextBox.css";

const DataTextBox2 = () => {
  const [dataPoints, setDataPoints] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //   const chartRef = useRef(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response_data = await axios.get(
        "http://13.209.98.150:7355/api/test?tankid=rt1"
      );
      setDataPoints(response_data.data[0]); // API로부터 데이터 받기
    } catch (error) {
      setError("데이터를 불러오는 데 실패했습니다.");
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {dataPoints ? (
        <div className="textBody">
          <p>시각: {formatTime(dataPoints.time)}</p>
          <p>용존산소량: {dataPoints.wdo}</p>
          <p>수온: {dataPoints.wt}</p>
          <p>pH농도: {dataPoints.ph}</p>
          <p>염도: {dataPoints.sa}</p>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

const formatTime = (time) => {
  if (!time) return "";
  // 예상 입력 형식: "202404230956"
  const year = time.substring(0, 4);
  const month = time.substring(4, 6);
  const day = time.substring(6, 8);
  const hour = time.substring(8, 10);
  const minute = time.substring(10, 12);
  return `${year}-${month}-${day} ${hour}:${minute}`;
};

export default DataTextBox2;
