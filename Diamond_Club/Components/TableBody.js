import { useContext } from "react";
import { PersonContext } from "../Contexts/PersonProvider";
import TableRow from "./TableRow";

// TABLE BODY
export default function TableBody() {
  // SUBSCRIBING TO PERSON CONTEXT
  const { paginatedUsers } = useContext(PersonContext);
  return (
    <tbody className="table-body">
      {/* RENDERING TABLE ROW BASED ON reducedUsers ARRAY */}
      {paginatedUsers.map((user, index) => (
        <TableRow user={user} key={index} />
      ))}
    </tbody>
  );
}
