import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import chart from "chart.js/auto";

export default function HandleChart(props) {
  console.log(props.dataDashboard.listIncome);

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "# on Income",
        fill: false,
        backgroundColor: "#1EC15F",
        borderColor: "#1EC15F",
        data: props.dataDashboard.listIncome.map((item) => item.total),
        // yAxisID: "y-axis-1",
      },
      {
        label: "# of Expense",
        fill: false,
        backgroundColor: "#FF5B37",
        borderColor: "#FF5B37",
        data: props.dataDashboard.listExpense.map((item) => item.total),
        // yAxisID: "y-axis-2",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      yAxis: [
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1",
          ticks: {
            beginAtZero: true,
          },
        },
        {
          type: "linear",
          display: true,
          position: "right",
          id: "y-axis-2",
          gridLines: {
            drawOnArea: false,
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}
