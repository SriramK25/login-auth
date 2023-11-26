import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

// CREATING CONTEXT
const AuthContext = createContext();

// CONTEXT PROVIDER
function AuthProvider({ children }) {
  // STATES
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [status, setStatus] = useState("fresh");

  function authLogin(userName, password) {
    // ASYNC FUNCTION TO POST USER DATA AND GET TOKEN
    async function authUser() {
      try {
        setStatus("loading");
        // AUTHORIZING USER
        const response = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: userName,
            password: password,
          }),
        });

        // CHECKING RESPONSE
        if (!response.ok) throw new Error("no response");

        const data = await response.json();

        if (!Object.keys(data).length > 0)
          throw new Error("something went wrong");

        // IF ERYTHING IS FINE PROCEEDING TO NEXT STEPS
        setToken(data.token);
        localStorage.setItem("token", `${data.token}`);
        setStatus("ready");

        // HANDLING ERROR
      } catch (error) {
        setStatus("unknown");

        error.message === "no response" && setStatus(error.message);

        error.message === "something went wrong" && setStatus(error.message);
      }
    }

    authUser();
  }

  // async function checkToken() {
  //   const response = await fetch("https://dummyjson.com/auth", {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   const data = await response.json();
  //   console.log("checkToken =>", data);
  // }

  // if (token) checkToken();

  return (
    <AuthContext.Provider value={{ token, setToken, status, authLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

//CUSTON HOOK THAT CAN BE USED TO SUBSCRIBE TO SUTH PROVIDER CONTEXT
export function useAuth() {
  const context = useContext(AuthContext);

  // IF CONTEXT ACCESSED OUTSIDE THE PROVIDER THEN context BECOME undefined
  if (!context) throw new Error("Context Accesed outside the provider");

  return context;
}

export default AuthProvider;
