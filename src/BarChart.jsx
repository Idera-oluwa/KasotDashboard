import { Bar } from "react-chartjs-2";
const BarChart = ({ chartData }) => {
  return (
    <div className="w-full p-[12px] md:w-[70%] bg-white h-[300px]">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={chartData}
        height="100%"
        options={{
          maintainAspectRatio: false,

          plugins: {
            title: {
              display: true,
              text: "Number of weekly downloads",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;