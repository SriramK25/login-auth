import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Contexts/AuthProvider";

function Guard() {
  // SUBSCRIBING TO AUTH PROVIDER
  const { token } = useAuth();

  // IF NO TOKEN GO TO LOGIN PAGE
  if (!token) {
    return <Navigate to="/login" />;
  }

  // ELSE RETURN CHILD OF GUARD ROUTE
  return <Outlet />;
}

export default Guard;
