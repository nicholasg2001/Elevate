import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { translateKeyFoods } from "../../Foods/FoodUtils";
const FoodDetailsChart = ({ data }) => {
  const result = translateKeyFoods(data);
  const [pieChartData, setPieChartData] = useState({
    labels: result.map((data) => data.type),
    datasets: [
      {
        label: "Grams",
        backgroundColor: ["#ef4444", "#fb923c", "#4ade80"],
        data: result.map((data) => data.value),
      },
    ],
  });
  return (
    <div>
      <Pie data={pieChartData} />;
    </div>
  );
};

export default FoodDetailsChart;
