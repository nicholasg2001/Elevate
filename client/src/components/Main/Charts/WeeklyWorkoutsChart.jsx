import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2"
import { PieData } from "../data";
const WeeklyWorkoutsChart = () => {
  const [pieChartData, setPieChartData] = useState({
    labels: PieData.map((data) => data.workout),
    datasets: [
      {
        label: "Activities Break Down",
        backgroundColor: [
          "#b87a44",
          "#eeb111",
          "#8cc63f",
          "#569bbe",
          "#247ba0",
          "#34b233",
          "#dc4cdc",
        ],
        data: PieData.map((data) => data.reps),
      },
    ],
  });
  return <Pie data={pieChartData} />;
};

export default WeeklyWorkoutsChart;
