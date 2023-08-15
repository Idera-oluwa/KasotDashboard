import React, { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import OrderTable from "../OrderTable";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "../PieChart";
import BarChart from "../BarChart";
import { data, ChartData } from "../data";

Chart.register(CategoryScale);

const Homepage = ({ menuOpen }) => {
  const [chartData, setChartData] = useState({
    labels: ChartData.map((data) => data.week),
    datasets: [
      {
        label: "Downloads ",
        data: ChartData.map((data) => data.userGain),
        backgroundColor: [
          "#000000",
          "#1A1A1A",
          "#333333",
          "#4C4C4C",
        ],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className="w-full min-h-screen relative">
      <section className="w-full ">
        <div
          className={`absolute top-[80px] right-0 px-[4%] pt-[48px] min-h-screen transition-all ease-in-out duration-500  ${
            menuOpen ? `w-full  md:w-[75%] lg:w-[80%]` : `w-full`
          }`}
        >
          <section>
            <div className="grid grid-cols-fluid gap-[1.5rem]">
              {data.map((item) => {
                const { name, value, id, color1, color2 } = item;
                return (
                  <div
                    key={id}
                    className="px-[3rem] py-[1rem] flex flex-col items-center justify-center rounded-[15px] bg-white shadow-md border border-1-black"
                  >
                    <h1 className="text-[1rem] font-semibold text-black">
                      {name}
                    </h1>
                    <p className="text-[2rem] font-semibold text-black">
                      {value}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col md:flex-row gap-[2rem] mt-[4rem] pb-[3rem]">
              <BarChart chartData={chartData} />
              <PieChart chartData={chartData} />
            </div>
            <OrderTable />
          </section>
        </div>
      </section>
    </div>
  );
};

export default Homepage;