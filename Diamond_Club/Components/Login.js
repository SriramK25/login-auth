import { Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthProvider";
import { useState } from "react";

function Login() {
  // STATES
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
  // SUBSCRIBING TO AUTH PROVIDER
  const { token, status, authLogin } = useAuth();
  console.log(token);

  // IF TOKEN EXISTS NAVIGATE TO APP (GUARD)
  if (token) return <Navigate to="/app" />;

  return (
    <div className=" full-height login">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();

          authLogin(userName, password);
        }}
      >
        <div className="form-container">
          <input
            id="input-text"
            type="text"
            className="form-input form-input--text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
          />
          <label className="form-label" htmlFor="input-text">
            Username
          </label>
        </div>

        <div className="form-container">
          <input
            required
            type="password"
            className="form-input form-input--password"
            placeholder="Password"
            id="input-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="input-password">
            Password
          </label>
        </div>

        {/* BASIC ERROR TEXT */}
        {status === "no response" && (
          <p className="error">**Incorrect Email or Password**</p>
        )}

        {/* LOGIN BUTTON */}
        <button className="btn form-btn" disabled={status === "loading"}>
          {status === "loading" ? "Loading..." : "Login"}
        </button>
      </form>

      {/* HINT */}
      <div className="hint">
        <h3>Please Use this Credentials:</h3>
        <p>UserName: kminchelle</p>
        <p>Password: 0lelplR</p>
      </div>
    </div>
  );
}

export default Login;
