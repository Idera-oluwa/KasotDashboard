import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="w-full p-[12px] md:w-[30%] bg-white h-[300px] mt-[1rem]">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Pie
        data={chartData}
        height="100%"
        options={{
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: "Number of weekly downloads",
            },
          },
        }}
      />
    </div>
  );
}
export default PieChart;