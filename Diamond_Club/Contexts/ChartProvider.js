import { createContext, useState } from "react";

const ChartContext = createContext();

function ChartProvider({ children }) {
  const [chartData, setChartData] = useState(null);

  return (
    <ChartContext.Provider value={{ chartData, setChartData }}>
      {children}
    </ChartContext.Provider>
  );
}

export { ChartProvider, ChartContext };
