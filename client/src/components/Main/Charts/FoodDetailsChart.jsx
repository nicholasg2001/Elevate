import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { PieData } from "../data";
const FoodDetailsChart = () => {
  const [pieChartData, setPieChartData] = useState({
    datasets: [
      {
        backgroundColor: [
          "#fb923c",
          "#ef4444",
          "#4ade80"
        ],
        data: PieData.map((data) => data.reps),
      },
    ],
  });
  return <Pie data={pieChartData} />;
};

export default FoodDetailsChart;
