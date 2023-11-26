import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { useContext } from "react";
import { PersonContext } from "../Contexts/PersonProvider";
import Loader from "./Loader";
import Pagination from "./Pagination";

// TABLE
export default function Table() {
  const { status } = useContext(PersonContext);
  return (
    <>
      {status === "fresh" && null}
      {status === "loading" && <Loader />}
      {status === "ready" && (
        <>
          <table className="table">
            <TableHead />
            <TableBody />
          </table>
          <Pagination />
        </>
      )}
    </>
  );
}
