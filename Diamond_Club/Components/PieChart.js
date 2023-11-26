import { useContext } from "react";
import { Chart } from "react-google-charts";
import { ChartContext } from "../Contexts/ChartProvider";

export default function PieChart() {
  const { chartData } = useContext(ChartContext);
  // console.log(chartData);

  if (!chartData) return;

  const options = {
    title: chartData["Your Name"],
    fontName: "Inter",
    is3D: true,
    pieSliceText: "value",
    pieSliceTextStyle: { color: "white", fontSize: 14 },
    titleTextStyle: { fontSize: 20 },
    backgroundColor: "#f1f3f5",
  };

  const referral = chartData["User Choice"].filter(
    (choice) => choice === "referral-cross-sell"
  ).length;

  const roundOut = chartData["User Choice"].filter(
    (choice) => choice === "round-out-to-current-client"
  ).length;

  const data = [
    ["Referral", "Round Out"],
    ["Referral", referral],
    ["Round Out", roundOut],
  ];

  return chartData ? (
    <Chart
      chartType="PieChart"
      options={options}
      data={data}
      width="100%"
      height="400px"
      legendToggle
    />
  ) : null;
}
