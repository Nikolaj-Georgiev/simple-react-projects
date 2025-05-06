import { createContext, use, useState } from "react";

const AuthContext = createContext({
  token: null,
  signup: (email, password) => {},
  login: (email, password) => {},
  logout: () => {},
});

export function useAuthContext() {
  const authCtx = use(AuthContext);
  if (!authCtx) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }
  return authCtx;
}

export function AuthContextProvider({ children }) {
  const [token, setToken] = useState();

  async function signup(email, password) {
    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const resData = await response.json();

    if (!response.ok) {
      throw new Error(resData.message || "Failed to sign up");
    }

    setToken(resData.token);
  }

  function login(email, password) {}

  function logout() {
    setToken(null);
  }

  const contextValue = {
    token,
    signup,
    login,
    logout,
  };

  return <AuthContext value={contextValue}>{children}</AuthContext>;
}
