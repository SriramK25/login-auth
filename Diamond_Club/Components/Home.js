import { useNavigate } from "react-router-dom";
import PieChart from "./PieChart";
import Table from "./Table";
import { useAuth } from "../Contexts/AuthProvider";

function MainPage() {
  const navigate = useNavigate();

  //   WE ALREADY LOGGED IN SO CLICKING BACK BUTTON WILL GO TO HOMEPAGE INSTEAD OF GOING TO LOGIN PAGE AGAIN
  window.addEventListener("popstate", () => {
    navigate("/");
  });
  return (
    <>
      <Table />
      <PieChart />
      <LogOut />
    </>
  );
}

// LOG OUT BUTTON
function LogOut() {
  // SUBSCRIBING TO AUTH PROVIDER
  const { setToken } = useAuth();

  const navigate = useNavigate();

  return (
    <button
      className="btn logout-btn"
      onClick={() => {
        setToken("");
        localStorage.clear("token");
        navigate("/");
      }}
    >
      Logout
    </button>
  );
}

export default MainPage;
