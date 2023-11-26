import { useContext } from "react";
import { ChartContext } from "../Contexts/ChartProvider";

// TABLE ROW
export default function TableRow({ user }) {
  // SUBSCRIBING TO CHART CONTEXT
  const { setChartData } = useContext(ChartContext);
  // console.log(user);

  return (
    <tr className="table-row">
      <td
        className="table-data pointer"
        onClick={() =>
          // UPDATING THE STATE (PASSING USER OBJECT TO CHART)
          setChartData(user)
        }
      >
        {user["Your Name"]}
      </td>
      <td className="table-data">{user["Total Appearance"]}</td>
    </tr>
  );
}
