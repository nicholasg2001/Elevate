import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { BarData } from "../data";
import { Bar } from "react-chartjs-2";
const WeeklyCaloriesChart = () => {
  const [barChartData, setBarData] = useState({
    labels: BarData.map((data) => data.day),
    datasets: [
      {
        label: "Weekly Calorie Report",
        backgroundColor: [
          "#b87a44",
          "#eeb111",
          "#8cc63f",
          "#569bbe",
          "#247ba0",
          "#34b233",
          "#dc4cdc",
        ],
        data: BarData.map((data) => data.calories),
      },
    ],
  });
  return <Bar data={barChartData} />;
};

export default WeeklyCaloriesChart;
