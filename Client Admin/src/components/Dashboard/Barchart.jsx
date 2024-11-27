import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Ticks,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = () => {
  const generateMonthLabels = () => {
    const today = new Date();
    const months = [];
    for (let i = 0; i < 5; i++) {
      const month = new Date();
      month.setMonth(today.getMonth() - i); // Adjust months dynamically
      months.push(month.toLocaleString("en-US", { month: "short" })); // Full month name
    }
    return months.reverse(); // Reverse to make it chronological
  };

  return (
    <div className="mt-2 h-auto w-auto p-3 shadow-md rounded-2xl">
      <div>
        <Bar
          data={{
            labels: generateMonthLabels(),
            datasets: [
              {
                label: "new",
                data: [10, 20, 30, 40, 50, 60, 70],
                backgroundColor: ["rgba(0, 0, 0, 1)"],
                borderRadius: 12,
                borderSkipped: false,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: true, // Show legend
              },
            },
            scales: {
              x: {
                grid: {
                  display: false, // Remove vertical grid lines
                  drawBorder: false, // Remove the border line along the x-axis
                },
              },
              y: {
                grid: {
                  display: false, // Remove horizontal grid lines
                  drawBorder: false, // Remove the border line along the y-axis
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};
